import React from "react";
import "./Navbar.scss";
import Sidebar from "../Sidebar/Sidebar";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{duration:0.5,}}
        >
          Harsh Moye - Portfolio Website
        </motion.span>
        <div className="social">
          <a href="https://www.linkedin.com/in/harsh-moye-2646952a9" target="_blank">
            <img src="/linkedin.png" alt="Linkedin" />
          </a>
          <a href="https://github.com/HarshKrishnaMoye" target="_blank">
            <img src="/GitHub.png" alt="Github" />
          </a>
          <a href="https://www.instagram.com/harshmoye/" target="_blank">
            <img src="/instagram.png" alt="instagram" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
