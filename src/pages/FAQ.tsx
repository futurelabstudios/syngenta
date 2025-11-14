import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Shield, Users, TrendingUp, Brain, Zap, CheckCircle, Globe, Lock, Building } from "lucide-react";

const FAQ = () => {
  const categories = [
    {
      icon: Shield,
      title: "Security & Compliance",
      color: "bg-primary",
      faqs: [
        {
          question: "How do you ensure client data security during the program?",
          answer: "Data security is foundational to our approach:\n\n• Enterprise-grade tools only: SOC2, GDPR, ISO 27001 compliant systems\n• All demos use synthetic or redacted data with zero sensitive information exposed\n• Prototype development in isolated sandboxes: access-controlled environments with audit trails\n• Data never leaves your environment without explicit permission: full data sovereignty\n• Role-based access controls (RBAC): users only access data relevant to their function\n• Encryption at rest and in transit with enterprise-standard security protocols\n• Regular security audits and compliance reviews with ongoing monitoring\n• Clear data retention and deletion policies: you maintain full control\n\nWe work within your existing security frameworks and obtain necessary approvals before training begins."
        },
        {
          question: "Will the AI tools comply with financial regulations?",
          answer: "Yes. All tools are built with compliance as a core requirement:\n\n• No data leaves secure environments without audit trails\n• All AI operations are logged and reviewable\n• Tools integrate with your compliance workflows\n• Documentation for audit and regulatory reviews\n• Role-based access ensures only authorized personnel use sensitive AI features\n• We can customize to align with SEBI, RBI, and other relevant regulatory requirements"
        }
      ]
    },
    {
      icon: Users,
      title: "Program Scope & Engagement",
      color: "bg-accent",
      faqs: [
        {
          question: "Which teams benefit most from this 3-month program?",
          answer: "Maximum ROI is typically seen in:\n\n• Advisory Teams: Accelerated portfolio analysis, market research, client communication\n• Operations: Workflow automation, reporting, efficiency improvements\n• Trading & Markets: Data processing, market intelligence synthesis, alert generation\n• Finance: Automated reconciliations, P&L analysis, forecasting\n• HR & Learning: Talent acquisition, personalized development paths\n• Marketing & Client Success: Automated communications, campaign optimization\n\nEvery team gains immediate productivity improvements. The key is that benefits compound as more teams adopt AI—cross-functional processes become exponentially more efficient."
        },
        {
          question: "What if we can't commit the full team availability?",
          answer: "The program is flexible:\n\n• Minimum viable: 2 hours per week for training participation + 2 hours for project reviews\n• Leadership sponsorship ensures protected time for key stakeholders\n• We can stagger training across teams to distribute load\n• Monthly reports show ROI, making it easy to justify team time investment\n• Tools are designed for easy adoption, reducing support overhead"
        },
        {
          question: "What happens if we want to extend beyond 3 months?",
          answer: "Extensions are seamless:\n\n• Continue monthly retainers at the same rate for additional development\n• Option to shift to hourly basis for ad-hoc support\n• We can help scale proven tools across more teams\n• Handover process is designed for smooth transition to internal ownership\n• Post-launch warranty period (4 weeks) ensures smooth operations"
        }
      ]
    },
    {
      icon: Brain,
      title: "Custom Tools & IP",
      color: "bg-secondary",
      faqs: [
        {
          question: "Can we build tools specific to IMMPL's workflows?",
          answer: "Absolutely—that's the core of the AI Build Program. We can create:\n\n• AI Deal Assistant: PDF/contract analysis with red flags and summaries\n• AI Market Research Agent: Automated global market intelligence gathering\n• AI Document Generator: LOIs, SOPs, reports, client communications\n• AI Client Information Hub: Secure RAG-based knowledge system\n• Custom agentic systems: Autonomous workflows for repetitive processes\n• Custom GPTs: Purpose-built assistants for your specific workflows\n\nAll tools are tailored to IMMPL's processes, terminology, and compliance requirements."
        },
        {
          question: "Who owns the code and IP generated?",
          answer: "IMMPL owns 100% of the code, tools, and intellectual property developed during the engagement. Futurelab Studios retains the right to use learnings and methodologies for future projects (with your data anonymized)."
        },
        {
          question: "Can tools be modified or extended after launch?",
          answer: "Yes. We provide:\n\n• Complete technical documentation and code repositories\n• Training for your team to understand and maintain tools\n• Support for modifications and enhancements\n• Option to continue hourly engagements for additional features\n• Clear transition plan so you can eventually own full development"
        }
      ]
    },
    {
      icon: TrendingUp,
      title: "ROI & Business Impact",
      color: "bg-orange",
      faqs: [
        {
          question: "How do you measure success and ROI?",
          answer: "ROI is tracked through multiple lenses:\n\n• Efficiency Gains: Time saved on routine tasks (tracked via tool usage logs)\n• Quality Improvements: Better insights, faster decision-making, fewer errors\n• Cost Savings: Reduced operational overhead, lower processing costs\n• Revenue Impact: Faster client advisory, improved market responsiveness\n• Adoption Metrics: Team usage rates, feature adoption, feedback scores\n• Financial Impact: Quantified in terms of employee hours saved, process improvements\n\nMonthly reports provide transparent visibility into progress and impact."
        },
        {
          question: "What's a realistic timeline to see ROI?",
          answer: "Typically:\n\n• Immediate (Week 1-4): First tools deployed, team starts using them\n• Short-term (Month 2): Measurable efficiency gains, workflow improvements\n• Medium-term (Month 3+): Compounding benefits as more processes are automated\n• Long-term (6-12 months): Strategic advantages in market responsiveness and decision quality\n\nMany clients see measurable productivity gains within the first 2-3 weeks of using custom tools."
        }
      ]
    },
    {
      icon: Zap,
      title: "Integration & Technology",
      color: "bg-green",
      faqs: [
        {
          question: "Do the tools integrate with IMMPL's existing systems?",
          answer: "Yes. We design integrations with:\n\n• Your email and communication platforms\n• CRM and client management systems\n• Finance and accounting software\n• Document management systems\n• Data warehouses and analytics platforms\n• Existing internal tools and workflows\n\nWe work within your existing tech stack—tools adapt to your infrastructure, not the other way around."
        },
        {
          question: "What if we use non-standard or legacy systems?",
          answer: "We can handle most setups:\n\n• Custom API integrations for legacy systems\n• Middleware solutions to connect disparate tools\n• Data transformation pipelines to harmonize information\n• Sometimes recommend modern alternatives if integration complexity is high\n• Always provide clear recommendations with timeline and cost implications"
        },
        {
          question: "Can tools work offline or with limited internet?",
          answer: "Depends on the tool:\n\n• Some tools are fully cloud-based (always require internet)\n• Others can be deployed locally on your servers\n• We discuss deployment options during discovery\n• Offline-first tools can sync when connectivity is restored\n• Clear guidance on infrastructure requirements before development begins"
        }
      ]
    }
  ];

  const departmentBenefits = [
    {
      icon: TrendingUp,
      title: "Advisory Teams",
      benefits: [
        "AI-powered portfolio analysis with market context",
        "Automated client communication and meeting summaries",
        "Rapid market research and competitive intelligence",
        "Personalized investment insights at scale"
      ]
    },
    {
      icon: Zap,
      title: "Operations",
      benefits: [
        "Workflow automation reducing manual processes",
        "Intelligent reporting and dashboard generation",
        "Predictive alerts for key metrics",
        "Process optimization through AI insights"
      ]
    },
    {
      icon: Building,
      title: "Finance & Back Office",
      benefits: [
        "Automated reconciliations and P&L analysis",
        "Faster month-end close and reporting",
        "Expense and invoice processing automation",
        "Financial forecasting and scenario modeling"
      ]
    },
    {
      icon: Users,
      title: "HR & Talent",
      benefits: [
        "AI-powered candidate screening and matching",
        "Personalized learning and development paths",
        "Talent analytics and succession planning",
        "Automated HR documentation and communications"
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
            Answers to key questions about the IMMPL AI Enablement Program
          </p>
        </div>
      </section>

      {/* Department Benefits Section */}
      <section className="py-12 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-2">
              How This Program Drives IMMPL Forward
            </h2>
            <p className="text-base text-muted-foreground max-w-3xl mx-auto">
              Tailored AI solutions for wealth management, trading, finance, and operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-4">
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
              Leadership & Program FAQs
            </h2>
            <p className="text-base text-muted-foreground max-w-3xl mx-auto">
              Strategic answers to questions CXOs and leadership teams ask
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
              Why Futurelab Studios Is the Right Partner
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card className="text-center hover:shadow-md transition-all">
              <CardContent className="p-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-bold text-sm mb-1">Proven Track Record</h3>
                <p className="text-muted-foreground text-xs">150+ AI enablement programs, 50+ organizations transformed, 5000+ professionals trained</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-md transition-all">
              <CardContent className="p-4">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-3">
                  <Building className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-bold text-sm mb-1">Finance & Advisory Expertise</h3>
                <p className="text-muted-foreground text-xs">Deep experience across wealth management, trading, and financial operations</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-md transition-all">
              <CardContent className="p-4">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-3">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-bold text-sm mb-1">Strategy + Execution</h3>
                <p className="text-muted-foreground text-xs">Hybrid of strategic planning and hands-on engineering for real impact</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-md transition-all">
              <CardContent className="p-4">
                <div className="w-12 h-12 bg-orange rounded-full flex items-center justify-center mx-auto mb-3">
                  <Lock className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-bold text-sm mb-1">Security & Compliance First</h3>
                <p className="text-muted-foreground text-xs">Regulatory awareness and enterprise-grade security built in</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-md transition-all">
              <CardContent className="p-4">
                <div className="w-12 h-12 bg-green rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-bold text-sm mb-1">Trusted Team</h3>
                <p className="text-muted-foreground text-xs">Founders with experience at top tech, finance, and FMCG companies</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-md transition-all">
              <CardContent className="p-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-bold text-sm mb-1">Results Driven</h3>
                <p className="text-muted-foreground text-xs">Focus on measurable outcomes and sustainable adoption</p>
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
