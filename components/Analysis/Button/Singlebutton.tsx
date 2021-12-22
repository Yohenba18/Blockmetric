import { motion } from "framer-motion";

export const Singlebutton = ({ title }: any) => {
  const handleclick = () => {
    alert(title);
  };

  return (
    <>
      <motion.button
        className=" bg-background-secondary2 hover:bg-activepurple rounded-md px-6 py-2 overflow-y-hidden"
        onClick={handleclick}
        whileHover={{ scale: 1.1}}
        whileTap={{ scale: 0.9 }}
      >
        {title}
      </motion.button>
    </>
  );
};
