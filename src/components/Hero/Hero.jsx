import React from 'react'
import './Hero.scss'
import {motion} from 'framer-motion'

const textVariants={
    initial:{
        x:-500,
        opacity:0,
    },
    animate:{
        x:0,
        opacity:1,
        transition:{
            duration:1,
            staggerChildren:0.1,
        }
    },
    scrollButton:{
        opacity:0,
        y:10,
        transition:{
            duration:2,
            repeat:Infinity,
        }
    }
}

const sliderVariants={
    initial:{
        x:0,
    },
    animate:{
        x:"-220%",
        transition:{
            repeat:Infinity,
            repeatType:"mirror",
            duration:10,
        }
    },
}

const Hero = () => {
  return (
    <div className="hero">

        <div className="wrapper">

            <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
                <motion.h2 variants={textVariants}>HARSH MOYE</motion.h2>
                <motion.h1 variants={textVariants}>Web Developer and UX/UI Designer</motion.h1>

            <motion.div className="buttons" variants={textVariants}>
                <motion.button variants={textVariants}><a href="#Projects">See My Latest Work</a></motion.button>
                <motion.button variants={textVariants}><a href="">Download CV</a></motion.button>
                <motion.button variants={textVariants}><a href="#Contact">Contact Me</a></motion.button>
            </motion.div>

            <motion.img variants={textVariants} animate="scrollButton" src="/scroll.png" alt="scroll" />
            </motion.div>
        
        </div>

        <motion.div className="slidingText" variants={sliderVariants} initial="initial" animate="animate">
        Web Developer JavaScript Developer UX/UI Designer 
        </motion.div>


            <div className="imageContainer">
                <img src="/Hero.png" alt="Image" />
            </div>

      
    </div>
  )
}

export default Hero
