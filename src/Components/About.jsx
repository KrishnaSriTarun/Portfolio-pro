import React from "react";

const About = ({ heading, description }) => {
      return (
            <section id="about" className="py-16 px-1 bg-white">
                  <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                              {heading}
                        </h2>
                        {description.map((para, idx) => (
                              <p key={idx} className="text-lg text-gray-700 mt-4 leading-relaxed" dangerouslySetInnerHTML={{ __html: para }}></p>
                        ))}
                  </div>
            </section>
      );
};

export default About;
