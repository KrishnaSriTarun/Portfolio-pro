import React from "react";

const About = () => {
      return (
            <section id="about" className="py-16 px-4 bg-white">
                  <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                              About Me
                        </h2>
                        <p className="text-lg text-gray-700 leading-relaxed">
                              I’m a dedicated and detail-oriented{" "}
                              <span className="font-medium text-indigo-600">
                                    Full Stack Developer
                              </span>{" "}
                              with a deep passion for crafting modern, scalable web applications.
                              My core expertise lies in the{" "}
                              <span className="font-medium">MERN Stack</span>, and I thrive on
                              turning ideas into clean, responsive, and user-focused digital
                              products.
                        </p>
                        <p className="text-lg text-gray-700 mt-4 leading-relaxed">
                              Beyond traditional development, I actively integrate{" "}
                              <span className="font-medium text-indigo-600">AI-powered tools</span>{" "}
                              and workflows into my stack—leveraging technologies like LLMs, image
                              generation, and automation APIs to build smarter and faster
                              solutions. Whether it’s enhancing UX with AI-driven recommendations or
                              speeding up development using intelligent assistants, I’m always
                              pushing to deliver more in less time.
                        </p>
                        <p className="text-lg text-gray-700 mt-4 leading-relaxed">
                              With strong foundations in both frontend and backend development, I
                              approach every project with a focus on performance, maintainability,
                              and innovation. I’m constantly learning and exploring new technologies
                              to stay ahead in the evolving world of web and AI development.
                        </p>
                  </div>
            </section>
      );
};

export default About;
