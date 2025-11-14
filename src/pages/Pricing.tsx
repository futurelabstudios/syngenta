import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";

const Pricing = () => {
  const programs = [
    {
      name: "AI Essentials",
      audience: "All Teams including Leadership",
      duration: "2 sessions × 3 hours",
      pricing: {
        virtualHalf: "₹150,000",
        virtualFull: "₹250,000",
        inPersonHalf: "₹200,000",
        inPersonFull: "₹300,000"
      }
    },
    {
      name: "AI Deep Dive",
      audience: "Functional Department Teams",
      duration: "2 sessions × 3 hours per function",
      pricing: {
        virtualHalf: "₹250,000",
        virtualFull: "₹350,000",
        inPersonHalf: "₹300,000",
        inPersonFull: "₹400,000"
      }
    },
    {
      name: "AI Builders",
      audience: "Cross-Functional Teams",
      duration: "2-6 Weeks Sprint",
      pricing: {
        custom: true
      }
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-primary text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 tracking-tight">Pricing</h1>
          <p className="text-lg text-white/90 mb-4 leading-relaxed">
            Transparent pricing for HCCB
          </p>
          <p className="text-sm text-white/80">
            GST additional | All prices in INR
          </p>
          <p className="text-xs text-white/70 mt-2">
            * maximum 50 participants per session recommended
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-3">Investment Options</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Flexible pricing models designed to match your organizational needs and scale
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {programs.map((program, index) => (
              <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 duration-300">
                <CardHeader className="border-b bg-gradient-to-br from-muted/30 to-muted/10">
                  <div className="flex items-center justify-between mb-2">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      index === 0 ? 'bg-primary/10' : index === 1 ? 'bg-accent/10' : 'bg-green/10'
                    }`}>
                      <span className={`text-2xl font-bold ${
                        index === 0 ? 'text-primary' : index === 1 ? 'text-accent' : 'text-green'
                      }`}>
                        {index + 1}
                      </span>
                    </div>
                  </div>
                  <CardTitle className="text-2xl mb-2">{program.name}</CardTitle>
                  <p className="text-sm text-muted-foreground mt-1">{program.audience}</p>
                  <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                    <span className="inline-block w-1 h-1 bg-primary rounded-full"></span>
                    {program.duration}
                  </p>
                </CardHeader>
                <CardContent className="pt-6">
                  {program.pricing.custom ? (
                    <div className="text-center py-8">
                      <div className="mb-4">
                        <p className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">Custom</p>
                        <p className="text-sm text-muted-foreground">
                          Tailored to project scope
                        </p>
                      </div>
                      <div className="bg-muted/30 rounded-lg p-4 mt-6">
                        <p className="text-xs text-muted-foreground">
                          Investment determined after discovery and scoping session based on complexity, timeline, and deliverables
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <div className="flex justify-between items-center py-3 border-b border-muted/50">
                        <span className="text-sm text-muted-foreground">Virtual Half-Day</span>
                        <span className="font-bold text-foreground">{program.pricing.virtualHalf}</span>
                      </div>
                      <div className="flex justify-between items-center py-3 border-b border-muted/50">
                        <span className="text-sm text-muted-foreground">Virtual Full-Day</span>
                        <span className="font-bold text-foreground">{program.pricing.virtualFull}</span>
                      </div>
                      <div className="flex justify-between items-center py-3 border-b border-muted/50">
                        <span className="text-sm text-muted-foreground">In-Person Half-Day</span>
                        <span className="font-bold text-foreground">{program.pricing.inPersonHalf}</span>
                      </div>
                      <div className="flex justify-between items-center py-3">
                        <span className="text-sm text-muted-foreground">In-Person Full-Day</span>
                        <span className="font-bold text-foreground">{program.pricing.inPersonFull}</span>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* What's Included */}
          <Card className="bg-gradient-to-br from-muted/20 to-background border-0 shadow-xl">
            <CardContent className="p-8 md:p-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">What's Included in All Programs</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Pre-session consultation and customization</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Live demos with real use cases</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Hands-on exercises during sessions</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Digital resources and toolkits</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Post-session office hours</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Implementation playbooks</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Adoption metrics framework</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Follow-up support for 30 days</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Pricing;

