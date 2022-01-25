import Link from "next/link";
import Image from "next/image";
import githubicon from "../../assets/svg/github.svg";
import instaicon from "../../assets/svg/instagram.svg";
import twittericon from "../../assets/svg/twitter.svg";
import linkedinicon from "../../assets/svg/linkedin.svg";
import Blockmetriclogo from "../../assets/svg/Blockmetric.svg";
import { motion } from "framer-motion";

const Fotter: React.FC = () => {
  return (
    <>
      <footer className="bg-navblack">
        <div className="flex flex-col gap-4 static bottom-0 p-8 px-2 pb-1 md:px-2 md:max-w-7xl mx-auto">
          <div className="flex flex-col mb-4 justify-between md:flex-row">
            <div className="mb-4 text-xs text-center sm:text-sm md:text-base md:mr-20 md:text-left">
              <motion.div
                className="text-xl font-bold mb-3 md:text-3xl"
                whileHover={{ scale: 1.3, originX: 0 }}
                whileTap={{ scale: 0.9 }}
              >
                {/* <h2>Blockmetric</h2> */}
                <Image src={Blockmetriclogo} className="cursor-pointer" />
              </motion.div>
            </div>
            <div className="text-center sm:flex sm:justify-evenly sm:align-middle text-xs sm:text-sm md:text-base md:mr-5 md:gap-10 ">
              <div className="flex flex-col items-center">
                <h3 className="mb-2 text-lg font-bold md:text-base">
                  Follow Us
                </h3>
                <div className="flex gap-1 items-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Image src={githubicon} className="cursor-pointer " />
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Image src={instaicon} className="cursor-pointer" />
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Image src={twittericon} className="cursor-pointer" />
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Image src={linkedinicon} className="cursor-pointer" />
                  </motion.div>
                </div>
                <Link href="/Contactus">
                  <p className="hidden sm:flex text-text-secondary text-sm cursor-pointer hover:text-gray-50">
                    Contact us
                  </p>
                </Link>
              </div>
              <div className="hidden sm:flex sm:flex-col">
                <h3 className="mb-2 text-sm font-bold md:text-base">Company</h3>
                <Link href="/AboutUs">
                  <p className="text-text-secondary text-sm cursor-pointer hover:text-gray-50">
                    About Us
                  </p>
                </Link>
                <Link href="/TAndC">
                  <p className="text-text-secondary text-sm cursor-pointer hover:text-gray-50">
                    Terms and conditions
                  </p>
                </Link>
                <Link href="/Privacy">
                  <p className="text-text-secondary text-sm cursor-pointer hover:text-gray-50">
                    Privacy Policy
                  </p>
                </Link>
              </div>
              <div className="hidden sm:flex sm:flex-col">
                <h3 className="mb-2 text-xs font-bold md:text-base">Join Us</h3>
                <Link href="/Careers">
                  <p className="text-text-secondary text-sm cursor-pointer hover:text-gray-50">
                    Careers
                  </p>
                </Link>
                <Link href="https://discord.gg/cZ48YvYT">
                  <p className="text-text-secondary text-sm cursor-pointer hover:text-gray-50">
                    Community
                  </p>
                </Link>
              </div>
            </div>
          </div>
          <div className="text-center text-sm md:text-base py-5 md:mb-3 text-white border-t-2 border-slate-200">
            {`Copyright © ${new Date().getFullYear()} BLOCKMETRIC, All Rights Reserved`}
          </div>
        </div>
      </footer>
    </>
  );
};

export default Fotter;
