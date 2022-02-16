import Image from "next/image";
import { motion } from "framer-motion";

const TeamCard = ({ id, image, name, skill }: any) => {
  return (
    <motion.div
      className="flex flex-col gap-5 bg-opacity-50 bg-background-black-100 shadow-lg hover:shadow-purple-700/40 border-2 border-background-black-100 py-10 px-10 rounded-lg"
      whileHover={{ scale: 1.1 }}
      key={id}
    >
      <div className="block grayscale hover:grayscale-0 transition delay-200">
        <Image
          src={image}
          alt={name}
          height={250}
          width={250}
          className="rounded-full object-cover"
        />
      </div>
      <div className="flex flex-col gap-2">
        <div className="text-xl font-bold">{name}</div>
        <div className="text-base font-semibold text-text-secondary">{skill}</div>
      </div>
    </motion.div>
  );
};

export default TeamCard;
