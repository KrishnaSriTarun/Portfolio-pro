import React from 'react';
import { MailIcon } from 'lucide-react';
import { FaGithub, FaLinkedin, FaPhone } from 'react-icons/fa';

const Hero = ({
  name,
  role,
  intro,
  imageSrc,
  resumeLink,
  githubLink,
  linkedinLink,
  phoneNo,
  emailLink,
}) => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center py-16 px-4 bg-gradient-to-br from-white to-gray-100"
    >
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Text Block */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mb-4 leading-tight">
            Hi, I’m{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-400">
              {name}
            </span>
          </h1>
          <h2 className="text-2xl sm:text-3xl text-gray-700 font-medium mb-6">
            {role}
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-xl mx-auto md:mx-0">
            {intro}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-teal-500 text-white font-semibold rounded-lg shadow-lg hover:from-blue-700 hover:to-teal-600 transition duration-300"
            >
              View My Work
            </a>
            <a
              href={resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white text-blue-600 border-2 border-blue-600 font-semibold rounded-lg shadow hover:bg-blue-50 transition duration-300"
            >
              View Resume
            </a>
          </div>
          <div className="mt-6 flex justify-center md:justify-start space-x-6 text-2xl">
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-black transition duration-300 transform hover:scale-110"
            >
              <FaGithub className="shadow-md rounded-full p-2 bg-white" size={40} />
            </a>
            <a
              href={linkedinLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-blue-800 transition duration-300 transform hover:scale-110"
            >
              <FaLinkedin className="shadow-md rounded-full p-2 bg-white" size={40} />
            </a>
            {emailLink && (
              <a
                href={emailLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-800 hover:text-blue-800 transition duration-300 transform hover:scale-110"
              >
                <MailIcon className="shadow-md rounded-full p-2 bg-white" size={40} />
              </a>
            )}
            {phoneNo && (
              <a
                href={`tel:${phoneNo}`}
                className="text-green-700 hover:text-green-800 transition duration-300 transform hover:scale-110"
              >
                <FaPhone className="shadow-md rounded-full p-2 bg-white" size={40} />
              </a>
            )}
          </div>
        </div>

        {/* Image Block */}
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 rounded-full shadow-2xl overflow-hidden ring-4 ring-blue-500 ring-opacity-30">
            <img
              src={imageSrc}
              alt={`${name} portrait`}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
