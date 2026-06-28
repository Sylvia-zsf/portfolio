import React, { useState, useEffect } from 'react'
import { Menu, X, Github, Linkedin, Mail, ExternalLink, Code, Palette, Zap, Award, Briefcase, GraduationCap, ChevronDown } from 'lucide-react'

interface Project {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  link: string
}

interface Skill {
  name: string
  level: number
  icon: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Full-stack shopping platform with real-time inventory and payment integration",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=600&h=400&fit=crop",
    tags: ["React", "Node.js", "MongoDB"],
    link: "#"
  },
  {
    id: 2,
    title: "AI Chat Application",
    description: "Real-time messaging app with AI-powered responses and sentiment analysis",
    image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=600&h=400&fit=crop",
    tags: ["TypeScript", "WebSocket", "OpenAI"],
    link: "#"
  },
  {
    id: 3,
    title: "Portfolio Dashboard",
    description: "Analytics dashboard for tracking portfolio performance and market trends",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    tags: ["React", "D3.js", "Firebase"],
    link: "#"
  },
  {
    id: 4,
    title: "Fitness Tracker App",
    description: "Mobile-first fitness tracking with workout plans and progress visualization",
    image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=600&h=400&fit=crop",
    tags: ["React Native", "Redux", "GraphQL"],
    link: "#"
  },
  {
    id: 5,
    title: "Social Media Manager",
    description: "Multi-platform social media scheduling and analytics tool",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop",
    tags: ["Vue.js", "Express", "PostgreSQL"],
    link: "#"
  },
  {
    id: 6,
    title: "Recipe Sharing Platform",
    description: "Community-driven recipe sharing with AI-powered meal planning",
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=600&h=400&fit=crop",
    tags: ["Next.js", "Prisma", "Tailwind"],
    link: "#"
  }
]

const skills: Skill[] = [
  { name: "React", level: 95, icon: "⚛️" },
  { name: "TypeScript", level: 90, icon: "📘" },
  { name: "Node.js", level: 88, icon: "🟢" },
  { name: "Python", level: 85, icon: "🐍" },
  { name: "UI/UX Design", level: 92, icon: "🎨" },
  { name: "MongoDB", level: 87, icon: "🍃" },
  { name: "AWS", level: 83, icon: "☁️" },
  { name: "GraphQL", level: 86, icon: "📊" }
]

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
      
      const sections = ['home', 'about', 'projects', 'skills', 'contact']
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      
      if (current) setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FF6F61] via-[#F7CAC9] to-[#88B04B] font-['Baloo_2'] overflow-x-hidden">
      {/* Memphis Background Patterns */}
      <div className="fixed inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 border-8 border-[#6B5B95] rounded-full animate-pulse"></div>
        <div className="absolute top-60 right-20 w-32 h-32 bg-[#FF6F61] transform rotate-45 animate-bounce"></div>
        <div className="absolute bottom-40 left-1/4 w-48 h-48 border-8 border-[#88B04B]" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-[#6B5B95] rounded-full"></div>
        <div className="absolute bottom-20 right-1/3 w-36 h-36 border-8 border-[#F7CAC9] transform rotate-12"></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-white/95 backdrop-blur-md shadow-[0_8px_0px_#6B5B95]' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-3xl font-black text-[#6B5B95] transform -rotate-2">
              PORTFOLIO
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {['home', 'about', 'projects', 'skills', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`font-bold text-lg capitalize transition-all ${
                    activeSection === section
                      ? 'text-[#FF6F61] scale-110'
                      : 'text-[#6B5B95] hover:text-[#FF6F61]'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden bg-[#FF6F61] text-white p-3 rounded-full shadow-[4px_4px_0px_#6B5B95] border-3 border-white"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-[6px_6px_0px_#6B5B95] border-4 border-[#6B5B95]">
              {['home', 'about', 'projects', 'skills', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left py-3 px-4 font-bold text-lg capitalize text-[#6B5B95] hover:bg-[#F7CAC9] rounded-xl transition-all"
                >
                  {section}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20 relative">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="mb-8 relative inline-block">
            <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-8 border-white shadow-[12px_12px_0px_#6B5B95] transform hover:rotate-6 transition-transform duration-300">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#FF6F61] rounded-full flex items-center justify-center border-4 border-white shadow-lg animate-bounce">
              <Zap className="w-8 h-8 text-white fill-white" />
            </div>
          </div>

          <h1 className="text-7xl md:text-8xl font-black text-white mb-6 transform -rotate-1 drop-shadow-[6px_6px_0px_#6B5B95]">
            HELLO, I'M
            <br />
            <span className="text-[#6B5B95] bg-white px-8 py-2 inline-block transform rotate-2 mt-4">
              ALEX CHEN
            </span>
          </h1>

          <p className="text-2xl md:text-3xl font-bold text-white mb-8 max-w-3xl mx-auto">
            Full-Stack Developer & Creative Designer
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <div className="bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full font-bold text-[#6B5B95] shadow-[4px_4px_0px_#6B5B95] border-3 border-[#6B5B95] flex items-center gap-2">
              <Code className="w-5 h-5" />
              Developer
            </div>
            <div className="bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full font-bold text-[#FF6F61] shadow-[4px_4px_0px_#FF6F61] border-3 border-[#FF6F61] flex items-center gap-2">
              <Palette className="w-5 h-5" />
              Designer
            </div>
            <div className="bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full font-bold text-[#88B04B] shadow-[4px_4px_0px_#88B04B] border-3 border-[#88B04B] flex items-center gap-2">
              <Award className="w-5 h-5" />
              Innovator
            </div>
          </div>

          <div className="flex items-center justify-center gap-4">
            <button
              onClick={() => scrollToSection('projects')}
              className="bg-gradient-to-r from-[#FF6F61] to-[#88B04B] hover:from-[#ff5647] hover:to-[#7a9e42] text-white font-black px-8 py-4 rounded-full shadow-[6px_6px_0px_#6B5B95] border-4 border-white transition-all hover:shadow-[8px_8px_0px_#6B5B95] hover:-translate-y-1 text-lg"
            >
              VIEW MY WORK
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-white hover:bg-[#F7CAC9] text-[#6B5B95] font-black px-8 py-4 rounded-full shadow-[6px_6px_0px_#6B5B95] border-4 border-[#6B5B95] transition-all hover:shadow-[8px_8px_0px_#6B5B95] hover:-translate-y-1 text-lg"
            >
              GET IN TOUCH
            </button>
          </div>

          <div className="mt-12 animate-bounce">
            <ChevronDown className="w-12 h-12 text-white mx-auto" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center justify-center px-6 py-20 relative">
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-6xl font-black text-white text-center mb-16 transform -rotate-1 drop-shadow-[4px_4px_0px_#6B5B95]">
            ABOUT ME
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-[10px_10px_0px_#6B5B95] border-6 border-[#6B5B95] relative overflow-hidden">
              <div className="absolute top-4 right-4 w-20 h-20 bg-[#FF6F61] rounded-full opacity-20"></div>
              <Briefcase className="w-12 h-12 text-[#FF6F61] mb-4" />
              <h3 className="text-3xl font-black text-[#6B5B95] mb-4">Experience</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-[#FF6F61] pl-4">
                  <h4 className="font-bold text-xl text-[#6B5B95]">Senior Developer</h4>
                  <p className="text-gray-600 font-medium">Tech Innovations Inc. • 2021-Present</p>
                  <p className="text-gray-700 mt-2">Leading development of scalable web applications and mentoring junior developers.</p>
                </div>
                <div className="border-l-4 border-[#88B04B] pl-4">
                  <h4 className="font-bold text-xl text-[#6B5B95]">Full-Stack Developer</h4>
                  <p className="text-gray-600 font-medium">Digital Solutions Co. • 2019-2021</p>
                  <p className="text-gray-700 mt-2">Built and maintained multiple client projects using modern tech stacks.</p>
                </div>
              </div>
            </div>

            <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-[10px_10px_0px_#88B04B] border-6 border-[#88B04B] relative overflow-hidden">
              <div className="absolute top-4 right-4 w-20 h-20 bg-[#88B04B] rounded-full opacity-20"></div>
              <GraduationCap className="w-12 h-12 text-[#88B04B] mb-4" />
              <h3 className="text-3xl font-black text-[#6B5B95] mb-4">Education</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-[#88B04B] pl-4">
                  <h4 className="font-bold text-xl text-[#6B5B95]">B.S. Computer Science</h4>
                  <p className="text-gray-600 font-medium">Tech University • 2015-2019</p>
                  <p className="text-gray-700 mt-2">Graduated with honors. Focus on software engineering and AI.</p>
                </div>
                <div className="border-l-4 border-[#FF6F61] pl-4">
                  <h4 className="font-bold text-xl text-[#6B5B95]">Certifications</h4>
                  <p className="text-gray-700 mt-2">AWS Certified Developer, Google UX Design Professional Certificate</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-[10px_10px_0px_#6B5B95] border-6 border-[#6B5B95]">
            <p className="text-xl text-gray-700 leading-relaxed">
              I'm a passionate developer and designer who loves creating beautiful, functional digital experiences. 
              With over 5 years of experience in full-stack development, I specialize in building scalable web applications 
              that combine cutting-edge technology with intuitive design. When I'm not coding, you'll find me exploring 
              new design trends, contributing to open-source projects, or mentoring aspiring developers.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen flex items-center justify-center px-6 py-20 relative">
        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <h2 className="text-6xl font-black text-white text-center mb-16 transform -rotate-1 drop-shadow-[4px_4px_0px_#6B5B95]">
            MY PROJECTS
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="group bg-white/95 backdrop-blur-sm rounded-3xl overflow-hidden shadow-[8px_8px_0px_#6B5B95] border-5 border-[#6B5B95] hover:shadow-[12px_12px_0px_#6B5B95] hover:-translate-y-2 transition-all duration-300"
                style={{
                  animation: `slideIn 0.5s ease-out ${index * 0.1}s both`
                }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <a
                    href={project.link}
                    className="absolute top-4 right-4 bg-white text-[#6B5B95] p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-black text-[#6B5B95] mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-700 mb-4 font-medium">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-[#F7CAC9] text-[#6B5B95] px-3 py-1 rounded-full text-sm font-bold border-2 border-[#6B5B95]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen flex items-center justify-center px-6 py-20 relative">
        <div className="max-w-6xl mx-auto relative z-10 w-full">
          <h2 className="text-6xl font-black text-white text-center mb-16 transform -rotate-1 drop-shadow-[4px_4px_0px_#6B5B95]">
            MY SKILLS
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-[6px_6px_0px_#6B5B95] border-4 border-[#6B5B95]"
                style={{
                  animation: `slideIn 0.5s ease-out ${index * 0.05}s both`
                }}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{skill.icon}</span>
                    <span className="text-xl font-black text-[#6B5B95]">{skill.name}</span>
                  </div>
                  <span className="text-2xl font-black text-[#FF6F61]">{skill.level}%</span>
                </div>
                <div className="bg-gray-200 rounded-full h-4 overflow-hidden border-3 border-[#6B5B95]">
                  <div
                    className="bg-gradient-to-r from-[#FF6F61] to-[#88B04B] h-full rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center px-6 py-20 relative">
        <div className="max-w-4xl mx-auto relative z-10 w-full">
          <h2 className="text-6xl font-black text-white text-center mb-16 transform -rotate-1 drop-shadow-[4px_4px_0px_#6B5B95]">
            GET IN TOUCH
          </h2>

          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-[12px_12px_0px_#6B5B95] border-6 border-[#6B5B95]">
            <p className="text-xl text-gray-700 text-center mb-8 font-medium">
              I'm always open to new opportunities and collaborations. Let's create something amazing together!
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <a
                href="mailto:alex@example.com"
                className="flex flex-col items-center gap-3 bg-[#FF6F61] hover:bg-[#ff5647] text-white p-6 rounded-2xl shadow-[4px_4px_0px_#6B5B95] border-3 border-white transition-all hover:shadow-[6px_6px_0px_#6B5B95] hover:-translate-y-1"
              >
                <Mail className="w-8 h-8" />
                <span className="font-bold">Email Me</span>
              </a>

              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3 bg-[#6B5B95] hover:bg-[#5a4a7d] text-white p-6 rounded-2xl shadow-[4px_4px_0px_#FF6F61] border-3 border-white transition-all hover:shadow-[6px_6px_0px_#FF6F61] hover:-translate-y-1"
              >
                <Github className="w-8 h-8" />
                <span className="font-bold">GitHub</span>
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3 bg-[#88B04B] hover:bg-[#7a9e42] text-white p-6 rounded-2xl shadow-[4px_4px_0px_#6B5B95] border-3 border-white transition-all hover:shadow-[6px_6px_0px_#6B5B95] hover:-translate-y-1"
              >
                <Linkedin className="w-8 h-8" />
                <span className="font-bold">LinkedIn</span>
              </a>
            </div>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-6 py-4 rounded-xl border-4 border-[#6B5B95] focus:border-[#FF6F61] outline-none font-bold text-[#6B5B95] shadow-[4px_4px_0px_#6B5B95] transition-all"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-6 py-4 rounded-xl border-4 border-[#6B5B95] focus:border-[#FF6F61] outline-none font-bold text-[#6B5B95] shadow-[4px_4px_0px_#6B5B95] transition-all"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full px-6 py-4 rounded-xl border-4 border-[#6B5B95] focus:border-[#FF6F61] outline-none font-bold text-[#6B5B95] shadow-[4px_4px_0px_#6B5B95] transition-all"
              />
              <textarea
                placeholder="Your Message"
                rows={6}
                className="w-full px-6 py-4 rounded-xl border-4 border-[#6B5B95] focus:border-[#FF6F61] outline-none font-bold text-[#6B5B95] shadow-[4px_4px_0px_#6B5B95] transition-all resize-none"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#FF6F61] to-[#88B04B] hover:from-[#ff5647] hover:to-[#7a9e42] text-white font-black py-4 rounded-xl shadow-[6px_6px_0px_#6B5B95] border-4 border-white transition-all hover:shadow-[8px_8px_0px_#6B5B95] hover:-translate-y-1 text-lg"
              >
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#6B5B95] text-white py-8 relative z-10">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-xl font-bold mb-4">© 2024 Alex Chen. All rights reserved.</p>
          <p className="text-lg opacity-90">Built with ❤️ using React & Memphis Design</p>
        </div>
      </footer>

      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  )
}

export default App
