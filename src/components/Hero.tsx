import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail, Smartphone, Globe, Zap } from 'lucide-react';
import { downloadResume } from './ResumeGenerator';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [mounted, setMounted] = useState(false);

  // Smooth spring for parallax
  const springX = useSpring(mouseX, { stiffness: 60, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 60, damping: 20 });

  // Parallax layers
  const bgX = useTransform(springX, [-1, 1], [-18, 18]);
  const bgY = useTransform(springY, [-1, 1], [-12, 12]);
  const midX = useTransform(springX, [-1, 1], [-8, 8]);
  const midY = useTransform(springY, [-1, 1], [-6, 6]);
  const fgX = useTransform(springX, [-1, 1], [-4, 4]);
  const fgY = useTransform(springY, [-1, 1], [-3, 3]);

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      mouseX.set((e.clientX / innerWidth - 0.5) * 2);
      mouseY.set((e.clientY / innerHeight - 0.5) * 2);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const stats = [
    { icon: Smartphone, label: '200+ Users', sub: 'JU Help App' },
    { icon: Zap, label: '12 AI Features', sub: 'Shipped' },
    { icon: Globe, label: '3 Products', sub: 'In Production' },
  ];

  return (
    <section
      ref={containerRef}
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{ perspective: '1200px' }}
    >
      {/* ── Layer 1: Space star field (CSS — 3 depth layers) ── */}
      <div className="stars-layer stars-sm" style={{ transform: `translate(${mounted ? '' : '0px'})` }} />
      <div className="stars-layer stars-md" />
      <div className="stars-layer stars-lg" />

      {/* ── Layer 2: Parallax ambient glow (mid) ── */}
      <motion.div style={{ x: midX, y: midY }} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-[hsl(var(--tech-blue)/0.06)] blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-[hsl(var(--electric-purple)/0.06)] blur-[100px]" />
      </motion.div>

      {/* ── Layer 3: Parallax dot grid overlay ── */}
      <motion.div style={{ x: bgX, y: bgY }} className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle, hsl(var(--star-color) / 0.08) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
        {/* Scan line */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <motion.div
            animate={{ y: ['-2px', '100vh'] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'linear', repeatDelay: 3 }}
            className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-[hsl(var(--neon-accent)/0.8)] to-transparent"
          />
        </div>
      </motion.div>

      {/* ── Layer 4: Floating stat chips (foreground parallax) ── */}
      <motion.div style={{ x: fgX, y: fgY }} className="absolute inset-0 pointer-events-none hidden lg:block">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: i === 0 ? '6%' : i === 1 ? '78%' : '82%',
              top: i === 0 ? '30%' : i === 1 ? '25%' : '65%',
            }}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4 + i * 1.2, repeat: Infinity, ease: 'easeInOut', delay: i * 0.8 }}
          >
            <div className="flex items-center gap-2 px-3 py-2 rounded-xl border border-[hsl(var(--border)/0.5)] bg-[hsl(var(--card)/0.5)] backdrop-blur-md shadow-xl">
              <div className="w-7 h-7 rounded-lg bg-[hsl(var(--neon-accent)/0.15)] flex items-center justify-center">
                <stat.icon className="w-3.5 h-3.5 text-[hsl(var(--neon-accent))]" />
              </div>
              <div>
                <p className="text-xs font-semibold text-foreground leading-none">{stat.label}</p>
                <p className="text-[10px] text-muted-foreground mt-0.5">{stat.sub}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* ── Main content ── */}
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >

          {/* Photo with 3D orbiting rings */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateX: 20 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0 }}
            transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1] }}
            className="relative w-44 h-44 mx-auto mb-10"
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* Pulse rings */}
            {[1, 2].map(i => (
              <motion.div
                key={i}
                className="absolute inset-0 rounded-full border border-primary/25"
                animate={{ scale: [1, 1.5 + i * 0.2], opacity: [0.5, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.8, ease: 'easeOut' }}
              />
            ))}

            {/* Outer orbit ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
              className="absolute -inset-5 rounded-full border border-dashed border-primary/20"
            />

            {/* Orbiting dot */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
              className="absolute -inset-5 rounded-full"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_10px_hsl(var(--primary)/0.7)]" />
            </motion.div>

            {/* Inner counter-spin ring */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute -inset-2 rounded-full border border-primary/15"
            />

            {/* Photo */}
            <div className="absolute inset-0 rounded-full p-[2px] bg-gradient-to-br from-primary via-[hsl(var(--electric-purple))] to-primary">
              <img
                src="/lovable-uploads/photo.png"
                alt="Tarun Pancholi"
                className="w-full h-full rounded-full object-cover"
              />
            </div>

            {/* Online indicator */}
            <div className="absolute bottom-2 right-2 w-4 h-4 rounded-full bg-green-500 border-2 border-background" />
          </motion.div>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[hsl(var(--border)/0.5)] bg-[hsl(var(--card)/0.4)] backdrop-blur-sm mb-5 text-xs text-muted-foreground"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            Open to opportunities · Jaipur, India
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
            className="text-5xl md:text-7xl font-heading font-bold mb-3 tracking-tight"
          >
            <span className="shimmer-text">Tarun Pancholi</span>
          </motion.h1>

          {/* Role */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground mb-2 font-light tracking-wide"
          >
            Startup Founder · Android & Full-Stack Developer · AI Builder
          </motion.p>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.6 }}
            className="text-sm text-muted-foreground/60 mb-10 italic"
          >
            "Ship fast, learn faster — build things that actually matter."
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-10"
          >
            <motion.div whileHover={{ y: -3, scale: 1.03 }} whileTap={{ scale: 0.97 }} transition={{ type: 'spring', stiffness: 400 }}>
              <Button
                size="lg"
                onClick={() => scrollToSection('projects')}
                className="relative overflow-hidden bg-[hsl(var(--primary))] hover:bg-[hsl(var(--primary)/0.9)] border-0 text-[hsl(var(--primary-foreground))] px-8 shadow-[0_8px_32px_-4px_hsl(var(--neon-accent)/0.35)] hover:shadow-[0_12px_40px_-4px_hsl(var(--neon-accent)/0.5)] transition-shadow duration-300"
              >
                <span className="relative z-10 flex items-center gap-2">
                  View My Work
                  <ArrowDown className="h-4 w-4" />
                </span>
              </Button>
            </motion.div>

            <motion.div whileHover={{ y: -3, scale: 1.03 }} whileTap={{ scale: 0.97 }} transition={{ type: 'spring', stiffness: 400 }}>
              <Button
                variant="outline"
                size="lg"
                onClick={downloadResume}
                className="border-[hsl(var(--border))] bg-[hsl(var(--card)/0.5)] backdrop-blur-sm text-foreground hover:bg-[hsl(var(--secondary))] px-8 transition-all duration-300"
              >
                Download Resume
              </Button>
            </motion.div>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="flex justify-center gap-3"
          >
            {[
              { icon: Github, href: 'https://github.com/pachoritarun', label: 'GitHub' },
              { icon: Linkedin, href: 'https://linkedin.com/in/tarun-pancholi-0433b9308', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:pachoritarun05@gmail.com', label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -4, scale: 1.1 }}
                whileTap={{ scale: 0.92 }}
                transition={{ type: 'spring', stiffness: 400 }}
                className="w-10 h-10 rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--card)/0.5)] backdrop-blur-sm flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-[hsl(var(--border)/0.8)] hover:bg-[hsl(var(--secondary))] transition-colors duration-200"
                aria-label={label}
              >
                <Icon className="h-4 w-4" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
          onClick={() => scrollToSection('about')}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-1 text-muted-foreground"
          >
            <span className="text-[10px] tracking-widest uppercase opacity-50">Scroll</span>
            <div className="w-px h-8 bg-gradient-to-b from-[hsl(var(--muted-foreground)/0.4)] to-transparent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
