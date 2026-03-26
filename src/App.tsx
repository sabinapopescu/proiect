import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Acasa from "./pages/Acasa";
import Teorie from "./pages/Teorie";
import Aplicatii from "./pages/Aplicatii";
import Quiz from "./pages/Quiz";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Acasa />} />
          <Route path="/teorie" element={<Teorie />} />
          <Route path="/aplicatii" element={<Aplicatii />} />
          <Route path="/mijloace" element={<Aplicatii />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
