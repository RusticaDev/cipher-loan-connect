import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowRight, Lock, DollarSign, Calendar, Percent } from "lucide-react";
import { Link } from "react-router-dom";

const StartLending = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <h1 className="mb-4 text-3xl font-bold md:text-4xl">Start Lending</h1>
              <p className="text-muted-foreground">
                Create an encrypted lending offer that only you and your borrower can see
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <Card className="encrypted-block animate-encrypt">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Lock className="mr-2 h-5 w-5 text-crypto-purple" />
                    Lending Terms
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="amount">Lending Amount ($)</Label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="amount"
                        placeholder="Enter amount to lend"
                        className="pl-10"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="rate">Interest Rate (%)</Label>
                    <div className="relative">
                      <Percent className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="rate"
                        placeholder="Annual interest rate"
                        className="pl-10"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="term">Loan Term</Label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Select>
                        <SelectTrigger className="pl-10">
                          <SelectValue placeholder="Select loan duration" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="3">3 months</SelectItem>
                          <SelectItem value="6">6 months</SelectItem>
                          <SelectItem value="12">12 months</SelectItem>
                          <SelectItem value="24">24 months</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Lending Requirements</Label>
                    <Textarea
                      id="description"
                      placeholder="Describe your lending criteria and requirements..."
                      rows={4}
                    />
                  </div>
                </CardContent>
              </Card>

              <Card className="encrypted-block animate-encrypt" style={{ animationDelay: "0.2s" }}>
                <CardHeader>
                  <CardTitle>Privacy & Security</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-crypto-purple/10">
                        <Lock className="h-4 w-4 text-crypto-purple" />
                      </div>
                      <div>
                        <h4 className="font-semibold">End-to-End Encryption</h4>
                        <p className="text-sm text-muted-foreground">
                          Your lending terms are encrypted and only visible to matched borrowers
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-crypto-blue/10">
                        <DollarSign className="h-4 w-4 text-crypto-blue" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Secure Escrow</h4>
                        <p className="text-sm text-muted-foreground">
                          Funds are held in smart contract escrow until loan completion
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-crypto-green/10">
                        <Calendar className="h-4 w-4 text-crypto-green" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Automated Repayment</h4>
                        <p className="text-sm text-muted-foreground">
                          Smart contracts handle automatic repayment scheduling
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 text-center">
              <Button size="lg" className="gradient-primary text-white hover:opacity-90">
                Create Lending Offer
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <p className="mt-4 text-sm text-muted-foreground">
                By creating an offer, you agree to our{" "}
                <Link to="#" className="text-crypto-purple hover:underline">Terms of Service</Link>
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default StartLending;