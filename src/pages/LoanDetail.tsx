import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Lock, Eye, Clock, DollarSign, Shield, ArrowLeft, User, Calendar, TrendingUp, AlertTriangle } from "lucide-react";
import { Link, useParams } from "react-router-dom";

const LoanDetail = () => {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <Link to="/browse-loans" className="inline-flex items-center text-crypto-purple hover:underline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Browse Loans
            </Link>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Loan Overview */}
              <Card className="encrypted-block animate-encrypt">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center">
                      <Lock className="mr-2 h-5 w-5 text-crypto-purple" />
                      Loan Request #{id}
                    </CardTitle>
                    <Badge className="bg-crypto-green text-white">LOW RISK</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="text-center">
                      <DollarSign className="mx-auto mb-2 h-6 w-6 text-crypto-purple" />
                      <p className="text-2xl font-bold font-mono text-crypto-purple">••••••</p>
                      <p className="text-sm text-muted-foreground">Requested Amount</p>
                    </div>
                    <div className="text-center">
                      <TrendingUp className="mx-auto mb-2 h-6 w-6 text-crypto-blue" />
                      <p className="text-2xl font-bold font-mono text-crypto-blue">•••%</p>
                      <p className="text-sm text-muted-foreground">Interest Rate</p>
                    </div>
                    <div className="text-center">
                      <Clock className="mx-auto mb-2 h-6 w-6 text-crypto-green" />
                      <p className="text-2xl font-bold font-mono text-crypto-green">•• months</p>
                      <p className="text-sm text-muted-foreground">Loan Term</p>
                    </div>
                    <div className="text-center">
                      <Calendar className="mx-auto mb-2 h-6 w-6 text-crypto-gold" />
                      <p className="text-2xl font-bold font-mono text-crypto-gold">••• days</p>
                      <p className="text-sm text-muted-foreground">Time Left</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Loan Purpose</h4>
                      <p className="text-muted-foreground">
                        ████████████████████████████████████████████████████████████████
                        ████████████████████████████████████████████████████████████████
                        ████████████████████████████████████████████████████████████████
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Repayment Plan</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Progress</span>
                          <span>0% Complete</span>
                        </div>
                        <Progress value={0} className="h-2" />
                        <p className="text-xs text-muted-foreground">
                          Monthly payments of ████████ for ██ months
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Detailed Information Tabs */}
              <Card className="encrypted-block animate-encrypt" style={{ animationDelay: "0.2s" }}>
                <CardHeader>
                  <CardTitle>Loan Details</CardTitle>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="overview" className="w-full">
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="overview">Overview</TabsTrigger>
                      <TabsTrigger value="borrower">Borrower Info</TabsTrigger>
                      <TabsTrigger value="terms">Terms & Conditions</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="overview" className="mt-6 space-y-4">
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-3">
                          <h5 className="font-semibold">Financial Details</h5>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span>Principal Amount:</span>
                              <span className="font-mono">████████</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Total Interest:</span>
                              <span className="font-mono">████████</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Total Repayment:</span>
                              <span className="font-mono">████████</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="space-y-3">
                          <h5 className="font-semibold">Timeline</h5>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span>Start Date:</span>
                              <span className="font-mono">████████</span>
                            </div>
                            <div className="flex justify-between">
                              <span>End Date:</span>
                              <span className="font-mono">████████</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Next Payment:</span>
                              <span className="font-mono">████████</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="borrower" className="mt-6">
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-crypto-purple/10">
                            <User className="h-5 w-5 text-crypto-purple" />
                          </div>
                          <div>
                            <h5 className="font-semibold">████████████</h5>
                            <p className="text-sm text-muted-foreground">Verified Borrower</p>
                          </div>
                        </div>
                        
                        <div className="grid gap-4 md:grid-cols-2">
                          <div className="space-y-2">
                            <h6 className="text-sm font-semibold">Credit Score</h6>
                            <div className="flex items-center space-x-2">
                              <Progress value={75} className="flex-1 h-2" />
                              <span className="text-sm font-mono">███</span>
                            </div>
                          </div>
                          
                          <div className="space-y-2">
                            <h6 className="text-sm font-semibold">Previous Loans</h6>
                            <p className="text-sm text-muted-foreground">██ completed successfully</p>
                          </div>
                        </div>
                        
                        <div className="p-4 rounded-lg bg-muted/50">
                          <p className="text-sm text-muted-foreground">
                            <Shield className="inline mr-2 h-4 w-4" />
                            Borrower identity verified through encrypted KYC process
                          </p>
                        </div>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="terms" className="mt-6">
                      <div className="space-y-4">
                        <div className="p-4 rounded-lg border border-crypto-purple/20 bg-crypto-purple/5">
                          <h6 className="font-semibold mb-2 flex items-center">
                            <AlertTriangle className="mr-2 h-4 w-4 text-crypto-purple" />
                            Important Terms
                          </h6>
                          <ul className="space-y-1 text-sm text-muted-foreground">
                            <li>• ████████████████████████████████████████████████████████████████</li>
                            <li>• ████████████████████████████████████████████████████████████████</li>
                            <li>• ████████████████████████████████████████████████████████████████</li>
                            <li>• ████████████████████████████████████████████████████████████████</li>
                          </ul>
                        </div>
                        
                        <div className="space-y-2">
                          <h6 className="font-semibold">Smart Contract Address</h6>
                          <p className="font-mono text-sm text-muted-foreground">
                            ████████████████████████████████████████████████
                          </p>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Action Card */}
              <Card className="encrypted-block animate-encrypt" style={{ animationDelay: "0.4s" }}>
                <CardHeader>
                  <CardTitle>Take Action</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button className="w-full gradient-primary text-white hover:opacity-90">
                    Fund This Loan
                  </Button>
                  <Button variant="outline" className="w-full border-crypto-blue text-crypto-blue hover:bg-crypto-blue/10">
                    Save for Later
                  </Button>
                  <Button variant="ghost" className="w-full text-muted-foreground">
                    Request More Info
                  </Button>
                </CardContent>
              </Card>

              {/* Security Info */}
              <Card className="encrypted-block animate-encrypt" style={{ animationDelay: "0.6s" }}>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Shield className="mr-2 h-5 w-5 text-crypto-blue" />
                    Security
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-crypto-green/10">
                        <Lock className="h-3 w-3 text-crypto-green" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold">FHE Encrypted</p>
                        <p className="text-xs text-muted-foreground">All data fully encrypted</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-crypto-blue/10">
                        <Shield className="h-3 w-3 text-crypto-blue" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold">Smart Contract</p>
                        <p className="text-xs text-muted-foreground">Automated execution</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-crypto-purple/10">
                        <Eye className="h-3 w-3 text-crypto-purple" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold">Privacy First</p>
                        <p className="text-xs text-muted-foreground">Zero knowledge proofs</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LoanDetail;