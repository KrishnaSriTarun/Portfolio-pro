import React from 'react';
import {
      FaReact, FaNodeJs, FaGitAlt, FaDocker, FaCube
} from 'react-icons/fa';
import {
      DiJavascript, DiPostgresql
} from 'react-icons/di';
import {
      SiTailwindcss, SiTypescript, SiFirebase, SiExpress, SiRedux,
      SiSpringboot, SiMysql, SiMongodb
} from 'react-icons/si';
import { PiOpenAiLogo } from 'react-icons/pi';

// Icon map by label
const iconMap = {
      'React': <FaReact />,
      'JavaScript': <DiJavascript />,
      'TypeScript': <SiTypescript />,
      'Tailwind CSS': <SiTailwindcss />,
      'Node.js': <FaNodeJs />,
      'Express.js': <SiExpress />,
      'MongoDB': <SiMongodb />,
      'Spring Boot': <SiSpringboot />,
      'MySQL': <SiMysql />,
      'Firebase': <SiFirebase />,
      'PostgreSQL': <DiPostgresql />,
      'Git': <FaGitAlt />,
      'Redux': <SiRedux />,
      'Zustand': <FaCube />, // no official Zustand icon
      'AI Tools': <PiOpenAiLogo />,
      'Docker': <FaDocker />
};

const Skills = ({ skills }) => {
      return (
            <section className="py-16 px-4 text-center bg-white" id="skills">
                  <h2 className="text-3xl font-bold mb-12 text-gray-900">Skills</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
                        {skills.map(({ label, level }) => (
                              <div
                                    key={label}
                                    className="bg-gray-100 p-6 rounded-xl shadow-md flex flex-col items-center"
                              >
                                    <div className="text-5xl text-blue-500 mb-3">
                                          {iconMap[label] || '🛠️'}
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{label}</h3>
                                    <div className="w-full bg-gray-300 rounded-full h-2">
                                          <div
                                                className="bg-blue-500 h-2 rounded-full transition-all duration-500"
                                                style={{ width: `${level}%` }}
                                          ></div>
                                    </div>
                                    <p className="text-sm text-gray-600 mt-1">{level}% proficiency</p>
                              </div>
                        ))}
                  </div>
            </section>
      );
};

export default Skills;
