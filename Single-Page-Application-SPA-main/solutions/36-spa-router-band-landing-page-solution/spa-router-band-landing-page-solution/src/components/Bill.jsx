import { motion } from "framer-motion";
import bill from "../assets/drums.png";

function Bill() {
  return (
    <div className="bill">
      <motion.img
        key="bill"
        src={bill}
        alt={bill}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      ></motion.img>{" "}
    </div>
  );
}

export default Bill;
