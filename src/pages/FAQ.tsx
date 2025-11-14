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
          answer: "In FMCG, significant ROI is typically seen in:\n\n• Marketing: faster insight generation & campaign workflows with substantial time savings\n• Sales: automated reporting, JBP creation, retailer analytics with increased effective selling time\n• Supply Chain: scenario modelling and forecasting with improved accuracy\n• Finance: automated summaries, reconciliations, variance analysis with reduced month-end close time\n• HR & Learning: personalized learning pathways, automated job descriptions with faster hiring cycles\n• Leadership: strategic decision augmentation with data-driven insights\n\nEvery team gains immediate productivity improvements through everyday task automation. The key is that benefits compound: as more teams adopt AI, cross-functional processes become exponentially more efficient."
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
          question: "Can we build our own HCCB-specific AI assistant?",
          answer: "Absolutely. Under the AI Builders program, we can create:\n\n• Internal custom GPT\n• Knowledge search bot\n• Sales assistant\n• Marketing research agent\n• Forecasting support assistant\n\nTrained securely on your documents & workflows."
        },
        {
          question: "Can your team help craft a long-term AI strategy for HCCB?",
          answer: "Yes, our Discover → Design → Drive → Deliver framework is ideally suited to helping HCCB establish a 12-24 month roadmap for adoption, prototyping, tools, governance, skills, and change management."
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
          answer: "AI literacy & adoption typically delivers:\n\n• Significant productivity lift organisation-wide\n• Faster turnarounds in marketing & analytics teams\n• Substantial reduction in repetitive tasks\n• Improved speed of insights, decision quality, and strategic agility\n\nFor a company of HCCB's scale, these translate into substantial efficiency gains annually."
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
          question: "Can you show real examples from FMCG?",
          answer: "Yes, no hypotheticals. We demonstrate FMCG-relevant workflows including:\n\n• Retail insights\n• Channel segmentation\n• Supply chain variance\n• POS data summarisation\n• Activation ideas\n• Competition moves\n• Financial reconciliations\n• Route-to-market planning"
        }
      ]
    }
  ];

  const departmentBenefits = [
    {
      icon: Target,
      title: "Marketing",
      benefits: [
        "Hyperlocal campaign planning using generative research",
        "AI-driven brand sentiment intelligence across regions",
        "Rapid content creation for 10+ digital formats",
        "Early warning systems for trend shifts"
      ]
    },
    {
      icon: TrendingUp,
      title: "Sales & Commercial",
      benefits: [
        "AI copilots for daily sales calls, beat planning, and GTM",
        "Predictive demand estimation with real-time variables",
        "Sales deck generation customised to channels (Modern Trade, GT, B2B)"
      ]
    },
    {
      icon: Building,
      title: "Supply Chain & Manufacturing",
      benefits: [
        "AI-enabled forecasting reviews",
        "Risk scenario modelling (weather, disruptions, market shocks)",
        "Automated reporting & executive dashboards"
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
        "AI-designed learning pathways",
        "Automated job description creation, evaluation rubrics",
        "Culture & capability intel from org knowledge"
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
            AI enablement at HCCB
          </p>
        </div>
      </section>

      {/* Department Benefits Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Why This Program Is Relevant to HCCB
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Tailored around HCCB's priorities across all key departments
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {departmentBenefits.map((dept, index) => {
              const IconComponent = dept.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 border-l-4 border-primary">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-xl">{dept.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {dept.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-start text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
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
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Leadership & Capability Manager FAQs
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Strategic answers to the questions CXOs, BU heads, and capability leaders typically ask
            </p>
          </div>

          <div className="space-y-8">
            {categories.map((category, categoryIndex) => {
              const IconComponent = category.icon;
              return (
                <Card key={categoryIndex} className="overflow-hidden">
                  <CardHeader className={`${category.color} text-white`}>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <CardTitle className="text-2xl">{category.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <Accordion type="single" collapsible className="w-full">
                      {category.faqs.map((faq, faqIndex) => (
                        <AccordionItem key={faqIndex} value={`item-${categoryIndex}-${faqIndex}`}>
                          <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary">
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent className="text-muted-foreground leading-relaxed whitespace-pre-line">
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
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Why Futurelab Studios Is a Fit for HCCB
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="text-center hover:shadow-lg transition-all">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2">Global Reach</h3>
                <p className="text-muted-foreground text-sm">50+ organisations served across India, UAE, Africa, SEA</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2">FMCG Expertise</h3>
                <p className="text-muted-foreground text-sm">Deep experience across FMCG, consulting, media, finance</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2">Strategy + Execution</h3>
                <p className="text-muted-foreground text-sm">Hybrid of strategy + hands-on building</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-orange rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lock className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2">Security First</h3>
                <p className="text-muted-foreground text-sm">Strong security, governance & compliance focus</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2">Proven Team</h3>
                <p className="text-muted-foreground text-sm">Founders with experience in leading FMCG, Mondelez, Airtel, Google</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2">Results Driven</h3>
                <p className="text-muted-foreground text-sm">Focus on measurable outcomes and adoption</p>
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

