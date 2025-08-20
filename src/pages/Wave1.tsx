import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Crown, Clock, Users, BookOpen, Target, Lightbulb, TrendingUp, Download } from "lucide-react";
import Footer from "@/components/Footer";
const Wave1 = () => {
  const sessions = [{
    number: 1,
    title: "Generative AI Foundations & Strategic Applications",
    duration: "3 Hours",
    topics: [
      "Comprehensive overview of Generative AI and exponential technologies landscape", 
      "Live demo of top AI tools for critical thinking, reasoning, and data analysis", 
      "Interactive showcase: AI-powered presentation tools and automated report generation", 
      "AI for Sales & Marketing: Customer segmentation, personalized campaigns, sales forecasting",
      "AI for Strategy: Market analysis, competitive intelligence, strategic planning",
      "AI for Data Sciences: Predictive analytics, consumer behavior analysis, ML deployment",
      "Business analytics using AI: Real-time insights and predictive modeling", 
      "Discussion on use cases of Generative AI across FMCG and other industries",
      "Hands-on session: Leadership will build basic AI workflows during the session"
    ],
    learningOutcomes: [
      "Master the fundamentals of Generative AI and its business applications", 
      "Gain hands-on experience with enterprise AI tools for executive decision-making", 
      "Understand AI applications across Sales & Marketing, Strategy, and Data Sciences", 
      "Develop foundational prompt engineering skills for effective AI communication",
      "Identify specific AI implementation opportunities across core business functions"
    ],
    deliverables: [
      "Generative AI Landscape Overview Guide", 
      "Executive AI Tools Toolkit with access credentials", 
      "AI Business Functions Implementation Matrix", 
      "Foundational Prompt Engineering Quick Reference",
      "Digital handout with session summaries and resources"
    ]
  }, {
    number: 2,
    title: "AI Agents, Personal Assistants & Future Implementation",
    duration: "3 Hours", 
    topics: [
      "Introduction to AI agents and AI personal assistants: Architecture and applications", 
      "Live demo: Building customized AI assistants for executive workflows", 
      "AI-based coding demonstration: Creating simple apps and websites using AI",
      "AI for Operations Excellence: Supply chain optimization, quality control, process automation",
      "AI for General Business: BI automation, decision support, workflow optimization",
      "Advanced prompt engineering: From intermediate to expert proficiency",
      "Discussion on the future of AI: Trends, opportunities, and strategic implications", 
      "AI ethics and governance: Responsible AI implementation frameworks", 
      "FMCG-specific implications: Industry transformation and competitive positioning", 
      "Advanced hands-on session: Building custom AI solutions during the workshop"
    ],
    learningOutcomes: [
      "Understand AI agents and personal assistants for executive productivity", 
      "Learn AI-assisted coding techniques for custom solution development",
      "Master advanced prompt engineering and AI communication strategies",
      "Understand AI applications for Operations Excellence and General Business functions",
      "Develop frameworks for AI ethics and governance implementation", 
      "Create strategic roadmaps for AI adoption in FMCG context"
    ],
    deliverables: [
      "AI Agents Implementation Guide for Executives", 
      "Custom AI Assistant Templates and Setup Instructions", 
      "Advanced Prompt Engineering Mastery Guide",
      "AI Ethics & Governance Framework for FMCG", 
      "Strategic AI Roadmap Template",
      "Digital handout with advanced resources and next steps"
    ]
  }];
  const overallOutcomes = ["Comprehensive understanding of Generative AI and exponential technologies", "Hands-on proficiency with top AI tools for critical thinking and data analysis", "Deep knowledge of AI applications across Sales & Marketing, Strategy, Data Sciences, and Operations", "Intermediate-level prompt engineering and AI communication skills", "Practical experience building AI workflows and custom solutions", "Strategic insights into AI agents and personal assistants for productivity", "Framework for AI ethics, governance, and responsible implementation", "FMCG-specific AI applications and competitive positioning strategies"];
  const overallDeliverables = ["Comprehensive Generative AI toolkit with premium access credentials", "AI Business Functions Implementation Matrix for all departments", "Digital handouts and resources for each session", "Custom AI assistant templates and implementation guides", "Prompt engineering reference materials and best practices", "AI ethics and governance framework for FMCG implementation", "Hands-on workshop artifacts: Built AI workflows and applications", "Strategic roadmap for organizational AI adoption and transformation"];
  return <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Crown className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-white">Wave 1: Executive Committee</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Comprehensive Generative AI and exponential technologies program featuring live demos, hands-on building sessions, 
              and strategic implementation guidance for executive leadership transformation
            </p>
          </div>
        </div>
      </section>

      {/* Program Details */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardContent className="p-6 text-center">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Participants</h3>
                <p className="text-muted-foreground">Executive Committee Members</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Duration</h3>
                <p className="text-muted-foreground">2 Sessions × 3 Hours Each</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Schedule</h3>
                <p className="text-muted-foreground">Spread Across 2 Weeks</p>
              </CardContent>
            </Card>
          </div>

          {/* Program Highlights */}
          <div className="mb-16">
            <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-center mb-6">Program Highlights</h3>
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <TrendingUp className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="font-semibold mb-2">Progressive Learning</h4>
                    <p className="text-sm text-muted-foreground">From beginner to intermediate level in prompt engineering and AI-based coding</p>
                  </div>
                  <div>
                    <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                      <Target className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="font-semibold mb-2">Hands-On Building</h4>
                    <p className="text-sm text-muted-foreground">Leadership will build customized apps and websites using AI during sessions</p>
                  </div>
                  <div>
                    <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                      <Lightbulb className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="font-semibold mb-2">Live Demo & Showcase</h4>
                    <p className="text-sm text-muted-foreground">Interactive demonstrations with immediate practical application</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>



          {/* Sessions Breakdown */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Detailed Session Breakdown</h2>
            <div className="space-y-12">
              {sessions.map(session => <Card key={session.number} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader className={`${session.number === 1 ? 'bg-gradient-to-r from-primary/20 to-secondary/20' : 'bg-gradient-to-r from-accent/20 to-orange/20'} border-b`}>
                    <CardTitle className="flex items-center text-2xl">
                      <div className={`w-12 h-12 ${session.number === 1 ? 'bg-primary' : 'bg-accent'} text-white rounded-full flex items-center justify-center mr-4 text-lg font-bold shadow-lg`}>
                        {session.number}
                      </div>
                      <div className="flex-1">
                        <div className="text-xl font-bold text-foreground">{session.title}</div>
                        <div className="text-sm text-muted-foreground mt-1">Duration: {session.duration}</div>
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-8">
                    <div className="grid lg:grid-cols-3 gap-8">
                      {/* Session Topics */}
                      <div className="lg:col-span-1">
                        <h4 className="font-bold text-foreground mb-4 flex items-center">
                          <Target className="h-5 w-5 text-primary mr-2" />
                          Session Content
                        </h4>
                        <div className="space-y-3">
                          {session.topics.map((topic, index) => <div key={index} className="flex items-start">
                              <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              <span className="text-sm text-muted-foreground leading-relaxed">{topic}</span>
                            </div>)}
                        </div>
                      </div>

                      {/* Learning Outcomes */}
                      <div className="lg:col-span-1">
                        <h4 className="font-bold text-foreground mb-4 flex items-center">
                          <Lightbulb className="h-5 w-5 text-secondary mr-2" />
                          Learning Outcomes
                        </h4>
                        <div className="space-y-3">
                          {session.learningOutcomes.map((outcome, index) => <div key={index} className="flex items-start">
                              <div className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              <span className="text-sm text-muted-foreground leading-relaxed">{outcome}</span>
                            </div>)}
                        </div>
                      </div>

                      {/* Deliverables */}
                      <div className="lg:col-span-1">
                        <h4 className="font-bold text-foreground mb-4 flex items-center">
                          <Download className="h-5 w-5 text-accent mr-2" />
                          Session Deliverables
                        </h4>
                        <div className="space-y-3">
                          {session.deliverables.map((deliverable, index) => <div key={index} className="flex items-start">
                              <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              <span className="text-sm text-muted-foreground leading-relaxed">{deliverable}</span>
                            </div>)}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>)}
            </div>
          </div>

          {/* Expected Outcomes */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Expected Outcomes</h2>
            <Card>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <Lightbulb className="h-6 w-6 text-primary mr-2" />
                      Key Learning Outcomes
                    </h3>
                    <ul className="space-y-3">
                      {overallOutcomes.map((outcome, index) => <li key={index} className="flex items-start">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-muted-foreground">{outcome}</span>
                        </li>)}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <Download className="h-6 w-6 text-primary mr-2" />
                      Deliverables
                    </h3>
                    <ul className="space-y-3">
                      {overallDeliverables.map((deliverable, index) => <li key={index} className="flex items-start">
                          <div className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-muted-foreground">{deliverable}</span>
                        </li>)}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <Card className="bg-gradient-hero text-white">
              
            </Card>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>;
};
export default Wave1;