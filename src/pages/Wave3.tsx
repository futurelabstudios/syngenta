import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Globe, Users, Settings, Lightbulb, TrendingUp, Shield, RefreshCw, MessageSquare } from "lucide-react";
import Footer from "@/components/Footer";
const Wave3 = () => {
  const focusAreas = [{
    icon: Users,
    title: "Role-Specific Training",
    description: "Customized AI training modules tailored to different departments and job functions"
  }, {
    icon: Lightbulb,
    title: "Practical Implementation",
    description: "Hands-on workshops focusing on immediate application of AI tools in daily work"
  }, {
    icon: Shield,
    title: "Change Management",
    description: "Support for organizational transformation and adoption of new AI-driven processes"
  }, {
    icon: RefreshCw,
    title: "Continuous Learning",
    description: "Framework for ongoing AI education and skill development across the organization"
  }];
  const benefits = ["Democratized AI knowledge across all organizational levels", "Increased productivity through AI-enhanced workflows", "Improved innovation and creative problem-solving capabilities", "Enhanced data-driven decision making at all levels", "Stronger competitive positioning in the FMCG market", "Future-ready workforce prepared for technological evolution"];
  const planningSections = [{
    title: "Comprehensive Needs Assessment",
    items: ["Department-specific AI readiness evaluation", "Current technology infrastructure audit", "Role-based skill gap analysis", "Priority use case identification and mapping", "Change management readiness assessment"]
  }, {
    title: "Customized Program Architecture",
    items: ["Multi-tiered curriculum development", "Role-specific learning pathways", "Blended learning approach design", "Integration with existing L&D systems", "Performance measurement framework"]
  }, {
    title: "Strategic Implementation Roadmap",
    items: ["Phased rollout with pilot groups", "AI Champion network establishment", "Continuous support system design", "Success metrics and KPI framework", "Long-term sustainability planning"]
  }];
  const programComponents = [{
    title: "Foundation Level",
    duration: "4 hours",
    audience: "All employees",
    topics: ["AI literacy and awareness building", "Basic tool usage and safety", "Role-specific AI applications", "Hands-on workshops"]
  }, {
    title: "Intermediate Level",
    duration: "8 hours",
    audience: "Team leads and specialists",
    topics: ["Advanced AI tool mastery", "Workflow optimization", "Team collaboration with AI", "Implementation planning"]
  }, {
    title: "Advanced Level",
    duration: "12 hours",
    audience: "Power users and champions",
    topics: ["Custom AI solution development", "Change management leadership", "Training delivery capabilities", "Innovation project leadership"]
  }];
  return <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-pepsi text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Globe className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-white">Wave 3: Organization-Wide</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Democratizing AI knowledge across your entire organization for comprehensive transformation
            </p>
          </div>
        </div>
      </section>

      {/* Collaborative Planning */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Collaborative Program Design
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Open-ended program designed in collaboration with HR & Capability team to democratize AI knowledge across your entire organization.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {planningSections.map((section, index) => <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">{section.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {section.items.map((item, itemIndex) => <li key={itemIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-muted-foreground text-sm">{item}</span>
                      </li>)}
                  </ul>
                </CardContent>
              </Card>)}
          </div>

          {/* Program Components */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Multi-Tiered Program Structure</h2>
            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              {programComponents.map((component, index) => <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <CardTitle className="text-xl text-primary">{component.title}</CardTitle>
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>{component.duration}</span>
                      <span>{component.audience}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {component.topics.map((topic, topicIndex) => <li key={topicIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-muted-foreground text-sm">{topic}</span>
                        </li>)}
                    </ul>
                  </CardContent>
                </Card>)}
            </div>
          </div>

          {/* Focus Areas */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Core Implementation Areas</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {focusAreas.map((area, index) => {
              const IconComponent = area.icon;
              return <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-6">
                      <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold mb-3">{area.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{area.description}</p>
                    </CardContent>
                  </Card>;
            })}
            </div>
          </div>

          {/* Expected Benefits */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Expected Organizational Benefits</h2>
            <Card>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <TrendingUp className="h-12 w-12 text-primary mb-6" />
                    <h3 className="text-xl font-semibold mb-6">Transformation Outcomes</h3>
                    <ul className="space-y-4">
                      {benefits.map((benefit, index) => <li key={index} className="flex items-start">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-muted-foreground">{benefit}</span>
                        </li>)}
                    </ul>
                  </div>
                  <div>
                    <Settings className="h-12 w-12 text-primary mb-6" />
                    <h3 className="text-xl font-semibold mb-6">Implementation Support</h3>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <MessageSquare className="h-5 w-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-muted-foreground">Regular consultation with HR & Capability teams</span>
                      </li>
                      <li className="flex items-start">
                        <MessageSquare className="h-5 w-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-muted-foreground">Customized training materials and resources</span>
                      </li>
                      <li className="flex items-start">
                        <MessageSquare className="h-5 w-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-muted-foreground">Progress tracking and success measurement</span>
                      </li>
                      <li className="flex items-start">
                        <MessageSquare className="h-5 w-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-muted-foreground">Ongoing support and follow-up sessions</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Consultation CTA */}
          <div className="text-center">
            <Card className="bg-gradient-pepsi text-white">
              
            </Card>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>;
};
export default Wave3;