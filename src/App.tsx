import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Index from "./pages/Index";
import About from "./pages/About";
import Organization from "./pages/Organization";
import Branches from "./pages/Branches";
import Programs from "./pages/Programs";
import Gallery from "./pages/Gallery";
import Membership from "./pages/Membership";
import Admin from "./pages/Admin";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";
import AdminLogin from "./pages/AdminLogin";
import ProtectedRoute from "@/components/ProtectedRoute";
import AdminEvents from "./pages/AdminEvents";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="flex-1">
              <Routes>
               <Route path="/" element={<Index />} />
               <Route path="/about" element={<About />} />
               <Route path="/organization" element={<Organization />} />
               <Route path="/branches" element={<Branches />} />
               <Route path="/programs" element={<Programs />} />
               <Route path="/gallery" element={<Gallery />} />
               <Route path="/membership" element={<Membership />} />
               <Route path="/profile/:id" element={<Profile />} />
               <Route path="/admin-login" element={<AdminLogin />} />
               <Route path="/admin" element={
                <ProtectedRoute>
                 <Admin />
                </ProtectedRoute>
              }
              />
               <Route path="/admin-events" element={
                <ProtectedRoute>
                <AdminEvents />
                </ProtectedRoute>
              }
              />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
            <Footer />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
