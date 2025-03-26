import { motion } from "framer-motion";
import band from "../assets/logo.png";

function Band() {
  return (
    <div className="band">
      <motion.img
        key="band"
        src={band}
        alt={band}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      ></motion.img>
    </div>
  );
}

export default Band;
