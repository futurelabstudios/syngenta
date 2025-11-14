import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, TrendingUp, ShoppingCart, DollarSign, Truck, Users, AlertCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Wave2 = () => {
  const departments = [
    {
      title: "Ghana Marketing (B2C Transition)",
      icon: TrendingUp,
      focus: [
        "AI for consumer analytics: segmentation, persona creation, and purchase behavior analysis",
        "Mapping the Ghanaian consumer journey (online/offline) to identify key touchpoints",
        "AI-driven campaign planning: personalized digital marketing, channel mix optimization, and offer design",
        "Social media sentiment analysis to understand brand perception and emerging trends"
      ],
      metrics: "Deliver a B2C Marketing AI Roadmap with KPIs for consumer acquisition and retention"
    },
    {
      title: "Supply Chain & Operations",
      icon: Truck,
      focus: [
        "Demand forecasting at a consumer level to reduce stock-outs and waste",
        "Logistics optimization from processing mills to distribution centers",
        "AI for quality control and predictive maintenance in processing facilities",
        "Supplier risk intelligence for packaging and other non-agri inputs"
      ],
      metrics: "Improved forecast accuracy and reduced operational and logistics costs"
    },
    {
      title: "Sourcing & Farmer Analytics",
      icon: Users,
      focus: [
        "Analyzing data from Olam's farmer network to improve sourcing efficiency",
        "Yield prediction models based on historical data and environmental factors",
        "Tools to support farmer engagement and sustainable sourcing initiatives",
        "Data readiness assessment for sourcing and farm-gate operations"
      ],
      metrics: "Enhanced sourcing efficiency and a clear data strategy for farmer-facing programs"
    },
    {
      title: "Corporate Functions (Finance, HR, Legal)",
      icon: DollarSign,
      focus: [
        "Finance: Automating reconciliations, P&L commentary, and variance analysis",
        "HR: AI-powered tools for talent acquisition, personalized learning pathways, and capability mapping",
        "Legal: Contract analysis, compliance monitoring, and risk identification with AI assistance",
        "Cross-functional workflow automation to improve enterprise-wide efficiency"
      ],
      metrics: "Increased efficiency and data-driven decision-making in corporate functions"
    }
  ];

  const outcomes = [
    "A validated short-list of 2-3 high-impact pilot use-cases ready for the Prototype Sprint",
    "A clear data-readiness roadmap, identifying current data sources, gaps, and necessary next steps",
    "Departmental teams are equipped to champion their respective AI pilots",
    "A detailed plan for the Ghana B2C Marketing AI pilot, including success metrics and a timeline",
    "Cross-functional alignment on how AI can solve shared business challenges",
    "An ROI framework for each proposed pilot project"
  ];

  const implementation = [
    "Pre-session discovery workshops to understand functional pain points and priorities",
    "Customized demos using sanitized Olam business scenarios (e.g., supply chain data, B2C marketing briefs)",
    "Hands-on ideation and prioritization workshops with cross-functional teams",
    "Post-session consultation to refine the pilot project charters and roadmaps"
  ];

  const whatMakesThisWork = [
    "Functional leads co-design the workshop agenda to ensure focus on real business problems",
    "We facilitate a structured process for moving from broad ideas to concrete, feasible pilot plans",
    "Focus on integrating with your existing technology and data infrastructure where possible",
    "Emphasis on 'quick wins' that demonstrate value and build momentum for the Prototype Sprint",
    "Alignment with Olam's overall strategic goals, including sustainability and innovation",
    "A collaborative approach that builds internal ownership of the AI initiatives"
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
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-center tracking-tight">Deep Dive & Discovery</h1>
          <div className="flex items-center justify-center gap-6 text-white/90 mb-4">
            <span className="text-lg">Multi-session Workshops</span>
            <span className="text-white/50">•</span>
            <span className="text-lg">Cross-Functional Teams</span>
          </div>
          <p className="text-lg text-white/80 max-w-3xl mx-auto text-center leading-relaxed">
            Collaborative workshops designed to identify and prioritize the highest-value AI use cases across Olam's key business functions, with a special focus on the Ghana B2C transition.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          
          {/* Functional Programs */}
          <div>
            <h2 className="text-3xl font-bold mb-3 text-center">Deep Dive Focus Areas</h2>
            <p className="text-muted-foreground mb-12 text-lg text-center max-w-3xl mx-auto">
              Each deep dive is tailored to the specific workflows, KPIs, and strategic priorities of that functional area.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {departments.map((dept, index) => {
                const IconComponent = dept.icon;
                return (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all">
                    <CardHeader className="pb-4">
                      <div className="flex items-center gap-4 mb-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center shadow-lg">
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                        <CardTitle className="text-xl">{dept.title}</CardTitle>
                      </div>
                      <Badge variant="outline" className="w-fit text-xs">
                        Expected Impact: {dept.metrics}
                      </Badge>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {dept.focus.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Implementation Approach */}
          <div>
            <h2 className="text-3xl font-bold mb-8">How We Make This Work</h2>
            <Card className="border-2 border-primary/20">
              <CardContent className="p-8">
                <ul className="space-y-4">
                  {implementation.map((item, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-primary font-bold text-sm">{index + 1}</span>
                      </div>
                      <span className="text-foreground leading-relaxed pt-1">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* What Makes This Different */}
          <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">Our Approach to Discovery</CardTitle>
              <p className="text-muted-foreground mt-2">
                This is a structured, collaborative process to ensure we identify pilots that are both valuable and achievable.
              </p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {whatMakesThisWork.map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <AlertCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Expected Outcomes */}
          <div>
            <h2 className="text-3xl font-bold mb-8">Expected Outcomes</h2>
            <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-0 shadow-lg">
              <CardContent className="p-8">
                <ul className="space-y-5">
                  {outcomes.map((outcome, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <CheckCircle className="h-7 w-7 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-lg font-medium text-foreground leading-relaxed">{outcome}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Wave2;
