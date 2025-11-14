import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, AlertCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Footer from "@/components/Footer";

const Wave1 = () => {
  const trainingModules = [
    {
      title: "AI Fundamentals for Finance Professionals",
      subtitle: "Understanding frontier AI models & their applications",
      icon: "🎯",
      color: "bg-primary",
      topics: [
        "Frontier AI models: GPT-4o, Claude, Gemini capabilities & trade-offs",
        "Prompt engineering for portfolio analysis, market research, client communication",
        "When to use which AI tool for different tasks",
        "Guardrails for compliance, data protection, and regulatory alignment",
        "Practical hands-on exercises with real IMMPL scenarios"
      ]
    },
    {
      title: "AI in Your Day-to-Day Work",
      subtitle: "Function-specific tools and workflows",
      icon: "⚡",
      color: "bg-accent",
      topics: [
        "Advisory: Client communication, portfolio analysis, market insights",
        "Operations: Workflow automation, reporting, efficiency gains",
        "Finance: Reconciliations, P&L analysis, forecasting",
        "Trading: Market data processing, signal generation, risk analysis",
        "HR: Recruitment, L&D personalization, capability mapping"
      ]
    },
    {
      title: "Evaluating & Adopting AI Tools",
      subtitle: "Finding the right tools for IMMPL",
      icon: "🛠️",
      color: "bg-orange",
      topics: [
        "Curated AI toolstack review: productivity, creative, automation, analytics",
        "How to evaluate new AI tools for your specific needs",
        "Data security & compliance considerations",
        "Integration with existing IMMPL systems",
        "Building business cases for adoption"
      ]
    },
    {
      title: "Defining Your Custom Tool Requirements",
      subtitle: "Getting clear on what we'll build together",
      icon: "📋",
      color: "bg-green",
      topics: [
        "Identifying high-impact use cases for custom tools",
        "Mapping workflows: where AI can add value",
        "Data requirements & accessibility assessment",
        "Success metrics for each tool",
        "Prioritizing 3-4 tools to build in Months 2-4"
      ]
    }
  ];

  const outcomes = [
    "All IMMPL team members understand AI capabilities relevant to their role",
    "Clear identification of which AI tools work for which tasks",
    "Specific requirements defined for 3-4 custom tools to be built",
    "Team confidence in adopting AI safely & compliantly",
    "Actionable AI adoption roadmap for the 4-month engagement",
    "Foundation laid for Months 2-4 custom tool development"
  ];

  const timeline = [
    {
      month: "Fortnightly Virtual Sessions",
      focus: "Ongoing Training Throughout 4-Month Engagement",
      activities: [
        "2 hours per session, held every two weeks",
        "All IMMPL teams participate (Advisory, Ops, Finance, Trading, HR)",
        "Session 1: AI Fundamentals & Finance Use Cases",
        "Session 2: Productivity Tools & Workflow Optimization",
        "Session 3: Custom GPTs & Tool Evaluation",
        "Session 4: Defining Requirements for Custom Tools",
        "Sessions 5+: Demos of built tools, feedback, optimization"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-primary text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-center tracking-tight">
            AI Deep-Dive & Tool Adoption
          </h1>
          <div className="flex items-center justify-center gap-6 text-white/90 mb-4">
            <span className="text-lg">Training + Requirements Definition</span>
            <span className="text-white/50">•</span>
            <span className="text-lg">All Teams</span>
          </div>
          <p className="text-lg text-white/80 max-w-3xl mx-auto text-center leading-relaxed">
            Deep hands-on training on AI tools + identifying which ones your team needs for daily work. By the end, we'll have clear specs for the custom tools to build in Months 2-4.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Training Modules */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
              Four Training Modules
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {trainingModules.map((module, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                  <CardHeader className="bg-gradient-to-br from-white to-muted/50">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <CardTitle className="text-2xl mb-2">{module.title}</CardTitle>
                        <p className="text-muted-foreground font-medium">{module.subtitle}</p>
                      </div>
                      <span className="text-4xl">{module.icon}</span>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <ul className="space-y-2">
                      {module.topics.map((topic, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 mr-3 flex-shrink-0"></div>
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Timeline</h2>
            <div className="space-y-6">
              {timeline.map((item, index) => (
                <Card key={index} className="border-l-4 border-l-primary">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-foreground">{item.month}</h3>
                        <p className="text-accent font-semibold">{item.focus}</p>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {item.activities.map((activity, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 mr-3 flex-shrink-0"></div>
                          {activity}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
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

          {/* Key Points */}
          <section className="bg-accent/5 border border-accent/20 rounded-xl p-8 md:p-12">
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
              <AlertCircle className="h-6 w-6 mr-3 text-accent" />
              How This Works
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong>Real Context:</strong> All training uses IMMPL scenarios and data (anonymized) so you see immediately how AI applies to your work
              </p>
              <p>
                <strong>Hands-On:</strong> Every session includes exercises where you practice with actual AI tools
              </p>
              <p>
                <strong>Requirements-Focused:</strong> By Month 1 end, we have a clear spec for custom tools to build in Months 2-4
              </p>
              <p>
                <strong>Ongoing Support:</strong> Weekly office hours throughout the 4 months for questions and hands-on practice
              </p>
              <p>
                <strong>No Generic Training:</strong> Everything is tailored to IMMPL's specific workflows, compliance needs, and business priorities
              </p>
            </div>
          </section>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Wave1;
