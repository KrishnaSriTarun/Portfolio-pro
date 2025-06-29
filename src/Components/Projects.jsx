import React from 'react';

const projects = [
  {
    title: 'NeuroSpeak',
    description:
      'Developed an AI-driven communication improvement tool that enhances public speaking skills through real-time analysis. Includes facial expression analysis and grammar/tone feedback.',
    image: 'NeuroSpeak.png',
    live_link: 'https://neurospeak.onrender.com/',
    repo_link: 'https://github.com/Vanshjais1777/NeuroSpeak',
  },
  {
    title: 'SKILL-SPHERE',
    description:
      "AI-driven internship/job platform with an AI chatbot powered by Gemini API to recommend jobs based on user skills. Runner-up at SIH 2024 (top 2.4% nationally).",
    image: 'SkillSphere.png',
    live_link: 'https://titans-mx-frontend.onrender.com/',
    repo_link: 'https://github.com/Vanshjais1777/Titans_MX',
  },
  {
    title: 'Biryani Wala – Restaurant Website',
    description:
      'Responsive website for a local cafe with an interactive menu and vibrant visuals. Built with React, TypeScript, Tailwind, and Netlify.',
    image: 'Biryani Wala.png',
    live_link: 'https://gkpbiryaniwala.netlify.app/',
    repo_link: 'https://github.com/Vanshjais1777/Gkp-Biryani-Wala',
  },
  {
    title: 'Forever E-commerce',
    description:
      'Full-stack e-commerce platform with JWT auth, product filtering, cart/order management, and admin dashboard. MERN stack with responsive design.',
    image: 'Forever.png',
    live_link: 'https://forever-fullstack-2-o-frontend.onrender.com/',
    repo_link: 'https://github.com/Vanshjais1777/Forever-Fullstack-2.O',
  },
  {
    title: 'Roomi AI',
    description:
      'AI-powered interior design assistant with Clerk-auth login. Placeholder for image-gen APIs. Frontend built using React and Tailwind.',
    image: 'Roomi AI.png',
    live_link: 'https://roomi-ai.vercel.app/',
    repo_link: 'https://github.com/Vanshjais1777/Roomi-AI',
  },
  {
    title: 'AirSwitch – IoT Appliance Controller',
    description:
      'Smart home appliance controller using React, Firebase, and NodeMCU. Real-time device switching and control with relay integration.',
    image: 'AirSwitch.png',
    live_link: 'https://airswitch-fullstack-frontend.onrender.com',
    repo_link: 'https://github.com/Vanshjais1777/AirSwitch-Fullstack',
  },
];

const Projects = () => (
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
