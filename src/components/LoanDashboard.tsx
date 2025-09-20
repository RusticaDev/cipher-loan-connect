import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Lock, Eye, Clock, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";

interface LoanBlock {
  id: string;
  type: 'lending' | 'borrowing';
  amount: string;
  rate: string;
  term: string;
  status: 'active' | 'pending' | 'completed';
  encrypted: boolean;
}

const mockLoans: LoanBlock[] = [
  {
    id: '1',
    type: 'lending',
    amount: '••••••',
    rate: '•••%',
    term: '•• months',
    status: 'active',
    encrypted: true
  },
  {
    id: '2',
    type: 'borrowing',
    amount: '••••••',
    rate: '•••%',
    term: '•• months',
    status: 'pending',
    encrypted: true
  },
  {
    id: '3',
    type: 'lending',
    amount: '••••••',
    rate: '•••%',
    term: '•• months',
    status: 'completed',
    encrypted: true
  }
];

export const LoanDashboard = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Your Encrypted Loans</h2>
          <p className="text-muted-foreground">
            All loan details are encrypted and only visible to you and your counterpart
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {mockLoans.map((loan, index) => (
            <Card 
              key={loan.id} 
              className="encrypted-block animate-encrypt hover:animate-glow" 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">
                    {loan.type === 'lending' ? 'Lending' : 'Borrowing'}
                  </CardTitle>
                  <div className="flex items-center space-x-2">
                    <Lock className="h-4 w-4 text-crypto-purple" />
                    <Badge 
                      variant={loan.status === 'active' ? 'default' : loan.status === 'pending' ? 'secondary' : 'outline'}
                      className={
                        loan.status === 'active' ? 'bg-crypto-green text-white' :
                        loan.status === 'pending' ? 'bg-crypto-gold text-white' :
                        'border-crypto-blue text-crypto-blue'
                      }
                    >
                      {loan.status}
                    </Badge>
                  </div>
                </div>
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
                
                <Link to={`/loan/${loan.id}`}>
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
          <Link to="/create-loan">
            <Button size="lg" className="gradient-accent text-white hover:opacity-90">
              Create New Loan
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};