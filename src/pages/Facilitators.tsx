import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, GraduationCap, Building, Award, Users, Lightbulb } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Facilitators = () => {
  const facilitators = [
    {
      name: "Shabbir Haider",
      role: "Founder, Futurelab Studios",
      experience: "",
      image: "/images/Shabbir Haider.jpeg",
      background: "bg-gradient-primary",
      description: "",
      details: [
        "Extensive experience across business strategy and technology transformation",
        "Alumni of leading FMCG companies including PepsiCo, Mondelez, and Amul",
        "Engineer from Jadavpur University and MBA from IRMA",
        "Part of the first cohort at The Network School (Singapore-Johor SEZ)",
        "Members of Several Global Forums on Emerging Technologies"
      ],
      expertise: ["AI Strategy", "Business Transformation", "FMCG Industry", "Technology Innovation"],
      companies: ["Mondelez", "PepsiCo", "Wipro", "Amul"]
    },
    {
      name: "Kuntal Sharma",
      role: "Co-founder, Futurelab Studios",
      experience: "",
      image: "/images/Kuntal Sharma.png",
      background: "bg-gradient-secondary",
      description: "",
      details: [
        "Extensive experience in marketing and growth with leading brands",
        "Experience with Google, Paytm, Airtel & Amul",
        "Co-founder of Futurelab Studios and runs Everything Boho",
        "Modern bohemian lifestyle D2C brand reimagining home and style",
        "Alumna of Lady Shri Ram College with MBA from IRMA",
        "Cohort member at The Network School (Singapore-Johor SEZ)"
      ],
      expertise: ["Marketing Strategy", "Brand Development", "Growth Hacking", "D2C Business"],
      companies: ["Google", "Paytm", "Airtel", "Amul"]
    }
  ];

  const achievements = [
    {
      icon: Users,
      title: "Deep Industry Experience",
      description: "Expertise across technology, strategy, and marketing"
    },
    {
      icon: Building,
      title: "Top-Tier Companies",
      description: "Leading FMCG, Google, Amul, Paytm, Airtel, Mondelez"
    },
    {
      icon: Lightbulb,
      title: "Innovation Focus",
      description: "AI enablement and emerging technology expertise"
    },
    {
      icon: Award,
      title: "Innovation Leaders",
      description: "The Network School (Singapore-Johor SEZ) cohort members"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-primary/10">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-primary text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6 tracking-tight">
            Your Facilitators
          </h1>
          <p className="text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
            Industry veterans with deep expertise in AI enablement, business strategy, and organizational transformation.
          </p>
        </div>
      </section>

      {/* Facilitators Detail */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {facilitators.map((facilitator, index) => (
              <Card key={index} className="overflow-hidden shadow-2xl border-0 hover:shadow-3xl transition-all duration-300">
                <div className={`h-2 ${facilitator.background}`}></div>
                
                <div className="grid lg:grid-cols-3 gap-8 p-8">
                  {/* Profile Image and Basic Info */}
                  <div className="lg:col-span-1 text-center lg:text-left">
                    <div className="relative inline-block mb-6">
                      <div className="w-48 h-48 mx-auto lg:mx-0 shadow-xl rounded-full overflow-hidden border-4 border-white">
                        <img 
                          src={facilitator.image} 
                          alt={facilitator.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      {facilitator.experience && (
                        <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 lg:left-4 lg:transform-none">
                          <Badge className={`${facilitator.background} text-white border-0 px-4 py-2`}>
                            {facilitator.experience}
                          </Badge>
                        </div>
                      )}
                    </div>
                    
                    <h3 className="text-2xl font-bold text-foreground mb-2">{facilitator.name}</h3>
                    <p className="text-lg text-primary font-semibold mb-4">{facilitator.role}</p>
                    <p className="text-muted-foreground leading-relaxed">{facilitator.description}</p>
                  </div>

                  {/* Experience and Details */}
                  <div className="lg:col-span-2 space-y-6">
                    <div>
                      <h4 className="text-xl font-bold text-foreground mb-4 flex items-center">
                        <Lightbulb className="h-5 w-5 mr-2 text-primary" />
                        Professional Journey
                      </h4>
                      <ul className="space-y-3">
                        {facilitator.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="text-muted-foreground flex items-start">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="leading-relaxed">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-semibold text-foreground mb-3">Core Expertise</h5>
                        <div className="flex flex-wrap gap-2">
                          {facilitator.expertise.map((skill, skillIndex) => (
                            <Badge key={skillIndex} variant="outline" className="bg-accent/10">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h5 className="font-semibold text-foreground mb-3">Organizations</h5>
                        <div className="flex flex-wrap gap-2">
                          {facilitator.companies.map((company, companyIndex) => (
                            <Badge key={companyIndex} variant="outline" className="bg-secondary/10">
                              {company}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Futurelab Studios */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              About Futurelab Studios
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Leading the AI transformation journey for organizations across industries
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Card className="bg-gradient-coke text-white border-0 shadow-2xl">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Our Impact</h3>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">150+</div>
                      <div className="text-white/80">AI Enablement Workshops</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">50+</div>
                      <div className="text-white/80">Organizations Transformed</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">5000+</div>
                      <div className="text-white/80">Professionals Trained</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">95%</div>
                      <div className="text-white/80">Client Satisfaction</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">Organizational AI Enablement Specialists</h3>
              <p className="text-muted-foreground leading-relaxed">
                Futurelab Studios is a pioneering AI enablement and innovation company dedicated to helping organizations 
                adopt AI meaningfully and strategically. We specialize in democratizing AI knowledge across all organizational 
                levels, from C-suite executives to frontline employees.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-muted-foreground">
                    <strong className="text-foreground">Industry-First Approach:</strong> Pioneering practical AI implementation frameworks specifically designed for Indian enterprises
                  </span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-muted-foreground">
                    <strong className="text-foreground">Comprehensive Enablement:</strong> From executive strategy sessions to organization-wide capability building programs
                  </span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-muted-foreground">
                    <strong className="text-foreground">Proven Methodology:</strong> Data-driven approaches with measurable ROI and sustainable transformation outcomes
                  </span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-muted-foreground">
                    <strong className="text-foreground">Future-Ready Solutions:</strong> Cutting-edge AI tools integration with emphasis on responsible AI practices and ethical implementation
                  </span>
                </div>
              </div>

              <div className="pt-4">
                <Badge className="bg-primary text-white px-4 py-2 text-sm">
                  Trusted by Fortune 500 companies, startups, and government organizations
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </section>


      
      <Footer />
    </div>
  );
};

export default Facilitators;