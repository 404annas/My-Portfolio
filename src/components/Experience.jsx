import React from "react";
import { EXPERIENCES } from "../assets/constants";

const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl">Experience</h2>
      <div>
        {EXPERIENCES.map((exp, idx) => (
          <div key={idx} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
              <p className="mb-2 text-sm text-neutral-400">{exp.year}</p>
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold text-xl">
                {exp.role}
                <span className="text-sm text-purple-400"> - Own Works</span>
              </h6>
              <p className="mb-4 text-neutral-400">{exp.description}</p>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-500"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
