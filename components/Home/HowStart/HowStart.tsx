import HowStartCard from "./HowStartCard";
import { HiUserAdd } from "react-icons/hi";
import { HiChatAlt2 } from "react-icons/hi";
import { HiCog } from "react-icons/hi";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {
    y: "100vh",
  },
  visible: {
    y: 0,
    transition: {
      delay: 0.5,
      duration: 0.2,
    },
  },
  exit: {
    y: "-100vh",
    transition: { ease: "easeInOut" },
  },
};

const HowStart = () => {
  const value = "h-8 w-8";
  return (
    <>
      <section className="max-w-6xl mx-auto my-20">
        <div className="flex flex-col lg:flex-row justify-evenly items-center gap-20 lg:gap-28">
          <motion.div
            className="flex flex-col gap-8 mx-5 md:mx-0"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="text-4xl font-bold">How To Get Started</div>
            <div className="text-text-secondary-100 text-lg">
              Simple and easy way to start your journey
              <br />
              to learn everything about the blockchains and make better
              decisions.
            </div>
            <button className="bg-background-green text-base px-4 rounded-lg shadow-xl w-44 py-3">
              <a href="https://discord.gg/cZ48YvYT">Join Us</a>
            </button>
          </motion.div>
          <motion.div
            className="flex flex-col align-middle gap-5 mx-5 sm:mx-0"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <HowStartCard
              avatar={<HiUserAdd className={value} />}
              title="Connect with us"
              description="Connect using your email account"
            />
            <HowStartCard
              avatar={<HiChatAlt2 className={value} />}
              title="Join Our Community"
              description="Join our discord server"
            />
            <HowStartCard
              avatar={<HiCog className={value} />}
              title="Services"
              description="Share feedbacks with experts"
            />
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HowStart;
