import { motion } from "framer-motion";
import { Link } from "react-scroll";

export const Singlebutton = ({ title }: any) => {
  return (
    <>
      <motion.button
        className="bg-background-secondary2 w-56  hover:bg-activepurple rounded-md px-6 py-2 "
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Link to={title} spy={true} smooth={true}>
          {title}
        </Link>
      </motion.button>
    </>
  );
};
