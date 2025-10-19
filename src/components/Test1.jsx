import React from 'react'
import Car2 from "../images/Car2.png"
import Car3 from "../images/Car3.svg"
import {motion} from "framer-motion"
// import { fadeIn } from '../TheatrJs/TheatreScene'
function Test1() {
    
  return (
    <motion.div className='flex justify-center gap-5 p-5  items-center text-xl w-full h-full bg-blue-900'>
        <motion.div
            variants={fadeIn("left", 1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.9 }}
        className='w-1/3 h-1/3 rounded-2xl bg-amber-500'></motion.div>
        <motion.div
            variants={fadeIn("up", 2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.9 }}
        className='w-1/3 h-1/3 rounded-2xl bg-red-500'></motion.div>
        <motion.div
            variants={fadeIn("right", 3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.9 }}
        className='w-1/3 h-1/3 rounded-2xl bg-gray-600'></motion.div>
    </motion.div>
  )
}

export default Test1