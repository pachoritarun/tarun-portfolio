import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react';


const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 gradient-bg opacity-5"></div>
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-portfolio-neon rounded-full opacity-30"
            animate={{
              y: [0, -150, 0],
              x: [0, Math.random() * 150 - 75, 0],
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
      
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`shape-${i}`}
            className="absolute"
            animate={{
              y: [0, -50, 0],
              x: [0, 30, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 4,
              ease: "easeInOut",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            <div className={`w-${2 + Math.floor(Math.random() * 4)} h-${2 + Math.floor(Math.random() * 4)} ${
              i % 3 === 0 ? 'bg-portfolio-tech-blue/10 rounded-full' :
              i % 3 === 1 ? 'bg-portfolio-electric-purple/10 rotate-45' :
              'bg-portfolio-neon/10 rounded-sm'
            }`} />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Enhanced Profile Image */}
          <motion.div
            initial={{ scale: 0, rotateY: 180 }}
            animate={{ scale: 1, rotateY: 0 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="relative w-48 h-48 mx-auto mb-8"
          >
            <motion.div 
              className="absolute inset-0 rounded-full bg-gradient-to-r from-portfolio-tech-blue to-portfolio-electric-purple p-1"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="/lovable-uploads/photo.png"
                alt="Tarun Pancholi"
                className="w-full h-full rounded-full object-cover"
              />
            </motion.div>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border-2 border-dashed border-portfolio-neon opacity-50"
            />
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5] 
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute inset-0 rounded-full bg-portfolio-neon/20 blur-md"
            />
          </motion.div>

          {/* Enhanced Name and Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-5xl md:text-7xl font-heading font-bold mb-4"
          >
            <motion.span 
              className="gradient-text"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              Tarun Pancholi
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-xl md:text-2xl text-muted-foreground mb-6"
          >
            Aspiring Full Stack Developer & CSE Student
          </motion.p>

          {/* Taglines */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="space-y-2 mb-8"
          >
            <p className="text-lg text-foreground/80">
              "Building skills. Solving problems. Creating impactful digital solutions."
            </p>
            <p className="text-base text-muted-foreground italic">
              "Driven by curiosity, powered by code — I'm always building."
            </p>
          </motion.div>

          {/* Enhanced CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                onClick={() => scrollToSection('projects')}
                className="bg-gradient-to-r from-portfolio-tech-blue to-portfolio-electric-purple hover:opacity-90 transition-all duration-300 neon-glow shadow-lg"
              >
                View Portfolio
                <motion.div
                  animate={{ y: [0, 3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowDown className="ml-2 h-4 w-4" />
                </motion.div>
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection('contact')}
                className="border-portfolio-neon text-portfolio-neon hover:bg-portfolio-neon hover:text-background transition-all duration-300 shadow-md"
              >
                Get In Touch
              </Button>
            </motion.div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="flex justify-center space-x-6"
          >
            <Button
              variant="ghost"
              size="icon"
              onClick={() => window.open('https://github.com/pachoritarun', '_blank')}
              className="hover:text-portfolio-neon transition-colors"
            >
              <Github className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => window.open('https://linkedin.com/in/tarun-pancholi-0433b9308', '_blank')}
              className="hover:text-portfolio-neon transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => window.open('mailto:pachoritarun05@gmail.com', '_blank')}
              className="hover:text-portfolio-neon transition-colors"
            >
              <Mail className="h-5 w-5" />
            </Button>
          </motion.div>
          
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="cursor-pointer"
            onClick={() => scrollToSection('about')}
          >
            <ArrowDown className="h-6 w-6 text-muted-foreground" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;