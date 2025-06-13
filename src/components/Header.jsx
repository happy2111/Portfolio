import React, {useState, useEffect, useRef} from "react";
import {Menu, X} from "lucide-react";
import {HashLink} from "react-router-hash-link";


const navLinks = [{to: "#home", label: "// home"}, {
  to: "#expertise",
  label: "// expertise"
}, {to: "#work", label: "// work"}, {
  to: "#experience",
  label: "// experience"
}, {to: "#contact", label: "// contact"},];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (window.innerWidth > 768) return setScrolled(offset > 1000);
      setScrolled(offset > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Закрытие меню при клике вне меню
  useEffect(() => {
    if (!isMenuOpen) return;
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  return (
    <header className={`font-mono absolute flex items-center left-0 right-0 z-50 border-slate-700 transition-all duration-300 ${scrolled && "top-0 animate-[wiggle_0.5s] sticky bg-(--color-bg)/80 backdrop-blur-sm"}`}>
      <nav className={`container mx-auto px-0 flex items-center ${scrolled ? "py-2" : "py-9"}`}>
        {/* Кнопка открытия меню */}
        <button
          className={`md:hidden text-white bg-(--color-bg)/40 fixed left-6 mr-3 rounded-full  transition-transform duration-200 active:scale-90 hover:scale-105 shadow-lg
          ${
            scrolled ? "bg-transparent p-0 top-3" : "p-5 top-6 "
          }`}
          onClick={() => setIsMenuOpen(true)}
          aria-label="Открыть меню"
        >
          <Menu
            size={24}
            className="transition-transform duration-200 group-hover:rotate-90"
          />
        </button>
        {/* Кнопка закрытия меню (рядом с Menu) */}

        {isMenuOpen && (<button
            className="md:hidden text-white bg-(--color-primary)/20 mr-3 rounded-full p-5 z-50 fixed top-6 left-6 transition-transform duration-200 active:scale-90 hover:scale-105 shadow-lg"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Закрыть меню"
          >
            <X
              size={24}
              className="transition-transform duration-200 group-hover:rotate-90"
            />
          </button>)}
        <div className={`text-2xl  font-bold text-blue-400 ${scrolled ? "sm:hidden pl-15": "pl-25"}`}>
          hy<span className="text-purple-400">.</span><span className="text-purple-500">_</span>
        </div>
        {/* Desktop Menu */}
        <div className="flex items-center justify-center w-full">
          <div className="hidden md:flex items-center space-x-18 ">
            {navLinks.map((link, index) => (<HashLink
                key={link.to}
                to={link.to}
                className={`hovetext-blue-300r:text-white font-semibold transition-colors flex flex-col justify-center items-end ${scrolled ? "text-(--color-primary)" : "text-white"}`}
                smooth
              >
                <p className="text-[10px] text-base/1">0{index + 1}</p>
                {link.label}
              </HashLink>))}
          </div>
        </div>


        {/* Mobile Menu (Sidebar слева) */}
        <div
          ref={menuRef}
          className={`md:hidden fixed top-0 left-0 min-h-dvh w-64 bg-(--color-bg) border-r border-slate-700 z-40 shadow-lg
            transition-transform duration-500 ease-in-out
            ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}
            ${isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
          `}
          style={{willChange: "transform, opacity"}}
        >
          <div className="flex flex-col space-y-4 px-6 py-27 animate-fade-in">
            {navLinks.map(link => (<HashLink
              key={link.to}
              to={link.to}
              className="text-(--color-primary) hover:text-white transition-colors duration-200 transform hover:scale-105 active:scale-95"
              smooth
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </HashLink>))}
            <p className="text-white text-[12px] opacity-80 transition-opacity duration-300">© 2021. Made with passion by Hy.
              All right reserved.
            </p>
          </div>
        </div>
        {/* Затемнение фона при открытом меню */}
        <div
          className={`fixed inset-0 bg-black/80 min-h-dvh backdrop-blur-sm z-30 transition-opacity duration-500 ${isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
          onClick={() => setIsMenuOpen(false)}
        />

      </nav>
    </header>);
};
export default Header;