import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between">
      <div className="flex flex-shrink-0 items-center">
        <h1 className="mx-2 text-3xl font-bold">MAK.</h1>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl cursor-pointer">
        <a
          href="https://www.linkedin.com/in/muhammad-annas-khan-a17b6a266"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
        <a href="https://github.com/404annas" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/annaskhan.04/"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
