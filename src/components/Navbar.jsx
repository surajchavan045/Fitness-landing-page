import React from "react";
import { FaDumbbell, FaSun } from "react-icons/fa";

const Navbar = () => {
  return (
    <header>
      <div>
        <div>
          <FaDumbbell />
          <h1>Fitness Pro</h1>
        </div>
        <nav>
          <a href="">Home</a>
          <a href="">Features</a>
          <a href="">Pricing</a>
          <a href="">Testimonials</a>
        </nav>
        <button>
            <FaSun className="text-yellow-400 text-lg" />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
