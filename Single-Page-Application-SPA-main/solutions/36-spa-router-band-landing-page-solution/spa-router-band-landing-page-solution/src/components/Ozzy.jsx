import { motion } from "framer-motion";
import ozzy from "../assets/vocals.png";

function Ozzy() {
  return (
    <div className="ozzy">
      <motion.img
        key="ozzy"
        src={ozzy}
        alt={ozzy}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      ></motion.img>{" "}
    </div>
  );
}

export default Ozzy;
