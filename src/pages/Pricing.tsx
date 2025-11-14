import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, AlertCircle } from "lucide-react";

const Pricing = () => {
  const pricing = {
    monthlyFee: "₹5,00,000",
    duration: "4 months minimum",
    currency: "INR + GST",
    total4Months: "₹20,00,000 (approx)"
  };

  const includes = [
    "AI Deep-Dive Training Program (Fortnightly sessions, all teams)",
    "AI Adoption & Workflow Enablement (Tool evaluation, integration, training)",
    "AI Build Program (Custom tool development & deployment)",
    "Dedicated 4-person team (2 strategists + 2 senior developers)",
    "Fortnightly sync meetings with IMMPL stakeholders",
    "Continuous async collaboration via shared project board",
    "Monthly reporting (Training, Adoption, Build status)",
    "All internal documentation & support materials",
    "Full source code & IP ownership",
    "4-week post-launch warranty & support"
  ];

  const notIncluded = [
    "Major system expansions requiring extended build time (scoped separately)",
    "Third-party SaaS subscriptions (client responsibility)",
    "Data migration or legacy system integration beyond scope"
  ];

  const tools = [
    {
      name: "AI Deal Assistant",
      description: "PDF/contract ingestion, red flag detection, executive summaries"
    },
    {
      name: "AI Market Research Agent",
      description: "Global data scraping, processing, and summarization"
    },
    {
      name: "AI Document Generator",
      description: "LOIs, SOPs, reports, client communications, pitch templates"
    },
    {
      name: "AI Client Information Hub",
      description: "Secure internal knowledge system with RAG and role-based access"
    },
    {
      name: "Custom Agentic Systems",
      description: "Autonomous workflows for repetitive processes"
    },
    {
      name: "Custom GPTs & Assistants",
      description: "Purpose-built AI systems for IMMPL's unique workflows"
    }
  ];

  const faq = [
    {
      question: "What if we want to modify the scope?",
      answer: "Scope changes are scoped separately. We work monthly, so each month's plan can be adjusted based on progress. Major new systems would be quoted separately."
    },
    {
      question: "What happens after 4 months?",
      answer: "We provide complete handover to your team with documentation and 4-week support period. You can engage hourly for ongoing support, or contract for additional tool development on similar terms."
    },
    {
      question: "Who owns the code and IP?",
      answer: "IMMPL owns 100% of the code, tools, and intellectual property. You get the source code, full documentation, and everything needed to maintain and extend the tools internally."
    },
    {
      question: "Can tools be modified after launch?",
      answer: "Yes. We provide documentation and training so your team can modify tools. Or you can engage us hourly for specific enhancements and improvements."
    },
    {
      question: "How are changes to requirements handled?",
      answer: "We work monthly with clear deliverables. Each month, we review progress and adjust priorities if needed. Major scope changes are discussed and quoted separately if they extend the timeline."
    },
    {
      question: "Is there flexibility in the 4-month timeline?",
      answer: "4 months is the initial commitment. You can extend month-by-month after that, pause if needed (with 2 weeks notice), or accelerate if you want to add resources. All terms are flexible within reason."
    },
    {
      question: "What's your approach to data security?",
      answer: "All tools follow industry best practices: encryption, role-based access control, audit logs, and compliance with relevant regulations. Details are finalized during discovery."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-primary text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 tracking-tight">Pricing & Investment</h1>
          <p className="text-xl text-white/90">Simple, transparent pricing for a comprehensive AI transformation</p>
        </div>
      </section>

      {/* Main Pricing */}
      <section id="pricing" className="py-20 bg-gradient-to-b from-background to-muted/20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Payment & Terms - Now at Top */}
          <div className="bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-primary/30 rounded-2xl p-8 md:p-12 mb-16 shadow-lg">
            <div className="text-center mb-8">
              <Badge className="bg-primary text-white mb-4">4-Month Partnership</Badge>
              <h2 className="text-4xl font-bold text-foreground mb-3">Simple, Transparent Investment</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                One monthly fee covers your entire AI transformation — training, adoption, and custom tools.
              </p>
            </div>

            {/* Pricing Box */}
            <div className="bg-white rounded-2xl p-8 mb-8 text-center shadow-md max-w-md mx-auto border border-primary/20">
              <p className="text-sm uppercase tracking-wide text-muted-foreground mb-2">Monthly Investment</p>
              <div className="flex items-baseline justify-center gap-2 mb-3">
                <span className="text-5xl font-bold text-primary">₹5L</span>
                <span className="text-xl text-muted-foreground">+ GST</span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">4-month minimum engagement</p>
              <div className="pt-4 border-t border-muted/20">
                <p className="text-xs text-muted-foreground">
                  Total estimated investment: <span className="font-semibold text-foreground">₹20L + GST</span>
                </p>
              </div>
            </div>

            {/* Terms Grid */}
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-5 border border-primary/10">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground mb-1">Payment Terms</p>
                    <p className="text-sm text-muted-foreground">Monthly invoice, payable within 15 days</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-5 border border-primary/10">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground mb-1">Scope Changes</p>
                    <p className="text-sm text-muted-foreground">Major new requests quoted separately</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-5 border border-primary/10">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground mb-1">Complete Ownership</p>
                    <p className="text-sm text-muted-foreground">100% of code, tools & IP transfer to IMMPL</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-5 border border-amber-200">
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground mb-1">Production Control</p>
                    <p className="text-sm text-muted-foreground">Deployment only with IMMPL's written approval</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-xl p-5 text-center">
              <p className="text-sm text-green-800">
                <strong>No hidden fees.</strong> This covers everything except major out-of-scope system additions (transparently discussed and quoted).
              </p>
            </div>
          </div>

          {/* What's Included */}
          <Card className="bg-gradient-to-br from-muted/20 to-background border shadow-lg mb-16">
            <CardContent className="p-8">
              <h3 className="text-3xl font-bold mb-8 text-foreground">What's Included</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {includes.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* What's Not Included */}
          <Card className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 shadow-lg mb-16">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-foreground flex items-center">
                <AlertCircle className="h-6 w-6 mr-2 text-amber-600" />
                What's Not Included
              </h3>
              <ul className="space-y-3">
                {notIncluded.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-muted-foreground">
                    <span className="text-amber-600 font-bold mt-0.5">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Sample Tools */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold mb-8 text-foreground text-center">Sample Tools You'll Get</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tools.map((tool, index) => (
                <Card key={index} className="hover:shadow-lg transition-all">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-foreground mb-2">{tool.name}</h4>
                    <p className="text-sm text-muted-foreground">{tool.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <p className="text-center text-sm text-muted-foreground mt-8">
              <em>List evolves based on IMMPL's needs during discovery phase</em>
            </p>
          </div>

          {/* FAQ */}
          <div>
            <h3 className="text-3xl font-bold mb-8 text-foreground text-center">Frequently Asked Questions</h3>
            <div className="space-y-4">
              {faq.map((item, index) => (
                <Card key={index} className="hover:shadow-md transition-all">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">{item.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{item.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
