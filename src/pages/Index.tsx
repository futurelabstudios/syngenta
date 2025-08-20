import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProgramOverview from "@/components/ProgramOverview";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <ProgramOverview />
      <Footer />
    </div>
  );
};

export default Index;
