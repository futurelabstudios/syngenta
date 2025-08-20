import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Crown, Building2, Globe, Clock, Users, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const ProgramOverview = () => {
  const waves = [
    {
      id: 1,
      title: "Executive Committee",
      subtitle: "Strategic AI Leadership",
      icon: Crown,
      participants: "Executive Committee",
      duration: "2 Sessions × 3 Hours",
      schedule: "Spread across 2 weeks",
      focus: [
        "Leadership & strategic AI vision",
        "Futures thinking & exponential technologies",
        "FMCG-specific AI use cases & live demos",
        "Strategic implementation frameworks",
        "Comprehensive executive toolkit"
      ],
      color: "bg-primary",
      accentColor: "border-l-4 border-secondary",
      href: "/wave-1"
    },
    {
      id: 2,
      title: "Senior Management",
      subtitle: "Operational AI Excellence",
      icon: Building2,
      participants: "Senior Management Team",
      duration: "4 Sessions × 2 Hours",
      schedule: "Comprehensive training program",
      focus: [
        "Comprehensive GenAI overview & prompt engineering",
        "AI for analytics & data-driven decisions",
        "Presentation automation & creative content",
        "Personalized AI tools & assistants",
        "Domain-specific sessions (Marketing, Sales, Finance)",
        "Critical thinking & advanced applications"
      ],
      color: "bg-accent",
      accentColor: "border-l-4 border-orange",
      href: "/wave-2"
    },
    {
      id: 3,
      title: "Organization-Wide",
      subtitle: "Democratizing AI Knowledge",
      icon: Globe,
      participants: "Larger Organization",
      duration: "To be determined",
      schedule: "In consultation with HR & Capability team",
      focus: [
        "Collaborative program design with HR team",
        "Multi-tiered training structure",
        "Role-specific AI implementation",
        "Change management & adoption support",
        "Continuous learning & sustainability"
      ],
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
            Future Ready PepsiCo - The Workshop Program Details
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive three-wave AI enablement program designed to empower PepsiCo India's 
            leadership at every level with cutting-edge AI capabilities and strategic foresight to 
            thrive in the intelligence age.
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
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl font-bold text-primary">Wave {wave.id}</span>
                    <div className="flex-1 h-px bg-border"></div>
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground">
                    {wave.title}
                  </CardTitle>
                  <p className="text-muted-foreground font-medium">{wave.subtitle}</p>
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