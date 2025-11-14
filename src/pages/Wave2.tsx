import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, BarChart3, FileText, Users, Zap, AlertCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Wave2 = () => {
  const departments = [
    {
      title: "Advisory & Wealth Management",
      icon: BarChart3,
      focus: [
        "AI-powered portfolio analysis: market trends, risk assessment, optimization opportunities",
        "Client communication: automated summaries, recommendations, personalized insights",
        "Market research automation: competitive intelligence, economic indicators, investment ideas",
        "Due diligence and document analysis for new opportunities"
      ],
      metrics: "AI-powered advisory tools integrated into daily workflows"
    },
    {
      title: "Operations & Trading",
      icon: Zap,
      focus: [
        "Workflow automation: trade execution, settlement, reconciliation",
        "Data pipeline optimization: real-time market feeds, portfolio updates",
        "Risk monitoring: automated alerts, compliance checks, audit trails",
        "Predictive analytics for market movements and client behavior"
      ],
      metrics: "Operational efficiency gains and reduced manual processes"
    },
    {
      title: "Finance & Administration",
      icon: FileText,
      focus: [
        "Financial reporting automation: P&L summaries, variance analysis, forecasting",
        "Invoice and expense processing: automated extraction, categorization, approval",
        "Reconciliation workflows: automated matching, anomaly detection",
        "Budget forecasting with AI-assisted scenario modeling"
      ],
      metrics: "Finance team productivity improvement and faster reporting cycles"
    },
    {
      title: "Human Resources & Talent",
      icon: Users,
      focus: [
        "AI-powered recruitment: CV screening, candidate matching, interview preparation",
        "Learning & development: personalized learning paths, skill assessments, training recommendations",
        "Talent analytics: capability mapping, succession planning, retention insights",
        "HR communication and documentation automation"
      ],
      metrics: "Improved talent acquisition and development efficiency"
    }
  ];

  const outcomes = [
    "A validated short-list of 2-3 high-impact pilot use-cases ready for development",
    "A clear integration roadmap identifying tools, data sources, and technical requirements",
    "Departmental teams equipped to champion their respective AI pilots",
    "Detailed specifications for custom tools and automation workflows",
    "Cross-functional alignment on AI adoption strategy and priorities",
    "An ROI framework for each proposed AI tool with success metrics"
  ];

  const implementation = [
    "Pre-session discovery workshops to understand functional pain points and current workflows",
    "Customized demos using sanitized IMMPL business scenarios",
    "Hands-on ideation and prioritization workshops with team representatives",
    "Post-session consultation to refine specifications and development roadmap"
  ];

  const whatMakesThisWork = [
    "Functional leads co-design the workshop agenda to ensure focus on real business problems",
    "Structured process for moving from broad ideas to concrete, buildable pilot plans",
    "Focus on integration with existing IMMPL systems and workflows where possible",
    "Emphasis on 'quick wins' that demonstrate immediate value and build momentum",
    "Alignment with IMMPL's strategic goals and compliance requirements",
    "A collaborative approach that builds internal ownership of AI initiatives"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-primary text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-6">
            <Badge className="bg-white/20 text-white border-white/30 text-sm px-4 py-1.5">
              Module 2
            </Badge>
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-center tracking-tight">
            AI Adoption & Workflow Enablement
          </h1>
          <div className="flex items-center justify-center gap-6 text-white/90 mb-4">
            <span className="text-lg">Monthly Deployment</span>
            <span className="text-white/50">•</span>
            <span className="text-lg">Cross-Functional Teams</span>
          </div>
          <p className="text-lg text-white/80 max-w-3xl mx-auto text-center leading-relaxed">
            Collaborative workshops to identify high-impact AI opportunities across IMMPL, evaluate tools, and design custom solutions. Move from ideas to validated pilots ready for development.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Departments */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
              Function-Specific AI Opportunities
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {departments.map((dept, index) => {
                const IconComponent = dept.icon;
                return (
                  <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                    <CardHeader className="bg-gradient-to-br from-white to-muted/50">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                        <CardTitle className="text-2xl">{dept.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-6 space-y-6">
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">AI Opportunities:</h4>
                        <ul className="space-y-2">
                          {dept.focus.map((item, i) => (
                            <li key={i} className="text-sm text-muted-foreground flex items-start">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 mr-3 flex-shrink-0"></div>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-accent/5 p-3 rounded-lg border border-accent/20">
                        <p className="text-sm font-semibold text-foreground">{dept.metrics}</p>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Outcomes */}
          <section className="bg-primary/5 border border-primary/20 rounded-xl p-8 md:p-12 mb-16">
            <h3 className="text-3xl font-bold text-foreground mb-8">Expected Outcomes</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {outcomes.map((outcome, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">{outcome}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Implementation */}
          <section className="bg-orange/5 border border-orange/20 rounded-xl p-8 md:p-12 mb-16">
            <h3 className="text-3xl font-bold text-foreground mb-8">How We Work</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {implementation.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-8 w-8 rounded-lg bg-orange text-white font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <p className="text-muted-foreground pt-1">{item}</p>
                </div>
              ))}
            </div>
          </section>

          {/* What Makes This Work */}
          <section className="bg-green/5 border border-green/20 rounded-xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-foreground mb-8 flex items-center">
              <CheckCircle className="h-8 w-8 mr-3 text-green" />
              What Makes This Work
            </h3>
            <ul className="space-y-3">
              {whatMakesThisWork.map((item, index) => (
                <li key={index} className="text-muted-foreground flex items-start">
                  <div className="w-1.5 h-1.5 bg-green rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  {item}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Wave2;
