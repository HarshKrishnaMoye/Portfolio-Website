import React from "react"
import { useRef} from "react";
import "./Reference.scss";
import { motion } from "framer-motion";

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const Reference = () => {
  const ref = useRef();
  return (
    <motion.div
      className="container1"
      ref={ref}
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <div className="stars"></div>
      <motion.div className="wrapper1" variants={variants}>
        <motion.h1 variants={variants}>Thanks for showing interest!</motion.h1>
        <motion.p variants={variants}>
          if you're curious about more of my projects and what I've been working
          on, feel free to check out my GitHub and Linkedin profile. There,
          you'll find a collection of my latest endeavors, experiments, and
          contributions. Dive in and explore the code, maybe you'll find
          something that sparks your interest!
        </motion.p>
        <motion.div variants={variants} className="button-container">
        <a href="https://github.com/HarshKrishnaMoye" target="_blank">
          <button>
              <img src="/GitHub.png" />
              GitHub
          </button>
          </a>

          <a href="https://www.linkedin.com/in/harsh-moye-2646952a9" target="_blank">
          <button>
              <img src="/linkedin.png" />
              Linkedin
          </button>
          </a>
        </motion.div>
        <motion.p variants={variants}>
          Also, feel free to contact me if you have any questions or just want
          to chat.
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default Reference;
