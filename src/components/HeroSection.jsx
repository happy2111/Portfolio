import React from "react";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 right-20 w-32 h-32 bg-orange-500/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-20 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* 3D Geometric Shape */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="w-32 h-32 bg-gradient-to-br from-orange-400 to-orange-600 transform rotate-12 rounded-lg shadow-2xl"></div>
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-orange-300 rounded-full shadow-lg"></div>
          </div>
        </div>

        <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight">
          TAMAL SEN
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
          SOFTWARE ENGINEER • FRONT END & APP DEVELOPER
        </p>

        <div className="flex items-center justify-center space-x-2 text-orange-400 mb-8">
          <span className="w-12 h-px bg-orange-400"></span>
          <span className="text-sm font-medium">COLORFUL MASTERY</span>
          <span className="w-12 h-px bg-orange-400"></span>
        </div>

        <div className="w-16 h-16 border-2 border-gray-600 rounded-full flex items-center justify-center mx-auto cursor-pointer hover:border-orange-400 transition-colors">
          <div className="w-2 h-8 bg-gray-600 rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;