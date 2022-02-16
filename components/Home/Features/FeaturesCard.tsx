import { HiArrowSmRight } from "react-icons/hi";
import { motion } from "framer-motion";

const FeaturesCard = ({ avatar, title, description }: any) => {
  return (
    <>
      <motion.div
        className="flex flex-col justify-between bg-opacity-50 bg-background-black-100 px-10 py-10 rounded-lg gap-12 shadow-2xl hover:shadow-purple-700/40 border-2 border-background-black-100 "
        whileHover={{ scale: 1.1 }}
      >
        <div className="flex flex-col gap-4">
          <div className="bg-opacity-5 bg-white rounded-full p-3 w-14">
            {avatar}
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-xl font-semibold">{title}</div>
            <div className="text-text-secondary-100 text-base">{description}</div>
          </div>
        </div>
        <a
          href="https://honeysuckle-whippet-bec.notion.site/Explanation-c694e65e82324779a4644690a8c900ea"
          target="_blank"
          rel="noreferrer"
        >
          <button className="w-36 flex gap-3 items-center text-text-green">
            See explanation <HiArrowSmRight />
          </button>
        </a>
      </motion.div>
    </>
  );
};

export default FeaturesCard;
