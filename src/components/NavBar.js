import React from 'react'

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
                <motion.h3 variants={item} className="nav-link">WELCOME</motion.h3>
                <motion.h3 variants={item} className="nav-link">WELCOME</motion.h3>
                <motion.h3 variants={item} className="nav-link">WELCOME</motion.h3>
                <motion.h3 variants={item} className="nav-link">WELCOME</motion.h3>
        </motion.div>

    )
}

export default NavBar