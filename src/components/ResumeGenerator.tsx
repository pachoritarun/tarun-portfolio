export const generateResumeHTML = () => {
  const resumeHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tarun Pancholi — Resume</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

        * { margin: 0; padding: 0; box-sizing: border-box; }

        body {
            font-family: 'Inter', 'Segoe UI', sans-serif;
            line-height: 1.55;
            color: #1c1c1e;
            background: #e8e8e8;
            min-height: 100vh;
            padding: 32px 16px;
        }

        .resume-container {
            max-width: 960px;
            margin: 0 auto;
            background: #fff;
            box-shadow: 0 4px 24px rgba(0,0,0,0.12);
            overflow: hidden;
        }

        /* ── HEADER ── */
        .header {
            background: #0f1923;
            color: #fff;
            padding: 36px 44px 28px;
        }

        .name {
            font-size: 2.1rem;
            font-weight: 700;
            letter-spacing: -0.3px;
            margin-bottom: 3px;
            color: #ffffff;
        }

        .tagline {
            font-size: 0.88rem;
            color: #94a3b8;
            margin-bottom: 16px;
            font-weight: 400;
            letter-spacing: 0.2px;
        }

        .contact-row {
            display: flex;
            flex-wrap: wrap;
            gap: 6px 20px;
            font-size: 0.8rem;
            color: #cbd5e1;
        }
        .contact-row a {
            color: #7dd3fc;
            text-decoration: none;
        }
        .contact-row a:hover { text-decoration: underline; }

        /* ── LAYOUT ── */
        .body-grid {
            display: grid;
            grid-template-columns: 248px 1fr;
        }

        /* ── SIDEBAR ── */
        .sidebar {
            background: #f8f9fa;
            padding: 28px 22px;
            border-right: 1px solid #e2e8f0;
        }

        /* ── MAIN ── */
        .main { padding: 28px 36px; }

        /* ── SECTION ── */
        .section { margin-bottom: 24px; }

        .section-title {
            font-size: 0.65rem;
            font-weight: 700;
            letter-spacing: 1.8px;
            text-transform: uppercase;
            color: #0f1923;
            margin-bottom: 12px;
            padding-bottom: 5px;
            border-bottom: 1.5px solid #0f1923;
        }

        /* ── PROFILE ── */
        .profile-text {
            font-size: 0.84rem;
            color: #475569;
            line-height: 1.7;
        }

        /* ── EDUCATION ── */
        .edu-degree { font-weight: 600; font-size: 0.88rem; color: #0f1923; }
        .edu-school { color: #2563eb; font-size: 0.82rem; font-weight: 500; margin-top: 2px; }
        .edu-meta   { font-size: 0.78rem; color: #64748b; margin-top: 2px; }
        .edu-badge  {
            display: inline-block;
            margin-top: 7px;
            background: #0f1923;
            color: #f1f5f9;
            font-size: 0.68rem;
            padding: 3px 10px;
            font-weight: 600;
            letter-spacing: 0.3px;
        }

        /* ── SKILLS SIDEBAR ── */
        .skill-group { margin-bottom: 14px; }
        .skill-group-label {
            font-size: 0.72rem;
            font-weight: 600;
            color: #0f1923;
            margin-bottom: 6px;
            text-transform: uppercase;
            letter-spacing: 0.6px;
        }
        .skill-tags { display: flex; flex-wrap: wrap; gap: 4px; }
        .skill-tag {
            background: #e2e8f0;
            color: #334155;
            font-size: 0.7rem;
            padding: 2px 8px;
            font-weight: 500;
        }

        /* ── ACHIEVEMENTS SIDEBAR ── */
        .ach-item {
            font-size: 0.78rem;
            color: #475569;
            padding: 4px 0 4px 12px;
            position: relative;
            line-height: 1.5;
            border-bottom: 1px solid #f1f5f9;
        }
        .ach-item:last-child { border-bottom: none; }
        .ach-item::before {
            content: '';
            position: absolute;
            left: 0;
            top: 10px;
            width: 4px;
            height: 4px;
            background: #2563eb;
            border-radius: 50%;
        }

        /* ── CERTIFICATIONS SIDEBAR ── */
        .cert-item {
            font-size: 0.75rem;
            color: #475569;
            padding: 3px 0 3px 12px;
            position: relative;
            line-height: 1.5;
        }
        .cert-item::before {
            content: '';
            position: absolute;
            left: 0;
            top: 9px;
            width: 4px;
            height: 4px;
            background: #64748b;
            border-radius: 50%;
        }

        /* ── EXPERIENCE / PROJECT CARDS ── */
        .exp-card, .proj-card {
            margin-bottom: 18px;
            padding: 14px 16px;
            background: #fff;
            border: 1px solid #e2e8f0;
            border-left: 3px solid #0f1923;
        }

        .exp-title { font-size: 0.92rem; font-weight: 600; color: #0f1923; }
        .exp-company { color: #2563eb; font-weight: 500; font-size: 0.8rem; margin: 3px 0 1px; }
        .exp-date {
            font-size: 0.74rem;
            color: #94a3b8;
            margin-bottom: 8px;
            font-style: italic;
        }

        .exp-bullets { list-style: none; padding: 0; }
        .exp-bullets li {
            font-size: 0.81rem;
            color: #475569;
            padding: 2px 0 2px 14px;
            position: relative;
            line-height: 1.6;
        }
        .exp-bullets li::before {
            content: '–';
            position: absolute;
            left: 0;
            color: #94a3b8;
            font-size: 0.8rem;
            top: 2px;
        }

        .tech-row { display: flex; flex-wrap: wrap; gap: 5px; margin-top: 10px; }
        .tech-chip {
            background: #0f1923;
            color: #e2e8f0;
            font-size: 0.68rem;
            padding: 2px 9px;
            font-weight: 500;
            letter-spacing: 0.2px;
        }

        .link-chip {
            display: inline-block;
            background: #dbeafe;
            color: #1d4ed8;
            font-size: 0.68rem;
            padding: 2px 8px;
            font-weight: 600;
            text-decoration: none;
            margin-left: 6px;
            vertical-align: middle;
        }

        /* ── HACKATHONS ── */
        .hack-grid { display: flex; flex-wrap: wrap; gap: 5px; }
        .hack-tag {
            background: #f1f5f9;
            color: #475569;
            font-size: 0.7rem;
            padding: 2px 9px;
            font-weight: 500;
            border: 1px solid #e2e8f0;
        }

        @media (max-width: 720px) {
            .body-grid { grid-template-columns: 1fr; }
            .name { font-size: 1.6rem; }
        }

        @media print {
            body { background: #fff; padding: 0; }
            .resume-container { box-shadow: none; }
        }
    </style>
</head>
<body>
<div class="resume-container">

    <!-- HEADER -->
    <header class="header">
        <h1 class="name">Tarun Pancholi</h1>
        <p class="tagline">2nd-Year CS Engineering Student &amp; Startup Founder · Full-Stack · Android · AI</p>
        <div class="contact-row">
            <span>📧 pachoritarun05@gmail.com</span>
            <span>📱 +91 9216637236</span>
            <span>📍 Jaipur, Rajasthan, India</span>
            <a href="https://linkedin.com/in/tarun-pancholi-0433b9308" target="_blank">LinkedIn</a>
            <a href="https://github.com/pachoritarun" target="_blank">GitHub</a>
        </div>
    </header>

    <div class="body-grid">

        <!-- SIDEBAR -->
        <aside class="sidebar">

            <div class="section">
                <div class="section-title">Education</div>
                <div class="edu-degree">B.Tech — Computer Science &amp; Engineering</div>
                <div class="edu-school">JECRC University, Jaipur</div>
                <div class="edu-meta">4th Semester · 2024 – 2028</div>
                <div class="edu-meta">CGPA: <strong>7.73 / 10</strong></div>
                <span class="edu-badge">🏆 Winner — IdeaSpark 2.0</span>
            </div>

            <div class="section">
                <div class="section-title">Technical Skills</div>

                <div class="skill-group">
                    <div class="skill-group-label">Languages</div>
                    <div class="skill-tags">
                        <span class="skill-tag">Kotlin</span>
                        <span class="skill-tag">TypeScript</span>
                        <span class="skill-tag">JavaScript</span>
                        <span class="skill-tag">Python</span>
                        <span class="skill-tag">C / C++</span>
                        <span class="skill-tag">HTML</span>
                        <span class="skill-tag">CSS</span>
                    </div>
                </div>

                <div class="skill-group">
                    <div class="skill-group-label">Mobile Development</div>
                    <div class="skill-tags">
                        <span class="skill-tag">Jetpack Compose</span>
                        <span class="skill-tag">Material 3</span>
                        <span class="skill-tag">Android SDK</span>
                        <span class="skill-tag">Gradle</span>
                    </div>
                </div>

                <div class="skill-group">
                    <div class="skill-group-label">Web Development</div>
                    <div class="skill-tags">
                        <span class="skill-tag">React 18</span>
                        <span class="skill-tag">Tailwind CSS</span>
                        <span class="skill-tag">Vite</span>
                        <span class="skill-tag">Node.js</span>
                    </div>
                </div>

                <div class="skill-group">
                    <div class="skill-group-label">AI / ML</div>
                    <div class="skill-tags">
                        <span class="skill-tag">Gemini API</span>
                        <span class="skill-tag">Agentic AI</span>
                        <span class="skill-tag">RAG</span>
                        <span class="skill-tag">NLP</span>
                        <span class="skill-tag">STT / TTS</span>
                    </div>
                </div>

                <div class="skill-group">
                    <div class="skill-group-label">Backend &amp; Tools</div>
                    <div class="skill-tags">
                        <span class="skill-tag">Supabase</span>
                        <span class="skill-tag">PostgreSQL</span>
                        <span class="skill-tag">Firebase</span>
                        <span class="skill-tag">Razorpay</span>
                        <span class="skill-tag">Unity Ads</span>
                        <span class="skill-tag">Judge0</span>
                        <span class="skill-tag">Figma</span>
                        <span class="skill-tag">Git</span>
                    </div>
                </div>
            </div>

            <div class="section">
                <div class="section-title">Achievements</div>
                <div class="ach-item">1st Runner-Up — National Healthcare Hackathon 2026 (Cliniq)</div>
                <div class="ach-item">Winner — IdeaSpark 2.0 Innovation Competition</div>
                <div class="ach-item">Top 15 — JEC Jaipur Hackathon</div>
                <div class="ach-item">Quiz Winner — Gen AI Academy 2.0</div>
                <div class="ach-item">2nd Round — eDC Blueprint 6.0</div>
                <div class="ach-item">District Winner — PCRA National Competition 2019</div>
            </div>

            <div class="section">
                <div class="section-title">Certifications</div>
                <div class="cert-item">JPMorgan Chase — Software Engineering Job Simulation</div>
                <div class="cert-item">Generative AI Academy 2.0 — Google Cloud (Vertex AI, Gemini APIs, BigQuery ML)</div>
                <div class="cert-item">Google Cloud Computing Foundations (GCCF)</div>
                <div class="cert-item">Salesforce Certified — 40 Badges</div>
            </div>

            <div class="section">
                <div class="section-title">Hackathons</div>
                <div class="hack-grid">
                    <span class="hack-tag">Smart India Hackathon</span>
                    <span class="hack-tag">HackX 3.0</span>
                    <span class="hack-tag">Hack4Delhi</span>
                    <span class="hack-tag">Ai-Thon Global</span>
                    <span class="hack-tag">FedEx SMART</span>
                    <span class="hack-tag">Nation Building 2026</span>
                </div>
            </div>

        </aside>

        <!-- MAIN CONTENT -->
        <main class="main">

            <div class="section">
                <div class="section-title">Profile</div>
                <p class="profile-text">
                    2nd-year CS Engineering student and startup founder. Built and shipped <strong>JU Help</strong> — a production Android app
                    with <strong>200+ active users in 15 days</strong> of launch, zero paid marketing. Skilled in full-stack web development,
                    Android engineering (Jetpack Compose), and AI integration. Winner of IdeaSpark 2.0 and 1st Runner-Up at National Healthcare Hackathon 2026.
                </p>
            </div>

            <!-- WORK EXPERIENCE -->
            <div class="section">
                <div class="section-title">Work Experience</div>

                <div class="exp-card">
                    <div class="exp-title">Founder &amp; Lead Developer — JU Help
                        <a class="link-chip" href="https://play.google.com/store/apps/details?id=com.juhelp.app" target="_blank">▶ Play Store</a>
                        <a class="link-chip" href="https://juhelp.in" target="_blank">🌐 Website</a>
                    </div>
                    <div class="exp-company">JECRC University, Jaipur</div>
                    <div class="exp-date">Jan 2026 – Present</div>
                    <ul class="exp-bullets">
                        <li>Architected and shipped a production-grade Android education app end-to-end in 60 days (Jan 17 → Mar 17, 2026); officially launched at JECRC University on Apr 14, 2026.</li>
                        <li>Built 12 AI-powered features — PYQ Solver, Notes Summarizer, Quiz Generator, Resume Analyzer, AI Roadmap, Ask AI and more — using Google Gemini 2.5 Flash with server-side usage control.</li>
                        <li>Designed full Supabase backend: 15+ PostgreSQL tables, JWT auth, file storage, Row-Level Security, and real-time subscriptions.</li>
                        <li>Integrated Unity Ads + Razorpay for premium subscription monetization; 200+ active users in 15 days with zero paid marketing — roadmap targets 40,000+ colleges across India.</li>
                        <li>Wrote 100,000+ lines of Kotlin across 70+ Jetpack Compose screens, admin panel, co-admin portal, and device-binding security layer.</li>
                        <li>Deployed and maintained CI/CD pipeline via Gradle; managed Google Play Store release (AAB signing, ProGuard, versionCode management).</li>
                    </ul>
                    <div class="tech-row">
                        <span class="tech-chip">Kotlin</span>
                        <span class="tech-chip">Jetpack Compose</span>
                        <span class="tech-chip">Supabase</span>
                        <span class="tech-chip">Gemini 2.5 Flash</span>
                        <span class="tech-chip">Razorpay</span>
                        <span class="tech-chip">Unity Ads</span>
                    </div>
                </div>

                <div class="exp-card">
                    <div class="exp-title">Class Representative — BTech CSE</div>
                    <div class="exp-company">JECRC University, Jaipur</div>
                    <div class="exp-date">Aug 2024 – Present</div>
                    <ul class="exp-bullets">
                        <li>Coordinated academic communication and issue resolution between faculty and 60+ students.</li>
                    </ul>
                </div>
            </div>

            <!-- PROJECTS -->
            <div class="section">
                <div class="section-title">Projects</div>

                <div class="proj-card">
                    <div class="exp-title">EduVerseAI — AI-Powered Web Platform
                        <a class="link-chip" href="https://eduverseai.vercel.app" target="_blank">🌐 Live Demo</a>
                    </div>
                    <div class="exp-company">Lead Developer</div>
                    <div class="exp-date">2025 – 2026</div>
                    <ul class="exp-bullets">
                        <li>Built AI web platform for document analysis, career guidance, college/company discovery, and DSA coding practice with real-time code execution (Judge0 + Monaco Editor, 4 languages).</li>
                        <li>Integrated Gemini AI for note generation, YouTube discovery, and Razorpay for premium subscriptions with a coding leaderboard on Supabase real-time backend.</li>
                    </ul>
                    <div class="tech-row">
                        <span class="tech-chip">React 18</span>
                        <span class="tech-chip">TypeScript</span>
                        <span class="tech-chip">Supabase</span>
                        <span class="tech-chip">Gemini AI</span>
                        <span class="tech-chip">Judge0 API</span>
                    </div>
                </div>

                <div class="proj-card">
                    <div class="exp-title">Cliniq — AI Medical Diagnosis Platform
                        <span style="display:inline-block;margin-left:8px;background:#fce4ec;color:#c62828;font-size:0.72rem;padding:2px 10px;border-radius:20px;font-weight:700;">🥈 1st Runner-Up, National Healthcare Hackathon 2026</span>
                    </div>
                    <div class="exp-company">Co-developer</div>
                    <div class="exp-date">2026</div>
                    <ul class="exp-bullets">
                        <li>Built AI clinical intake system: patients describe symptoms via chat/voice; AI conducts structured follow-up and auto-generates pre-consultation reports for the doctor's dashboard.</li>
                        <li>Doctor panel shows confidence-scored differential diagnoses, red-flag alerts, and suggested lab tests; pursuing startup incorporation.</li>
                    </ul>
                    <div class="tech-row">
                        <span class="tech-chip">AI / NLP</span>
                        <span class="tech-chip">Speech-to-Text</span>
                        <span class="tech-chip">Text-to-Speech</span>
                        <span class="tech-chip">React</span>
                    </div>
                </div>

                <div class="proj-card">
                    <div class="exp-title">MACRO — Multi-Agent Contextual Repository Orchestrator</div>
                    <div class="exp-company">Collaborator · Open Source (AGPL v3)</div>
                    <div class="exp-date">Aug 2024 – Jul 2025</div>
                    <ul class="exp-bullets">
                        <li>Contributed to a 12-stage agentic pipeline with AST-based code graph supporting 7 LLM providers (OpenAI, Anthropic, Gemini, Groq, DeepSeek); fully offline via Ollama. 420+ unit tests.</li>
                    </ul>
                    <div class="tech-row">
                        <span class="tech-chip">Python</span>
                        <span class="tech-chip">Agentic AI</span>
                        <span class="tech-chip">AST</span>
                        <span class="tech-chip">RAG</span>
                        <span class="tech-chip">Multi-LLM</span>
                    </div>
                </div>
            </div>

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
  link.download = 'Tarun_Pancholi_Resume.html';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};
