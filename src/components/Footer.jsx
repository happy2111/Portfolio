import {Github, Mail, Phone} from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 py-12 border-t border-slate-700">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold text-white mb-2">
              Tamal Sen<span className="text-purple-400">.</span>
            </h3>
            <p className="text-gray-400">Software Engineer & Developer</p>
          </div>

          <div className="flex items-center space-x-6">
            <a href="mailto:tamal@example.com" className="text-gray-400 hover:text-white transition-colors">
              <Mail size={20} />
            </a>
            <a href="https://github.com/tamalsen" className="text-gray-400 hover:text-white transition-colors">
              <Github size={20} />
            </a>
            <a href="tel:+1234567890" className="text-gray-400 hover:text-white transition-colors">
              <Phone size={20} />
            </a>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Tamal Sen. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;