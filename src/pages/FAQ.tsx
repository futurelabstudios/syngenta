import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Shield, Users, TrendingUp, Brain, Target, CheckCircle, Globe, Zap, Building, Lock } from "lucide-react";

const FAQ = () => {
  const categories = [
    {
      icon: Shield,
      title: "Security & Compliance",
      color: "bg-primary",
      faqs: [
        {
          question: "Will our data be safe when we use these tools?",
          answer: "Absolutely. Data security and compliance are non-negotiable:\n\n• Enterprise-grade tools only: SOC2, GDPR, ISO 27001 compliant systems\n• All live demos use synthetic or redacted data with no sensitive information exposed\n• Prototype development in isolated sandboxes: access-controlled environments with audit trails\n• Data never leaves your environment without explicit permission: full data sovereignty\n• Role-based access controls (RBAC): users only access data relevant to their function\n• Encryption at rest and in transit with enterprise-standard security protocols\n• Regular security audits and compliance reviews: ongoing monitoring and reporting\n• Clear data retention and deletion policies: you maintain full control over your information\n\nWe can also work within your existing security frameworks and obtain necessary approvals from your IT and compliance teams before any training begins."
        },
        {
          question: "How can we ensure safe, ethical use for a global brand?",
          answer: "We include AI governance templates, ethical use policies, brand safety protocols, data handling checklists, and role-specific guardrails. These ensure brand assets, consumer data, and confidential information are always protected."
        }
      ]
    },
    {
      icon: Users,
      title: "Program Scope & Scale",
      color: "bg-accent",
      faqs: [
        {
          question: "Which teams will benefit the most from this training?",
          answer: "In agriculture and agritech, significant ROI is typically seen in:\n\n• Marketing: faster farmer insight generation & regional campaign workflows with substantial time savings\n• Sales & Field Teams: automated field reporting, farmer interaction summaries, dealer analytics with increased effective field time\n• R&D & Agronomy: accelerated research analysis, seed trial data synthesis, agronomic report generation\n• Supply Chain: seasonal demand modelling and seed distribution forecasting with improved accuracy\n• Finance: automated summaries, reconciliations, variance analysis with reduced month-end close time\n• HR & Learning: personalized learning pathways for agronomists, automated job descriptions for specialized agriculture roles\n• Leadership: strategic decision augmentation with data-driven agricultural insights\n\nEvery team gains immediate productivity improvements through everyday task automation. The key is that benefits compound: as more teams adopt AI, cross-functional agricultural processes become exponentially more efficient."
        },
        {
          question: "Can you train 500+ employees at scale?",
          answer: "Yes. We've scaled AI training programs to 1000+ employees across multiple organizations using proven methodologies:\n\n• Hybrid cohorts: mix of virtual and in-person sessions optimized for reach and engagement\n• Train-the-trainer programs: build internal facilitation capacity for sustained rollout\n• Cohort segmentation: by geography, function, or organizational level for targeted content\n• Self-paced learning modules: pre-work and post-work to maximize live session value\n• Centralized knowledge hub: templates, libraries, FAQs, and resources accessible 24/7\n• Scalable support model: tiered support from peer champions to department experts to our team\n• Measurement and analytics: track adoption, engagement, and impact across all cohorts\n\nOur approach ensures consistency of learning while allowing customization for specific team needs. We can scale to train large groups of employees based on your preferred pace and organizational needs."
        },
        {
          question: "What if teams don't adopt AI after training?",
          answer: "We've designed our program with proven change management principles to maximize adoption:\n\n• Post-session office hours (2 hours/week for 4 weeks) for troubleshooting and support\n• Team-specific playbooks with step-by-step workflows for common tasks\n• Adoption metrics dashboard to track usage and identify barriers early\n• Follow-up nudges through existing communication channels (email, Slack, Teams)\n• Department champions program: peer advocates who model AI usage and support colleagues\n• Integration with performance reviews: AI literacy as a competency in skill assessments\n• Regular success story sharing: celebrating wins builds momentum\n\nOur experience shows that adoption rates are significantly higher when leadership participates visibly and implementation time is protected. The goal is real behaviour change, not a one-off workshop."
        }
      ]
    },
    {
      icon: Brain,
      title: "Custom Solutions",
      color: "bg-secondary",
      faqs: [
        {
          question: "Can we build our own Syngenta-specific AI assistant?",
          answer: "Absolutely. Under the AI Builders program, we can create:\n\n• Internal custom GPT for agronomic queries\n• Agricultural knowledge search bot\n• Field & farmer advisory assistant\n• Research intelligence agent (seed trials, lab data)\n• Seasonal demand forecasting support assistant\n\nTrained securely on your agricultural documents, protocols & workflows."
        },
        {
          question: "Can your team help craft a long-term AI strategy for Syngenta India?",
          answer: "Yes, our Discover → Design → Drive → Deliver framework is ideally suited to helping Syngenta India establish a 12-24 month roadmap for adoption, prototyping, tools, governance, skills, and change management tailored to agricultural operations."
        }
      ]
    },
    {
      icon: TrendingUp,
      title: "ROI & Business Impact",
      color: "bg-orange",
      faqs: [
        {
          question: "What's the ROI of AI training?",
          answer: "AI literacy & adoption typically delivers:\n\n• Significant productivity lift organisation-wide (R&D, field operations, commercial)\n• Faster turnarounds in agronomic research, farmer insights & field analytics teams\n• Substantial reduction in repetitive tasks (report generation, data synthesis, field documentation)\n• Improved speed of agricultural insights, agronomic decision quality, and strategic agility\n\nFor a company of Syngenta India's scale and complexity, these translate into substantial efficiency gains annually across agriculture operations."
        }
      ]
    },
    {
      icon: Globe,
      title: "Integration & Technology",
      color: "bg-green",
      faqs: [
        {
          question: "We already use Microsoft/Google internally. Will this training integrate?",
          answer: "100%. We customize workflows for Microsoft 365 Copilot, Google Workspace, Power BI, Looker, Salesforce, Tableau, and internal data sources. The training adapts to your tech stack, not the other way around."
        },
        {
          question: "Can you show real examples from agriculture and agritech?",
          answer: "Yes, no hypotheticals. We demonstrate agriculture-relevant workflows including:\n\n• Farmer and field insights\n• Crop and regional segmentation\n• Seed health and trial data analysis\n• Agronomic report summarization\n• Farmer outreach campaign ideas\n• Competitive crop protection intelligence\n• Financial reconciliations\n• Dealer network and distribution planning"
        }
      ]
    }
  ];

  const departmentBenefits = [
    {
      icon: Target,
      title: "Marketing",
      benefits: [
        "Hyperlocal farmer education campaign planning using generative research",
        "AI-driven farmer sentiment intelligence across regions and crops",
        "Rapid multi-language content creation for farmer outreach",
        "Early warning systems for agronomic trend shifts"
      ]
    },
    {
      icon: TrendingUp,
      title: "Sales & Commercial",
      benefits: [
        "AI copilots for daily field visits, territory planning, and farmer advisory",
        "Predictive seasonal demand estimation with weather and crop cycle variables",
        "Product presentation generation customized to crops, regions, and dealer networks"
      ]
    },
    {
      icon: Building,
      title: "Supply Chain & Seed Operations",
      benefits: [
        "AI-enabled seasonal demand forecasting for seed distribution",
        "Risk scenario modelling (weather, crop failures, supply disruptions)",
        "Automated seed health tracking, inventory optimization, and executive dashboards"
      ]
    },
    {
      icon: CheckCircle,
      title: "Finance",
      benefits: [
        "Month-end closures support",
        "Automated reconciliations",
        "Forecasting precision improvement",
        "Zero-error financial summaries"
      ]
    },
    {
      icon: Users,
      title: "HR & Learning",
      benefits: [
        "AI-designed learning pathways for agronomists and field teams",
        "Automated job description creation for specialized agriculture roles",
        "Culture & capability intel from agronomic expertise and org knowledge"
      ]
    },
    {
      icon: Zap,
      title: "Leadership & Strategy",
      benefits: [
        "Navigating AI regulation",
        "Governance frameworks",
        "Decision-making aids",
        "Transformational use-case identification"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-primary text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6 tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
            Answers to key questions from capability managers and leadership teams about 
            AI enablement at Syngenta India
          </p>
        </div>
      </section>

      {/* Department Benefits Section */}
      <section className="py-12 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-2">
              Why This Program Is Relevant to Syngenta India
            </h2>
            <p className="text-base text-muted-foreground max-w-3xl mx-auto">
              Tailored around Syngenta India's priorities across all key departments and agricultural operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {departmentBenefits.map((dept, index) => {
              const IconComponent = dept.icon;
              return (
                <Card key={index} className="hover:shadow-md transition-all border-l-4 border-primary">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                        <IconComponent className="h-4 w-4 text-white" />
                      </div>
                      <CardTitle className="text-base">{dept.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <ul className="space-y-2">
                      {dept.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-start text-xs text-muted-foreground">
                          <div className="w-1 h-1 bg-primary rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Categories Section */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-2">
              Leadership & Capability Manager FAQs
            </h2>
            <p className="text-base text-muted-foreground max-w-3xl mx-auto">
              Strategic answers to the questions CXOs, BU heads, and capability leaders typically ask
            </p>
          </div>

          <div className="space-y-4">
            {categories.map((category, categoryIndex) => {
              const IconComponent = category.icon;
              return (
                <Card key={categoryIndex} className="border shadow-md hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-2">
                      <div className={`w-8 h-8 ${category.color} rounded-lg flex items-center justify-center`}>
                        <IconComponent className="h-4 w-4 text-white" />
                      </div>
                      <CardTitle className="text-base font-bold">{category.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <Accordion type="single" collapsible className="w-full">
                      {category.faqs.map((faq, faqIndex) => (
                        <AccordionItem key={faqIndex} value={`item-${categoryIndex}-${faqIndex}`} className="border-b border-muted/30 last:border-0">
                          <AccordionTrigger className="text-left text-sm font-semibold hover:text-primary py-3">
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent className="text-muted-foreground text-xs leading-relaxed whitespace-pre-line pb-3">
                            {faq.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Futurelab Studios Section */}
      <section className="py-12 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-2">
              Why Futurelab Studios Is a Fit for Syngenta India
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card className="text-center hover:shadow-md transition-all">
              <CardContent className="p-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-bold text-sm mb-1">Global Reach</h3>
                <p className="text-muted-foreground text-xs">50+ organisations served across India, UAE, Africa, SEA</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-md transition-all">
              <CardContent className="p-4">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-3">
                  <Building className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-bold text-sm mb-1">Agriculture & Enterprise Expertise</h3>
                <p className="text-muted-foreground text-xs">Deep experience across agriculture, life sciences, FMCG, consulting, and enterprise technology</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-md transition-all">
              <CardContent className="p-4">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-3">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-bold text-sm mb-1">Strategy + Execution</h3>
                <p className="text-muted-foreground text-xs">Hybrid of strategy + hands-on building</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-md transition-all">
              <CardContent className="p-4">
                <div className="w-12 h-12 bg-orange rounded-full flex items-center justify-center mx-auto mb-3">
                  <Lock className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-bold text-sm mb-1">Security First</h3>
                <p className="text-muted-foreground text-xs">Strong security, governance & compliance focus</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-md transition-all">
              <CardContent className="p-4">
                <div className="w-12 h-12 bg-green rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-bold text-sm mb-1">Proven Team</h3>
                <p className="text-muted-foreground text-xs">Founders with experience at leading enterprises: FMCG, Mondelez, Airtel, Google, and agritech ventures</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-md transition-all">
              <CardContent className="p-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-bold text-sm mb-1">Results Driven</h3>
                <p className="text-muted-foreground text-xs">Focus on measurable outcomes and adoption</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;

