export const generateResumeHTML = () => {
  const resumeHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tarun - Full Stack Developer Resume</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            padding: 20px;
        }
        
        .resume-container {
            max-width: 900px;
            margin: 0 auto;
            background: white;
            border-radius: 15px;
            box-shadow: 0 20px 40px rgba(0,0,0,0.1);
            overflow: hidden;
            animation: slideIn 1s ease-out;
        }
        
        @keyframes slideIn {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        .header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 40px;
            text-align: center;
            position: relative;
            overflow: hidden;
        }
        
        .header::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
            animation: rotate 20s linear infinite;
        }
        
        @keyframes rotate {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
        
        .header-content {
            position: relative;
            z-index: 2;
        }
        
        .name {
            font-size: 3rem;
            font-weight: 700;
            margin-bottom: 10px;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        }
        
        .title {
            font-size: 1.5rem;
            opacity: 0.9;
            margin-bottom: 20px;
        }
        
        .contact-info {
            display: flex;
            justify-content: center;
            gap: 30px;
            flex-wrap: wrap;
        }
        
        .contact-item {
            display: flex;
            align-items: center;
            gap: 8px;
            font-size: 1rem;
        }
        
        .main-content {
            display: grid;
            grid-template-columns: 1fr 2fr;
            gap: 0;
        }
        
        .sidebar {
            background: #f8f9fa;
            padding: 40px 30px;
        }
        
        .content {
            padding: 40px;
        }
        
        .section {
            margin-bottom: 40px;
        }
        
        .section-title {
            font-size: 1.5rem;
            font-weight: 700;
            color: #667eea;
            margin-bottom: 20px;
            position: relative;
            padding-bottom: 10px;
        }
        
        .section-title::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 50px;
            height: 3px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            border-radius: 2px;
        }
        
        .skill-item {
            margin-bottom: 15px;
        }
        
        .skill-name {
            font-weight: 600;
            margin-bottom: 5px;
        }
        
        .skill-bar {
            height: 8px;
            background: #e9ecef;
            border-radius: 4px;
            overflow: hidden;
        }
        
        .skill-progress {
            height: 100%;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            border-radius: 4px;
            animation: fillBar 2s ease-out;
        }
        
        @keyframes fillBar {
            from { width: 0; }
        }
        
        .experience-item, .project-item {
            margin-bottom: 30px;
            padding: 20px;
            background: #f8f9fa;
            border-radius: 10px;
            border-left: 4px solid #667eea;
            transition: transform 0.3s ease;
        }
        
        .experience-item:hover, .project-item:hover {
            transform: translateX(5px);
        }
        
        .job-title {
            font-size: 1.2rem;
            font-weight: 700;
            color: #333;
        }
        
        .company {
            color: #667eea;
            font-weight: 600;
            margin-bottom: 5px;
        }
        
        .duration {
            color: #6c757d;
            font-size: 0.9rem;
            margin-bottom: 10px;
        }
        
        .description {
            color: #555;
        }
        
        .tech-stack {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            margin-top: 10px;
        }
        
        .tech-tag {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 4px 12px;
            border-radius: 20px;
            font-size: 0.8rem;
            font-weight: 500;
        }
        
        .education-item {
            margin-bottom: 20px;
        }
        
        .degree {
            font-weight: 700;
            color: #333;
        }
        
        .institution {
            color: #667eea;
            font-weight: 600;
        }
        
        @media (max-width: 768px) {
            .main-content {
                grid-template-columns: 1fr;
            }
            
            .name {
                font-size: 2rem;
            }
            
            .contact-info {
                flex-direction: column;
                gap: 15px;
            }
        }
        
        @media print {
            body {
                background: white;
                padding: 0;
            }
            
            .resume-container {
                box-shadow: none;
                border-radius: 0;
            }
        }
    </style>
</head>
<body>
    <div class="resume-container">
        <header class="header">
            <div class="header-content">
                <h1 class="name">Tarun Pancholi</h1>
                <p class="title">Aspiring Full Stack Developer & CSE Student</p>
                <div class="contact-info">
                    <div class="contact-item">
                        <span>📧</span>
                        <span>pachoritarun05@gmail.com</span>
                    </div>
                    <div class="contact-item">
                        <span>📱</span>
                        <span>Contact via Email</span>
                    </div>
                    <div class="contact-item">
                        <span>🌐</span>
                        <span>github.com/pachoritarun</span>
                    </div>
                    <div class="contact-item">
                        <span>💼</span>
                        <span>linkedin.com/in/tarun-pancholi-0433b9308</span>
                    </div>
                </div>
            </div>
        </header>
        
        <div class="main-content">
            <aside class="sidebar">
                <section class="section">
                    <h2 class="section-title">Skills</h2>
                    <div class="skill-item">
                        <div class="skill-name">C Programming</div>
                        <div class="skill-bar">
                            <div class="skill-progress" style="width: 85%;"></div>
                        </div>
                    </div>
                    <div class="skill-item">
                        <div class="skill-name">C++</div>
                        <div class="skill-bar">
                            <div class="skill-progress" style="width: 80%;"></div>
                        </div>
                    </div>
                    <div class="skill-item">
                        <div class="skill-name">Python</div>
                        <div class="skill-bar">
                            <div class="skill-progress" style="width: 70%;"></div>
                        </div>
                    </div>
                    <div class="skill-item">
                        <div class="skill-name">HTML5 & CSS3</div>
                        <div class="skill-bar">
                            <div class="skill-progress" style="width: 90%;"></div>
                        </div>
                    </div>
                    <div class="skill-item">
                        <div class="skill-name">JavaScript & React</div>
                        <div class="skill-bar">
                            <div class="skill-progress" style="width: 65%;"></div>
                        </div>
                    </div>
                </section>
                
                <section class="section">
                    <h2 class="section-title">Education</h2>
                    <div class="education-item">
                        <div class="degree">B.Tech Computer Science Engineering</div>
                        <div class="institution">JECRC University, Jaipur</div>
                        <div class="duration">2024 - 2028 (1st Year)</div>
                        <div class="description" style="font-size: 0.9rem; color: #6c757d; margin-top: 5px;">Relevant Coursework: Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems</div>
                    </div>
                    
                    <h2 class="section-title" style="margin-top: 30px;">Certifications</h2>
                    <div class="education-item">
                        <div class="degree">Web Development Fundamentals</div>
                        <div class="institution">Self-Paced Learning</div>
                        <div class="duration">2024</div>
                    </div>
                    <div class="education-item">
                        <div class="degree">Python Programming</div>
                        <div class="institution">Online Courses</div>
                        <div class="duration">2024</div>
                    </div>
                </section>
            </aside>
            
            <main class="content">
                <section class="section">
                    <h2 class="section-title">Professional Summary</h2>
                    <p class="description">
                        Ambitious and detail-oriented Computer Science Engineering student at JECRC University, Jaipur, with a passion for 
                        innovative technology solutions. Demonstrated proficiency in multiple programming languages including C, C++, Python, 
                        and web technologies. Strong analytical and problem-solving abilities with experience in data structures, algorithms, 
                        and software development lifecycle. Committed to continuous learning and staying current with emerging technologies 
                        in artificial intelligence, cybersecurity, and full-stack development.
                    </p>
                </section>
                
                <section class="section">
                    <h2 class="section-title">Featured Projects</h2>
                    
                    <div class="project-item">
                        <div class="job-title">Eduverse Career Advisor</div>
                        <div class="company">AI-Powered Career Guidance Platform | Live Project</div>
                        <div class="duration">2024 - Present</div>
                        <div class="description">
                            Architected and developed a comprehensive AI-powered career guidance platform that delivers personalized 
                            career recommendations, skill gap analysis, and curated educational pathways. Integrated advanced machine 
                            learning algorithms to provide intelligent career counseling with 95% user satisfaction rate. 
                            Implemented responsive design principles ensuring seamless user experience across all devices.
                        </div>
                        <div class="tech-stack">
                            <span class="tech-tag">React.js</span>
                            <span class="tech-tag">TypeScript</span>
                            <span class="tech-tag">OpenAI API</span>
                            <span class="tech-tag">Tailwind CSS</span>
                            <span class="tech-tag">Vercel</span>
                        </div>
                    </div>
                    
                    <div class="project-item">
                        <div class="job-title">E-commerce Platform</div>
                        <div class="company">Full-Stack Web Application | Portfolio Project</div>
                        <div class="duration">2024</div>
                        <div class="description">
                            Engineered a scalable e-commerce platform featuring advanced analytics dashboard, real-time inventory 
                            management system, and secure payment processing. Implemented RESTful APIs, user authentication, 
                            shopping cart functionality, and order management system. Optimized database queries resulting in 
                            40% faster page load times and enhanced user experience.
                        </div>
                        <div class="tech-stack">
                            <span class="tech-tag">React.js</span>
                            <span class="tech-tag">Node.js</span>
                            <span class="tech-tag">Express.js</span>
                            <span class="tech-tag">MongoDB</span>
                            <span class="tech-tag">Stripe API</span>
                            <span class="tech-tag">JWT</span>
                        </div>
                    </div>
                    
                    <div class="project-item">
                        <div class="job-title">AI-Powered Coding Assistant</div>
                        <div class="company">Intelligent Programming Companion | Portfolio Integration</div>
                        <div class="duration">2024</div>
                        <div class="description">
                            Developed a sophisticated AI coding assistant integrated into personal portfolio, featuring natural language 
                            processing, context-aware responses, and real-time code assistance. Implemented advanced conversation 
                            management, typing animations, and seamless API integration. Serves as a 24/7 coding mentor for 
                            developers of all skill levels with support for multiple programming languages.
                        </div>
                        <div class="tech-stack">
                            <span class="tech-tag">React.js</span>
                            <span class="tech-tag">TypeScript</span>
                            <span class="tech-tag">Gemini 2.0 API</span>
                            <span class="tech-tag">Framer Motion</span>
                            <span class="tech-tag">Tailwind CSS</span>
                        </div>
                    </div>
                    
                    <div class="project-item">
                        <div class="job-title">Professional Portfolio Website</div>
                        <div class="company">Personal Branding & Showcase Platform</div>
                        <div class="duration">2024 - Present</div>
                        <div class="description">
                            Designed and developed a comprehensive portfolio website showcasing technical skills, projects, and 
                            professional journey. Features include interactive animations, responsive design, contact forms with 
                            EmailJS integration, and downloadable resume functionality. Implemented modern UI/UX principles 
                            with smooth animations and optimized performance.
                        </div>
                        <div class="tech-stack">
                            <span class="tech-tag">React.js</span>
                            <span class="tech-tag">TypeScript</span>
                            <span class="tech-tag">Tailwind CSS</span>
                            <span class="tech-tag">Framer Motion</span>
                            <span class="tech-tag">EmailJS</span>
                            <span class="tech-tag">Vite</span>
                        </div>
                    </div>
                </section>
                
                <section class="section">
                    <h2 class="section-title">Key Achievements</h2>
                    <ul style="list-style: none; padding: 0;">
                        <li style="margin-bottom: 10px; padding-left: 20px; position: relative;">
                            <span style="position: absolute; left: 0; color: #667eea;">🎓</span>
                            B.Tech CSE student at JECRC University (2024-2028) with strong academic foundation and consistent performance
                        </li>
                        <li style="margin-bottom: 10px; padding-left: 20px; position: relative;">
                            <span style="position: absolute; left: 0; color: #667eea;">💻</span>
                            Proficient in multiple programming languages: C (85%), C++ (80%), Python (70%), JavaScript (65%)
                        </li>
                        <li style="margin-bottom: 10px; padding-left: 20px; position: relative;">
                            <span style="position: absolute; left: 0; color: #667eea;">🌐</span>
                            Advanced web development skills with HTML5 (90%), CSS3, React.js, and responsive design principles
                        </li>
                        <li style="margin-bottom: 10px; padding-left: 20px; position: relative;">
                            <span style="position: absolute; left: 0; color: #667eea;">🔒</span>
                            Actively exploring cybersecurity, ethical hacking, and network security fundamentals
                        </li>
                        <li style="margin-bottom: 10px; padding-left: 20px; position: relative;">
                            <span style="position: absolute; left: 0; color: #667eea;">🚀</span>
                            Self-directed learner with proven ability to master new technologies and frameworks independently
                        </li>
                        <li style="margin-bottom: 10px; padding-left: 20px; position: relative;">
                            <span style="position: absolute; left: 0; color: #667eea;">🏆</span>
                            Strong foundation in Data Structures, Algorithms, and Object-Oriented Programming concepts
                        </li>
                    </ul>
                </section>
            </main>
        </div>
    </div>
</body>
</html>`;

  return resumeHTML;
};

export const downloadResume = () => {
  const resumeHTML = generateResumeHTML();
  const blob = new Blob([resumeHTML], { type: 'text/html' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'Tarun_Resume.html';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};