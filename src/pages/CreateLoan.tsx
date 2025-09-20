import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowRight, Lock, DollarSign, Calendar, Percent, FileText, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const CreateLoan = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <h1 className="mb-4 text-3xl font-bold md:text-4xl">Create Loan Request</h1>
              <p className="text-muted-foreground">
                Submit an encrypted loan request visible only to verified lenders
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-3">
              <div className="lg:col-span-2 space-y-8">
                {/* Basic Information */}
                <Card className="encrypted-block animate-encrypt">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <DollarSign className="mr-2 h-5 w-5 text-crypto-purple" />
                      Loan Details
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="loan-amount">Loan Amount ($)</Label>
                        <Input
                          id="loan-amount"
                          placeholder="Enter requested amount"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="max-rate">Maximum Interest Rate (%)</Label>
                        <Input
                          id="max-rate"
                          placeholder="Your max acceptable rate"
                        />
                      </div>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="loan-term">Preferred Loan Term</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select duration" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="3">3 months</SelectItem>
                            <SelectItem value="6">6 months</SelectItem>
                            <SelectItem value="12">12 months</SelectItem>
                            <SelectItem value="18">18 months</SelectItem>
                            <SelectItem value="24">24 months</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="risk-category">Risk Category</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select risk level" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="low">Low Risk</SelectItem>
                            <SelectItem value="medium">Medium Risk</SelectItem>
                            <SelectItem value="high">High Risk</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="loan-purpose">Loan Purpose</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select purpose" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="business">Business Expansion</SelectItem>
                          <SelectItem value="equipment">Equipment Purchase</SelectItem>
                          <SelectItem value="inventory">Inventory Funding</SelectItem>
                          <SelectItem value="working-capital">Working Capital</SelectItem>
                          <SelectItem value="marketing">Marketing Campaign</SelectItem>
                          <SelectItem value="technology">Technology Upgrade</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </CardContent>
                </Card>

                {/* Detailed Description */}
                <Card className="encrypted-block animate-encrypt" style={{ animationDelay: "0.2s" }}>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <FileText className="mr-2 h-5 w-5 text-crypto-blue" />
                      Loan Description
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="business-description">Business/Project Description</Label>
                      <Textarea
                        id="business-description"
                        placeholder="Describe your business or project that needs funding..."
                        rows={4}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="use-of-funds">How will you use the funds?</Label>
                      <Textarea
                        id="use-of-funds"
                        placeholder="Provide detailed breakdown of fund usage..."
                        rows={4}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="repayment-plan">Repayment Plan</Label>
                      <Textarea
                        id="repayment-plan"
                        placeholder="Explain your repayment strategy and income sources..."
                        rows={3}
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Terms and Verification */}
                <Card className="encrypted-block animate-encrypt" style={{ animationDelay: "0.4s" }}>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Shield className="mr-2 h-5 w-5 text-crypto-green" />
                      Verification & Terms
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="identity-verified" />
                        <Label htmlFor="identity-verified" className="text-sm">
                          I have completed identity verification (KYC)
                        </Label>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Checkbox id="financial-docs" />
                        <Label htmlFor="financial-docs" className="text-sm">
                          I have uploaded required financial documents
                        </Label>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Checkbox id="terms-conditions" />
                        <Label htmlFor="terms-conditions" className="text-sm">
                          I agree to the{" "}
                          <Link to="#" className="text-crypto-purple hover:underline">Terms of Service</Link>
                          {" "}and{" "}
                          <Link to="#" className="text-crypto-purple hover:underline">Privacy Policy</Link>
                        </Label>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Checkbox id="encryption-consent" />
                        <Label htmlFor="encryption-consent" className="text-sm">
                          I understand that my loan details will be encrypted and only visible to matched lenders
                        </Label>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                <Card className="encrypted-block animate-encrypt" style={{ animationDelay: "0.6s" }}>
                  <CardHeader>
                    <CardTitle>Loan Summary</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span>Requested Amount:</span>
                        <span className="font-mono">$0</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Max Interest Rate:</span>
                        <span className="font-mono">0%</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Loan Term:</span>
                        <span className="font-mono">-</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Risk Level:</span>
                        <span className="font-mono">-</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="encrypted-block animate-encrypt" style={{ animationDelay: "0.8s" }}>
                  <CardHeader>
                    <CardTitle>Next Steps</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-crypto-purple/10 text-xs font-bold">
                          1
                        </div>
                        <div>
                          <p className="text-sm font-semibold">Submit Request</p>
                          <p className="text-xs text-muted-foreground">Complete and submit your loan request</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3">
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-crypto-blue/10 text-xs font-bold">
                          2
                        </div>
                        <div>
                          <p className="text-sm font-semibold">Lender Matching</p>
                          <p className="text-xs text-muted-foreground">Our algorithm matches you with suitable lenders</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3">
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-crypto-green/10 text-xs font-bold">
                          3
                        </div>
                        <div>
                          <p className="text-sm font-semibold">Fund Disbursement</p>
                          <p className="text-xs text-muted-foreground">Receive funds upon agreement</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Button size="lg" className="gradient-primary text-white hover:opacity-90">
                Submit Loan Request
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <p className="mt-4 text-sm text-muted-foreground">
                Your request will be encrypted and only visible to verified lenders
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CreateLoan;