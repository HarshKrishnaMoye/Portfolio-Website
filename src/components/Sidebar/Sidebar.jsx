import React , { useState } from 'react'
import './Sidebar.scss'
import Buttons from './Button/Buttons'
import Links from './Links/Links'
import { motion } from 'framer-motion'

const variants={
    open :{
        clipPath:"circle(1200px at 50px 50px)",
        transition:{
            type:"spring",
            stiffness:20,
        }
    } ,
    closed:{
        clipPath:"circle(30px at 50px 50px)",
        transition:{
            delay:0.5,
            type:"spring",
            stiffness : 400,
            damping : 40,
        },
    }
}


const Sidebar = () => {

    const [open, setOpen] = useState(false)


  return (
    <motion.div className="sidebar" animate={open? "open" : "closed"}>

        <motion.div className="bg" variants={variants}>
            <Links/>
        </motion.div>
        <Buttons setOpen={setOpen}/>
    </motion.div>
  )
}

export default Sidebar
