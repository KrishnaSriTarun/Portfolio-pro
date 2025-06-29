import React from 'react';

const experiencesArray = [
  {
    title: 'Founder & Full Stack Developer',
    company: 'Nayi Soch Solutions',
    date: 'June 2025 – Present',
    description:
      'Completed 2 projects, Developed a Admin Pannel of a Coaching Classes in React.js and Firebase, with features like Dashboard, Student management and Batches management. Showcasing my skills and projects.',
    Website: 'https://ns-solutions.netlify.app',
  },
  {
    title: 'Full Stack Developer Intern',
    company: 'Levitation Infotech',
    date: 'Jan 2025 – Mar 2025',
    description:
      'Worked on an RMS project using the MERN stack. Debugged and fixed major issues, optimized a scalable API backend improving performance by 20%. Integrated React Hook Form with Zod validation in complex forms, boosting validation efficiency by 30%. Gained strong teamwork skills in a collaborative, fast-paced environment.',
    certification: 'https://drive.google.com/file/d/1MbXNH0ZbjdrehjFi5IEXgwRKB1dBWXfM/view?usp=sharing',
  },
  {
    title: 'Smart India Hackathon Finalist',
    company: 'Govt. of India (SIH 2024)',
    date: 'Dec 2024',
    description:
      'Developed SkillSphere, a job recommendation platform powered by AI. Placed in the top 2.4% nationally.',
    certification: 'https://drive.google.com/file/d/13yR7_PVJLioJFd2sc6GLCWMJIT8o1nxe/view?usp=sharing',
  },
];

const Experiences = () => {
  return (
    <section className="py-12 px-4 bg-white dark:bg-gray-950" id="experience">
      <h2 className="text-3xl font-bold mb-10 text-center text-gray-900 dark:text-white">Experience</h2>
      <div className="relative border-l-4 border-blue-500 pl-6 space-y-10 max-w-3xl mx-auto">
        {experiencesArray.map((exp, index) => (
          <div key={index} className="relative">
            <div className="absolute -left-3 w-6 h-6 bg-blue-500 rounded-full border-4 border-white dark:border-gray-950"></div>
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{exp.title}</h3>
              <p className="text-sm text-blue-600 font-medium">{exp.company}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{exp.date}</p>
              <p className="text-gray-700 dark:text-gray-300 text-sm">{exp.description}</p>

              {exp.certification && (
                <a
                  href={exp.certification}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:bg-blue-700 mt-2 inline-block bg-blue-600 py-2 px-3 rounded-md text-sm"
                >
                  View Certification
                </a>
              )}
              {exp.Website && (
                <a
                  href={exp.Website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:bg-blue-700 mt-2 inline-block bg-blue-600 py-2 px-6 rounded-md text-sm ml-2"
                >
                  View Website
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experiences;
