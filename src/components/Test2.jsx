import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import coin2 from "../images/coin2.png"
import "../index.css"
import ScorePage from './ScorePage'

function Test2() {
  const [showScore, setShowScore] = useState(false)

  // Trigger ScorePage after all coins finish (~4s)
  useEffect(() => {
    const timer = setTimeout(() => setShowScore(true), 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <motion.div className='flex justify-center items-center w-full h-full text-4xl relative overflow-hidden'>
      <AnimatePresence>
        {!showScore && (
          <>
            {/* 4 Coin Animations */}
            {[
              { x: '100vw', y: '-100vh', color: 'blue' },
              { x: '100vw', y: '100vh', color: 'red' },
              { x: '-100vw', y: '100vh', color: 'yellow' },
              { x: '-100vw', y: '-100vh', color: 'green' },
            ].map((pos, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 1, x: pos.x, y: pos.y, rotate: "180deg" }}
                animate={[
                  { opacity: 1, x: pos.x, y: pos.y, rotate: "180deg" },
                  { opacity: 1, x: "0vw", y: "0vh", rotate: "0deg" },
                  // { opacity: 0, transition: { duration: 2 } },
                ]}
                transition={{ duration: 1.5, delay: i * 0.3 }}
                className={`text-3xl text-${pos.color}-600 absolute`}
              >
                <img src={coin2} className="w-[100px]" alt="" />
              </motion.div>
            ))}
          </>
        )}
      </AnimatePresence>

      {/* ScorePage appears smoothly after */}
      <AnimatePresence>
        {showScore && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className='absolute top-0 left-0 w-full h-full'
          >
            <ScorePage />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default Test2

// initial={{opacity:1 ,x: '100vw', y: '-100vh' , rotate:"180deg"}}
//     animate={{opacity:1 ,x: '0vw', y: '0vh', rotate:"0deg"}}
//     transition={{
//         duration:3 , 
//     }}