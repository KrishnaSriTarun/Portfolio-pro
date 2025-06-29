import React from 'react';

const projects = [
  {
    title: 'NeuroSpeak',
    description:
      'Developed an AI-driven communication improvement tool that enhances public speaking skills through real-time analysis. Implemented video mode for facial expression analysis, providing emotion detection percentages to help users refine their interview expressions. Built an audio mode that detects Grammar and tone.',
    image: 'NeuroSpeak.png',
    live_link: 'https://neurospeak.onrender.com/',
    repo_link: 'https://github.com/Vanshjais1777/NeuroSpeak',
  },
  {
    title: 'SKILL-SPHERE',
    description:
      "Developed an AI-driven internship/job platform using React.js, Node.js, Express, MongoDB, and Tailwind CSS. Integrated a cutting-edge AI chatbot powered by Gemini API to recommend jobs based on the user's skillset and experience. Recognized as a runner-up at Smart India Hackathon 2024, placing in the top 2.4% nationally. Delivered front-end with optimized UI/UX in a fast-paced environment.",
    image: 'SkillSphere.png',
    live_link: 'https://titans-mx-frontend.onrender.com/',
    repo_link: 'https://github.com/Vanshjais1777/Titans_MX',
  },
  {
    title: 'Biryani Wala – Restaurant Website',
    description:
      'Designed and developed a visually engaging and mobile-responsive website for Biryani Wala, a local food cafe in Gorakhpur. The site features an interactive menu, vibrant hero section, customer testimonials, and a strong brand identity. Built using React.js, TypeScipt, Tailwind CSS, and deployed via Netlify.',
    image: 'Biryani Wala.png',
    live_link: 'https://gkpbiryaniwala.netlify.app/',
    repo_link: 'https://github.com/Vanshjais1777/Gkp-Biryani-Wala',
  },
  {
    title: 'Forever E-commerce',
    description:
      'Built a full-stack e-commerce shopping platform with a modern user interface and seamless shopping experience. Features include JWT-based authentication, product search and filtering, cart and order management, and an admin panel for managing products and orders. Fully responsive for all devices, and powered by React.js, Node.js, Express, MongoDB, and Tailwind CSS.',
    image: 'Forever.png',
    live_link: 'https://forever-fullstack-2-o-frontend.onrender.com/',
    repo_link: 'https://github.com/Vanshjais1777/Forever-Fullstack-2.O',
  },
  {
    title: 'Roomi AI',
    description:
      'Built an AI-powered interior design assistant that helps users generate room layouts and decor suggestions. Implemented Clerk authentication for secure user login and personalized access. Due to the lack of free image-to-image generation APIs, the AI generation feature is currently placeholder. Frontend built with React and Tailwind CSS.',
    image: 'Roomi AI.png',
    live_link: 'https://roomi-ai.vercel.app/',
    repo_link: 'https://github.com/Vanshjais1777/Roomi-AI',
  },
  {
    title: 'AirSwitch – IoT Appliance Controller',
    description:
      'Created a real-time smart appliance control system using React.js and Firebase Realtime Database. Users can remotely switch home devices on/off via a web interface. Integrated with NodeMCU (ESP8266) and relay circuits for hardware interaction. Features real-time sync, minimal UI, and responsive design.',
    image: 'AirSwitch.png',
    live_link: 'https://airswitch-fullstack-frontend.onrender.com',
    repo_link: 'https://github.com/Vanshjais1777/AirSwitch-Fullstack',
  },
];

const Projects = () => (
  <section className="py-12 px-4 text-center bg-white dark:bg-gray-950" id="projects">
    <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Projects</h2>
    <div className="grid md:grid-cols-3 gap-8 w-full">
      {projects.map((project, index) => (
        <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4">
          <img
            src={project.image}
            alt={project.title}
            className="rounded mb-4 w-full h-auto object-cover"
          />
          <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
            {project.title}
          </h3>
          <p className="mb-4 text-gray-600 dark:text-gray-300">{project.description}</p>
          <div className="flex justify-center items-center gap-8">
            <a
              href={project.live_link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition"
            >
              Visit Project
            </a>
            <a
              href={project.repo_link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition"
            >
              GitHub Repo
            </a>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
