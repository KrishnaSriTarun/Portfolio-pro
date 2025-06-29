import { DiJavascript, DiPostgresql, DiRedis } from 'react-icons/di';
import { FaReact, FaNodeJs, FaGitAlt, FaDocker } from 'react-icons/fa';
import { FaZ } from 'react-icons/fa6';
import { PiOpenAiLogo } from 'react-icons/pi';
import { SiTailwindcss, SiTypescript, SiFirebase, SiExpress, SiRedux } from 'react-icons/si';
import { TbBrandRedux } from 'react-icons/tb';

const skills = [
      { icon: <FaReact />, label: 'React', level: 80 },
      { icon: <DiJavascript />, label: 'JavaScript', level: 80 },
      { icon: <SiTypescript />, label: 'TypeScript', level: 70 },
      { icon: <SiTailwindcss />, label: 'Tailwind CSS', level: 85 },
      { icon: <FaNodeJs />, label: 'Node.js', level: 75 },
      { icon: <SiExpress />, label: 'Express.js', level: 75 },
      { icon: <FaReact />, label: 'MongoDB', level: 70 },
      { icon: <SiFirebase />, label: 'Firebase', level: 70 },
      { icon: <DiRedis />, label: 'Redis', level: 50 },
      { icon: <DiPostgresql />, label: 'PostgreSQL', level: 50 },
      { icon: <FaDocker />, label: 'Docker', level: 60 },
      { icon: <FaGitAlt />, label: 'Git', level: 85 },
      { icon: <PiOpenAiLogo />, label: 'AI Tools', level: 70 },
      { icon: <SiRedux />, label: 'Redux', level: 70 },
      { icon: <FaZ />, label: 'Zustand', level: 70 },
      { icon: <TbBrandRedux />, label: 'TanStack Query', level: 60 },
];

const Skills = () => {
      return (
            <section className="py-12 px-4 text-center bg-white dark:bg-gray-950" id="skills">
                  <h2 className="text-3xl font-bold mb-10 text-gray-900 dark:text-white">Skills</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {skills.map(({ icon, label, level }) => (
                              <div
                                    key={label}
                                    className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-md flex flex-col items-center"
                              >
                                    <div className="text-5xl text-blue-500 mb-3">{icon}</div>
                                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">{label}</h3>
                                    <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-2">
                                          <div
                                                className="bg-blue-500 h-2 rounded-full transition-all duration-500"
                                                style={{ width: `${level}%` }}
                                          ></div>
                                    </div>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{level}% proficiency</p>
                              </div>
                        ))}
                  </div>
            </section>
      );
};

export default Skills;
