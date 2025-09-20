import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import StartLending from "./pages/StartLending";
import BrowseLoans from "./pages/BrowseLoans";
import LoanDetail from "./pages/LoanDetail";
import CreateLoan from "./pages/CreateLoan";
import NotFound from "./pages/NotFound";

const App = () => (
  <TooltipProvider>
    <Toaster />
    <Sonner />
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <header className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <h1 className="text-xl font-bold text-gray-900">Cipher Loan Connect</h1>
              </div>
              <ConnectButton />
            </div>
          </div>
        </header>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/start-lending" element={<StartLending />} />
          <Route path="/browse-loans" element={<BrowseLoans />} />
          <Route path="/loan/:id" element={<LoanDetail />} />
          <Route path="/create-loan" element={<CreateLoan />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  </TooltipProvider>
);

export default App;
