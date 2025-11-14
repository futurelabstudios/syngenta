import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, TrendingUp, ShoppingCart, DollarSign, Truck, Users, AlertCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Wave2 = () => {
  const departments = [
    {
      title: "Marketing Deep Dive",
      icon: TrendingUp,
      focus: [
        "AI for farmer education campaign planning: reduce development cycles",
        "Farmer insights generation from unstructured data (feedback, field surveys, agronomic studies)",
        "Content creation workflows that maintain Syngenta brand voice and regulatory compliance",
        "Regional campaign frameworks with built-in measurement and learning loops"
      ],
      metrics: "Faster campaign deployment with reduced creative iteration time for farmer outreach"
    },
    {
      title: "Sales Deep Dive",
      icon: ShoppingCart,
      focus: [
        "AI assistant for field territory plans: optimized routing and priority dealer/farmer accounts",
        "Dealer-level micro-insights from inventory and sales data",
        "Distributor analytics: identify stock-outs, seasonal demand patterns, and crop-specific opportunities",
        "Structured field-call note automation for agronomists: capture, analyze, and share farmer interactions instantly"
      ],
      metrics: "Significant increase in effective field time and farmer interaction reporting efficiency"
    },
    {
      title: "Finance Deep Dive",
      icon: DollarSign,
      focus: [
        "AI-automated reconciliations with exception handling and audit trails",
        "Commentary preparation for P&L review: variance analysis in natural language",
        "Faster variance analysis: drill down from summary to transaction level",
        "Predictive modelling for cash flow, demand, and budget scenarios"
      ],
      metrics: "Substantial reduction in month-end close time and faster variance resolution"
    },
    {
      title: "Supply Chain Deep Dive",
      icon: Truck,
      focus: [
        "Seasonal demand forecasting with multi-variable inputs (weather patterns, crop cycles, regional planting trends)",
        "Distribution optimization considering regional demand, seed health protocols, and priorities",
        "Supplier risk intelligence: early warning system for agricultural input disruptions",
        "Seed inventory optimization: identify slow-moving products and seasonal optimization opportunities"
      ],
      metrics: "Improved seasonal forecast accuracy and reduced logistics costs for seed distribution"
    },
    {
      title: "Legal Deep Dive",
      icon: AlertCircle,
      focus: [
        "AI-powered contract analysis and risk identification",
        "Automated compliance monitoring and regulatory tracking",
        "Legal research acceleration: case law, precedents, and regulatory updates",
        "Document review and due diligence workflows with AI assistance"
      ],
      metrics: "Faster contract review cycles and enhanced compliance monitoring"
    },
    {
      title: "IT Deep Dive",
      icon: Users,
      focus: [
        "AI for IT operations: automated incident detection and resolution",
        "Code review and documentation generation with AI assistants",
        "System performance optimization using predictive analytics",
        "Security threat detection and response automation"
      ],
      metrics: "Reduced incident response time and improved system reliability"
    }
  ];

  const outcomes = [
    "Team-level adoption with function-specific workflows embedded in daily operations: AI becomes part of the standard operating procedure",
    "Efficiency gains measurable within 30 days (tracked through time-savings logs): quantifiable ROI on training investment with baseline comparison",
    "Clear departmental AI roadmap with prioritized use cases and implementation timeline: 12-month plan with quick wins, medium-term goals, and transformational initiatives",
    "Department-specific AI champions network established: peer-to-peer learning and support systems in place",
    "Custom AI tool evaluation framework: teams can independently assess and adopt new AI solutions that fit their workflows",
    "Reduced cross-functional friction: teams understand how AI impacts upstream and downstream processes, enabling better collaboration"
  ];

  const implementation = [
    "Pre-session survey to identify department-specific pain points and priorities",
    "Customized demos using sanitized Syngenta data structures (where possible) - field trial data, crop performance metrics, farmer feedback",
    "Hands-on exercises with real agricultural workflow scenarios from each function",
    "Post-session: 30-minute 1:1 consultation for each team lead to finalize adoption plan"
  ];

  const whatMakesThisWork = [
    "Department heads co-design the curriculum 2 weeks before sessions: ensures training addresses real pain points, not theoretical scenarios",
    "Live troubleshooting of actual workflow challenges (not generic examples): participants bring real work to the session and leave with solutions",
    "Tool selection based on your existing tech stack (not vendor-driven): maximizes adoption by building on familiar systems and interfaces",
    "Focus on 'quick wins' that build momentum for larger transformations: achieving early success creates organizational enthusiasm for deeper change",
    "Integration with existing change management frameworks: aligns with Syngenta India's current transformation initiatives and communication channels",
    "Post-training reinforcement plan: follow-up sessions, office hours, and department-specific coaching for sustained behavior change",
    "Measurement dashboard provided: track adoption rates, usage patterns, time savings, and business impact in real-time"
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
              Functional Excellence
            </Badge>
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-center tracking-tight">AI Deep Dive</h1>
          <div className="flex items-center justify-center gap-6 text-white/90 mb-4">
            <span className="text-lg">2 sessions × 3 hours</span>
            <span className="text-white/50">•</span>
            <span className="text-lg">Per Function</span>
          </div>
          <p className="text-lg text-white/80 max-w-3xl mx-auto text-center leading-relaxed">
            Department-specific programs for Marketing, Sales, Finance, Supply Chain, R&D, and HR with metrics 
            that matter to each agricultural function.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          
          {/* Functional Programs */}
          <div>
            <h2 className="text-3xl font-bold mb-3 text-center">Functional Programs</h2>
            <p className="text-muted-foreground mb-12 text-lg text-center max-w-3xl mx-auto">
              Each program is tailored to the specific workflows, KPIs, and pain points of that department.
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

          {/* HR & Learning */}
          <Card className="border-0 shadow-lg bg-gradient-to-br from-muted/30 to-muted/10">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center shadow-lg">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div>
                  <CardTitle className="text-xl">HR & Learning Deep Dive</CardTitle>
                  <p className="text-sm text-muted-foreground mt-1">
                    Expected Impact: Accelerated hiring cycles and streamlined L&D content creation
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">AI-designed learning pathways for agronomists, field teams, and commercial roles personalized to career aspirations</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Automated job description creation for specialized agriculture roles and evaluation rubrics aligned to Syngenta's competency frameworks</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Culture & capability intelligence from organizational knowledge, field feedback, and agronomic expertise patterns</span>
                </li>
              </ul>
            </CardContent>
          </Card>

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
              <CardTitle className="text-2xl">What Makes This Different</CardTitle>
              <p className="text-muted-foreground mt-2">
                Not your typical "AI awareness" workshop: this is hands-on enablement
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
