import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, AlertCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Footer from "@/components/Footer";

const Wave1 = () => {
  const segments = [
    {
      title: "AI Landscape & Prompt Engineering",
      subtitle: "The Art of Talking to AI — for Syngenta India",
      icon: "🎯",
      color: "bg-primary",
      topics: [
        "Understanding the real AI landscape for Agriculture & Agribusiness: separating signal from noise",
        "GPT, Claude, Gemini: which models work best for field-force workflows, agronomy knowledge, and internal ops",
        "Prompt engineering fundamentals: how to communicate effectively with AI",
        "Advanced prompting techniques: chain-of-thought, few-shot learning, role-based prompts",
        "Crafting context-rich prompts tailored to agronomy, field insights, regulatory language, farmer communication",
        "Common pitfalls and how to avoid hallucinations in crop-science or compliance-sensitive outputs"
      ],
      examples: [
        "Convert vague field-force inputs into precise agronomic prompts for faster insights",
        "Extract structured insights from unstructured farmer call logs, WhatsApp messages, helpline notes",
        "Generate crisp executive summaries from 50-page regulatory, procurement, or R&D reports",
        "Summarise district-wise crop performance updates from field teams in minutes"
      ]
    },
    {
      title: "Productivity Tools for Syngenta Teams",
      subtitle: "Everyday Efficiency Multipliers",
      icon: "⚡",
      color: "bg-accent",
      topics: [
        "AI-powered document generation: field reports, agronomy briefs, SOPs, PPTs",
        "Smart email management: auto-drafts, follow-up scheduling, meeting extraction",
        "Intelligent spreadsheet automation: demand forecasting, pricing trends, territory planning",
        "Research acceleration: crop trends, competitive intelligence, rural consumer insights",
        "Meeting productivity: AI note-taking, next steps, action items for cross-functional teams",
        "Collaborative work tools: real-time co-creation across Product, Marketing, Supply Chain & R&D"
      ],
      examples: [
        "Auto-generate weekly field-force performance reports with data validation (70% time saved)",
        "Create market visit summaries from field officers in 5 minutes instead of 45 minutes",
        "Transform raw dealer/retailer feedback and CRM data into actionable insights by region",
        "Auto-build demand forecast models based on weather patterns, crop cycles & historical sales"
      ]
    },
    {
      title: "AI Creative Suite for Syngenta India",
      subtitle: "Marketing, Rural Engagement & Content at Scale",
      icon: "🎨",
      color: "bg-orange",
      topics: [
        "Brand-safe content generation: rural-facing content aligned with compliance and science accuracy",
        "Visual asset creation: farmer education material, retailer POS content, product demos",
        "Campaign ideation: generate 10 concepts in the time of 1 for crop-season campaigns",
        "Localization at scale: create content for multiple states and dialects",
        "Video and multimedia: storyboarding farmer success stories, demo videos, explainers",
        "Creative workflows: automate brand-guide-compliant content approval"
      ],
      examples: [
        "Generate 50 variants of farmer-facing creatives (for Kharif/Rabi seasons) in 20 minutes",
        "Localize the same campaign in Hindi, Marathi, Gujarati, Tamil, Telugu, Kannada — instantly",
        "Produce rapid prototypes for distributor engagement decks or Channel Partner campaigns",
        "Auto-build JBP decks with retailer-specific analytics and product performance data"
      ]
    },
    {
      title: "AI for Automation & Agents",
      subtitle: "Building Intelligent Workflows for Agriculture",
      icon: "🤖",
      color: "bg-green",
      topics: [
        "Understanding AI agents: autonomous systems that work on your behalf",
        "Workflow automation: eliminate repetitive, time-consuming operational tasks",
        "Data extraction & processing: invoices, contracts, compliance documents, lab reports",
        "Custom GPTs: agronomy advisor GPT, distributor-support GPT, internal SOP assistant",
        "Systems integration: CRM, SAP, distributor systems, supply chain tools",
        "Governance & safety: ensuring scientific accuracy and regulatory compliance"
      ],
      examples: [
        "Auto-generate crop trend summaries from farmer feedback + weather + market data",
        "AI agents for safe usage of brand & product assets (no wrong claims, no non-compliant content)",
        "Automated inventory alerts based on crop cycles, rainfall, pest-outbreak patterns",
        "Field-force assistance GPT that supports SOPs, product FAQs, and agronomy guidance"
      ]
    }
  ];

  const outcomes = [
    "Teams speak the same 'AI language' — critical for org-wide adoption across Product, Marketing, Field, Supply Chain & Support",
    "Higher confidence in safe and correct usage → lower compliance risk, fewer errors in regulatory and scientific content",
    "Immediate productivity lift across all functions: measurable results based on work with 50+ enterprise clients",
    "Foundation for advanced AI adoption: agents, automation, internal knowledge systems tailored to agriculture workflows",
    "Reduced resistance to change — people see AI as augmentation, not replacement of agronomic expertise",
    "Clear AI governance protocols: safety, responsible usage, auditability for regulated agricultural operations"
  ];

  const prerequisites = [
    "Basic familiarity with Microsoft 365 or Google Workspace",
    "Access to company email & collaboration tools during the session",
    "Willingness to share anonymized field scenarios for contextualization"
  ];

  const successFactors = [
    "Leadership participation sets cultural tone: executives modeling AI usage accelerates adoption across teams",
    "Post-session practice time allocated (min. 2 hours/week for 4 weeks): critical for skill retention and habit formation",
    "Department champions to support peer learning: champion networks substantially increase adoption rates",
    "Tracking AI usage as part of productivity KPIs: integration with existing performance metrics drives accountability",
    "Continuous reinforcement: internal newsletters, best practice sharing via existing communication channels",
    "Access to templates, prompts, and a curated learning repository: enables self-service and continuous improvement"
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
              Foundation Program
            </Badge>
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-center tracking-tight">AI Essentials</h1>
          
          <div className="mb-6 flex justify-center">
            <div className="inline-flex items-center gap-2 md:gap-3 bg-white/15 backdrop-blur-md border border-white/40 rounded-lg px-4 md:px-6 py-2.5 md:py-3 shadow-xl">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                <div className="w-1.5 h-1.5 bg-orange rounded-full"></div>
              </div>
              <span className="text-sm md:text-base font-semibold text-white tracking-wide">
                A complete AI Enablement Program, powered by Futurelab Studios
              </span>
            </div>
          </div>

          <div className="flex items-center justify-center gap-6 text-white/90 mb-4">
            <span className="text-lg">2 sessions × 3 hours</span>
            <span className="text-white/50">•</span>
            <span className="text-lg">All Teams + Leadership</span>
          </div>
          <p className="text-lg text-white/80 max-w-3xl mx-auto text-center leading-relaxed">
            Foundation building program designed for immediate productivity gains. Learn the real AI landscape 
            for enterprise agriculture operations: what works, what doesn't, and why it matters for Syngenta India.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          
          {/* Program Overview */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Four Strategic Pillars</h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Practical AI skills you can apply immediately to agricultural operations. 
              Each segment includes hands-on exercises with agriculture and agritech-specific scenarios.
            </p>
          </div>

          {/* Four Segments */}
          {segments.map((segment, index) => (
            <Card key={index} className="border-0 shadow-xl overflow-hidden">
              <div className={`${segment.color} text-white p-6`}>
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-4xl">{segment.icon}</span>
                  <div>
                    <h2 className="text-3xl font-bold">{segment.title}</h2>
                    <p className="text-white/90 text-lg">{segment.subtitle}</p>
                  </div>
                </div>
              </div>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-foreground">What You'll Learn</h3>
                    <ul className="space-y-3">
                      {segment.topics.map((topic, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-foreground">Syngenta Use Cases</h3>
                    <div className="space-y-4">
                      {segment.examples.map((example, idx) => (
                        <Card key={idx} className="border-l-4 border-primary bg-primary/5">
                          <CardContent className="p-4">
                            <div className="flex items-start gap-3">
                              <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                              <span className="text-foreground font-medium">{example}</span>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}

          {/* Expected Outcomes */}
          <div>
            <h2 className="text-3xl font-bold mb-3">Expected Outcomes</h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Realistic, measurable results based on our work with 50+ enterprise clients.
            </p>
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

          {/* Prerequisites */}
          <Card className="bg-muted/30 border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-xl">
                <AlertCircle className="h-6 w-6 text-primary" />
                Prerequisites for Success
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {prerequisites.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-muted-foreground">
                    <span className="text-primary mt-1">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Success Factors */}
          <Card className="border-2 border-primary/20">
            <CardHeader>
              <CardTitle className="text-xl">Critical Success Factors</CardTitle>
              <p className="text-sm text-muted-foreground mt-2">
                From our experience, these factors significantly increase adoption rates
              </p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {successFactors.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Wave1;
