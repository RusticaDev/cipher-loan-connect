import { Lock, Shield, Coins } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t encrypted-border bg-encrypted-dark">
      {/* Animated encrypted tunnels background */}
      <div className="absolute inset-0 opacity-10">
        <div className="flex h-full items-center justify-center">
          <div className="flex space-x-8">
            <div className="flex animate-slide-encrypt items-center space-x-2">
              <Coins className="h-4 w-4 text-crypto-gold" />
              <Lock className="h-4 w-4 text-crypto-purple" />
              <Coins className="h-4 w-4 text-crypto-gold" />
            </div>
            <div className="flex animate-slide-encrypt items-center space-x-2" style={{ animationDelay: "0.5s" }}>
              <Coins className="h-4 w-4 text-crypto-gold" />
              <Lock className="h-4 w-4 text-crypto-blue" />
              <Coins className="h-4 w-4 text-crypto-gold" />
            </div>
            <div className="flex animate-slide-encrypt items-center space-x-2" style={{ animationDelay: "1s" }}>
              <Coins className="h-4 w-4 text-crypto-gold" />
              <Lock className="h-4 w-4 text-crypto-green" />
              <Coins className="h-4 w-4 text-crypto-gold" />
            </div>
          </div>
        </div>
      </div>
      
      <div className="relative container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <h3 className="mb-4 text-lg font-bold text-crypto-purple">CryptoLend</h3>
            <p className="mb-4 text-sm text-muted-foreground">
              The world's first fully private micro-lending platform powered by 
              Fully Homomorphic Encryption. Your financial data stays encrypted, 
              always.
            </p>
            <div className="flex items-center space-x-2 text-xs text-muted-foreground">
              <Shield className="h-4 w-4 text-crypto-blue" />
              <span>FHE Secured • Privacy Guaranteed</span>
            </div>
          </div>
          
          <div>
            <h4 className="mb-4 text-sm font-semibold">Platform</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-crypto-purple transition-colors">How it Works</a></li>
              <li><a href="#" className="hover:text-crypto-purple transition-colors">Security</a></li>
              <li><a href="#" className="hover:text-crypto-purple transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-crypto-purple transition-colors">Terms of Service</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="mb-4 text-sm font-semibold">Community</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-crypto-blue transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-crypto-blue transition-colors">Discord</a></li>
              <li><a href="#" className="hover:text-crypto-blue transition-colors">Twitter</a></li>
              <li><a href="#" className="hover:text-crypto-blue transition-colors">GitHub</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 border-t encrypted-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 CryptoLend. All rights reserved. Secured by FHE technology.</p>
        </div>
      </div>
    </footer>
  );
};