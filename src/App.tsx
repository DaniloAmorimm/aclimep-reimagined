import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Gallery from "./pages/Gallery";
import News from "./pages/News";
import NewsArticle from "./pages/NewsArticle";
import FAQ from "./pages/FAQ";
import NotFound from "./pages/NotFound";
import Error403 from "./pages/Error403";
import Error500 from "./pages/Error500";
import Error503 from "./pages/Error503";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/galeria" element={<Gallery />} />
          <Route path="/noticias" element={<News />} />
          <Route path="/noticias/:slug" element={<NewsArticle />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/erro-403" element={<Error403 />} />
          <Route path="/erro-500" element={<Error500 />} />
          <Route path="/erro-503" element={<Error503 />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
