import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Crown, Building2, Globe, Clock, Users, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const ProgramOverview = () => {
  const waves = [
    {
      id: 1,
      title: "Executive Briefing & AI Foundations",
      subtitle: "Strategy Alignment for Leadership & Teams",
      icon: Crown,
      participants: "C-Suite, Global & Ghana Leadership, Mid-management",
      duration: "Customizable Sessions",
      schedule: "Aligning on a shared vision and building core AI literacy",
      focus: [
        "AI's impact on the global agri-business value chain",
        "Aligning AI with Olam’s Purpose and sustainability agenda",
        "Data landscape in agriculture, from farm-gate to consumer",
        "High-potential use cases in supply chain, sourcing, and B2C marketing"
      ],
      outcome: "Shared AI vision | Prioritised use-case domains",
      color: "bg-primary",
      accentColor: "border-l-4 border-secondary",
      href: "/wave-1"
    },
    {
      id: 2,
      title: "Deep Dive & Discovery",
      subtitle: "Unlocking Functional Excellence",
      icon: Building2,
      participants: "Cross-functional teams (Sourcing, Ops, Marketing)",
      duration: "Multi-session Workshops",
      schedule: "Ideation and planning for high-impact AI pilots",
      focus: [
        "Ghana Marketing (B2C): Consumer segmentation, personalised marketing",
        "Supply Chain: Demand forecasting, logistics optimisation",
        "Sourcing: Farmer analytics, yield prediction, quality control",
        "Data Readiness: Assessing data sources, governance, and tech stack"
      ],
      outcome: "A validated short-list of 2-3 pilot use-cases | Data-readiness roadmap",
      color: "bg-accent",
      accentColor: "border-l-4 border-orange",
      href: "/wave-2"
    },
    {
      id: 3,
      title: "Prototype Sprint & Scaling",
      subtitle: "From Pilot to Enterprise Capability",
      icon: Globe,
      participants: "Selected pilot teams + Futurelab engineers",
      duration: "2-6 Weeks Sprint",
      schedule: "Building a live solution and a plan for enterprise adoption",
      focus: [
        "Rapidly build a Proof-of-Concept for a high-priority use case",
        "Example Pilot (Ghana B2C): A customer segmentation tool",
        "Example Pilot (Supply Chain): A demand forecasting model",
        "Building a governance model and roadmap for scaling AI across Olam"
      ],
      outcome: "A live prototype ready for deployment | A roadmap for enterprise adoption",
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
            An AI Enablement Journey
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A modular program to build AI capability across Olam, from strategic alignment to hands-on prototyping. Each stage is tailored to Olam's unique value chain, supporting key priorities like the B2C transition in Ghana, supply chain resilience, and sustainable sourcing.
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