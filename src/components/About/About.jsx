import React from "react";
import "./About.scss";
import { useRef } from "react";
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

const About = () => {
  const ref = useRef();
  return (
    <motion.div
      className="about"
      ref={ref}
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div className="wrapper"  variants={variants}>
        <motion.h1  variants={variants}>About me</motion.h1>
        <motion.div className="textContainer1"  variants={variants}>
          <h2>
            Hello there! I'm Harsh Moye, and I'm excited to have you here. Let
            me give you a glimpse into who I am and what I'm all about.
          </h2>
          <p>
            First off, I've always been a curious soul, fascinated by how things
            work. Whether it's dissecting gadgets or diving into the world of
            coding, I thrive on understanding the nuts and bolts of everything
            around me.
          </p>
          <p>
            Coding has become my creative outlet. There's something magical
            about turning lines of code into digital realities, and I love every
            minute of it. But my interests don't stop there—I'm also passionate
            about design and the power it holds to transform experiences.
          </p>
          <p>
            And beyond that, I'm also deeply passionate about acting, dancing,
            and playing sports like cricket, football, volleyball, and
            badminton. Whether it's rehearsing for a play or hitting the field,
            I love exploring different forms of expression and staying active.
          </p>
          <p>
            So, whether you're here to collaborate or just share a virtual
            high-five, I'm excited to connect and dive into our shared
            interests!
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
