import vaultX from "../images/vaultX.png"
import {motion} from "framer-motion"
import "../index.css"
function Vault() {
  return (
    <motion.div 
    initial={{ opacity: 0, z: 500, scale: 0.2 }}
        animate={{ opacity: 1, z: 0, scale: 1 }}
        transition={{
            duration: 2,
            delay: 1, // starts after others finish
            ease: "easeOut",
            }}
    className="col-start-1 col-end-2 row-start-3 row-end-9 border-white border-[1px]" style={{ transformStyle: "preserve-3d" }}>
        <img src={vaultX} alt="" className='w-2/3 shadowx' />
    </motion.div>
  )
}

export default Vault