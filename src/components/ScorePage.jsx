import React from 'react'
import {motion } from "framer-motion"
import vaultX from "../images/vaultX.png"
import Header from './Header'
import Vault from './Vault'
import Footer from './Footer'
function ScorePage() {
  return (
    <motion.div
        
        className="w-screen h-screen absolute text-purple-600 grid grid-cols-1 grid-rows-10 bg-black "
        style={{ transformStyle: "preserve-3d" }}
    >
        <Header/>
        <Vault/>
        <Footer/>
    </motion.div>
  )
}

export default ScorePage