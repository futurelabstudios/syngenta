import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Wave1 from "./pages/Wave1";
import Wave2 from "./pages/Wave2";
import Wave3 from "./pages/Wave3";
import Facilitators from "./pages/Facilitators";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/wave-1" element={<Wave1 />} />
          <Route path="/wave-2" element={<Wave2 />} />
          <Route path="/wave-3" element={<Wave3 />} />
          <Route path="/facilitators" element={<Facilitators />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
