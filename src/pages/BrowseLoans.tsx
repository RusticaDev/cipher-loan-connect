import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Lock, Eye, Clock, DollarSign, Search, Filter } from "lucide-react";
import { Link } from "react-router-dom";

interface LoanRequest {
  id: string;
  amount: string;
  rate: string;
  term: string;
  status: 'active' | 'pending' | 'completed';
  riskLevel: 'low' | 'medium' | 'high';
  purpose: string;
  encrypted: boolean;
}

const mockLoanRequests: LoanRequest[] = [
  {
    id: '1',
    amount: '••••••',
    rate: '•••%',
    term: '•• months',
    status: 'active',
    riskLevel: 'low',
    purpose: 'Business expansion',
    encrypted: true
  },
  {
    id: '2',
    amount: '••••••',
    rate: '•••%',
    term: '•• months',
    status: 'active',
    riskLevel: 'medium',
    purpose: 'Equipment purchase',
    encrypted: true
  },
  {
    id: '3',
    amount: '••••••',
    rate: '•••%',
    term: '•• months',
    status: 'pending',
    riskLevel: 'low',
    purpose: 'Inventory funding',
    encrypted: true
  },
  {
    id: '4',
    amount: '••••••',
    rate: '•••%',
    term: '•• months',
    status: 'active',
    riskLevel: 'high',
    purpose: 'Working capital',
    encrypted: true
  },
  {
    id: '5',
    amount: '••••••',
    rate: '•••%',
    term: '•• months',
    status: 'active',
    riskLevel: 'medium',
    purpose: 'Marketing campaign',
    encrypted: true
  },
  {
    id: '6',
    amount: '••••••',
    rate: '•••%',
    term: '•• months',
    status: 'pending',
    riskLevel: 'low',
    purpose: 'Technology upgrade',
    encrypted: true
  }
];

const BrowseLoans = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-3xl font-bold md:text-4xl">Browse Loan Requests</h1>
            <p className="text-muted-foreground">
              Find encrypted loan requests that match your lending criteria
            </p>
          </div>

          {/* Filters */}
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search by purpose..."
                  className="w-64 pl-10"
                />
              </div>
              <Select>
                <SelectTrigger className="w-40">
                  <Filter className="mr-2 h-4 w-4" />
                  <SelectValue placeholder="Risk Level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Levels</SelectItem>
                  <SelectItem value="low">Low Risk</SelectItem>
                  <SelectItem value="medium">Medium Risk</SelectItem>
                  <SelectItem value="high">High Risk</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button variant="outline" className="border-crypto-purple text-crypto-purple hover:bg-crypto-purple/10">
              <Filter className="mr-2 h-4 w-4" />
              Advanced Filters
            </Button>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {mockLoanRequests.map((loan, index) => (
              <Card 
                key={loan.id} 
                className="encrypted-block animate-encrypt hover:animate-glow cursor-pointer transition-all duration-300" 
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">Loan Request</CardTitle>
                    <div className="flex items-center space-x-2">
                      <Lock className="h-4 w-4 text-crypto-purple" />
                      <Badge 
                        variant={
                          loan.riskLevel === 'low' ? 'default' : 
                          loan.riskLevel === 'medium' ? 'secondary' : 'destructive'
                        }
                        className={
                          loan.riskLevel === 'low' ? 'bg-crypto-green text-white' :
                          loan.riskLevel === 'medium' ? 'bg-crypto-gold text-white' :
                          'bg-red-500 text-white'
                        }
                      >
                        {loan.riskLevel.toUpperCase()}
                      </Badge>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">{loan.purpose}</p>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div className="text-center">
                      <DollarSign className="mx-auto mb-1 h-4 w-4 text-muted-foreground" />
                      <p className="font-mono text-crypto-purple">{loan.amount}</p>
                      <p className="text-xs text-muted-foreground">Amount</p>
                    </div>
                    <div className="text-center">
                      <Eye className="mx-auto mb-1 h-4 w-4 text-muted-foreground" />
                      <p className="font-mono text-crypto-blue">{loan.rate}</p>
                      <p className="text-xs text-muted-foreground">Rate</p>
                    </div>
                    <div className="text-center">
                      <Clock className="mx-auto mb-1 h-4 w-4 text-muted-foreground" />
                      <p className="font-mono text-crypto-green">{loan.term}</p>
                      <p className="text-xs text-muted-foreground">Term</p>
                    </div>
                  </div>
                  
                  <Link to={`/loan/${loan.id}`} className="block">
                    <Button 
                      variant="outline" 
                      className="w-full border-crypto-purple text-crypto-purple hover:bg-crypto-purple/10"
                    >
                      <Lock className="mr-2 h-4 w-4" />
                      View Details
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="mb-4 text-muted-foreground">
              Don't see a suitable loan request?
            </p>
            <Link to="/start-lending">
              <Button size="lg" className="gradient-accent text-white hover:opacity-90">
                Create Lending Offer
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BrowseLoans;