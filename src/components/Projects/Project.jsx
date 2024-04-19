import React, { useRef } from 'react'
import './Project.scss'
import {motion , useScroll ,useSpring ,useTransform} from 'framer-motion'
import video1 from "/Disney+Video.mp4";

const items =[
    {
    id:1,
    title : "Disney+ Clone",
    video : video1 ,
    description : "Introducing my Disney Plus-inspired streaming platform clone, crafted with ReactJS, CSS, Redux, Firebase, and Google Authentication. Enjoy seamless entertainment on any device with its mobile-responsive design. Dive into a vast content library authenticated via Google. Welcome to your new go-to for endless family-friendly fun!",
    technologies:"ReactJS • CSS • Redux • Firebase • Google Authentication",
    demo : "",
    code : "https://github.com/HarshKrishnaMoye",
    },

    {
        id:2,
        title : "Project 2",
        video : "https://images.pexels.com/photos/1181325/pexels-photo-1181325.jpeg?auto=compress&cs=tinysrgb&w=800" ,
        description : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero eveniet, ad recusandae unde esse impedit in atque repellat adipisci saepe maxime minus dicta, eum, expedita aliquid ea molestiae. Consequuntur, expedita.",
        technologies:"",
        demo : "",
        code : "",
        },

        {
            id:3,
            title : "Project 3",
            video : "https://images.pexels.com/photos/1181325/pexels-photo-1181325.jpeg?auto=compress&cs=tinysrgb&w=800" ,
            description : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero eveniet, ad recusandae unde esse impedit in atque repellat adipisci saepe maxime minus dicta, eum, expedita aliquid ea molestiae. Consequuntur, expedita.",
            technologies:"",
            demo : "",
            code : "",
            },

            {
                id:4,
                title : "Project 4",
                video : "https://images.pexels.com/photos/1181325/pexels-photo-1181325.jpeg?auto=compress&cs=tinysrgb&w=800" ,
                description : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero eveniet, ad recusandae unde esse impedit in atque repellat adipisci saepe maxime minus dicta, eum, expedita aliquid ea molestiae. Consequuntur, expedita.",
                technologies:"",
                demo : "",
                code : "",
                },
];

const Single =({item})=>{
    const ref =useRef();

    const {scrollYProgress} = useScroll({
        target:ref, 

    });

    const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);


    
    return(
        <section>
            <div className="container">
                <div className="wrapper">
                    <div className="vidContainer" ref={ref}>
                    <video autoPlay loop muted>
                        <source src={item.video} type="video/mp4"/>
                    </video>
                    </div>

                <motion.div className="textContainer" style={{y}}>
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                    <p>{item.technologies}</p>
                    <div className="buttons">
                    <a href={item.demo} target="_blank"> <button>See Demo</button> </a>
                    <a href={item.code} target="_blank"> <button>View Code</button> </a>   
                    </div>
                </motion.div>

                </div>
            </div>
        </section>
    )
}

const Project = () => {

    const ref = useRef();

    const {scrollYProgress} = useScroll({
        target:ref, 
        offset:["end end","start start"]
    });

    const scaleX = useSpring(scrollYProgress,{
        stiffness:100,
        damping:30,
    })

  return (
    <div className="project" ref={ref}>
        <div className="progress">
            <h1>My Projects</h1>
            <motion.div style={{scaleX}} className="progressBar"></motion.div>
        </div>
      {items.map(item=>(
        <Single item={item} key={item.id}/>
      ))}
    </div>
  )
}

export default Project
