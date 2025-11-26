import { useState, useEffect } from 'react';
import { Code2, Database, Server, Wrench, BookOpen, Mail, Github, Linkedin, ExternalLink, Menu, X, ArrowUp } from 'lucide-react';

export const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      const sections = ['hero', 'stack', 'experience', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const techStack = {
    frontend: {
      title: 'Frontend',
      description: 'Building responsive and dynamic user interfaces.',
      level: 'Intermediate',
      icon: <Code2 className="w-6 h-6" />,
      techs: ['React.js', 'React Native', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'Redux']
    },
    backend: {
      title: 'Backend',
      description: 'Creating robust APIs and server-side applications.',
      level: 'Advanced',
      icon: <Server className="w-6 h-6" />,
      techs: ['Java', 'Springboot', '.NET', 'C#', 'JWT', 'OAuth2']
    },
    database: {
      title: 'Database',
      description: 'Managing and designing efficient data storage solutions.',
      level: 'Intermediate',
      icon: <Database className="w-6 h-6" />,
      techs: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis']
    },
    tools: {
      title: 'Tools',
      description: 'Design, coding, and productivity tools.',
      level: 'Advanced',
      icon: <Wrench className="w-6 h-6" />,
      techs: ['Git', 'Docker', 'VS Code', 'Postman', 'Figma']
    },
    fundamentals: {
      title: 'Fundamentals',
      description: 'Core web development concepts and best practices.',
      level: 'Intermediate',
      icon: <BookOpen className="w-6 h-6" />,
      techs: ['Responsive Design', 'Performance Optimization', 'RESTful Architecture', 'Agile/Scrum']
    }
  };

  const experiences = [
    {
      company: 'Pandas',
      role: 'Junior Fullstack Developer',
      period: 'Oct 2024 - Present',
      duration: '1+ years',
      type: 'Full-Time',
      achievements: [
        'Designed, developed, and maintained both frontend and backend systems for a Facebook page management platform, enabling users to create orders, post content, process transactions, and manage messages.',
        'Led the development of new features and improvements across the entire stack, ensuring smooth interaction between frontend and backend components.',
        'Integrated third-party services and APIs, enhancing platform capabilities for payment processing, content distribution, and messaging',
        'Technologies: ReactJS, TypeScript, Spring Boot, Java, PostgreSQL, MongoDb, RESTful API, Caching, Docker,...'
      ]
    },
    {
      company: 'FPT Software',
      role: 'Internship',
      period: 'Dec 2024 - Apr 2025',
      duration: '4 months',
      type: 'Full-Time',
      achievements: [
        'Contributed to a healthcare management system that helps doctors and patients manage appointments and medical records.',
        'Developed an authentication and authorization service using Keycloak to manage API permissions. This service was designed to be reusable across multiple applications.',
        'Built a chatbot assistant for doctors to manage schedules, answer queries, and suggest prescriptions using OpenAI API.',
        'Technologies: Spring Boot, Spring Cloud, Spring Security, OAuth2, JWT, Hibernate, Docker, PostgreSQL, Redis, Caching. ReactJS, TypeScript.'
      ]
    }
  ];

  const projects = [
    {
      title: 'Divido - Expense Tracker Application',
      type: 'Team Project',
      description: 'A expense tracker application with real-time inventory management, payment integration, and admin dashboard.',
      techStack: ['ReactNative', 'TypeScript', 'Java', 'PostgreSQL'],
      image: '/divido-project.png',
      links: {
        github: 'https://github.com/search?q=topic:divido+user:sondm204&type=repositories',
        live: 'https://drive.google.com/drive/folders/1UReEkhxKTj_eEqSZJdWXJ1cV7b3qcce3?usp=sharing'
      }
    },
    {
      title: 'Coffee Shop Management System',
      type: 'Personal Project',
      description: 'A coffee shop management system with real-time updates, task assignment, and progress tracking features.',
      techStack: ['Java', 'Spring Boot', 'Spring MVC', 'MySQL', 'Thymeleaf'],
      image: '/coffeeshop-project.png',
      links: {
        github: 'https://github.com/sondm204/CoffeeShop',
        live: '#'
      }
    }
  ];

  const projectGridClasses = [
    'grid gap-8',
    projects.length > 1 ? 'md:grid-cols-2' : 'md:grid-cols-1',
    projects.length >= 3 ? 'lg:grid-cols-3' : projects.length === 2 ? 'lg:grid-cols-2' : 'lg:grid-cols-1',
    projects.length < 3 ? 'justify-center' : '',
    projects.length < 3 ? 'max-w-4xl mx-auto' : ''
  ].join(' ').trim();

  return (
    <div className="bg-gray-950 text-gray-100 min-h-screen relative">
      <div className='fixed bottom-5 right-5 z-50'>
        <div className='w-10 h-10 bg-emerald-500/50 hover:bg-emerald-500 transition-all duration-300 rounded-full flex items-center justify-center cursor-pointer' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <ArrowUp size={20} />
        </div>
      </div>
      {/* Animated background for entire app */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10"></div>
        {[...Array(80)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-emerald-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-lg z-50 border-b border-gray-800 relative">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent cursor-pointer">
              Portfolio
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {['Hero', 'Stack', 'Experience', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors hover:text-emerald-400 cursor-pointer ${activeSection === item.toLowerCase() ? 'text-emerald-400' : 'text-gray-400'
                    }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-400"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-4">
              {['Hero', 'Stack', 'Experience', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`block w-full text-left text-sm font-medium transition-colors hover:text-emerald-400 ${activeSection === item.toLowerCase() ? 'text-emerald-400' : 'text-gray-400'
                    }`}
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Animated background for entire app */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10"></div>
        {[...Array(80)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-emerald-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen mx-auto relative overflow-hidden pt-20 z-10">

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className='flex items-start justify-between'>
            <div className="text-center space-y-6">
              <div className="text-emerald-400 text-md font-mono">Hi, I'm</div>
              <h1 className="text-4xl md:text-7xl font-bold">
                <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                  FULLSTACK
                </span>
                <br />
                <span className="text-gray-200">DEVELOPER</span>
              </h1>
              <p className="text-gray-400 text-md md:text-lg max-w-2xl mx-auto">
                A passionate Fullstack Developer with 1+ years of experience in building high-performance,
                scalable, and responsive web applications using modern technologies.
              </p>

              <div className="flex items-center justify-center gap-6 pt-8">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="px-8 py-3 bg-emerald-500 text-white rounded-lg font-medium hover:bg-emerald-600 transition-colors cursor-pointer"
                >
                  Hire Me
                </button>
                <button
                  onClick={() => scrollToSection('projects')}
                  className="px-8 py-3 border border-gray-700 rounded-lg font-medium hover:border-emerald-500 hover:text-emerald-400 transition-colors cursor-pointer"
                >
                  View Work
                </button>
              </div>

              <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-16">
                <div>
                  <div className="text-4xl font-bold text-emerald-400">1+</div>
                  <div className="text-gray-400 text-sm mt-2">Years of Experience</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-emerald-400">10+</div>
                  <div className="text-gray-400 text-sm mt-2">Completed Projects</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-emerald-400">5K+</div>
                  <div className="text-gray-400 text-sm mt-2">Hours Worked</div>
                </div>
              </div>
            </div>
            <div className='w-1/2 relative'>
              <div className='absolute top-0 left-0 w-full h-full bg-emerald-500/20 rounded-full z-0'></div>
              <img src="/avatar.png" alt='avatar' className='w-full h-full object-cover rounded-full z-10 relative' />
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="stack" className="min-h-screen py-20 bg-gray-900/50 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Tech Stack</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 mx-auto mb-6"></div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              From frontend frameworks to backend systems, databases, DevOps, and key development principles -
              this is my tech toolkit.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(techStack).map(([key, stack]) => (
              <div
                key={key}
                className="bg-gray-800/50 backdrop-blur border border-gray-700 rounded-xl p-6 hover:border-emerald-500/50 transition-all group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="text-emerald-400 group-hover:scale-110 transition-transform">
                      {stack.icon}
                    </div>
                    <h3 className="text-xl font-semibold">{stack.title}</h3>
                  </div>
                  <span className="text-xs px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400">
                    {stack.level}
                  </span>
                </div>
                <p className="text-sm text-gray-400 mb-4">
                  {stack.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {stack.techs.map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs px-3 py-1 bg-gray-700/50 rounded-full text-gray-300 hover:bg-emerald-500/20 hover:text-emerald-400 transition-colors cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="min-h-screen py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Experiences</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 mx-auto mb-6"></div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A summary of the roles and responsibilities that have shaped my professional path so far
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-emerald-400 to-cyan-400"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                    }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1">
                    <div className="w-4 h-4 bg-emerald-400 rounded-full border-4 border-gray-950"></div>
                  </div>

                  {/* Date */}
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:text-right md:pl-12'} pl-8 md:pl-0`}>
                    <div className="text-emerald-400 font-semibold mb-2">{exp.period}</div>
                    <div className="text-gray-500 text-sm">{exp.duration}</div>
                  </div>

                  {/* Content */}
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'} pl-8 md:pl-0`}>
                    <div className="bg-gray-800/50 backdrop-blur border border-gray-700 rounded-xl p-6 hover:border-emerald-500/50 transition-all">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold mb-1">{exp.company}</h3>
                          <div className="flex items-center gap-3">
                            <span className="text-emerald-400 font-medium">{exp.role}</span>
                            <span className="text-xs px-2 py-1 rounded bg-amber-500/20 text-amber-400">
                              {exp.type}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <span className="text-emerald-400 mt-1.5">✓</span>
                            <p className="text-gray-300 text-sm">{achievement}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen py-20 bg-gray-900/50 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Projects</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 mx-auto mb-6"></div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Explore some of the personal and team-based projects I have built showcasing my skills and expertise.
            </p>
          </div>

          <div className={projectGridClasses}>
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur border flex flex-col border-gray-700 rounded-xl overflow-hidden hover:border-emerald-500/50 transition-all group"
              >
                <div className="relative h-48 overflow-hidden bg-gray-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-2 right-2">
                    <span className="text-xs px-3 py-1 rounded-full bg-purple-500/50 text-gray-300 backdrop-blur">
                      {project.type}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-400 text-sm mb-4">{project.description}</p>

                    <div className="mb-4">
                      <div className="text-xs text-gray-500 mb-2">Tech stack:</div>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech, i) => (
                          <span
                            key={i}
                            className="text-xs px-2 py-1 bg-gray-700/50 rounded text-gray-300 cursor-default hover:bg-emerald-500/20 hover:text-emerald-400 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={project.links.github}
                      target="_blank"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-gray-700 rounded-lg text-sm hover:border-emerald-500 hover:text-emerald-400 transition-colors"
                    >
                      <Github size={16} />
                      GitHub
                    </a>
                    <a
                      href={project.links.live}
                      target="_blank"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-emerald-500 text-white rounded-lg text-sm hover:bg-emerald-600 transition-colors"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen py-20 flex items-center relative z-10">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Contact Me</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 mx-auto mb-6"></div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              I'm always happy to discuss opportunities, answer questions, or explore new ideas.
              Send a message or connect online.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-6 flex flex-col justify-between">
              <div className="bg-gray-800/50 backdrop-blur border border-gray-700 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Mail className="w-5 h-5 text-emerald-400" />
                  Contact Information
                </h3>
                <p className="text-gray-400 text-sm mb-6">
                  Reach me directly via email or phone for questions or collaborations.
                </p>

                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Email</div>
                    <div className="text-emerald-400">sondm204.work@gmail.com</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Phone</div>
                    <div className="text-gray-300">+84 852187503</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Location</div>
                    <div className="text-gray-300">Hanoi, Vietnam</div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800/50 backdrop-blur border border-gray-700 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4">Connect with Me</h3>
                <p className="text-gray-400 text-sm mb-6">
                  Stay connected on social media for collaborations or updates.
                </p>
                <div className="flex gap-4">
                  <a href="https://github.com/sondm204" className="w-12 h-12 flex items-center justify-center bg-gray-700 rounded-lg hover:bg-emerald-500 transition-colors">
                    <Github size={20} />
                  </a>
                  <a href="https://www.linkedin.com/in/sondm204" className="w-12 h-12 flex items-center justify-center bg-gray-700 rounded-lg hover:bg-emerald-500 transition-colors">
                    <Linkedin size={20} />
                  </a>
                  <a href="mailto:sondm204.work@gmail.com" className="w-12 h-12 flex items-center justify-center bg-gray-700 rounded-lg hover:bg-emerald-500 transition-colors">
                    <Mail size={20} />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-800/50 backdrop-blur border border-gray-700 rounded-xl p-6">
              <form className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Name</label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:border-emerald-500 focus:outline-none text-gray-100"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:border-emerald-500 focus:outline-none text-gray-100"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Subject</label>
                  <input
                    type="text"
                    placeholder="Enter subject"
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:border-emerald-500 focus:outline-none text-gray-100"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Message</label>
                  <textarea
                    rows={4}
                    placeholder="Enter your message"
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:border-emerald-500 focus:outline-none text-gray-100 resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-emerald-500 text-white rounded-lg font-medium hover:bg-emerald-600 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-8 relative z-10">
        <div className="max-w-7xl mx-auto px-6 text-center text-gray-400 text-sm">
          <p>© 2024 Fullstack Developer Portfolio. All rights reserved.</p>
        </div>
      </footer>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </div>
  );
};