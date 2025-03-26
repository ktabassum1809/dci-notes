import { motion } from "framer-motion";
import geezer from "../assets/bass.png";

function Geezer() {
  return (
    <div className="geezer">
      <motion.img
        key="geezer"
        src={geezer}
        alt={geezer}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      ></motion.img>{" "}
    </div>
  );
}

export default Geezer;
