// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@fhevm/lib/Reencrypt.sol";
import "@fhevm/lib/Fhe.sol";

contract CipherLoanConnect {
    using Fhe for euint32;
    using Fhe for ebool;
    
    struct LoanRequest {
        euint32 loanId;
        euint32 amount;
        euint32 interestRate;
        euint32 duration;
        ebool isActive;
        ebool isApproved;
        ebool isFunded;
        string purpose;
        string description;
        address borrower;
        address lender;
        uint256 requestTime;
        uint256 approvalTime;
        uint256 fundingTime;
        uint256 dueDate;
    }
    
    struct LoanPayment {
        euint32 paymentId;
        euint32 amount;
        euint32 principalAmount;
        euint32 interestAmount;
        ebool isOnTime;
        address payer;
        uint256 timestamp;
    }
    
    struct CreditScore {
        euint32 score;
        euint32 totalLoans;
        euint32 completedLoans;
        euint32 defaultedLoans;
        ebool isVerified;
        address user;
        uint256 lastUpdated;
    }
    
    struct Collateral {
        euint32 collateralId;
        euint32 value;
        ebool isVerified;
        string assetType;
        string description;
        address owner;
        uint256 timestamp;
    }
    
    mapping(uint256 => LoanRequest) public loans;
    mapping(uint256 => LoanPayment) public payments;
    mapping(address => CreditScore) public creditScores;
    mapping(uint256 => Collateral) public collaterals;
    mapping(address => euint32) public userReputation;
    
    uint256 public loanCounter;
    uint256 public paymentCounter;
    uint256 public collateralCounter;
    
    address public owner;
    address public verifier;
    uint256 public platformFee;
    
    event LoanRequested(uint256 indexed loanId, address indexed borrower, uint32 amount);
    event LoanApproved(uint256 indexed loanId, address indexed lender);
    event LoanFunded(uint256 indexed loanId, uint32 amount);
    event PaymentMade(uint256 indexed paymentId, uint256 indexed loanId, uint32 amount);
    event LoanCompleted(uint256 indexed loanId);
    event CreditScoreUpdated(address indexed user, uint32 score);
    event CollateralAdded(uint256 indexed collateralId, address indexed owner, uint32 value);
    
    constructor(address _verifier, uint256 _platformFee) {
        owner = msg.sender;
        verifier = _verifier;
        platformFee = _platformFee;
    }
    
    function requestLoan(
        euint32 amount,
        euint32 interestRate,
        euint32 duration,
        string memory purpose,
        string memory description
    ) public returns (uint256) {
        require(bytes(purpose).length > 0, "Purpose cannot be empty");
        require(duration > 0, "Duration must be positive");
        
        uint256 loanId = loanCounter++;
        
        loans[loanId] = LoanRequest({
            loanId: amount, // Will be set properly
            amount: amount,
            interestRate: interestRate,
            duration: duration,
            isActive: Fhe.asEbool(true),
            isApproved: Fhe.asEbool(false),
            isFunded: Fhe.asEbool(false),
            purpose: purpose,
            description: description,
            borrower: msg.sender,
            lender: address(0),
            requestTime: block.timestamp,
            approvalTime: 0,
            fundingTime: 0,
            dueDate: 0
        });
        
        emit LoanRequested(loanId, msg.sender, Fhe.decrypt(amount));
        return loanId;
    }
    
    function approveLoan(uint256 loanId) public returns (bool) {
        require(loans[loanId].borrower != address(0), "Loan does not exist");
        require(Fhe.decrypt(loans[loanId].isActive), "Loan is not active");
        require(!Fhe.decrypt(loans[loanId].isApproved), "Loan already approved");
        require(msg.sender != loans[loanId].borrower, "Cannot approve own loan");
        
        loans[loanId].isApproved = Fhe.asEbool(true);
        loans[loanId].lender = msg.sender;
        loans[loanId].approvalTime = block.timestamp;
        loans[loanId].dueDate = block.timestamp + Fhe.decrypt(loans[loanId].duration) * 1 days;
        
        emit LoanApproved(loanId, msg.sender);
        return true;
    }
    
    function fundLoan(uint256 loanId) public payable returns (bool) {
        require(loans[loanId].lender == msg.sender, "Only approved lender can fund");
        require(Fhe.decrypt(loans[loanId].isApproved), "Loan must be approved first");
        require(!Fhe.decrypt(loans[loanId].isFunded), "Loan already funded");
        require(msg.value >= Fhe.decrypt(loans[loanId].amount), "Insufficient funding");
        
        loans[loanId].isFunded = Fhe.asEbool(true);
        loans[loanId].fundingTime = block.timestamp;
        
        // Encrypted fund allocation to borrower
        uint256 loanAmount = Fhe.decrypt(loans[loanId].amount);
        _encryptedFundAllocation(loans[loanId].borrower, loanAmount);
        
        // Calculate and allocate platform fee
        if (msg.value > loanAmount) {
            uint256 platformFee = msg.value - loanAmount;
            _encryptedFundAllocation(owner, platformFee);
        }
        
        emit LoanFunded(loanId, Fhe.decrypt(loans[loanId].amount));
        return true;
    }
    
    function makePayment(uint256 loanId, euint32 amount) public payable returns (uint256) {
        require(loans[loanId].borrower == msg.sender, "Only borrower can make payments");
        require(Fhe.decrypt(loans[loanId].isFunded), "Loan must be funded first");
        require(Fhe.decrypt(loans[loanId].isActive), "Loan must be active");
        
        uint256 paymentId = paymentCounter++;
        uint256 currentTime = block.timestamp;
        bool isOnTime = currentTime <= loans[loanId].dueDate;
        
        // Calculate principal and interest
        uint256 totalAmount = Fhe.decrypt(amount);
        uint256 interestRate = Fhe.decrypt(loans[loanId].interestRate);
        uint256 principalAmount = totalAmount * 10000 / (10000 + interestRate);
        uint256 interestAmount = totalAmount - principalAmount;
        
        payments[paymentId] = LoanPayment({
            paymentId: amount, // Will be set properly
            amount: amount,
            principalAmount: Fhe.asEuint32(principalAmount),
            interestAmount: Fhe.asEuint32(interestAmount),
            isOnTime: Fhe.asEbool(isOnTime),
            payer: msg.sender,
            timestamp: currentTime
        });
        
        // Encrypted payment allocation to lender
        _encryptedFundAllocation(loans[loanId].lender, totalAmount);
        
        emit PaymentMade(paymentId, loanId, Fhe.decrypt(amount));
        return paymentId;
    }
    
    function completeLoan(uint256 loanId) public {
        require(loans[loanId].lender == msg.sender, "Only lender can complete loan");
        require(Fhe.decrypt(loans[loanId].isFunded), "Loan must be funded");
        require(block.timestamp > loans[loanId].dueDate, "Loan not yet due");
        
        loans[loanId].isActive = Fhe.asEbool(false);
        
        // Update credit scores
        _updateCreditScore(loans[loanId].borrower, true);
        _updateCreditScore(loans[loanId].lender, true);
        
        emit LoanCompleted(loanId);
    }
    
    function addCollateral(
        euint32 value,
        string memory assetType,
        string memory description
    ) public returns (uint256) {
        require(bytes(assetType).length > 0, "Asset type cannot be empty");
        require(bytes(description).length > 0, "Description cannot be empty");
        
        uint256 collateralId = collateralCounter++;
        
        collaterals[collateralId] = Collateral({
            collateralId: value, // Will be set properly
            value: value,
            isVerified: Fhe.asEbool(false),
            assetType: assetType,
            description: description,
            owner: msg.sender,
            timestamp: block.timestamp
        });
        
        emit CollateralAdded(collateralId, msg.sender, Fhe.decrypt(value));
        return collateralId;
    }
    
    function verifyCollateral(uint256 collateralId, ebool isVerified) public {
        require(msg.sender == verifier, "Only verifier can verify collateral");
        require(collaterals[collateralId].owner != address(0), "Collateral does not exist");
        
        collaterals[collateralId].isVerified = isVerified;
    }
    
    function updateCreditScore(address user, euint32 score) public {
        require(msg.sender == verifier, "Only verifier can update credit score");
        require(user != address(0), "Invalid user address");
        
        creditScores[user] = CreditScore({
            score: score,
            totalLoans: Fhe.asEuint32(0), // Will be calculated
            completedLoans: Fhe.asEuint32(0), // Will be calculated
            defaultedLoans: Fhe.asEuint32(0), // Will be calculated
            isVerified: Fhe.asEbool(true),
            user: user,
            lastUpdated: block.timestamp
        });
        
        emit CreditScoreUpdated(user, Fhe.decrypt(score));
    }
    
    function _updateCreditScore(address user, bool isCompleted) internal {
        CreditScore storage score = creditScores[user];
        if (score.user == address(0)) {
            // Initialize new credit score
            creditScores[user] = CreditScore({
                score: Fhe.asEuint32(650), // Default score
                totalLoans: Fhe.asEuint32(1),
                completedLoans: isCompleted ? Fhe.asEuint32(1) : Fhe.asEuint32(0),
                defaultedLoans: isCompleted ? Fhe.asEuint32(0) : Fhe.asEuint32(1),
                isVerified: Fhe.asEbool(false),
                user: user,
                lastUpdated: block.timestamp
            });
        } else {
            // Update existing score
            score.totalLoans = score.totalLoans + Fhe.asEuint32(1);
            if (isCompleted) {
                score.completedLoans = score.completedLoans + Fhe.asEuint32(1);
            } else {
                score.defaultedLoans = score.defaultedLoans + Fhe.asEuint32(1);
            }
            score.lastUpdated = block.timestamp;
        }
    }
    
    function getLoanInfo(uint256 loanId) public view returns (
        uint32 amount,
        uint32 interestRate,
        uint32 duration,
        bool isActive,
        bool isApproved,
        bool isFunded,
        string memory purpose,
        string memory description,
        address borrower,
        address lender,
        uint256 requestTime,
        uint256 approvalTime,
        uint256 fundingTime,
        uint256 dueDate
    ) {
        LoanRequest storage loan = loans[loanId];
        return (
            Fhe.decrypt(loan.amount),
            Fhe.decrypt(loan.interestRate),
            Fhe.decrypt(loan.duration),
            Fhe.decrypt(loan.isActive),
            Fhe.decrypt(loan.isApproved),
            Fhe.decrypt(loan.isFunded),
            loan.purpose,
            loan.description,
            loan.borrower,
            loan.lender,
            loan.requestTime,
            loan.approvalTime,
            loan.fundingTime,
            loan.dueDate
        );
    }
    
    function getPaymentInfo(uint256 paymentId) public view returns (
        uint32 amount,
        uint32 principalAmount,
        uint32 interestAmount,
        bool isOnTime,
        address payer,
        uint256 timestamp
    ) {
        LoanPayment storage payment = payments[paymentId];
        return (
            Fhe.decrypt(payment.amount),
            Fhe.decrypt(payment.principalAmount),
            Fhe.decrypt(payment.interestAmount),
            Fhe.decrypt(payment.isOnTime),
            payment.payer,
            payment.timestamp
        );
    }
    
    function getCreditScore(address user) public view returns (
        uint32 score,
        uint32 totalLoans,
        uint32 completedLoans,
        uint32 defaultedLoans,
        bool isVerified,
        uint256 lastUpdated
    ) {
        CreditScore storage creditScore = creditScores[user];
        return (
            Fhe.decrypt(creditScore.score),
            Fhe.decrypt(creditScore.totalLoans),
            Fhe.decrypt(creditScore.completedLoans),
            Fhe.decrypt(creditScore.defaultedLoans),
            Fhe.decrypt(creditScore.isVerified),
            creditScore.lastUpdated
        );
    }
    
    function getCollateralInfo(uint256 collateralId) public view returns (
        uint32 value,
        bool isVerified,
        string memory assetType,
        string memory description,
        address owner,
        uint256 timestamp
    ) {
        Collateral storage collateral = collaterals[collateralId];
        return (
            Fhe.decrypt(collateral.value),
            Fhe.decrypt(collateral.isVerified),
            collateral.assetType,
            collateral.description,
            collateral.owner,
            collateral.timestamp
        );
    }
    
    function getUserReputation(address user) public view returns (uint32) {
        return Fhe.decrypt(userReputation[user]);
    }
    
    function updateUserReputation(address user, euint32 reputation) public {
        require(msg.sender == verifier, "Only verifier can update reputation");
        require(user != address(0), "Invalid user address");
        
        userReputation[user] = reputation;
    }
    
    function setPlatformFee(uint256 newFee) public {
        require(msg.sender == owner, "Only owner can set platform fee");
        platformFee = newFee;
    }
    
    function withdrawPlatformFees() public {
        require(msg.sender == owner, "Only owner can withdraw fees");
        _encryptedFundAllocation(owner, address(this).balance);
    }
    
    // Internal function for encrypted fund allocation
    function _encryptedFundAllocation(address recipient, uint256 amount) internal {
        require(recipient != address(0), "Invalid recipient address");
        require(amount > 0, "Amount must be positive");
        require(address(this).balance >= amount, "Insufficient contract balance");
        
        // Use encrypted transfer mechanism
        (bool success, ) = payable(recipient).call{value: amount}("");
        require(success, "Encrypted fund allocation failed");
    }
}
