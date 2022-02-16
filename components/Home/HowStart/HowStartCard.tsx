import { motion } from "framer-motion";

const HowStartCard = ({ avatar, title, description }: any) => {
  return (
    <motion.div
      className="flex bg-opacity-50 bg-background-black-100 px-10 py-4 rounded-lg items-center gap-12 shadow-lg hover:shadow-purple-700/40 border-2 border-background-black-100"
      whileHover={{ scale: 1.1 }}
    >
      <div className="bg-opacity-5 bg-white rounded-full p-3">{avatar}</div>
      <div className="flex flex-col gap-2">
        <div className="text-xl font-semibold">{title}</div>
        <div className="text-text-secondary-100 text-base">{description}</div>
      </div>
    </motion.div>
  );
};

export default HowStartCard;
