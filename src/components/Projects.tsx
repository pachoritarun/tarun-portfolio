import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useTilt } from '@/hooks/useTilt';
import { 
  CloudRain, 
  BookOpen, 
  Shield, 
  Clock, 
  ExternalLink,
  Github,
  Calendar,
  Zap,
  ShoppingCart,
  BarChart3,
  MessageSquare,
  Bot,
  Smartphone
} from 'lucide-react';

// Import project images
import juHelpImg from '@/assets/ju help.png';
import taskManagerImg from '@/assets/project-taskmanager.jpg';
import socialImg from '@/assets/project-social.png';
import aiChatbotImg from '@/assets/project-ai-chatbot.jpg';

const Projects = () => {
  const tilt = useTilt(6);
  const projects = [
    {
      icon: Smartphone,
      title: "JU Help — Android Education App",
      description: "Production-grade Android education app for JECRC University students. Architected and shipped end-to-end in 60 days. 200+ active users in 15 days of launch with zero paid marketing.",
      technologies: ["Kotlin", "Jetpack Compose", "Supabase", "Gemini AI", "Razorpay", "Unity Ads"],
      status: "Completed",
      progress: 100,
      estimatedCompletion: "Launched Apr 2026",
      features: ["12 AI-powered features", "PYQ Solver & Quiz Generator", "200+ active users", "Razorpay + Unity Ads monetization"],
      color: "from-green-500 to-emerald-500",
      image: juHelpImg,
      isMobileApp: true,
      demoUrl: "https://juhelp.in",
      githubUrl: "https://play.google.com/store/apps/details?id=com.juhelp.app"
    },
    {
      icon: Bot,
      title: "EduVerseAI — AI Web Platform",
      description: "AI-powered web platform for document analysis, career guidance, college/company discovery, and DSA coding practice with real-time code execution using Judge0 + Monaco Editor.",
      technologies: ["React 18", "TypeScript", "Supabase", "Gemini AI", "Judge0 API"],
      status: "Completed", 
      progress: 100,
      estimatedCompletion: "Launched",
      features: ["AI career guidance", "DSA coding practice", "Real-time code execution", "Razorpay subscriptions"],
      color: "from-purple-500 to-pink-500",
      image: taskManagerImg,
      isMobileApp: false,
      demoUrl: "https://eduverseai.vercel.app",
      githubUrl: "#"
    },
    {
      icon: MessageSquare,
      title: "Cliniq — AI Medical Diagnosis Platform",
      description: "AI clinical intake system where patients describe symptoms via chat/voice. AI conducts structured follow-up and auto-generates pre-consultation reports. 1st Runner-Up, National Healthcare Hackathon 2026.",
      technologies: ["AI", "NLP", "Speech-to-Text", "Text-to-Speech", "React"],
      status: "In Progress",
      progress: 75,
      estimatedCompletion: "2026",
      features: ["Voice symptom intake", "AI differential diagnosis", "Doctor dashboard", "Red-flag alerts"],
      color: "from-red-500 to-orange-500",
      image: socialImg,
      isMobileApp: false,
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      icon: MessageSquare,
      title: "MACRO — Multi-Agent Code Orchestrator",
      description: "12-stage agentic pipeline with AST-based code graph supporting 7 LLM providers (OpenAI, Anthropic, Gemini, Groq, DeepSeek). Fully offline via Ollama. 420+ unit tests, open-source AGPL v3.",
      technologies: ["Python", "Agentic AI", "AST", "RAG", "Multi-LLM"],
      status: "Completed",
      progress: 100,
      estimatedCompletion: "Open Source",
      features: ["7 LLM providers", "AST code graph", "420+ unit tests", "Fully offline (Ollama)"],
      color: "from-indigo-500 to-purple-600",
      image: aiChatbotImg,
      isMobileApp: false,
      demoUrl: "#",
      githubUrl: "#"
    }
  ];

  const upcomingProjects = [
    "JU Help v2.0 — 40,000+ Colleges",
    "AI Resume Builder",
    "Campus Connect Network",
    "Smart Study Planner",
    "Code Review AI",
    "Startup Dashboard"
  ];

  return (
    <section id="projects" className="py-20">
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
              My <span className="gradient-text">Projects</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              Showcasing innovative solutions and cutting-edge development projects
            </motion.p>
          </div>

          {/* Featured Projects */}
          <div className="space-y-8 mb-16">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15 * index, duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
                viewport={{ once: true }}
                className="group"
                style={{ transformStyle: 'preserve-3d' }}
                onMouseMove={(e) => {
                  const el = e.currentTarget;
                  const { left, top, width, height } = el.getBoundingClientRect();
                  const x = (e.clientX - left) / width - 0.5;
                  const y = (e.clientY - top) / height - 0.5;
                  el.style.transform = `perspective(1000px) rotateY(${x * 5}deg) rotateX(${-y * 5}deg)`;
                  el.style.transition = 'transform 0.1s ease';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg)';
                  e.currentTarget.style.transition = 'transform 0.6s cubic-bezier(0.23,1,0.32,1)';
                }}
              >
                <Card className="overflow-hidden border-portfolio-neon/10 hover:border-portfolio-neon/30 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-portfolio-neon/20">
                  <div className="md:flex">
                    {/* Project Image */}
                    <div className="md:w-1/2 relative overflow-hidden">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        className="h-64 md:h-full"
                      >
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className={`w-full h-full ${
                            project.title.includes('JU Help') || project.title.includes('Cliniq')
                              ? 'object-contain bg-gray-950 p-2'
                              : 'object-cover'
                          }`}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        <div className="absolute top-4 left-4">
                          <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${project.color} flex items-center justify-center shadow-lg`}>
                            <project.icon className="h-6 w-6 text-white" />
                          </div>
                        </div>
                        <div className="absolute bottom-4 right-4 flex gap-2">
                          <Button 
                            size="sm" 
                            variant="secondary"
                            className="bg-white/20 backdrop-blur hover:bg-white/30 text-white border-white/20"
                            onClick={() => window.open(project.demoUrl, '_blank')}
                            disabled={project.demoUrl === '#'}
                          >
                            <ExternalLink className="h-3 w-3 mr-2" />
                            {project.title.includes('JU Help') ? 'Website' : 'Demo'}
                          </Button>
                          <Button 
                            size="sm" 
                            variant="secondary"
                            className="bg-white/20 backdrop-blur hover:bg-white/30 text-white border-white/20"
                            onClick={() => window.open(project.githubUrl, '_blank')}
                            disabled={project.githubUrl === '#'}
                          >
                            {project.title.includes('JU Help') ? <Smartphone className="h-3 w-3 mr-2" /> : <Github className="h-3 w-3 mr-2" />}
                            {project.title.includes('JU Help') ? 'Play Store' : 'Code'}
                          </Button>
                        </div>
                      </motion.div>
                    </div>

                    {/* Project Details */}
                    <div className="md:w-1/2 p-6">
                      <CardHeader className="p-0 mb-4">
                        <div className="flex items-start justify-between">
                          <div>
                            <CardTitle className="text-2xl mb-2 group-hover:text-portfolio-neon transition-colors">
                              {project.title}
                            </CardTitle>
                            <div className="flex items-center gap-2 mb-3">
                              <Badge 
                                variant={project.status === 'Completed' ? 'default' : project.status === 'In Progress' ? 'secondary' : 'outline'}
                                className={`${
                                  project.status === 'Completed' 
                                    ? 'bg-green-500 text-white' 
                                    : project.status === 'In Progress'
                                    ? 'bg-portfolio-neon text-background'
                                    : 'border-orange-500 text-orange-500'
                                }`}
                              >
                                <Clock className="h-3 w-3 mr-1" />
                                {project.status}
                              </Badge>
                              <Badge variant="outline">
                                <Calendar className="h-3 w-3 mr-1" />
                                {project.estimatedCompletion}
                              </Badge>
                            </div>
                          </div>
                        </div>
                      </CardHeader>

                      <CardContent className="p-0 space-y-4">
                        <p className="text-muted-foreground leading-relaxed">
                          {project.description}
                        </p>

                        {/* Progress Bar */}
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Completion</span>
                            <span>{project.progress}%</span>
                          </div>
                          <div className="w-full bg-secondary rounded-full h-2">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${project.progress}%` }}
                              transition={{ delay: 0.5, duration: 1.5 }}
                              viewport={{ once: true }}
                              className={`h-2 rounded-full bg-gradient-to-r ${project.color}`}
                            />
                          </div>
                        </div>

                        {/* Technologies */}
                        <div className="space-y-2">
                          <h4 className="font-semibold text-sm">Technologies:</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, techIndex) => (
                              <motion.div
                                key={techIndex}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.1 * techIndex }}
                                viewport={{ once: true }}
                              >
                                <Badge variant="secondary" className="text-xs hover:bg-portfolio-neon/20 transition-colors">
                                  {tech}
                                </Badge>
                              </motion.div>
                            ))}
                          </div>
                        </div>

                        {/* Features */}
                        <div className="space-y-2">
                          <h4 className="font-semibold text-sm">Key Features:</h4>
                          <div className="grid grid-cols-2 gap-1">
                            {project.features.map((feature, featureIndex) => (
                              <motion.div 
                                key={featureIndex} 
                                className="flex items-center gap-2"
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1 * featureIndex }}
                                viewport={{ once: true }}
                              >
                                <Zap className="h-3 w-3 text-portfolio-neon" />
                                <span className="text-xs text-muted-foreground">{feature}</span>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Upcoming Projects */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <Card className="glass-effect border-portfolio-neon/20 hover:border-portfolio-neon/40 transition-colors">
              <CardHeader>
                <CardTitle className="text-center text-2xl font-heading">
                  <span className="gradient-text">Upcoming Projects</span>
                </CardTitle>
                <p className="text-center text-muted-foreground">
                  Exciting innovations coming soon to push the boundaries of technology
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  {upcomingProjects.map((project, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.1 * index }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="text-center p-4 rounded-lg border border-portfolio-neon/10 hover:border-portfolio-neon/30 transition-all cursor-pointer bg-gradient-to-br from-background to-secondary/20"
                    >
                      <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-r from-portfolio-tech-blue to-portfolio-electric-purple flex items-center justify-center">
                        <span className="text-white font-bold text-sm">{String(index + 1).padStart(2, '0')}</span>
                      </div>
                      <h4 className="font-semibold text-sm mb-1">{project}</h4>
                      <p className="text-xs text-muted-foreground">In Development</p>
                      <div className="mt-2 w-full bg-secondary/50 rounded-full h-1">
                        <div className="w-1/4 bg-gradient-to-r from-portfolio-tech-blue to-portfolio-electric-purple rounded-full h-1" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Development Philosophy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="max-w-2xl mx-auto border-portfolio-neon/20 hover:border-portfolio-neon/40 transition-colors">
              <CardContent className="p-8 text-center">
                <motion.div
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl font-heading font-bold mb-4 gradient-text">
                    Innovation Through Code
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Each project represents a journey of discovery, combining cutting-edge technology 
                    with user-centered design to create solutions that matter. I believe in building 
                    for the future while solving today's challenges.
                  </p>
                  <motion.blockquote 
                    className="italic text-portfolio-neon border-l-4 border-portfolio-neon pl-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    "Great software is not just about code—it's about creating experiences that inspire and empower."
                  </motion.blockquote>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;