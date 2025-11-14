import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, Zap, Package, Clock, Users, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const ProgramOverview = () => {
  const waves = [
    {
      id: 1,
      title: "AI Deep-Dive & Tool Adoption",
      subtitle: "Training + Identifying Your Tools",
      icon: Brain,
      participants: "All IMMPL teams (Advisory, Operations, Finance, HR, Trading)",
      duration: "Months 1-4",
      schedule: "Hands-on training with focus on day-to-day application",
      focus: [
        "Deep dive into AI capabilities relevant to your work",
        "Identify specific AI tools & workflows for each function",
        "Hands-on practice with real use cases",
        "Build internal capability and governance",
        "Prepare requirements for custom tool development"
      ],
      outcome: "Team upskilled | Tools identified | Custom tool specs ready | Adoption readiness",
      color: "bg-primary",
      accentColor: "border-l-4 border-secondary",
      href: "/ai-deep-dive"
    },
    {
      id: 2,
      title: "AI Build Program",
      subtitle: "Custom Tools Shipped Monthly",
      icon: Package,
      participants: "IMMPL stakeholders + Futurelab team (Shabbir + Kuntal + 2 Senior Developers)",
      duration: "Months 1-4 (parallel builds)",
      schedule: "Design, build, and deploy internal AI tools to production",
      focus: [
        "AI Deal Assistant (PDF/contract ingestion & analysis)",
        "AI Market Research Agent (data aggregation & synthesis)",
        "AI Document Generator (LOIs, SOPs, reports, templates)",
        "AI Client Information Hub & Custom workflows",
        "Tools refined based on Month 1-3 feedback"
      ],
      outcome: "Tools shipped monthly | Production-ready systems | Full documentation | Team trained on tools",
      color: "bg-green",
      accentColor: "border-l-4 border-secondary",
      href: "/ai-build"
    }
  ];

  return (
    <section id="program-overview" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Two Core Pillars Over 4 Months
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Deep training on AI tools + identifying what your team needs daily. Custom tools built and shipped monthly.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
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