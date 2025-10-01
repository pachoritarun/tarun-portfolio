import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Globe, 
  Palette, 
  Server, 
  Smartphone, 
  ArrowRight,
  Code2,
  Database,
  Shield
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Portfolio Website Development",
      description: "Create stunning, responsive portfolio websites that showcase your work and skills with modern design principles and optimal performance.",
      features: ["Responsive Design", "SEO Optimized", "Modern UI/UX", "Fast Loading"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Palette,
      title: "Frontend Design",
      description: "Design and develop beautiful, interactive user interfaces using modern technologies like React, HTML5, CSS3, and JavaScript.",
      features: ["React.js", "Responsive Design", "Interactive UI", "Cross-browser"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Server,
      title: "Backend Development",
      description: "Build robust server-side solutions with secure APIs, database integration, and scalable architecture for your web applications.",
      features: ["API Development", "Database Design", "Authentication", "Cloud Integration"],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Smartphone,
      title: "App Development",
      description: "Develop cross-platform mobile applications with native performance and modern features to reach your audience everywhere.",
      features: ["Cross-platform", "Native Performance", "Modern UI", "App Store Ready"],
      color: "from-orange-500 to-red-500"
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-secondary/50">
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
              My <span className="gradient-text">Services</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              Professional development services to bring your ideas to life
            </motion.p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="h-full border-portfolio-neon/10 hover:border-portfolio-neon/30 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-portfolio-neon/10">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${service.color} shadow-lg`}>
                        <service.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-xl mb-1">{service.title}</CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="space-y-3">
                      <h4 className="font-semibold text-sm">Key Features:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-portfolio-neon" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Button 
                      onClick={scrollToContact}
                      className="w-full bg-gradient-to-r from-portfolio-tech-blue to-portfolio-electric-purple hover:opacity-90 transition-opacity group-hover:shadow-lg"
                    >
                      Get In Touch
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Process Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="glass-effect border-portfolio-neon/20">
              <CardHeader>
                <CardTitle className="text-center text-2xl font-heading">
                  <span className="gradient-text">My Development Process</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-4 gap-6">
                  {[
                    { step: "01", title: "Consultation", desc: "Understanding your requirements and goals" },
                    { step: "02", title: "Planning", desc: "Creating detailed project roadmap and timeline" },
                    { step: "03", title: "Development", desc: "Building your solution with regular updates" },
                    { step: "04", title: "Delivery", desc: "Testing, deployment, and ongoing support" }
                  ].map((process, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * index }}
                      viewport={{ once: true }}
                      className="text-center space-y-3"
                    >
                      <div className="w-12 h-12 mx-auto rounded-full bg-gradient-to-r from-portfolio-tech-blue to-portfolio-electric-purple flex items-center justify-center text-white font-bold">
                        {process.step}
                      </div>
                      <h4 className="font-semibold">{process.title}</h4>
                      <p className="text-sm text-muted-foreground">{process.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <Card className="max-w-2xl mx-auto border-portfolio-neon/20 hover:border-portfolio-neon/40 transition-colors">
              <CardContent className="p-8">
                <h3 className="text-2xl font-heading font-bold mb-4 gradient-text">
                  Ready to Start Your Project?
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Let's work together to bring your ideas to life. I'm committed to delivering 
                  high-quality solutions that meet your needs and exceed expectations.
                </p>
                <Button 
                  size="lg"
                  onClick={scrollToContact}
                  className="bg-gradient-to-r from-portfolio-tech-blue to-portfolio-electric-purple hover:opacity-90 transition-opacity neon-glow"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;