import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, ExternalLink, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-background border-t border-portfolio-neon/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-portfolio-neon">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-5 h-5 text-portfolio-tech-blue" />
                <span>pachoritarun05@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-5 h-5 text-portfolio-tech-blue" />
                <span>+91 XXXXX XXXXX</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-portfolio-tech-blue" />
                <span>Jaipur, Rajasthan, India</span>
              </div>
            </div>
          </motion.div>

          {/* College Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-portfolio-neon">Education</h3>
            <div className="space-y-3">
              <div>
                <h4 className="font-semibold text-foreground">JECRC University</h4>
                <p className="text-muted-foreground">B.Tech Computer Science Engineering</p>
                <p className="text-sm text-muted-foreground">2nd Year Student</p>
                <p className="text-sm text-muted-foreground">Jaipur, Rajasthan</p>
              </div>
              <a
                href="https://www.jecrcuniversity.edu.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-portfolio-tech-blue hover:text-portfolio-neon transition-colors"
              >
                Visit University Website
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-portfolio-neon">Quick Links</h3>
            <div className="space-y-2">
              <a href="#home" className="block text-muted-foreground hover:text-portfolio-neon transition-colors">
                Home
              </a>
              <a href="#about" className="block text-muted-foreground hover:text-portfolio-neon transition-colors">
                About
              </a>
              <a href="#skills" className="block text-muted-foreground hover:text-portfolio-neon transition-colors">
                Skills
              </a>
              <a href="#services" className="block text-muted-foreground hover:text-portfolio-neon transition-colors">
                Services
              </a>
              <a href="#projects" className="block text-muted-foreground hover:text-portfolio-neon transition-colors">
                Projects
              </a>
              <a href="#contact" className="block text-muted-foreground hover:text-portfolio-neon transition-colors">
                Contact
              </a>
            </div>
          </motion.div>
        </div>

        {/* Copyright Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="border-t border-portfolio-neon/20 mt-8 pt-8 text-center"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground flex items-center gap-2">
              © 2024 Tarun Pancholi. All rights reserved.
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
            </p>
            <p className="text-sm text-muted-foreground">
              Designed & Developed with passion by Tarun Pancholi
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;