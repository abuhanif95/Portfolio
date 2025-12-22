import React, { useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  // Mobile Menu Toggle
  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <nav className="fixed w-full bg-blue-500/8 backdrop-blur-lg border-b border-white/20 shadow-lg py-4 px-4 sm:px-6 md:px-8 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* ========== LOGO SECTION ========== */}
        <div className="shrink-0">
          <a
            href="#"
            className="text-3xl sm:text-4xl font-extrabold text-white"
          >
            <span className="bg-linear-to-r from-orange-400 via-blue-400 to-cyan-500 bg-clip-text text-transparent">
              SHT
            </span>
          </a>
        </div>

        {/* ========== DESKTOP NAVIGATION (Hidden on mobile) ========== */}
        <div className="hidden md:flex space-x-8 lg:space-x-10">
          <a
            href="#home"
            className="group relative text-white/80 font-semibold text-lg transition duration-300 hover:text-cyan-400"
          >
            <span>Home</span>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#about"
            className="group relative text-white/80 font-semibold text-lg transition duration-300 hover:text-cyan-400"
          >
            <span>About</span>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#skills"
            className="group relative text-white/80 font-semibold text-lg transition duration-300 hover:text-cyan-400"
          >
            <span>Skills</span>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#projects"
            className="group relative text-white/80 font-semibold text-lg transition duration-300 hover:text-cyan-400"
          >
            <span>Projects</span>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#experience"
            className="group relative text-white/80 font-semibold text-lg transition duration-300 hover:text-cyan-400"
          >
            <span>Experience</span>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#contact"
            className="group relative text-white/80 font-semibold text-lg transition duration-300 hover:text-cyan-400"
          >
            <span>Contact</span>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>

        {/* ========== MOBILE MENU BUTTON ========== */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white p-2 focus:outline-none hover:bg-white/10 rounded-lg transition"
            aria-label="Toggle menu"
          >
            {showMenu ? (
              <FaXmark className="text-2xl cursor-pointer" />
            ) : (
              <FaBars className="text-2xl cursor-pointer" />
            )}
          </button>
        </div>
      </div>

      {/* ========== MOBILE MENU DROPDOWN ========== */}
      {showMenu && (
        <div className="md:hidden absolute top-full left-0 w-full bg-linear-to-b from-gray-900 via-black to-gray-900 backdrop-blur-xl border-t border-white/10 shadow-2xl py-8 px-6">
          {/* ========== MOBILE MENU ITEMS ========== */}
          <div className="flex flex-col space-y-4">
            {/* Home Link */}
            <a href="#home" onClick={toggleMenu} className="group relative">
              <div className="bg-linear-to-r from-gray-900 via-black to-gray-900 rounded-xl p-4 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20 hover:bg-linear-to-r hover:from-blue-500/20 hover:via-cyan-500/20 hover:to-purple-500/20 text-center">
                <span className="text-white/80 font-semibold text-xl transition duration-300 group-hover:text-cyan-300">
                  Home
                </span>
              </div>
            </a>

            {/* About Link */}
            <a href="#about" onClick={toggleMenu} className="group relative">
              <div className="bg-linear-to-r from-gray-900 via-black to-gray-900 rounded-xl p-4 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20 hover:bg-linear-to-r hover:from-blue-500/20 hover:via-cyan-500/20 hover:to-purple-500/20 text-center">
                <span className="text-white/80 font-semibold text-xl transition duration-300 group-hover:text-cyan-300">
                  About
                </span>
              </div>
            </a>

            {/* Skills Link */}
            <a href="#skills" onClick={toggleMenu} className="group relative">
              <div className="bg-linear-to-r from-gray-900 via-black to-gray-900 rounded-xl p-4 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20 hover:bg-linear-to-r hover:from-blue-500/20 hover:via-cyan-500/20 hover:to-purple-500/20 text-center">
                <span className="text-white/80 font-semibold text-xl transition duration-300 group-hover:text-cyan-300">
                  Skills
                </span>
              </div>
            </a>

            {/* Projects Link */}
            <a href="#projects" onClick={toggleMenu} className="group relative">
              <div className="bg-linear-to-r from-gray-900 via-black to-gray-900 rounded-xl p-4 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20 hover:bg-linear-to-r hover:from-blue-500/20 hover:via-cyan-500/20 hover:to-purple-500/20 text-center">
                <span className="text-white/80 font-semibold text-xl transition duration-300 group-hover:text-cyan-300">
                  Projects
                </span>
              </div>
            </a>

            {/* Experience Link */}
            <a
              href="#experience"
              onClick={toggleMenu}
              className="group relative"
            >
              <div className="bg-linear-to-r from-gray-900 via-black to-gray-900 rounded-xl p-4 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20 hover:bg-linear-to-r hover:from-blue-500/20 hover:via-cyan-500/20 hover:to-purple-500/20 text-center">
                <span className="text-white/80 font-semibold text-xl transition duration-300 group-hover:text-cyan-300">
                  Experience
                </span>
              </div>
            </a>

            {/* Contact Link */}
            <a href="#contact" onClick={toggleMenu} className="group relative">
              <div className="bg-linear-to-r from-gray-900 via-black to-gray-900 rounded-xl p-4 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20 hover:bg-linear-to-r hover:from-blue-500/20 hover:via-cyan-500/20 hover:to-purple-500/20 text-center">
                <span className="text-white/80 font-semibold text-xl transition duration-300 group-hover:text-cyan-300">
                  Contact
                </span>
              </div>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
