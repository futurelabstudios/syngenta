import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Crown, Building2, Globe, Clock, Users, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const ProgramOverview = () => {
  const waves = [
    {
      id: 1,
      title: "AI Essentials",
      subtitle: "Foundation for All Teams",
      icon: Crown,
      participants: "All Teams including Leadership",
      duration: "2 Sessions × 3 Hours",
      schedule: "Foundation building for organization-wide adoption",
      focus: [
        "AI landscape for agriculture: seed health analytics, crop protection, agronomic modeling",
        "Productivity tools: automate field reports, seed trial summaries, farmer interaction notes",
        "Data governance: handling sensitive farmer data, regulatory compliance (FSSAI, pesticide regulations)",
        "Syngenta use cases: seed health lab data analysis, crop performance tracking, dealer network insights",
        "Generate agronomic recommendations from field observations and weather data",
        "Create multi-language farmer education content (Hindi, Marathi, Telugu) in minutes"
      ],
      outcome: "AI-ready workforce | 30-40% productivity gains in reporting & documentation",
      color: "bg-primary",
      accentColor: "border-l-4 border-secondary",
      href: "/wave-1"
    },
    {
      id: 2,
      title: "AI Deep Dive",
      subtitle: "Functional Excellence Programs",
      icon: Building2,
      participants: "Department-Specific Teams",
      duration: "2 Sessions × 3 Hours per Function",
      schedule: "Marketing, Sales, R&D, Finance, Supply Chain, HR",
      focus: [
        "R&D & Agronomy: Accelerate seed trial analysis, predict crop performance, automate research reports",
        "Sales & Field: AI copilot for farmer visits, crop-wise product recommendations, territory optimization",
        "Marketing: Regional farmer campaigns, sentiment analysis from field feedback, multi-language content",
        "Supply Chain: Seasonal demand forecasting (Rabi/Kharif cycles), seed inventory optimization, cold chain monitoring",
        "Finance & HR: Automated reporting, compliance tracking, agronomist skill development pathways"
      ],
      outcome: "Function-specific AI workflows | 50+ hours saved per team monthly",
      color: "bg-accent",
      accentColor: "border-l-4 border-orange",
      href: "/wave-2"
    },
    {
      id: 3,
      title: "AI Builders Program",
      subtitle: "Prototyping & Custom Solutions",
      icon: Globe,
      participants: "Cross-Functional Teams",
      duration: "2-6 Weeks Sprint",
      schedule: "Enablement + Prototyping Sprint",
      focus: [
        "Syngenta Agro-Advisor: AI trained on your crop protection portfolio, pest/disease protocols, regional crop calendars",
        "Seed Health Intelligence: automated anomaly detection from Hyderabad lab data, quality prediction models",
        "Farmer Query Bot: multi-language AI assistant for dealer networks (works offline in rural areas)",
        "Research Accelerator: extract insights from 1000s of field trial reports, predict variety performance",
        "Compliance Guardian: auto-check marketing materials against FSSAI/pesticide regulations before release"
      ],
      outcome: "2-3 working prototypes | ROI projections | Capability transfer to Syngenta teams",
      color: "bg-green",
      accentColor: "border-l-4 border-secondary",
      href: "/wave-3"
    }
  ];

  return (
    <section id="program-overview" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Program Options
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Three tailored programs designed to build AI capability across Syngenta India: from 
            foundation building to functional excellence to custom prototyping. Each program 
            combines proven adult learning principles, hands-on practice, and real-world agriculture 
            scenarios to ensure knowledge transfer and sustainable adoption.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {waves.map((wave) => {
            const IconComponent = wave.icon;
            return (
              <Card key={wave.id} className={`relative overflow-hidden group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${wave.accentColor}`}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
                <CardHeader className="relative">
                  <div className={`w-16 h-16 ${wave.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-foreground mb-2">
                    {wave.title}
                  </CardTitle>
                  <p className="text-muted-foreground font-medium text-sm">{wave.subtitle}</p>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Program Details */}
                  <div className="space-y-3">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Users className="h-4 w-4 mr-2" />
                      {wave.participants}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-2" />
                      {wave.duration}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <BookOpen className="h-4 w-4 mr-2" />
                      {wave.schedule}
                    </div>
                  </div>

                  {/* Focus Areas */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Key Focus Areas:</h4>
                    <ul className="space-y-2">
                      {wave.focus.map((item, index) => (
                        <li key={index} className="text-sm text-muted-foreground flex items-start">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Outcome */}
                  <div className="pt-3 border-t">
                    <p className="text-sm font-semibold text-primary mb-1">Expected Outcome:</p>
                    <p className="text-sm text-muted-foreground">{wave.outcome}</p>
                  </div>

                  {/* CTA */}
                  <div className="pt-4">
                    <Button asChild variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Link to={wave.href}>
                        View Details
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProgramOverview;