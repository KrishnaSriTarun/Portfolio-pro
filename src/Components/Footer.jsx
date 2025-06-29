import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
      return (
            <footer className="bg-gray-100 dark:bg-gray-950 py-8 px-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center">
                        <p className="text-sm text-gray-600 dark:text-gray-400 text-center md:text-left">
                              &copy; {new Date().getFullYear()} Vansh. All rights reserved.
                        </p>
                        <div className="flex space-x-6 mt-4 md:mt-0">
                              <a
                                    href="mailto:vanshjais1777@gmail.com"
                                    className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                                    aria-label="Email"
                              >
                                    <FaEnvelope className="text-xl" />
                              </a>
                              <a
                                    href="https://github.com/vanshjais1777"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                                    aria-label="GitHub"
                              >
                                    <FaGithub className="text-xl" />
                              </a>
                              <a
                                    href="https://www.linkedin.com/in/vansh-jaiswal-806271218"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                                    aria-label="LinkedIn"
                              >
                                    <FaLinkedin className="text-xl" />
                              </a>
                        </div>
                  </div>
            </footer>
      );
};

export default Footer;
