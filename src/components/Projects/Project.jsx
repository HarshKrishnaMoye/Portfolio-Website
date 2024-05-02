import React, { useRef } from 'react'
import './Project.scss'
import {motion , useScroll ,useSpring ,useTransform} from 'framer-motion'
import video1 from "/Disney+Video.mp4";
import video2 from "/ShopCart.mp4";
import video3 from "/NewsInsight.mp4";
import video4 from "/SpotifyClone.mp4";


const items =[
    {
    id:1,
    title : "Disney+ Clone",
    video : video1 ,
    description : "Introducing my Disney Plus-inspired streaming platform clone, crafted with ReactJS, CSS, Redux, Firebase, and Google Authentication. Enjoy seamless entertainment on any device with its mobile-responsive design. Dive into a vast content library authenticated via Google. Welcome to your new go-to for endless family-friendly fun!",
    technologies:"ReactJS • CSS3 • Redux • Firebase • Google Authentication",
    demo : "",
    code : "https://github.com/HarshKrishnaMoye/DisneyPlus-Clone",
    },

    {
        id:2,
        title : "Shop Cart",
        video : video2 ,
        description : "Introducing my React Admin Dashboard project! It's modern and feature-rich, built with ReactJS, Tailwind CSS, and Syncfusion. The dashboard includes one Dashboard, Three Pages, Four Apps, and fully functional Syncfusion charts for powerful web applications",
        technologies:"ReactJS • Tailwind CSS • Syncfusion",
        demo : "",
        code : "https://github.com/HarshKrishnaMoye/Shop-Cart",
        },
        
        {
            id:3,
            title : "News Insight",
            video : video3 ,
            description : "Welcome to News Insight, a news application built with ReactJS, CSS, and the News API! News Insight allows you to stay updated with the latest news from various sources around the world",
            technologies:"ReactJS • CSS3 • News API",
            demo : "",
            code : "https://github.com/HarshKrishnaMoye/News-Insight",
            },

            {
                id:4,
                title : "Spotify Clone",
                video : video4 ,
                description : "Welcome to the Spotify Clone project! This is a fully functional music streaming application inspired by Spotify, built with HTML, CSS, and JavaScript. The application provides access to various libraries of songs, allowing users to play, pause, skip tracks, adjust volume, and mute songs",
                technologies:"HTML5 • CSS3 • Javascript",
                demo : "",
                code : "https://github.com/HarshKrishnaMoye/Spotify-Clone",
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
