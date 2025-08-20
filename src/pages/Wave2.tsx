import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Target, Brain, BarChart, Lightbulb, Wand2, Download } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
const Wave2 = () => {
  const sessions = [{
    id: 1,
    title: "Generative-AI Foundations & Workflow Acceleration",
    duration: "2 Hours",
    icon: Brain,
    color: "bg-primary",
    topics: ["Comprehensive overview of the Generative AI landscape and business applications", "Live demonstration of top AI tools for knowledge workers (ChatGPT, Claude, Gemini)", "Prompt engineering mastery: Best practices for effective AI communication", "Interactive brainstorming: Identifying practical AI use cases for PepsiCo operations"],
    learningOutcomes: ["Master the fundamentals of generative AI for business applications", "Gain proficiency in prompt engineering techniques", "Identify organization-specific AI opportunities", "Develop AI tool selection criteria"],
    deliverables: ["AI Tools Comparison Matrix", "Prompt Engineering Toolkit", "PepsiCo AI Use Cases Library", "Team Brainstorming Results Summary"]
  }, {
    id: 2,
    title: "Data-Driven Decisions, Research and Critical Thinking with AI",
    duration: "2 Hours",
    icon: BarChart,
    color: "bg-accent",
    topics: ["AI for analytics: Live demo of automated data analysis tools (Tableau AI, Power BI Copilot)", "AI for critical thinking: Live demo of mindmapping and ideation tools (Miro AI, Notion AI)", "AI for research acceleration: Workflow demos for market research and competitive analysis", "Hands-on team activity: Working on a real PepsiCo use case"],
    learningOutcomes: ["Master AI-powered data analysis and visualization", "Develop critical thinking frameworks using AI assistance", "Create efficient research workflows", "Apply AI tools to real business scenarios"],
    deliverables: ["Data Analysis AI Workflow Guide", "Critical Thinking AI Framework", "Research Acceleration Toolkit", "Use Case Implementation Plan"]
  }, {
    id: 3,
    title: "AI for Personalized Apps and Creative Outputs",
    duration: "2 Hours",
    icon: Wand2,
    color: "bg-secondary",
    topics: ["No-code AI app building: Live demo of tools like AppSheet, Bubble, and Zapier AI", "Creative AI mastery: Tools for infographics, images, audio, and video content", "Brand-compliant creative workflows using AI tools", "Team workshop: Building a simple AI app for PepsiCo use case"],
    learningOutcomes: ["Build functional AI-powered applications without coding", "Master creative AI tools for marketing and communications", "Develop brand-compliant creative workflows", "Create personalized solutions for specific business needs"],
    deliverables: ["No-Code AI App Builder Guide", "Creative AI Toolkit for Brand Marketing", "AI App Prototype for PepsiCo", "Creative Workflow Templates"]
  }, {
    id: 4,
    title: "AI for Personalized Automation and Continued Self-Education",
    duration: "2 Hours",
    icon: Lightbulb,
    color: "bg-orange",
    topics: ["Custom GPT creation: Building AI personal assistants for specific roles", "AI as learning companion: Tutoring systems and knowledge management", "Automation workflows: Connecting AI tools with existing business processes", "Future of work: Responsible AI use, safety practices, and organizational transformation", "Comprehensive knowledge consolidation and next steps"],
    learningOutcomes: ["Create custom AI assistants for specific business functions", "Develop continuous learning systems using AI", "Build automated workflows for routine tasks", "Understand AI ethics and responsible implementation"],
    deliverables: ["Custom GPT Setup Guide", "AI Learning System Framework", "Automation Workflow Templates", "Consolidated Knowledge Handbook", "90-Day Implementation Roadmap"]
  }];
  const features = [{
    icon: Users,
    title: "Pre-Workshop Survey",
    description: "A comprehensive form filled by all participants one week ahead to capture AI awareness and specific learning needs"
  }, {
    icon: Target,
    title: "Customized Sessions",
    description: "Sessions customized based on pre-workshop survey responses and organizational requirements"
  }, {
    icon: Brain,
    title: "Strategic Consultation",
    description: "30-minute brainstorming session with organization POC to build customized use-cases"
  }, {
    icon: Lightbulb,
    title: "Comprehensive Resources",
    description: "Knowledge Handout PDF & custom prompts library for the entire team"
  }];
  return <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-accent/10">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-pepsi text-white py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-white/10 rounded-full blur-xl"></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-secondary/20 rounded-full blur-lg"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="bg-white/20 text-white border-white/30 mb-6 text-lg px-6 py-2">
            Wave 2: Senior Management
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
            Operational AI{" "}
            <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Excellence
            </span>
          </h1>
          <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed max-w-4xl mx-auto">
            A comprehensive 4-session program designed for Senior Management Team, 
            focusing on practical AI applications for enhanced productivity and innovation.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <Users className="h-12 w-12 text-white mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">Senior Management</h3>
                <p className="text-white/80">Targeted for decision makers</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <Clock className="h-12 w-12 text-white mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">4 Sessions × 2 Hours</h3>
                <p className="text-white/80">Comprehensive training program</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <Target className="h-12 w-12 text-white mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">Practical Focus</h3>
                <p className="text-white/80">Hands-on tools & applications</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Sessions Detail */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Detailed Session Breakdown
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Each session combines theoretical understanding with practical demonstrations 
              and hands-on team activities for immediate application.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {sessions.map(session => {
            const IconComponent = session.icon;
            return <Card key={session.id} className="relative overflow-hidden group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-l-4 border-primary">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/5 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
                  
                  <CardHeader className="relative">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-16 h-16 ${session.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg`}>
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <Badge variant="outline" className="bg-muted">
                        Session {session.id}
                      </Badge>
                    </div>
                    
                    <CardTitle className="text-xl font-bold text-foreground leading-tight">
                      {session.title}
                    </CardTitle>
                    
                    <div className="flex items-center text-muted-foreground mt-2">
                      <Clock className="h-4 w-4 mr-2" />
                      {session.duration}
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Session Topics:</h4>
                      <ul className="space-y-3">
                        {session.topics.map((topic, index) => <li key={index} className="text-muted-foreground flex items-start">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-sm leading-relaxed">{topic}</span>
                          </li>)}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Learning Outcomes:</h4>
                      <ul className="space-y-2">
                        {session.learningOutcomes.map((outcome, index) => <li key={index} className="flex items-start">
                            <div className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-sm text-muted-foreground">{outcome}</span>
                          </li>)}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Deliverables:</h4>
                      <ul className="space-y-2">
                        {session.deliverables.map((deliverable, index) => <li key={index} className="flex items-start">
                            <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-sm text-muted-foreground">{deliverable}</span>
                          </li>)}
                      </ul>
                    </div>
                  </CardContent>
                </Card>;
          })}
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Program Enhancements
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Additional features to ensure maximum learning impact and organizational alignment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return <Card key={index} className="text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-secondary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>;
          })}
          </div>
        </div>
      </section>

      {/* Expected Outcomes */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Expected Outcomes</h2>
          <Card>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-6 flex items-center">
                    <Lightbulb className="h-6 w-6 text-primary mr-2" />
                    Key Learning Outcomes
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-muted-foreground">Master comprehensive GenAI fundamentals and advanced prompt engineering techniques</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-muted-foreground">Develop expertise in AI-powered analytics and data-driven decision making</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-muted-foreground">Create personalized AI applications and automation workflows without coding</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-muted-foreground">Build custom AI assistants and implement continuous learning systems</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-muted-foreground">Master creative AI tools for marketing, branding, and visual content creation</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-muted-foreground">Develop organizational AI adoption strategies and change management frameworks</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-6 flex items-center">
                    <Download className="h-6 w-6 text-primary mr-2" />
                    Program Deliverables
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-muted-foreground">Comprehensive AI tools comparison matrix and implementation guides</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-muted-foreground">Advanced prompt engineering toolkit and best practices library</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-muted-foreground">Custom AI app prototypes and no-code development templates</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-muted-foreground">Personal AI assistant setup guides and automation workflow templates</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-muted-foreground">Creative AI brand toolkit and marketing automation resources</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-muted-foreground">90-day implementation roadmap with consolidated knowledge handbook</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      
      <Footer />
    </div>;
};
export default Wave2;