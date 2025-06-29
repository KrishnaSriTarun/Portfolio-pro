import React from 'react';

const Projects = ({ projects }) => (
  <section className="py-16 px-4 bg-white" id="projects">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
        Projects
      </h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-lg shadow-md p-6 flex flex-col justify-between"
          >
            <img
              src={project.image}
              alt={project.title}
              className="rounded-md mb-4 w-full h-48 object-cover"
            />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {project.title}
            </h3>
            <p className="text-gray-700 text-sm mb-4">{project.description}</p>
            <div className="mt-auto flex justify-between gap-4">
              <a
                href={project.live_link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center bg-blue-600 hover:bg-blue-700 text-white py-2 px-3 rounded transition"
              >
                Live
              </a>
              <a
                href={project.repo_link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center bg-gray-800 hover:bg-gray-900 text-white py-2 px-3 rounded transition"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
