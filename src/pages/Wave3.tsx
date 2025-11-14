import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Code, Users, AlertCircle, Zap, Lock, Award } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Wave3 = () => {
  const tools = [
    {
      name: "AI Financial Planning Tool",
      description: "Comprehensive financial planning & advisory tool. Backend integration complete. Full demo available next week. Built on proven architecture (see: fin-planning.netlify.app).",
      technical: "Full-stack financial modeling, LLM-powered advice generation, multi-scenario planning",
      timeline: "Weeks 1-2 (refinement & integration)",
      status: "✓ Under Final Construction"
    },
    {
      name: "AI Deal Assistant",
      description: "PDF and contract ingestion system that synthesizes documents, identifies red flags, and generates executive summaries.",
      technical: "Document processing, LLM-powered analysis, structured output generation",
      timeline: "2-3 weeks"
    },
    {
      name: "AI Market Research Agent",
      description: "Autonomous agent that scrapes, processes, and summarizes global market information relevant to IMMPL's investment thesis.",
      technical: "Web scraping, data aggregation, intelligent summarization, scheduled reports",
      timeline: "3-4 weeks"
    },
    {
      name: "AI Document Generator",
      description: "Tool for rapidly generating LOIs, SOPs, client reports, pitch templates, and other structured business documents.",
      technical: "Template engine, dynamic content insertion, format conversion, compliance checking",
      timeline: "2-3 weeks"
    },
    {
      name: "AI Client Information Hub",
      description: "Secure internal knowledge system that answers questions about IMMPL's documents, processes, and client information.",
      technical: "Retrieval-Augmented Generation (RAG), vector database, role-based access control",
      timeline: "3-4 weeks"
    },
    {
      name: "Custom Agentic Systems",
      description: "Autonomous workflows that handle repetitive processes, improve coordination, and enable data-driven decision-making.",
      technical: "Multi-step workflows, LLM orchestration, external API integrations, monitoring dashboards",
      timeline: "Tailored per use case (2-4 weeks each)"
    },
    {
      name: "WhatsApp Workflow Prototypes",
      description: "Optional: Team communication and notification systems via WhatsApp for real-time updates and alerts.",
      technical: "WhatsApp Business API integration, message templating, automated responses",
      timeline: "2-3 weeks (if needed)"
    }
  ];

  const phases = [
    {
      phase: "Month 1: Foundation & Requirements",
      duration: "Weeks 1-4",
      activities: [
        "AI Deep-Dive Training + tool requirement workshops",
        "Identify 3-4 high-impact tools to build (based on training feedback)",
        "Technical assessment: data, security, compliance, integrations",
        "Architecture planning for each tool",
        "Finalize specs and prioritization for Months 2-4"
      ]
    },
    {
      phase: "Month 2: Build Sprint 1",
      duration: "Weeks 5-8",
      activities: [
        "Solution architecture & design for Tool 1",
        "Data pipeline setup with security protocols",
        "UI/UX mockups with team feedback",
        "Initial development and weekly demos",
        "Tool 1 approaching first internal release"
      ]
    },
    {
      phase: "Month 3: Build Sprint 2",
      duration: "Weeks 9-12",
      activities: [
        "Tool 1 refinement, UAT, production deployment",
        "Parallel development of Tool 2",
        "Team training on Tool 1",
        "Weekly demos of Tool 2 progress",
        "Documentation and knowledge transfer"
      ]
    },
    {
      phase: "Month 4: Deploy & Transition",
      duration: "Weeks 13-16",
      activities: [
        "Tool 2 UAT and production deployment",
        "Start Tool 3 development (if prioritized)",
        "Team training on deployed tools",
        "Handoff to internal team",
        "4-week support & optimization period",
        "Roadmap for next phases"
      ]
    }
  ];

  const outcomes = [
    "Tool 1 deployed to production and actively used by team",
    "Tool 2 in advanced testing with clear deployment timeline",
    "Internal team upskilled in AI tool usage and best practices",
    "Comprehensive roadmap for scaling additional tools across IMMPL",
    "Clear business case with ROI projections for continued investment",
    "Complete technical documentation and runbooks for operations",
    "Internal champions trained to support and advocate for new tools"
  ];

  const criticalConsiderations = [
    {
      title: "Data Availability & Security",
      icon: Lock,
      content: "Tools require access to IMMPL's data. Recommendation: Conduct data audit early to identify requirements, security protocols, and any compliance constraints."
    },
    {
      title: "Stakeholder Engagement",
      icon: Users,
      content: "Success depends on regular feedback from end users (minimum 2 hours/week). Recommendation: Secure executive sponsorship and block time for weekly review sessions."
    },
    {
      title: "Production Readiness",
      icon: Zap,
      content: "Tools must meet production standards (performance, reliability, security). Recommendation: Plan for 2-week stabilization period before go-live with monitoring."
    }
  ];

  const deliverables = [
    "Fully functional AI tools deployed to production",
    "User documentation, admin guides, and training materials",
    "Technical architecture documentation and code repository",
    "Monitoring dashboards and performance metrics",
    "Runbooks and support procedures for operations team",
    "Post-launch support plan (minimum 4-week warranty period)"
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
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-center tracking-tight">
            AI Build Program
          </h1>
          <div className="flex items-center justify-center gap-6 text-white/90 mb-4">
            <span className="text-lg">CTO-Led Custom Tool Development</span>
            <span className="text-white/50">•</span>
            <span className="text-lg">Months 1-4</span>
          </div>
          <p className="text-lg text-white/80 max-w-3xl mx-auto text-center leading-relaxed">
            Dedicated engineering team to design, build, and deploy custom AI tools. Requirements defined in Month 1 training. Tools shipped and deployed in Months 2-4.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Tools */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Custom AI Tools</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {tools.map((tool, index) => (
                <Card key={index} className={`group hover:shadow-xl transition-all duration-300 ${tool.status ? 'border-l-4 border-l-green' : ''}`}>
                  <CardHeader className="bg-gradient-to-br from-white to-muted/50">
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-xl">{tool.name}</CardTitle>
                      {tool.status && <Badge className="bg-green text-white text-xs">{tool.status}</Badge>}
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6 space-y-4">
                    <div>
                      <p className="text-sm text-muted-foreground">{tool.description}</p>
                    </div>
                    <div className="bg-primary/5 p-3 rounded-lg border border-primary/10">
                      <p className="text-xs font-semibold text-primary mb-1">Technical Stack:</p>
                      <p className="text-sm text-muted-foreground">{tool.technical}</p>
                    </div>
                    <div className="bg-accent/5 p-3 rounded-lg border border-accent/10">
                      <p className="text-xs font-semibold text-accent mb-1">Timeline:</p>
                      <p className="text-sm text-muted-foreground">{tool.timeline}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Developer Experience */}
          <section className="bg-gradient-to-br from-primary/10 to-secondary/10 border-2 border-primary/30 rounded-xl p-8 md:p-12 mb-16 shadow-lg">
            <h3 className="text-3xl font-bold text-foreground mb-6">Proven Development Team</h3>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Our backend developer brings hands-on experience building production-grade financial planning & advisory tools:
            </p>
            <div className="bg-white/60 backdrop-blur-sm rounded-lg p-6 mb-6 border border-primary/20">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-foreground mb-2">MyFinMentor Platform</h4>
                  <p className="text-muted-foreground mb-3">
                    Previously architected and built the entire <a href="https://myfinmentor.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 underline decoration-2 underline-offset-2 font-bold">MyFinMentor.com</a> platform — a comprehensive financial mentoring & advisory tool serving real clients.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-lg p-6 mb-6 border border-primary/20">
              <div className="flex items-start gap-4">
                <div className="bg-secondary/10 p-3 rounded-lg">
                  <Code className="h-8 w-8 text-secondary" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-foreground mb-2">FinancePlan Tool (In Development)</h4>
                  <p className="text-muted-foreground mb-3">
                    Currently building <a href="https://fin-planning.netlify.app" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 underline decoration-2 underline-offset-2 font-bold">fin-planning.netlify.app</a> — an advanced financial planning tool with LLM-powered insights and multi-scenario modeling.
                  </p>
                </div>
              </div>
            </div>
            <p className="text-muted-foreground text-lg leading-relaxed">
              This proven track record means <span className="font-semibold text-foreground">faster development, fewer integration issues, and tools that are built to scale from day one.</span>
            </p>
          </section>

          {/* Timeline */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-8 text-center">4-Month Engagement Timeline</h2>
            <div className="space-y-6">
              {phases.map((phase, index) => (
                <Card key={index} className="border-l-4 border-l-primary">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-foreground">{phase.phase}</h3>
                        <p className="text-sm text-accent font-semibold">{phase.duration}</p>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {phase.activities.map((activity, i) => (
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
            <div className="space-y-3">
              {outcomes.map((outcome, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">{outcome}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Deliverables */}
          <section className="bg-orange/5 border border-orange/20 rounded-xl p-8 md:p-12 mb-16">
            <h3 className="text-3xl font-bold text-foreground mb-8">Deliverables</h3>
            <ul className="grid md:grid-cols-2 gap-4">
              {deliverables.map((deliverable, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Zap className="h-5 w-5 text-orange flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{deliverable}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Critical Considerations */}
          <section className="bg-amber-50 border border-amber-200 rounded-xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-foreground mb-8 flex items-center">
              <AlertCircle className="h-8 w-8 mr-3 text-amber-600" />
              Critical Success Factors
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {criticalConsiderations.map((factor, index) => {
                const IconComponent = factor.icon;
                return (
                  <div key={index} className="bg-white p-6 rounded-lg border border-amber-100">
                    <div className="flex items-center gap-2 mb-3">
                      <IconComponent className="h-5 w-5 text-amber-600" />
                      <h4 className="font-bold text-foreground">{factor.title}</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">{factor.content}</p>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Wave3;
