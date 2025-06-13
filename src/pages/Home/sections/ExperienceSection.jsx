import React, {useState} from "react";

const ExperienceSection = () => {
  const [experiences, setExperiences] = useState([
    {
      id: 1,
      company: "DX Venture & Bd Portal Service Desk Ltd",
      position: "Senior Java Software Engineer & Android Udemy Tutor",
      period: "2019 - 2024",
      description: "Led development of enterprise applications and mentored junior developers"
    },
    {
      id: 2,
      title: "Java Developer at Software Concepts",
      period: "2018 - 2019",
      description: "Developed scalable backend solutions for enterprise clients"
    },
    {
      id: 3,
      title: "Part Time Java Developer at Open Stack",
      period: "2017 - 2018",
      description: "Contributed to open-source projects and client applications"
    }
  ]);

  return (
    <section id="experience" className="py-20 bg-slate-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
          Professional<br />Experience
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="bg-slate-900 p-8 rounded-lg border border-slate-700 hover:border-purple-500 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white mb-2 md:mb-0">
                    {exp.company || exp.title}
                  </h3>
                  <span className="text-purple-400 font-medium">{exp.period}</span>
                </div>
                {exp.position && (
                  <p className="text-purple-300 mb-3">{exp.position}</p>
                )}
                <p className="text-gray-400">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-white text-center mb-12">
            Available for select<br />freelance<br />opportunities
          </h3>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-purple-600 to-purple-800 p-8 rounded-lg">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex-shrink-0"></div>
                <div>
                  <p className="text-white mb-4 italic">
                    "Working with Tamal was an absolute pleasure. His attention to detail and technical expertise exceeded our expectations."
                  </p>
                  <p className="text-purple-200 font-medium">Sarah Johnson, CEO</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 rounded-lg">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex-shrink-0"></div>
                <div>
                  <p className="text-white mb-4 italic">
                    "Exceptional developer with great communication skills. Highly recommend for any complex project."
                  </p>
                  <p className="text-blue-200 font-medium">Michael Chen, CTO</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ExperienceSection;