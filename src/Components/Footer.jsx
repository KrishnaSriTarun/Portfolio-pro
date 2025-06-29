import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = ({ email, githubLink, linkedinLink, name }) => {
  return (
    <footer className="bg-gray-100 py-8 px-4 border-t border-gray-200">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm text-gray-600 text-center md:text-left">
          &copy; {new Date().getFullYear()} {name}. All rights reserved.
        </p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          {email && (
            <a
              href={`mailto:${email}`}
              className="text-gray-600 hover:text-blue-600"
              aria-label="Email"
            >
              <FaEnvelope className="text-xl" />
            </a>
          )}
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600"
              aria-label="GitHub"
            >
              <FaGithub className="text-xl" />
            </a>
          )}
          {linkedinLink && (
            <a
              href={linkedinLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-xl" />
            </a>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
