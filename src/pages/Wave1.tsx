import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, AlertCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Footer from "@/components/Footer";

const Wave1 = () => {
  const segments = [
    {
      title: "AI Landscape & Prompt Engineering",
      subtitle: "The art of talking to AI",
      icon: "🎯",
      color: "bg-primary",
      topics: [
        "Understanding the AI landscape for global food & agri-business: separating signal from noise",
        "Which frontier models (GPT-4o, Claude, Gemini) work best for sourcing, operations, and marketing tasks",
        "Prompt engineering fundamentals plus chain-of-thought, few-shot, and role-based prompting",
        "Crafting context-rich prompts that deliver high-quality outputs for field, finance, and marketing teams",
        "Guardrails for avoiding hallucinations and protecting sensitive farmer or customer data"
      ],
      examples: [
        "Transform vague commodity research questions into structured prompts that cut analysis time by 70%",
        "Extract structured insights from unstructured sources such as AtSource field notes or sustainability audits",
        "Generate executive-ready briefs on Olam’s re-organisation progress in minutes"
      ]
    },
    {
      title: "Productivity Tools for Olam Teams",
      subtitle: "Everyday efficiency multipliers",
      icon: "⚡",
      color: "bg-accent",
      topics: [
        "AI-powered document generation: board memos, sourcing reports, sustainability summaries in minutes",
        "Smart inbox management: auto-drafts, meeting extraction, and sentiment tagging for partner updates",
        "Spreadsheet copilots for demand planning, farmer payout tracking, and cost forecasting",
        "Research acceleration: commodity price tracking, macro insight scans, competitive intelligence",
        "Meeting productivity: AI note-taking for plant visits, supply reviews, or marketing stand-ups",
        "Collaboration flows: real-time co-creation in Docs/Slides/Sheets with AI assistance"
      ],
      examples: [
        "Auto-generate weekly Ghana sales & stock reports with validation (70% time reduction)",
        "Create plant or farmer visit summaries in 5 minutes instead of 45",
        "Turn raw POS or distributor data into actionable insights for B2C pilots"
      ]
    },
    {
      title: "AI Creative Suite for Marketing & Brand",
      subtitle: "Marketing and content at scale",
      icon: "🎨",
      color: "bg-orange",
      topics: [
        "Brand-safe copy generation aligned to Olam and sub-brand tone (e.g., Mama Gold)",
        "Visual asset creation: concept mockups, trade marketing assets, social creative",
        "Campaign ideation sprints: 10 omnichannel ideas in the time it took to craft one",
        "Localization at scale: adapt content for West African markets, dialects, and retail formats",
        "Video & multimedia scripting for farmer education or consumer channels",
        "Creative workflows that plug into existing approval chains and compliance policies"
      ],
      examples: [
        "Generate 50 social media variants for a Ghana rice push in under 20 minutes",
        "Create retailer-specific sell-in decks with localized messaging and auto-updated data",
        "Develop brand-compliant B2C launch kits with automated data pulls"
      ]
    },
    {
      title: "AI for Automation & Agents",
      subtitle: "Building intelligent workflows",
      icon: "🤖",
      color: "bg-green",
      topics: [
        "What AI agents are and how they support sourcing, finance, or marketing teams",
        "Workflow automation that eliminates repetitive tasks end-to-end",
        "Data extraction pipelines for invoices, contracts, sustainability reports, or lab results",
        "Custom GPTs & copilots built on Olam’s knowledge base and SOPs",
        "Integrations with SAP, Salesforce, data warehouses, and collaboration tools",
        "Governance: access controls, monitoring, and safety for autonomous workflows"
      ],
      examples: [
        "Auto-generate ingredient or flavour trend summaries from consumer data (saves 4–6 hrs/week)",
        "Create AI checklists for safe usage of brand assets across markets",
        "Trigger predictive inventory or procurement alerts based on demand patterns"
      ]
    }
  ];

  const outcomes = [
    "Everyone speaks the same AI vocabulary, enabling cross-functional collaboration from farm-gate to consumer",
    "Organizational confidence in safe, correct usage of AI—reducing shadow IT and protecting data",
    "Immediate productivity lift benchmarked against leading agri/FMCG enterprises",
    "Clear understanding of where AI augments existing workflows versus future automation opportunities",
    "Reduced resistance to change by showing teams evidence that AI amplifies (not replaces) expertise",
    "An actionable governance framework: policies, playbooks, escalation paths, and champions"
  ];

  const prerequisites = [
    "Participants should have basic familiarity with Microsoft 365 or Google Workspace",
    "Access to Olam email, chat, and collaboration tools during the sessions",
    "Willingness to share anonymized scenarios from sourcing, operations, or marketing for contextualization"
  ];

  const successFactors = [
    "Leadership buy-in and visible participation sets adoption tone: executives modeling AI usage significantly accelerates team adoption",
    "Post-session implementation time allocated (minimum 2 hours/week for 4 weeks): practice time is critical for skill retention and habit formation",
    "Department champions identified to support peer learning: champion networks substantially increase adoption rates",
    "Integration with existing performance metrics: AI usage and productivity gains tracked as part of team KPIs",
    "Regular reinforcement through internal communications: success stories, tips, and use cases shared via existing channels",
    "Access to ongoing learning resources: curated libraries, templates, and best practice repositories for continuous improvement"
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
              AI Essentials · Module 1
            </Badge>
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-center tracking-tight">AI Essentials</h1>
          <div className="flex items-center justify-center gap-6 text-white/90 mb-4">
            <span className="text-lg">2 sessions × 3 hours</span>
            <span className="text-white/50">•</span>
            <span className="text-lg">All Teams + Leadership</span>
          </div>
          <p className="text-lg text-white/80 max-w-3xl mx-auto text-center leading-relaxed">
            Foundation-building program designed for immediate productivity gains. Learn the real AI landscape for enterprise agribusiness: what works, what doesn't, and why it matters for Olam’s global and Ghana operations.
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
              Practical AI skills teams can apply immediately. Each segment includes hands-on exercises with Olam- and Ghana-specific scenarios.
            </p>
          </div>

          {/* Segments */}
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
                    <h3 className="text-xl font-bold mb-4 text-foreground">Olam Use Cases</h3>
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
