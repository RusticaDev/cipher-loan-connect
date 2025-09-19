import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { LoanDashboard } from "@/components/LoanDashboard";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <LoanDashboard />
      </main>
      <Footer />
    </div>
  );
};

export default Index;