import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Zap, Code, Database, Shield, AlertCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Wave3 = () => {
  const prototypes = [
    {
      name: "Ghana B2C Marketing: Customer Segmentation Tool",
      description: "A tool to segment Ghanaian consumers based on demographics, purchase behavior, and location to power personalized marketing campaigns for brands like 'Mama Gold'.",
      technical: "Integrates with sales/POS data and uses clustering algorithms (e.g., K-Means) to identify distinct consumer personas. Deploys as an interactive dashboard for the marketing team.",
      timeline: "3-4 weeks"
    },
    {
      name: "Supply Chain: Demand Forecasting Model",
      description: "A predictive model to forecast demand for key products at a regional level, helping to optimize inventory, reduce stock-outs, and minimize waste.",
      technical: "Time-series forecasting model (e.g., ARIMA, Prophet) trained on historical sales data, seasonality, and macroeconomic indicators.",
      timeline: "4-6 weeks"
    },
    {
      name: "Sourcing: Farmer Yield Prediction Analytics",
      description: "An analytics tool to predict crop yields for key commodities sourced from Olam's farmer network, improving procurement planning and supply chain visibility.",
      technical: "Machine learning model using historical yield data, weather patterns, and satellite imagery. Results are visualized on a GIS dashboard.",
      timeline: "5-7 weeks"
    },
    {
      name: "Internal Knowledge Assistant",
      description: "A secure, internal search agent that allows teams to query Olam's vast knowledge base, including operational guidelines, sustainability reports, and market intelligence.",
      technical: "Utilizes Retrieval-Augmented Generation (RAG) on a vector database of Olam's internal documents, with role-based access control.",
      timeline: "3-5 weeks"
    }
  ];

  const phases = [
    {
      phase: "Discovery",
      duration: "Week 1",
      activities: [
        "Identify 3-5 high-impact use cases through stakeholder interviews",
        "Technical assessment of data availability, quality, and accessibility",
        "Security and compliance review: what can/cannot be used for training",
        "Define success metrics and acceptance criteria"
      ]
    },
    {
      phase: "Design",
      duration: "Week 2",
      activities: [
        "Solution architecture: model selection, infrastructure requirements",
        "Data pipeline design: extraction, transformation, security protocols",
        "Integration planning with existing systems (ERP, CRM, data warehouse)",
        "User experience mockups and workflow design"
      ]
    },
    {
      phase: "Build",
      duration: "Weeks 3-5",
      activities: [
        "Rapid prototyping with weekly iteration cycles",
        "Model training and fine-tuning (if required)",
        "User testing with 5-10 pilot users per iteration",
        "Refinement based on feedback and performance metrics"
      ]
    },
    {
      phase: "Deploy",
      duration: "Week 6",
      activities: [
        "User acceptance testing with larger pilot group (20-50 users)",
        "Documentation: user guides, admin guides, troubleshooting",
        "Training sessions for pilot users and administrators",
        "Handover to IT team with runbooks and support procedures"
      ]
    }
  ];

  const outcomes = [
    "A live prototype ready for pilot deployment, demonstrating clear business value in a key strategic area (e.g., Ghana B2C marketing).",
    "A comprehensive roadmap for scaling the pilot to an enterprise-grade solution, including technical requirements, governance, and change management.",
    "Olam's internal pilot team is upskilled and capable of contributing to future AI development projects.",
    "A repeatable process and operating model for identifying, building, and deploying AI solutions across the organization.",
    "A robust business case with clear ROI projections to justify further investment in scaling the solution.",
    "Complete technical documentation, code, and handover materials to ensure a smooth transition to Olam's IT and data teams.",
    "Trained internal champions who can advocate for and support the new solution within their respective departments."
  ];

  const criticalConsiderations = [
    {
      title: "Data Availability & Quality",
      content: "Prototypes require access to relevant, clean data. If data quality is poor, we spend time on data prep, not AI building. Recommendation: Complete data audit 2 weeks before sprint begins to identify and resolve data access and quality issues proactively."
    },
    {
      title: "Stakeholder Availability",
      content: "Success depends on regular feedback from business users (minimum 2 hours/week). Without it, we build something nobody uses. Recommendation: Secure executive sponsorship and pre-block time for weekly review sessions with key stakeholders."
    },
    {
      title: "Technical Infrastructure",
      content: "Some prototypes require API access to internal systems. IT security review and approval can add 2-4 weeks. Recommendation: Engage IT and security teams during discovery phase to identify requirements and expedite approvals."
    },
    {
      title: "Scope Management",
      content: "We ruthlessly prioritize 'must-haves' over 'nice-to-haves'. Feature creep kills momentum and timelines. Recommendation: Use MoSCoW prioritization (Must have, Should have, Could have, Won't have) agreed upon by all stakeholders before development begins."
    },
    {
      title: "Change Management",
      content: "Technical success doesn't guarantee adoption. User experience, training, and communication are equally critical. Recommendation: Involve end users from day one, conduct usability testing every iteration, and prepare comprehensive rollout communication plan."
    },
    {
      title: "Scalability Planning",
      content: "Prototypes work with 10-50 users. Scaling to 500+ requires different architecture, infrastructure, and support models. Recommendation: Design with scale in mind from the start to document assumptions, performance benchmarks, and infrastructure requirements for full-scale deployment."
    }
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
              Module 3
            </Badge>
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-center tracking-tight">Prototype Sprint & Scaling</h1>
          <div className="flex items-center justify-center gap-6 text-white/90 mb-4">
            <span className="text-lg">2-6 Weeks Sprint</span>
            <span className="text-white/50">•</span>
            <span className="text-lg">Selected Pilot Teams</span>
          </div>
          <p className="text-lg text-white/80 max-w-3xl mx-auto text-center leading-relaxed">
            A hands-on sprint to build a working AI prototype for a high-priority use case, delivering tangible business value and creating a roadmap for enterprise-wide adoption.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          
          {/* What We Can Build */}
          <div>
            <h2 className="text-3xl font-bold mb-3">Example Olam Pilot Projects</h2>
          <p className="text-muted-foreground mb-10 text-lg">
            Below are examples of high-impact AI prototypes we can build together during the sprint.
          </p>
            <div className="grid gap-6">
              {prototypes.map((prototype, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all group">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-4 flex-1">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                          <Zap className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-xl mb-2">{prototype.name}</CardTitle>
                          <p className="text-muted-foreground leading-relaxed">{prototype.description}</p>
                        </div>
                      </div>
                      <Badge variant="outline" className="shrink-0">{prototype.timeline}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/30">
                      <Code className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-muted-foreground">{prototype.technical}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Build Process */}
          <div>
            <h2 className="text-3xl font-bold mb-3">How We Build It</h2>
          <p className="text-muted-foreground mb-10 text-lg">
            Structured sprint methodology with clear milestones and decision points.
          </p>
            <div className="space-y-4">
              {phases.map((phase, index) => (
                <Card key={index} className="border-l-4 border-primary">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{phase.phase}</CardTitle>
                      <Badge className="bg-primary/10 text-primary border-primary/20">{phase.duration}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {phase.activities.map((activity, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Critical Considerations */}
          <div>
            <h2 className="text-3xl font-bold mb-3">Critical Considerations</h2>
          <p className="text-muted-foreground mb-10 text-lg">
            Honest assessment of what can derail a prototyping sprint and how we mitigate these risks.
          </p>
            <div className="grid md:grid-cols-2 gap-6">
              {criticalConsiderations.map((item, index) => (
                <Card key={index} className="border-0 shadow-lg">
                  <CardHeader>
                    <div className="flex items-start gap-3">
                      <AlertCircle className="h-6 w-6 text-orange-500 flex-shrink-0 mt-0.5" />
                      <CardTitle className="text-lg">{item.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{item.content}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

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

          {/* Security & Governance */}
          <Card className="border-2 border-primary/20">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Shield className="h-6 w-6 text-primary" />
                <CardTitle>Security & Governance by Default</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">All prototypes built in isolated sandboxes with zero access to production systems</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">Data handling protocols reviewed and approved by your security team before build starts</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">All model outputs logged and auditable for full transparency with compliance teams</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">Role-based access controls and data encryption as standard, not optional add-ons</span>
              </div>
            </CardContent>
          </Card>

          {/* Custom Pricing Note */}
          <Card className="border-2 border-primary/30 bg-primary/5">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <Database className="h-8 w-8 text-primary flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-3">Investment</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    The investment for the Prototype Sprint is determined after the Deep Dive & Discovery phase, based on the selected use case's complexity and scope.
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">→</span>
                      <span>Complexity of use case and data integration requirements</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">→</span>
                      <span>Timeline expectations and resource allocation needs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">→</span>
                      <span>Number of prototypes and iterations required</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">→</span>
                      <span>Level of ongoing support and knowledge transfer expected</span>
                    </li>
                  </ul>
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

export default Wave3;
