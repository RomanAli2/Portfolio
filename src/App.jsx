import { motion } from "framer-motion";
import './App.css'
 function App() {
  const projects = [
    {
      id: 1,
      title: "ForageBoard Web",
      description:
        "A sleek, responsive web dashboard designed to help users manage tasks and data efficiently. Features Dark/Light mode toggle and a clean interface.",
      tech: ["Vue.js", "Tailwind", "Responsive UI"],
      image:
        "/image/12.png",
        liveDemo:"https://forge-board.vercel.app/"

    },
    {
      id: 2,
      title: "Be My Courier Dashboard",
      description:
        "Clean and modern dashboard frontend with reusable components.",
      tech: ["React.js", "Tailwind", "Responsive UI","Dashboard"],
      image:
        "/image/Untitled.png",
      liveDemo:"https://be-my-courier.vercel.app/"
      },
    {
      id: 3,
      title: "Notaion Web",
      description:
        "Clean and modern frontend web for paractice  with reusable components.",
      tech: ["Vue.js", "Tailwind", "Responsive UI","Dashboard"],
      image:
        "/image/notion-two-dusky.vercel.app_.png",
      liveDemo:"https://notion-two-dusky.vercel.app/"
      },
      {
      id: 4,
      title: "Amazora Web",
      description:
        "Clean and modern e comrence web.Focused on performance and shopping flow.",
      tech: ["Vue.js", "Tailwind", "Responsive UI"],
      image:
        "/image/amazora-teal.vercel.app_(iPad Pro).png",
      liveDemo:"https://amazora-teal.vercel.app/"
      },
      {
      id: 5,
      title: "Weather Web",
      description:
        "Real-time weather forecast webapp built with react and tailwind css.  ",
      tech: ["React.js", "Tailwind", "Responsive UI",],
      image:
        "/image/Untitled2.png",
      liveDemo:"https://react-weather-web.vercel.app/"
      },
  ];

  const skills = [
    "React.js",
    "Vue.js",
    "JavaScript",
    "Tailwind CSS",
    "HTML",
    "CSS",
    "Responsive Web Design",
    "Git & GitHub",
    "API Integration",
    "Node js (basic knowledge)"
   
  ];
  const Constact=[
    {icon:"fab fa-linkedin",title:"LinkedIn",Link:"https://www.linkedin.com/in/roman-ali-frontend/"},
     {icon:"fab fa-instagram",title:"Instagram",Link:"https://www.instagram.com/be_like_roman/"},
     {icon:"fas fa-briefcase",title:"Fiverr",Link:"https://www.fiverr.com/pe/kL6BYgy"},
     {icon:"fab fa-github",title:"Github",Link:"https://github.com/RomanAli2"},


    ]

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="bg-linear-to-b from-white to-purple-50 min-h-screen text-gray-900 scroll-smooth">
      {/* Navbar */}
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="sticky top-0 z-50 backdrop-blur-md bg-white/70 border-b border-purple-100"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-wrap gap-3 md:gap-0 justify-between items-center">
          <h1 className="text-2xl font-bold text-purple-700">Roman Ali</h1>

          <div className="flex gap-8  font-medium text-gray-700">
            {["About", "Projects", "Skills", "Contact"].map((item, i) => (
              <a
                key={i}
                href={`#${item.toLowerCase()}`}
                className="hover:text-purple-600 transition"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
        >
          <p className="text-purple-600 font-semibold mb-3">
            WELCOME TO MY PORTFOLIO

          </p>

          <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
            Hi,i am <br/><span className="text-purple-600">ROMAN ALI</span>
          </h1>

          <p className="text-gray-600 text-lg leading-8 max-w-xl">
            I build modern, fast and responsive web applications using React, Vue.js and Tailwind CSS with clean UI and smooth user experience.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="bg-purple-600 hover:bg-purple-700 transition text-white px-7 py-3 rounded-2xl font-semibold shadow-lg"
            >
              View Projects
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/Resume.pdf"
              download
              className="border border-purple-300 hover:bg-purple-100 transition px-7 py-3 rounded-2xl font-semibold"
            >
              Download Resume
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-purple-300 blur-3xl opacity-30 rounded-full" />

          <motion.div
            whileHover={{ scale: 1.03, rotate: 1 }}
            className="relative flex justify-center bg-white/70 backdrop-blur-xl border border-purple-100 rounded-3xl p-8 shadow-2xl text-center"
          >
            <img
              src="/image/Gemini_Generated_Image_992ueo992ueo992u.png"
              alt="developer"
              className="rounded-full text-center w-80 md:h-100 md:w-100 h-80 "
            />
          </motion.div>
        </motion.div>
      </section>

      {/* About */}
      <motion.section
        id="about"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
        className="max-w-7xl mx-auto px-6 py-20"
      >
        <div className="bg-white rounded-3xl p-10 shadow-xl border border-purple-100">
          <h2 className="text-4xl font-bold mb-6 text-purple-700">About Me</h2>

          <p className="text-gray-600 text-md leading-9">
            Hi, I am Roman Ali from Pakistan. I completed my matriculation from Kot Momin Dar ul Huda School and studied Frontend Web Development at Hadian Creative.

I am a Frontend Developer who builds modern, responsive websites like e-commerce, business and professional web apps.

My goal is to improve my skills and become a professional developer.
<br/>
My favorite qoutes is :<strong className="text-purple-500">" Hard work beats talent when talent doesn’t work hard "</strong>
          </p>
        </div>
      </motion.section>

      {/* Projects */}
      <section id="projects" className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-purple-700 mb-12">Projects</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-3xl overflow-hidden shadow-xl border border-purple-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-74 w-full "
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-5">{project.description}</p>

                <div className="flex flex-wrap gap-3 mb-6">
                  {project.tech.map((item, index) => (
                    <span
                      key={index}
                      className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="flex items-end gap-4">
                  <a target="_blank" href={project.liveDemo} className="bg-purple-600 cursor-pointer  text-white px-5 py-2 rounded-xl hover:bg-purple-700 transition">
                    Live Demo
                  </a>
                 
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-purple-700 mb-12">Skills</h2>

        <div className="flex flex-wrap gap-5">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1 }}
              className="bg-white border border-purple-100 px-6 py-4 rounded-2xl shadow-md font-medium"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <motion.section
        id="contact"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
        className="max-w-7xl mx-auto px-6 py-20"
      >
        <div className="bg-white rounded-3xl p-10 shadow-xl border border-purple-100">
          <h2 className="text-4xl font-bold text-purple-700 mb-10">
            Contact Me
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {Constact.map((item, i) => (
           <a target="_blank" href={item.Link} className="bg-purple-100 hover:bg-purple-200/90 transition items-center py-3 rounded-2xl ">
                <motion.a
                key={i}
                whileHover={{ scale: 1.05 }}
                className="text-center font-semibold"
              > 
              <h1><i className={item.icon}></i> {item.title}</h1> 
            
              </motion.a>
              </a>
          
            ))}
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="border-t border-purple-100 py-8 text-center text-gray-500">
        © 2026 All Rights Reserved.
      </footer>
    </div>
  );
}

export default App