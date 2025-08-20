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
      role: "Founder, FutureLab Studios",
      experience: "13+ Years",
      image: "/images/Shabbir Haider.jpeg",
      background: "bg-gradient-primary",
      description: "Shabbir Haider is the founder of FutureLab Studios, an AI enablement and innovation company helping organizations adopt AI meaningfully.",
      details: [
        "13+ years of experience across business strategy and technology transformation",
        "Alumni of Amul, PepsiCo, and Mondelez",
        "Engineer from Jadavpur University and MBA from IRMA",
        "Part of the first cohort at The Network School (Singapore-Johor SEZ)",
        "Startup community advancing emerging technologies"
      ],
      expertise: ["AI Strategy", "Business Transformation", "FMCG Industry", "Technology Innovation"],
      companies: ["PepsiCo", "Amul", "Mondelez", "Wipro"]
    },
    {
      name: "Kuntal Sharma",
      role: "Co-founder, FutureLab Studios",
      experience: "13+ Years",
      image: "/images/Kuntal Sharma.png",
      background: "bg-gradient-secondary",
      description: "Kuntal Sharma is a marketing and growth leader with extensive experience across leading brands and the co-founder of FutureLab Studios.",
      details: [
        "13+ years of experience in marketing and growth with leading brands",
        "Experience with Google, Paytm, Airtel & Amul",
        "Co-founder of FutureLab Studios and runs Everything Boho",
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
      title: "Combined 26+ Years",
      description: "Experience across technology, strategy, and marketing"
    },
    {
      icon: Building,
      title: "Top-Tier Companies",
      description: "PepsiCo, Google, Amul, Paytm, Airtel, Mondelez"
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
      <section className="relative bg-gradient-vibrant text-white py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-white/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-secondary/20 rounded-full blur-lg"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
            Meet Your{" "}
            <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Facilitators
            </span>
          </h1>
          <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed max-w-4xl mx-auto">
            Industry veterans with deep expertise in AI, business strategy, and organizational transformation.
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
                      <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 lg:left-4 lg:transform-none">
                        <Badge className={`${facilitator.background} text-white border-0 px-4 py-2`}>
                          {facilitator.experience}
                        </Badge>
                      </div>
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
              <Card className="bg-gradient-pepsi text-white border-0 shadow-2xl">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Our Impact</h3>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">100+</div>
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