import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Test2 from "./Test2";
import "../index.css"
export default function Test3() {

  return (
  <div className="w-full h-full flex justify-center items-center   ">
     <motion.div 
   initial={{width:"0vw"}}
   animate={[
    {width:"0vw" , height:0},
    {width:"1000vw" , height:"100vh"},
   ]}
    transition={{ duration: 3, ease: "easeInOut" }}
   className=" h-2 bg-black  ">

    <div className="bg w-ful h-full flex justify-center items-center  ">
      <Test2/>
    </div>
   </motion.div>
  </div>
  );
}
