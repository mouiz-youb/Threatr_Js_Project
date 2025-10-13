import React from 'react'
import { motion } from 'framer-motion'
import  vault from "../images/vault.png"
import  vault3 from "../images/vault3.png"
import key from "../images/key.png"
function Test2() {
  return (
    <motion.div className='flex justify-center items-center w-full h-full text-4xl '>
        <motion.div
        initial={{opacity:1 ,x: '100vw', y: '-100vh' , rotate:"180deg"}}
        animate={[
          {opacity:1 ,x: '100vw', y: '-100vh' , rotate:"180deg"}, 
          { opacity: 1, x: "0vw", y: "0vh", rotate: "0deg" }, 
          { opacity: 0, transition: { duration: 6 } }, 
        ]}
        transition={{
            duration:3 , 
        }}
        className='text-3xl text-blue-600'>
            <img src={key} className="w-[100px]"  />
        </motion.div>
        <motion.div
        initial={{opacity:1 ,x: '100vw', y: '100vh' , rotate:"180deg"}}
        animate={[
          {opacity:1 ,x: '100vw', y: '100vh' , rotate:"180deg"}, 
          { opacity: 1, x: "0vw", y: "0vh", rotate: "0deg" }, 
          { opacity: 0, transition: { duration: 6 } }, 
        ]}
        transition={{
            duration:3 , 
        }}
        className='text-3xl text-red-600'>
            <img src={key} className="w-[100px]"  />
        </motion.div>
        <motion.div
        initial={{opacity:1 ,x: '-100vw', y: '100vh' , rotate:"180deg"}}
        animate={[
          {opacity:1 ,x: '-100vw', y: '100vh' , rotate:"180deg"}, 
          { opacity: 1, x: "0vw", y: "0vh", rotate: "0deg" }, 
          { opacity: 0, transition: { duration: 6 } }, 
        ]}
        transition={{
            duration:3 , 
        }}
        className='text-3xl text-yellow-600'>
            <img src={key} className="w-[100px]"  />
        </motion.div>
        <motion.div
        initial={{opacity:1 ,x: '-100vw', y: '-100vh' , rotate:"180deg"}}
       animate={[
          {opacity:1 ,x: '-100vw', y: '-100vh' , rotate:"180deg"}, 
          { opacity: 1, x: "0vw", y: "0vh", rotate: "0deg" }, 
          { opacity: 0, transition: { duration: 6 } }, 
        ]}
        transition={{
            duration:3 , 
        }}
        className='text-3xl text-green-600'>
            <img src={key} className="w-[100px]"  />
        </motion.div>
         {/* 5th hello (Z-axis animation) */}
      <motion.div
        initial={{ opacity: 0, z: 500, scale: 0.2 }}
        animate={{ opacity: 1, z: 0, scale: 1 }}
        transition={{
          duration: 4,
          delay: 4.5, // starts after others finish
          ease: "easeOut",
        }}
        className="absolute text-purple-600 flex justify-center items-center "
        style={{ transformStyle: "preserve-3d" }}
      >
        
        <img src={vault3} alt="" className='w-1/2' />
      </motion.div>
    </motion.div>
  )
}

export default Test2
// initial={{opacity:1 ,x: '100vw', y: '-100vh' , rotate:"180deg"}}
//     animate={{opacity:1 ,x: '0vw', y: '0vh', rotate:"0deg"}}
//     transition={{
//         duration:3 , 
//     }}