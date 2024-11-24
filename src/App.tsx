import { Briefcase, ExternalLink, Github, Link, Mail } from "lucide-react";
import React from "react";
import Navbar from "./components/Navbar.tsx";
import Skillcard from "./components/Skillcard.tsx";
import { SkillsGraph } from "./components/SkillsGraph.tsx";
import { projects } from "./projects.tsx";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-mono">
      <Navbar />

      <main className="">
        <section
          id="home"
          className="h-screen flex items-center justify-center"
        >
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4 animate-pulse">
              Marius Lo
            </h1>
            <p className="text-xl mb-8">Computer Science Student</p>
            <div className="flex justify-center space-x-4">
              <a
                href="https://github.com/mariuslohoho"
                target="_blank"
                className="text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linktr.ee/mariusloyt"
                target="_blank"
                className="text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <Link size={24} />
              </a>
            </div>
          </div>
        </section>

        <section
          id="skills"
          className="min-h-screen flex items-center justify-center bg-gray-800"
        >
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {[
                "JavaScript",
                "React",
                "Node.js",
                "Python",
                "TailwindCSS",
                "Git",
              ].map((skill) => (
                <Skillcard key={skill} skillName={skill} />
              ))}
            </div>
            <br />
            <SkillsGraph />
          </div>
        </section>

        <section
          id="projects"
          className="min-h-screen flex items-center justify-center"
        >
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow flex flex-col"
                >
                  {project.icon ? (
                    React.cloneElement(project.icon, {
                      className: `w-8 h-8 mb-4 text-cyan-400`,
                    })
                  ) : (
                    <Briefcase className="w-8 h-8 mb-4 text-cyan-400" />
                  )}
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-1"></div>
                  <div className="flex space-x-1 mb-2">
                    {project.tags?.map((tag, index) => (
                      <div
                        key={index}
                        className="inline-block px-2 bg-cyan-800 rounded-sm"
                      >
                        {tag}
                      </div>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    className="text-cyan-400 hover:text-cyan-300 transition-colors inline-flex items-center"
                  >
                    View Project <ExternalLink className="ml-1 w-4 h-4" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="min-h-screen flex items-center justify-center bg-gray-800"
        >
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
            <div className="inline-block bg-gray-700 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Mail className="w-12 h-12 mb-4 text-cyan-400 mx-auto" />
              <p className="text-xl mb-4">mariuslo888@gmail.com</p>
              <a
                href="mailto:mariuslo888@gmail.com"
                className="bg-cyan-500 text-white px-6 py-2 rounded-full hover:bg-cyan-600 transition-colors inline-block"
              >
                Send Email
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-center py-4">
        <p>&copy; 2024 Marius Lo. All rights reserved.</p>
      </footer>
    </div>
  );
}
