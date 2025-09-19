import { Button } from "@/components/ui/button";
import { ArrowRight, Lock, Users, Coins } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 gradient-encrypted opacity-50" />
      <div className="relative container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8 inline-flex items-center rounded-full border encrypted-border bg-card/50 px-4 py-2 text-sm backdrop-blur">
            <Lock className="mr-2 h-4 w-4 text-crypto-purple" />
            <span className="text-muted-foreground">Fully Homomorphic Encryption Enabled</span>
          </div>
          
          <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
            <span className="gradient-primary bg-clip-text text-transparent">
              Private Lending
            </span>
            <br />
            <span className="text-foreground">Redefined</span>
          </h1>
          
          <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground md:text-xl">
            Experience the future of microfinance where loan amounts, terms, and repayment schedules 
            remain completely private between you and your counterpart.
          </p>
          
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" className="gradient-primary crypto-glow text-white hover:opacity-90">
              Start Lending
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-crypto-blue text-crypto-blue hover:bg-crypto-blue/10">
              Browse Loans
            </Button>
          </div>
          
          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="encrypted-block p-6 text-center animate-encrypt">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-crypto-purple/10">
                <Lock className="h-6 w-6 text-crypto-purple" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">End-to-End Encryption</h3>
              <p className="text-sm text-muted-foreground">All loan data encrypted with FHE technology</p>
            </div>
            
            <div className="encrypted-block p-6 text-center animate-encrypt" style={{ animationDelay: "0.2s" }}>
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-crypto-blue/10">
                <Users className="h-6 w-6 text-crypto-blue" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">Peer-to-Peer</h3>
              <p className="text-sm text-muted-foreground">Direct lending without intermediaries</p>
            </div>
            
            <div className="encrypted-block p-6 text-center animate-encrypt" style={{ animationDelay: "0.4s" }}>
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-crypto-green/10">
                <Coins className="h-6 w-6 text-crypto-green" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">Micro Lending</h3>
              <p className="text-sm text-muted-foreground">Small loans with flexible terms</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};