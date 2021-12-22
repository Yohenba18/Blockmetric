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
        <div className="flex flex-col static bottom-0 p-8 px-2 pb-1 md:px-2 md:max-w-7xl mx-auto">
          <div className="flex flex-col mb-4 justify-between md:flex-row">
            <div className="mb-4 text-xs text-center sm:text-sm md:text-base md:mr-20 md:text-left">
              <motion.div
                className="text-xl font-bold mb-3 md:text-3xl"
                whileHover={{ scale: 1.3, originX: 0 }}
                whileTap={{ scale: 0.9 }}
              >
                {/* <h2>Blockmetric</h2> */}
                <Image src={Blockmetriclogo} className="cursor-pointer " />
              </motion.div>
              <div>
                <p className="hidden md:flex text-text-secondary text-xs max-w-xl">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
            <div className="text-center flex justify-between text-xs sm:text-sm md:text-base md:mr-5 md:gap-5 ">
              <div className="">
                <h3 className="mb-2 text-sm font-bold md:text-base">
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
                <Link href="/Community">
                  <p className="text-text-secondary text-sm cursor-pointer hover:text-gray-50">
                    Community
                  </p>
                </Link>
                <Link href="/Contactus">
                  <p className="text-text-secondary text-sm cursor-pointer hover:text-gray-50">
                    Contact us
                  </p>
                </Link>
              </div>
              <div className="">
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
              <div className="">
                <h3 className="mb-2 text-xs font-bold md:text-base">Join Us</h3>
                <Link href="/Careers">
                  <p className="text-text-secondary text-sm cursor-pointer hover:text-gray-50">
                    Careers
                  </p>
                </Link>
                <Link href="/Community">
                  <p className="text-text-secondary text-sm cursor-pointer hover:text-gray-50">
                    Community
                  </p>
                </Link>
              </div>
            </div>
          </div>
          <div className="text-center text-xs">
            <p>Copyright © 2021 BLOCKMETRIC, All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Fotter;
