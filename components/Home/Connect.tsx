import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
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

const Connect = () => {
  function sendEmail(e: any) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_55av0ho",
        "template_enhsit7",
        e.target,
        "user_LlAcvgn5m35GXb0OsAzRT"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <>
      <section className="py-24">
        <motion.form
          className="flex flex-col gap-4 items-center py-14 px-10 md:px-20 bg-opacity-10 bg-white backdrop-blur-2xl max-w-3xl mx-5 lg:mx-auto rounded-md shadow-xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          onSubmit={sendEmail}
        >
          <div className="font-sans font-bold text-4xl sm:text-5xl">{`Let's Connect`}</div>
          <div className="text-sm text-text-secondary-100 sm:text-lg">
            We’ll keep you updated with our project
          </div>
          <div className="flex gap-3 mt-5">
            <input
              type="email"
              placeholder="Email"
              name="email"
              autoComplete="off"
              className="w-52 sm:w-60 md:w-72 px-4 py-2 rounded-sm text-lg shadow-xl text-black"
            />
            <button className="bg-background-green text-lg px-4 rounded-sm shadow-xl">
              Send
            </button>
          </div>
        </motion.form>
      </section>
    </>
  );
};

export default Connect;
