import { Button } from "@/components/ui/button";
import { Shield, Wallet, Menu } from "lucide-react";
import logo from "@/assets/logo.png";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b encrypted-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-3">
          <img src={logo} alt="Logo" className="h-8 w-8" />
          <div className="flex flex-col">
            <h1 className="text-xl font-bold text-crypto-purple">CryptoLend</h1>
            <p className="text-xs text-muted-foreground">Confidential Microfinance with FHE</p>
          </div>
        </Link>
        
        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/start-lending" className="text-sm font-medium text-muted-foreground hover:text-crypto-purple transition-colors">
            Start Lending
          </Link>
          <Link to="/browse-loans" className="text-sm font-medium text-muted-foreground hover:text-crypto-purple transition-colors">
            Browse Loans
          </Link>
          <Link to="/create-loan" className="text-sm font-medium text-muted-foreground hover:text-crypto-purple transition-colors">
            Create Loan
          </Link>
        </nav>
        
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" className="hidden lg:flex">
            <Shield className="mr-2 h-4 w-4" />
            Privacy First
          </Button>
          <Button className="gradient-primary text-white hover:opacity-90">
            <Wallet className="mr-2 h-4 w-4" />
            Connect Wallet
          </Button>
        </div>
      </div>
    </header>
  );
};