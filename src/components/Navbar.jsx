import React from "react";
import { FaDumbbell, FaMoon, FaSun } from "react-icons/fa";

const Navbar = ({ darkMode, setDarkMode}) => {
  return (
    <header>
      <div className="container flex items-center justify-between px-8 py-4">
        <div className="flex items-center gap-2">
          <FaDumbbell className="text-orange-400 text-2xl" />
          <h1 className="text-xl font-bold">Fitness Pro</h1>
        </div>
        <nav className="hidden md:flex gap-8 font-medium">
          <a
            href=""
            className="hover:text-orange-400 text-neutral-400 dark:text-neutral-300"
          >
            Home
          </a>
          <a
            href=""
            className="hover:text-orange-400 text-neutral-400 dark:text-neutral-300"
          >
            Features
          </a>
          <a
            href=""
            className="hover:text-orange-400 text-neutral-400 dark:text-neutral-300"
          >
            Pricing
          </a>
          <a
            href=""
            className="hover:text-orange-400 text-neutral-400 dark:text-neutral-300"
          >
            Testimonials
          </a>
        </nav>
        <button
        onClick={() => {
            setDarkMode(!darkMode);
        }}> {
            darkMode ? (
                <FaMoon className="text-yellow-400 text-lg" />
            ) : (
                <FaSun className="text-gray-800 dark:text-gray-200 text-lg" />
            )}
          
        </button>
      </div>
    </header>
  );
};

export default Navbar;
