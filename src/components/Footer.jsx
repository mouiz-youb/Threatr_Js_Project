import React from 'react'
import {motion} from "framer-motion"

function Footer() {
  return (
    <motion.div 
    initial={{ opacity: 0, z: 500, scale: 0.2 }}
        animate={{ opacity: 1, z: 0, scale: 1 }}
        transition={{
            duration: 2,
            delay: 1, // starts after others finish
            ease: "easeOut",
            }}
    className='text-5xl text-white col-start-1 col-end-2 row-start-9 row-end-11 border-white border-[1px]'>
        Footer section 
    </motion.div>
  )
}

export default Footer