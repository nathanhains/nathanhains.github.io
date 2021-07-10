import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const NavBar = ({clicked, motion}) => {

    const container = {
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: 0.2
          }
        }
    }

    const item = {
        hidden: { opacity: 0 },
        show: { opacity: 1 }
    }


    return clicked === "no" ? null : ( 
      
       <motion.div variants={container} initial="hidden" animate="show" className = "nav-main">
    
                <motion.h3 variants={item} ><AnchorLink className="nav-link" style={{textDecoration: 'none'}}href="#welcome">Welcome</AnchorLink></motion.h3>
                <motion.h3 variants={item}><AnchorLink className="nav-link" style={{textDecoration: 'none'}}href="#my-life">My Life</AnchorLink></motion.h3>
                <motion.h3 variants={item} ><AnchorLink className="nav-link" style={{textDecoration: 'none'}}href="#my-work">My Work</AnchorLink></motion.h3>
                <motion.h3 variants={item} ><AnchorLink className="nav-link" style={{textDecoration: 'none'}}href="#contact">Contact</AnchorLink></motion.h3>
 
        </motion.div>
    )
}

export default NavBar