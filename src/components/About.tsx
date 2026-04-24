import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Code, Smartphone, Lightbulb } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "CS Engineering Student",
      description: "2nd Year B.Tech CSE at JECRC University · CGPA 7.73 · Winner IdeaSpark 2.0"
    },
    {
      icon: Smartphone,
      title: "Startup Founder",
      description: "Built JU Help — production Android app, 200+ users in 15 days, zero paid marketing"
    },
    {
      icon: Code,
      title: "Full-Stack & Android Dev",
      description: "React 18, TypeScript, Kotlin, Jetpack Compose, Supabase, Gemini AI"
    },
    {
      icon: Lightbulb,
      title: "AI Builder",
      description: "12 AI features shipped · Agentic AI · RAG · Multi-LLM systems"
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-heading font-bold mb-4"
            >
              About <span className="gradient-text">Me</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              2nd-year CS student, startup founder, and builder of real products
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Profile Image & Quote */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="relative">
                <div className="w-80 h-80 mx-auto relative"
                  onMouseMove={(e) => {
                    const el = e.currentTarget;
                    const { left, top, width, height } = el.getBoundingClientRect();
                    const x = (e.clientX - left) / width - 0.5;
                    const y = (e.clientY - top) / height - 0.5;
                    el.style.transform = `perspective(600px) rotateY(${x * 12}deg) rotateX(${-y * 12}deg)`;
                    el.style.transition = 'transform 0.1s ease';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'perspective(600px) rotateY(0deg) rotateX(0deg)';
                    e.currentTarget.style.transition = 'transform 0.6s cubic-bezier(0.23,1,0.32,1)';
                  }}
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-portfolio-tech-blue to-portfolio-electric-purple p-1 shadow-[0_20px_60px_-10px_rgba(0,0,0,0.4)]">
                    <img
                      src="/lovable-uploads/photo.png"
                      alt="Tarun Pancholi"
                      className="w-full h-full rounded-2xl object-cover"
                    />
                  </div>
                </div>
              </div>
              
              <Card className="glass-effect border-portfolio-neon/20">
                <CardContent className="p-6">
                  <blockquote className="text-lg italic text-center">
                    "Ship fast, learn faster — build things that actually matter."
                  </blockquote>
                  <p className="text-center text-sm text-muted-foreground mt-4">
                    — My Development Philosophy
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* About Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="prose prose-lg dark:prose-invert">
                <p className="text-foreground/80 leading-relaxed">
                  Hey! I'm <span className="gradient-text font-semibold">Tarun Pancholi</span>, 
                  a 2nd-year CS Engineering student at JECRC University, Jaipur — and the founder 
                  of <span className="text-portfolio-neon font-semibold">JU Help</span>, a production 
                  Android app I built and shipped in 60 days that hit 200+ active users within 15 days 
                  of launch with zero paid marketing.
                </p>
                
                <p className="text-foreground/80 leading-relaxed">
                  I build across the full stack — <span className="text-portfolio-neon">Android (Kotlin · Jetpack Compose)</span>, 
                  <span className="text-portfolio-neon"> React 18 · TypeScript</span> for web, and 
                  <span className="text-portfolio-neon"> Supabase · PostgreSQL</span> on the backend. 
                  I've shipped 12 AI-powered features using Google Gemini, contributed to a multi-agent 
                  AI system (MACRO), and co-built Cliniq — 1st Runner-Up at the National Healthcare Hackathon 2026.
                </p>

                <p className="text-foreground/80 leading-relaxed">
                  I believe in learning by shipping. Every project I take on is production-grade, 
                  real-world, and built to solve actual problems — from 40,000+ college students 
                  across India to AI-powered medical diagnosis.
                </p>
              </div>

              {/* Highlights Grid */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 * index }}
                    viewport={{ once: true }}
                  >
                    <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-portfolio-neon/10 hover:border-portfolio-neon/30">
                      <CardContent className="p-4 text-center">
                        <highlight.icon className="h-8 w-8 mx-auto mb-3 text-portfolio-neon" />
                        <h4 className="font-semibold mb-2 text-sm">{highlight.title}</h4>
                        <p className="text-xs text-muted-foreground">{highlight.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;