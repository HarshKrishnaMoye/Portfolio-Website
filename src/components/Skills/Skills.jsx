import React from "react";
import "./Skills.scss";
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

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const Skills = () => {
  const ref = useRef();
  return (
    <motion.div
      className="container"
      ref={ref}
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.h1 variants={variants}>Skills & Experiences</motion.h1>
      <motion.div variants={variants} className="skills">
        <motion.div variants={variants} className="skill">
          <div className="logo">
            <div className="image">
              <img src="/html.png" alt="HTML5" />
            </div>
            <h4>HTML5</h4>
          </div>

          <div className="logo">
            <div className="image">
              <img src="/css.png" alt="CSS3" />
            </div>
            <h4>CSS3</h4>
          </div>

          <div className="logo">
            <div className="image">
              <img src="/sass.png" alt="SASS" />
            </div>
            <h4>Sass</h4>
          </div>

          <div className="logo">
            <div className="image">
              <img src="/bootstrap.png" alt="Bootstrap" />
            </div>
            <h4>Bootstrap</h4>
          </div>

          <div className="logo">
            <div className="image">
              <img src="/tailwind-css.png" alt="Tailwind" />
            </div>
            <h4>Tailwind</h4>
          </div>

          <div className="logo">
            <div className="image">
              <img src="/javascript.png" alt="Javascript" />
            </div>
            <h4>Javascript</h4>
          </div>

          <div className="logo">
            <div className="image">
              <img src="/react.png" alt="React JS" />
            </div>
            <h4>React JS</h4>
          </div>

          <div className="logo">
            <div className="image">
              <img src="/redux.png" alt="Redux" />
            </div>
            <h4>Redux</h4>
          </div>

          <div className="logo">
            <div className="image">
              <img src="/next-js.png" alt="Next JS" />
            </div>
            <h4>Next JS</h4>
          </div>

          <div className="logo">
            <div className="image">
              <img src="/framer-motion.png" alt="Framer Motion" />
            </div>
            <h4>Framer Motion</h4>
          </div>

          <div className="logo">
            <div className="image">
              <img src="/node.png" alt="Node JS" />
            </div>
            <h4>Node JS</h4>
          </div>

          <div className="logo">
            <div className="image">
              <img src="/express.png" alt="Express JS" />
            </div>
            <h4>Express JS</h4>
          </div>

          <div className="logo">
            <div className="image">
              <img src="/mongodb.png" alt="MongoDB" />
            </div>
            <h4>MongoDB</h4>
          </div>

          <div className="logo">
            <div className="image">
              <img src="/figma.png" alt="Figma" />
            </div>
            <h4>Figma</h4>
          </div>

          <div className="logo">
            <div className="image">
              <img src="/git.png" alt="Git" />
            </div>
            <h4>Git</h4>
          </div>

          <div className="logo">
            <div className="image">
              <img src="/java.png" alt="JAVA" />
            </div>
            <h4>JAVA</h4>
          </div>
        </motion.div>

        <motion.div variants={variants} className="experience">
          <div className="company">
            <img src="/Sj_Innovation_Logo.jpeg" alt="SJ Innovation" />
            <div className="information">
              <h3>Frontend Developer Intern</h3>
              <h4>SJ Innovation</h4>
              <p>Jun 2024 - Oct 2024 · 5 months</p>
              <p>Goa, India</p>
              <p>
                • Worked on content migration for a popular eCommerce site,
                migrating multiple product and generic pages from Drupal to
                Contentful — a modern headless CMS known for its flexibility and
                scalability. The site’s frontend was built with Next.js, and the
                backend utilized Contentful.
              </p>
              <p>
                • Contributed to the frontend of a company project using
                React.js and Tailwind CSS, building and optimizing user
                interfaces for a seamless, responsive experience across all
                devices. Collaborated closely with design and backend teams for
                smooth integration.
              </p>
              <p>
                • Contributed to an internal company product built with the MERN
                stack, designed for device allocation within the company. This
                tool included features such as device history, software history,
                and more, streamlining the management of company assets.
              </p>
            </div>
          </div>

          <div className="company">
            <img src="/persistent_systems_logo.jpeg" alt="Persistent Systems" />
            <div className="information">
              <h3>Software Development Intern</h3>
              <h4>Persistent Systems</h4>
              <p>Jul 2023 - Sep 2023 · 3 months</p>
              <p>Goa, India</p>
              <p>
                • Developed frontend interfaces for two demo projects,
                simulating the user experience of popular email platforms, Gmail
                and Outlook, using React, Css and Rest API.
              </p>
              <p>
                • Contributed to a live project by integrating Outlook and Gmail
                features into a unified application. Technologies used included
                ReactJS, CSS, and Rest API.
              </p>
            </div>
          </div>

          <div className="company">
            <img src="/hexcoderz_logo.jpeg" alt="Hexcoderz" />
            <div className="information">
              <h3>UX UI Intern</h3>
              <h4>Hexcoderz · Internship</h4>
              <p>Jul 2021 - Oct 2021 · 4 months</p>
              <p>Goa, India </p>
              <p>
                • Created wireframes, storyboards, process flows and other UX
                documents.
              </p>
              <p>
                • Developed interactive prototypes for testing purposes and
                conducted usability tests with users.
              </p>
            </div>
          </div>
        </motion.div>
        <motion.img
          className="scroll"
          variants={textVariants}
          animate="scrollButton"
          src="/scroll.png"
          alt="scroll"
        />
      </motion.div>
    </motion.div>
  );
};

export default Skills;
