import React from "react";

const ExpertiseSection = () => {
  const expertiseData = [
    {
      icon: "💻",
      title: "Software Development",
      description: "Comprehensive full-stack development with modern frameworks and best practices for scalable applications."
    },
    {
      icon: "🎨",
      title: "Frontend Dev User Website",
      description: "Creating beautiful, responsive user interfaces with attention to detail and user experience optimization."
    },
    {
      icon: "📱",
      title: "Mobile Dev Android and IOS",
      description: "Cross-platform mobile development with native performance and intuitive user interfaces."
    }
  ];

  return (
    <section id="expertise" className="py-20 bg-slate-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
          My Expertise
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {expertiseData.map((item, index) => (
            <div key={index} className="bg-slate-900 p-8 rounded-lg border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-4">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ExpertiseSection;