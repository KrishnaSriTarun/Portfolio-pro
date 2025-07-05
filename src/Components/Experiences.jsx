import React from 'react';

const Experiences = ({ experiences }) => {
  return (
    <section className="py-12 px-1 bg-white" id="experiences">
      <h2 className="text-3xl font-bold mb-10 text-center text-gray-900">Experience</h2>

      <div className="relative border-l-4 border-blue-500 pl-6 space-y-10 max-w-3xl mx-auto">
        {experiences.map((exp, index) => (
          <div key={index} className="relative">
            {/* Dot marker */}
            <div className="absolute -left-3 w-6 h-6 bg-blue-500 rounded-full border-4 border-white"></div>

            {/* Experience Card */}
            <div className="bg-gray-100 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-gray-900">{exp.title}</h3>
              <p className="text-sm text-blue-600 font-medium">{exp.company}</p>
              <p className="text-sm text-gray-600 mb-2">{exp.date}</p>
              <p className="text-gray-700 text-sm">{exp.description}</p>

              <div className="mt-4 space-x-2">
                {exp.certification && (
                  <a
                    href={exp.certification}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white py-2 px-4 rounded-md text-sm hover:bg-blue-700 transition"
                  >
                    View Certification
                  </a>
                )}
                {exp.Website && (
                  <a
                    href={exp.Website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white py-2 px-4 rounded-md text-sm hover:bg-blue-700 transition"
                  >
                    View Website
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experiences;
