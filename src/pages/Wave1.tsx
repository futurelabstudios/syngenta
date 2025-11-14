import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, AlertCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Footer from "@/components/Footer";

const Wave1 = () => {
  const segments = [
    {
      title: "AI Landscape & Prompt Engineering",
      subtitle: "The Art of Talking to AI",
      icon: "🎯",
      color: "bg-primary",
      topics: [
        "Understanding the real AI landscape for agriculture & agritech: separating signal from noise",
        "GPT, Claude, Gemini: which models work best for which agricultural enterprise use cases",
        "Prompt engineering fundamentals: how to communicate effectively with AI",
        "Advanced prompting techniques: chain-of-thought, few-shot learning, role-based prompts",
        "Crafting context-rich prompts that deliver high-quality, actionable outputs for agronomic decisions",
        "Common pitfalls and how to avoid hallucinations in AI responses"
      ],
      examples: [
        "Transform vague queries into precise prompts that save 70% iteration time in agronomic research",
        "Extract structured insights from unstructured data (farmer feedback, field trial reports, lab data)",
        "Generate executive summaries from 50-page seed health reports or agronomic studies in 2 minutes"
      ]
    },
    {
      title: "Productivity Tools for Agriculture Teams",
      subtitle: "Everyday Efficiency Multipliers",
      icon: "⚡",
      color: "bg-accent",
      topics: [
        "AI-powered document generation: agronomic reports, field memos, presentations in minutes",
        "Smart email management: auto-drafts, priority sorting, meeting extraction",
        "Intelligent spreadsheet automation: seed health data analysis, yield trend identification, forecasting",
        "Research acceleration: competitive intelligence, crop trends, farmer insights",
        "Meeting productivity: AI note-taking for field visits, action items, follow-ups",
        "Collaborative work tools: real-time co-creation with AI assistance for research teams"
      ],
      examples: [
        "Auto-generate weekly crop performance reports with data validation (70% time reduction)",
        "Create farmer visit summaries in 5 minutes vs. 45 minutes",
        "Transform raw field trial data into actionable agronomic insights"
      ]
    },
    {
      title: "AI Creative Suite for Agriculture Teams",
      subtitle: "Marketing & Content at Scale",
      icon: "🎨",
      color: "bg-orange",
      topics: [
        "Brand-safe content generation: maintaining Syngenta voice and regulatory compliance at scale",
        "Visual asset creation: crop education materials, farmer-facing content, presentations",
        "Campaign ideation and rapid prototyping: 10 farmer outreach concepts in the time of 1",
        "Localization at scale: adapting agronomic content for regional crops, languages, and farming practices",
        "Video and multimedia: storyboarding for farmer education, scripting, editing with AI assistance",
        "Creative workflows that integrate Syngenta brand guidelines and regulatory approval processes"
      ],
      examples: [
        "Generate 50 farmer education content variants across regional languages in 20 minutes",
        "Create dealer-specific promotional materials with crop-specific localized messaging",
        "Develop compliant product presentation decks with automated field trial data integration"
      ]
    },
    {
      title: "AI for Automation & Agents",
      subtitle: "Building Intelligent Workflows",
      icon: "🤖",
      color: "bg-green",
      topics: [
        "Understanding AI agents: autonomous systems that work on your behalf",
        "Workflow automation with AI: eliminate repetitive tasks completely",
        "Data extraction and processing: from invoices to contracts to reports",
        "Custom GPTs and assistants: building role-specific AI tools",
        "Integration with existing systems: CRM, ERP, data warehouses",
        "Governance and safety: ensuring AI agents operate within guardrails"
      ],
      examples: [
        "Auto-generate agronomic trend summaries from field data and farmer feedback (saves 4-6 hours/week)",
        "AI checklists for safe product usage and regulatory compliance: prevent compliance issues",
        "Automated seed inventory optimization alerts based on seasonal demand patterns"
      ]
    }
  ];

  const outcomes = [
    "Everyone speaks the same AI vocabulary: critical for org-wide adoption and cross-functional collaboration across R&D, field operations, and commercial teams",
    "Organizational confidence in safe and correct use: reduces shadow IT risks and ensures compliance with agricultural regulations and data governance policies",
    "Immediate productivity lift based on industry benchmarks from leading agriculture and life sciences organizations",
    "Established foundation for advanced AI adoption: teams understand when and how to leverage AI for agronomic research, field operations, and commercial workflows",
    "Reduced resistance to change: participants see firsthand how AI augments rather than replaces agronomic and scientific expertise",
    "Clear AI governance framework in place: policies, guidelines, and escalation paths for safe organizational use in regulated agricultural contexts"
  ];

  const prerequisites = [
    "Participants should have basic familiarity with Microsoft 365 or Google Workspace",
    "Access to company email and collaboration tools during session",
    "Willingness to share anonymized work scenarios for contextualization"
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
              Foundation Program
            </Badge>
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-center tracking-tight">AI Essentials</h1>
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
