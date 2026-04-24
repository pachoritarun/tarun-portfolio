import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { 
  Code, 
  Globe, 
  GitBranch, 
  Smartphone,
  Brain,
  Server
} from 'lucide-react';

const addTilt = (e: React.MouseEvent<HTMLDivElement>) => {
  const el = e.currentTarget;
  const { left, top, width, height } = el.getBoundingClientRect();
  const x = (e.clientX - left) / width - 0.5;
  const y = (e.clientY - top) / height - 0.5;
  el.style.transform = `perspective(700px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) translateZ(6px)`;
  el.style.transition = 'transform 0.1s ease';
};
const removeTilt = (e: React.MouseEvent<HTMLDivElement>) => {
  e.currentTarget.style.transform = 'perspective(700px) rotateY(0deg) rotateX(0deg) translateZ(0px)';
  e.currentTarget.style.transition = 'transform 0.5s cubic-bezier(0.23,1,0.32,1)';
};

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      skills: [
        { name: "Kotlin", level: 90, color: "from-purple-500 to-purple-600" },
        { name: "JavaScript / TypeScript", level: 80, color: "from-yellow-500 to-yellow-600" },
        { name: "Python", level: 75, color: "from-green-500 to-green-600" },
        { name: "C / C++", level: 80, color: "from-blue-500 to-blue-600" }
      ]
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      skills: [
        { name: "Jetpack Compose", level: 90, color: "from-green-500 to-emerald-600" },
        { name: "Android (Material 3)", level: 85, color: "from-teal-500 to-teal-600" },
        { name: "Supabase (Auth/DB/Storage)", level: 85, color: "from-emerald-500 to-green-600" },
        { name: "Google Play Console", level: 80, color: "from-cyan-500 to-cyan-600" }
      ]
    },
    {
      icon: Globe,
      title: "Web Development",
      skills: [
        { name: "React 18 / Vite", level: 85, color: "from-cyan-500 to-cyan-600" },
        { name: "HTML5 & CSS3 / Tailwind", level: 90, color: "from-orange-500 to-orange-600" },
        { name: "TypeScript", level: 80, color: "from-blue-500 to-blue-600" },
        { name: "Node.js / REST APIs", level: 70, color: "from-green-500 to-green-600" }
      ]
    },
    {
      icon: Brain,
      title: "AI / ML & Backend",
      skills: [
        { name: "Google Gemini API", level: 90, color: "from-indigo-500 to-indigo-600" },
        { name: "Agentic AI / RAG", level: 75, color: "from-purple-500 to-purple-600" },
        { name: "PostgreSQL / Supabase RLS", level: 85, color: "from-pink-500 to-pink-600" },
        { name: "LLM Integration / NLP", level: 80, color: "from-red-500 to-red-600" }
      ]
    }
  ];

  const technologies = [
    "Git", "Gradle", "VS Code", "Figma", "Razorpay", "Unity Ads",
    "Judge0", "Firebase", "Google Play Console", "Supabase", "Vite", "Framer Motion"
  ];

  return (
    <section id="skills" className="py-20">
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
              My <span className="gradient-text">Skills</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              A comprehensive overview of my technical expertise and growing skill set
            </motion.p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * categoryIndex }}
                viewport={{ once: true }}
                onMouseMove={addTilt}
                onMouseLeave={removeTilt}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-portfolio-neon/10 hover:border-portfolio-neon/30">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-gradient-to-r from-portfolio-tech-blue to-portfolio-electric-purple">
                        <category.icon className="h-5 w-5 text-white" />
                      </div>
                      <span className="text-lg">{category.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skillIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 * skillIndex }}
                          viewport={{ once: true }}
                          className="space-y-2"
                        >
                          <div className="flex justify-between items-center">
                            <span className="font-medium text-sm">{skill.name}</span>
                            <span className="text-sm text-muted-foreground">{skill.level}%</span>
                          </div>
                          <div className="relative">
                            <Progress 
                              value={skill.level} 
                              className="h-2"
                            />
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              transition={{ delay: 0.5 + skillIndex * 0.1, duration: 1 }}
                              viewport={{ once: true }}
                              className={`absolute top-0 left-0 h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                            />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Technologies & Tools */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="glass-effect border-portfolio-neon/20">
              <CardHeader>
                <CardTitle className="text-center flex items-center justify-center gap-3">
                  <div className="p-2 rounded-lg bg-gradient-to-r from-portfolio-tech-blue to-portfolio-electric-purple">
                    <GitBranch className="h-5 w-5 text-white" />
                  </div>
                  <span>Technologies & Tools</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3 justify-center">
                  {technologies.map((tech, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.1 * index }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <Badge 
                        variant="secondary"
                        className="px-4 py-2 text-sm hover:bg-portfolio-neon hover:text-background transition-colors cursor-pointer"
                      >
                        {tech}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Learning Journey */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <Card className="max-w-2xl mx-auto border-portfolio-neon/20 hover:border-portfolio-neon/40 transition-colors">
              <CardContent className="p-8">
                <h3 className="text-2xl font-heading font-bold mb-4 gradient-text">
                  Continuous Learning
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  I believe in the power of continuous learning. Every day brings new challenges 
                  and opportunities to grow. My journey in technology is just beginning, and I'm 
                  excited to expand my skills in areas like advanced algorithms, cloud computing, 
                  machine learning, and modern web frameworks.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;