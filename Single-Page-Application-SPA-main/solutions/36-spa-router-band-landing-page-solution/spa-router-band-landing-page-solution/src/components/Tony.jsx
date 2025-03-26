import { motion } from "framer-motion";
import tony from "../assets/guitar.png";

function Tony() {
  return (
    <div className="tony">
      <motion.img
        key="tony"
        src={tony}
        alt={tony}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      ></motion.img>
    </div>
  );
}

export default Tony;
