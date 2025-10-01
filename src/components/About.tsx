import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Code, Shield, Lightbulb } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Academic Excellence",
      description: "2nd Year B.Tech CSE at JECRC University, Jaipur"
    },
    {
      icon: Code,
      title: "Self-Learning Mindset",
      description: "Actively mastering Python, DSA, and full-stack development"
    },
    {
      icon: Shield,
      title: "Cybersecurity Interest",
      description: "Exploring security fundamentals and ethical hacking"
    },
    {
      icon: Lightbulb,
      title: "Problem Solver",
      description: "Passionate about creating innovative digital solutions"
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
              A passionate learner on a journey to become a skilled developer
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
                <div className="w-80 h-80 mx-auto relative">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-portfolio-tech-blue to-portfolio-electric-purple p-1">
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
                    "Driven by curiosity, powered by code — I'm always building."
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
                  Hello! I'm <span className="gradient-text font-semibold">Tarun Pancholi</span>, 
                  a self-motivated and passionate Computer Science student currently in my 2nd year 
                  at JECRC University, Jaipur. My journey in technology is driven by an insatiable 
                  curiosity to understand how things work and a determination to build solutions 
                  that make a difference.
                </p>
                
                <p className="text-foreground/80 leading-relaxed">
                  I'm actively expanding my skill set in full-stack development, with a strong 
                  foundation in <span className="text-portfolio-neon">C, C++, HTML, and CSS</span>. 
                  Currently, I'm diving deep into <span className="text-portfolio-neon">Python 
                  and Data Structures & Algorithms</span>, while also exploring the fascinating 
                  world of cybersecurity.
                </p>

                <p className="text-foreground/80 leading-relaxed">
                  Though I'm early in my professional journey, I believe in learning by doing. 
                  That's why I offer services like portfolio development, frontend and backend 
                  design, and app development — each project is a stepping stone in my growth 
                  as a developer.
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