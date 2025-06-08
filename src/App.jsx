import './App.css';
import { FaLightbulb, FaGamepad, FaTerminal, FaHtml5, FaTools, FaUsers, FaBullseye } from 'react-icons/fa';
import { LayoutDashboard, GraduationCap, Gamepad2, BookOpenCheck, Languages, MapPin, Github } from 'lucide-react';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFound from './NotFound.jsx';
import MeModal from './MeModal.jsx';
import profilePic from './assets/profile.jpg';

// Font suggestion: 'Orbitron', 'Rajdhani', or 'Share Tech Mono' from Google Fonts for a sci-fi look

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({});
  const [theme, setTheme] = useState('dark');
  const [meOpen, setMeOpen] = useState(false);

  const projects = [
    {
      icon: <LayoutDashboard className="icon-lucide" />, 
      title: 'Personal Portfolio Website',
      desc: 'Futuristic dark theme, glowing neon, animated UI',
      details: 'Built with React, Vite, and Lucide icons. Features animated backgrounds, responsive layout, and modern UI/UX.'
    },
    {
      icon: <Gamepad2 className="icon-lucide" />, 
      title: '[Coming Soon] 3D Space Horror Game',
      desc: 'Unity, C#, space station horror, mission checkpoints',
      details: 'A 3D horror game set in space, featuring mission checkpoints, immersive sound, and interactive gameplay.'
    }
  ];

  const openModal = (project) => {
    setModalContent(project);
    setModalOpen(true);
  };
  const closeModal = () => setModalOpen(false);
  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div className={`portfolio-bg${theme === 'light' ? ' light-mode' : ''}`}>
            {/* ME Button */}
            <button className="me-btn" onClick={() => setMeOpen(true)} aria-label="About Me">ME</button>
            <MeModal open={meOpen} onClose={() => setMeOpen(false)} />
            {/* Theme Toggle Button */}
            <button className="theme-toggle-btn" onClick={toggleTheme} aria-label="Toggle light/dark mode">
              {theme === 'dark' ? '🌙 Dark' : '☀️ Light'}
            </button>
            {/* Animated Background */}
            <div className="animated-bg">
              {/* Example: SVG waves, floating shapes, or use a particles.js library for more */}
              <svg className="wave" viewBox="0 0 1440 320"><path fill="#a259ff44" fillOpacity="1" d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,133.3C840,107,960,85,1080,101.3C1200,117,1320,171,1380,197.3L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
            </div>
            {/* Sticky/Animated Navbar */}
            <nav className="navbar">
              <div className="nav-logo">My Portfolio</div>
              <div className="nav-links">
                <a href="#skills">Skills</a>
                <a href="#objectives">Objectives</a>
                <a href="#projects">Projects</a>
                <a href="#education">Education</a>
                <a href="#achievements">Achievements</a>
                <a href="#contact">Contact</a>
              </div>
            </nav>
            {/* Glowing Headline */}
            <header className="headline-section">
              <div className="floating-container">
                <div className="orb orb1"></div>
                <div className="orb orb2"></div>
                <div className="orb orb3"></div>
                {/* White light orbs for extra floating effect */}
                <div className="orb orb-white orbw1"></div>
                <div className="orb orb-white orbw2"></div>
                <div className="orb orb-white orbw3"></div>
                <div className="orb orb-white orbw4"></div>
                <div className="orb orb-white orbw5"></div>
                <div className="orb orb-white orbw6"></div>
              </div>
              <h1 className="glow">Aadhithya Mahesh</h1>
              <p className="subtitle">From Ideas to Playable Universes</p>
              <div className="glow-buttons">
                <button className="glow-btn">Download Resume</button>
                <button className="glow-btn" onClick={() => openModal(projects[0])}>Projects</button>
                <button className="glow-btn" onClick={() => setModalContent({
                  icon: <svg xmlns='http://www.w3.org/2000/svg' width='28' height='28' fill='none' viewBox='0 0 24 24'><path fill='#a259ff' d='M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zM4 20V8.99l8 7 8-7V20H4z'/></svg>,
                  title: 'Contact Information',
                  desc: 'Let\'s connect!',
                  details: (
                    <div style={{textAlign: 'center'}}>
                      <div style={{marginBottom: '0.7rem'}}>
                        <strong>Email:</strong> <a href="mailto:aadhithya.mahesh@gmail.com" style={{color: '#a259ff', textDecoration: 'underline'}}>aadhithya.mahesh@gmail.com</a>
                      </div>
                      <div style={{marginBottom: '0.7rem'}}>
                        <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/aadhithya-mahesh" target="_blank" rel="noopener noreferrer" style={{color: '#a259ff', textDecoration: 'underline'}}>Aadhithya Mahesh</a>
                      </div>
                      <div>
                        <strong>GitHub:</strong> <a href="https://github.com/aadz-msa" target="_blank" rel="noopener noreferrer" style={{color: '#a259ff', textDecoration: 'underline'}}>aadz-msa</a>
                      </div>
                    </div>
                  )
                }); setModalOpen(true);}>Contact Me</button>
              </div>
            </header>
            {/* Skills Section */}
            <section id="skills" className="skills-section">
              <h2 className="section-title"><span className="icon-glow"><FaLightbulb /></span> Skills</h2>
              <div className="skills-cards">
                <div className="skill-card"><span className="icon-glow"><FaGamepad /></span>Game Development: Unity, C# (Basics), Scripting</div>
                <div className="skill-card"><span className="icon-glow"><FaTerminal /></span>Vibe Coding</div>
                <div className="skill-card"><span className="icon-glow"><FaHtml5 /></span>Web Development: HTML5</div>
                <div className="skill-card"><span className="icon-glow"><FaTools /></span>Tools: VS Code, GitHub, Figma (Basics)</div>
                <div className="skill-card"><span className="icon-glow"><FaUsers /></span>Soft Skills: Problem-solving, Team Collaboration, Communication, Creativity</div>
              </div>
            </section>
            <div className="curve-divider"></div>
            {/* Career Objective Section */}
            <section id="objectives" className="objectives-section">
              <h2 className="section-title"><span className="icon-glow"><FaBullseye /></span> Career Objective</h2>
              <p className="objectives-text">To contribute as a dynamic and creative game developer by building immersive, interactive, and technically sound digital experiences using modern technologies. Eager to work in a forward-thinking environment that values innovation and user engagement.</p>
            </section>
            <div className="curve-divider"></div>
            {/* Projects Section */}
            <section id="projects" className="skills-section">
              <h2 className="section-title">Projects</h2>
              <div className="skills-cards">
                {projects.map((project, idx) => (
                  <div key={project.title} className="skill-card project-card flex items-center gap-2" onClick={() => openModal(project)} style={{cursor: 'pointer'}}>
                    {project.icon}
                    <div>
                      <div className="font-medium">{project.title}</div>
                      <div className="text-gray-300">{project.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
            {modalOpen && (
              <div className="modal-overlay" onClick={closeModal}>
                <div className="modal-content" onClick={e => e.stopPropagation()}>
                  <button className="modal-close" onClick={closeModal}>&times;</button>
                  <div style={{marginBottom: '1rem'}}>{modalContent.icon}</div>
                  <h3 style={{color: '#a259ff', fontSize: '1.2rem', marginBottom: '0.5rem'}}>{modalContent.title}</h3>
                  <div style={{color: '#fff', marginBottom: '0.5rem'}}>{modalContent.desc}</div>
                  <div style={{color: '#bdbdfc'}}>{modalContent.details}</div>
                </div>
              </div>
            )}
            <div className="curve-divider"></div>
            {/* Education Section */}
            <section id="education" className="objectives-section">
              <h2 className="section-title flex items-center gap-2">
                <GraduationCap className="icon-lucide" />Education
              </h2>
              <p className="objectives-text">B.E. – Computer Science and Engineering<br/>Stella Mary’s College of Engineering, Tamil Nadu<br/>Expected Graduation: 2028</p>
            </section>
            <div className="curve-divider"></div>
            {/* Achievements Section */}
            <section id="achievements" className="skills-section">
              <h2 className="section-title flex items-center gap-2">
                <LayoutDashboard className="icon-lucide" />Achievements & Learning
              </h2>
              <ul style={{maxWidth: '600px', margin: '0 auto', color: '#f3f3fa', fontSize: '1.05rem'}}>
                <li>Participated in the Bashers Campaign under the Belmonts Clan</li>
                <li>Completed tasks involving GitHub, LinkedIn Learning, and real-world project collaboration</li>
                <li>Completed LinkedIn courses on Web Development & GitHub Deployment</li>
              </ul>
            </section>
            <div className="curve-divider"></div>
            {/* Languages Section */}
            <section className="objectives-section">
              <h2 className="section-title flex items-center gap-2">
                <Languages className="icon-lucide" />Languages
              </h2>
              <p className="objectives-text">English – Fluent<br/>Malayalam – Native<br/>Tamil – Fluent</p>
            </section>
            <div className="curve-divider"></div>
            {/* Hobbies Section */}
            <section className="skills-section">
              <h2 className="section-title flex items-center gap-2">
                <Gamepad2 className="icon-lucide" />Hobbies
              </h2>
              <div className="text-gray-300" style={{textAlign: 'center', margin: '0 auto', maxWidth: '600px'}}>
                <div>Exploring new game mechanics and UI/UX ideas</div>
                <div>Playing and analyzing retro video games</div>
                <div>Following trends in interactive and immersive technology</div>
              </div>
            </section>
            <div className="curve-divider"></div>
            {/* Learning Section */}
            <section className="objectives-section">
              <h2 className="section-title flex items-center gap-2">
                <BookOpenCheck className="icon-lucide" />Learning
              </h2>
              <p className="objectives-text">Unity, C#, Web Tech, Real-world project collaboration, LinkedIn courses</p>
            </section>
            <div className="curve-divider"></div>
            {/* Contact Section */}
            <footer id="contact" className="footer-section">
              <div className="flex items-center gap-2 justify-center mb-2">
                <MapPin className="icon-lucide" />
                <span className="font-medium">Location:</span>
                <span className="text-gray-300">Tamil Nadu, India</span>
              </div>
              <div className="flex items-center gap-2 justify-center mb-2">
                <Github className="icon-lucide" />
                <span className="font-medium">GitHub:</span>
                <a href="https://github.com/aadz-msa" className="text-sky-300 hover:underline" target="_blank" rel="noopener noreferrer">aadz-msa</a>
              </div>
              <p>
                <a href="mailto:aadhithya.mahesh@gmail.com" style={{color: '#a259ff', textDecoration: 'underline', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.5rem'}}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="#a259ff" style={{verticalAlign: 'middle'}}><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zM4 20V8.99l8 7 8-7V20H4z"/></svg>
                  aadhithya.mahesh@gmail.com
                </a>
              </p>
              <p>
                <a href="https://www.linkedin.com/in/aadhithya-mahesh" target="_blank" rel="noopener noreferrer" style={{color: '#a259ff', textDecoration: 'underline', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.5rem'}}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="#a259ff" style={{verticalAlign: 'middle'}}><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z"/></svg>
                  LinkedIn: Aadhithya Mahesh
                </a>
              </p>
              <div style={{marginTop: '2rem', color: '#a259ff99', fontSize: '0.95rem', textAlign: 'center'}}>
                &copy; {new Date().getFullYear()} Aadhithya Mahesh. All rights reserved.
              </div>
            </footer>
          </div>
        } />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
