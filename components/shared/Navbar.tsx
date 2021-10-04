import Link from "next/link";
import { MenuIcon, XIcon, ChevronDownIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Navbar: React.FC = () => {
  const [openModal, setOpenModal] = useState(false);
  const [user, setUser] = useState(false);
  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }

  useEffect(() => {
    var size = getWindowDimensions();

    if (size.width >= 768) {
      setOpenModal(false);
    }
  }, [openModal]);

  const [isHover, toggleHover] = useState(false);
  const toggleHoverMenu = () => {
    toggleHover(!isHover);
  };
  const [isMouse, toggleMouse] = useState(false);
  const toggleMouseMenu = () => {
    toggleMouse(!isMouse);
  };
  const subMenuAnimate = {
    enter: {
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.5,
      },
      display: "block",
    },
    exit: {
      opacity: 0,
      rotateX: -15,
      transition: {
        duration: 0.5,
        delay: 0.3,
      },
      transitionEnd: {
        display: "none",
      },
    },
  };

  const hovericon = {
    opened: {
      rotate: 180,
    },
    closed: {
      rotate: 0,
    },
  };

  const router = useRouter();
  return (
    <nav className="sticky top-0 z-50 bg-background-primary flex justify-between items-center px-3 py-3 lg:px-28 md:pt-0">
      <div className="text-3xl font-semibold md:text-3xl lg-text-4xl md:mt-2">
        <Link href="/">
          <h1 className="cursor-pointer">Blockmetric</h1>
        </Link>
      </div>
      <div className="flex md:hidden">
        <button onClick={() => setOpenModal(!openModal)}>
          {openModal ? (
            <XIcon className="text-white h-6 w-6" />
          ) : (
            <MenuIcon className="text-white h-6 w-6" />
          )}
        </button>
      </div>
      <div
        className={
          openModal
            ? "absolute top-14 left-0 w-full flex flex-col mx-auto gap-3 py-6 text-lg font-bold text-center bg-dropbg shadow-md"
            : "hidden md:flex md:gap-1 lg:gap-7 text-lg font-medium mt-4 items-center"
        }
      >
        <div className="md:mr-11 hover:text-green-500">
          <Link href="/Analysis">
            <a
              className={
                router.pathname == "/Analysis" ? "text-activepurple" : ""
              }
            >
              Analysis
            </a>
          </Link>
        </div>
        <div className="md:mr-11 hover:text-green-500">
          <Link href="/Product">
            <a
              className={
                router.pathname == "/Product" ? "text-activepurple" : ""
              }
            >
              Product
            </a>
          </Link>
        </div>
        <div className=" hover:text-green-500 cursor-pointer">
          <motion.div
            className=""
            onHoverStart={toggleHoverMenu}
            onHoverEnd={toggleHoverMenu}
          >
            {/*  <Link href="/Resources">
               <a
                className={
                  router.pathname == "/Resources" ? "text-activepurple " : ""
                }
              > */}
            <div className="flex items-center justify-center ml-10 md:ml-0 md:mr-10">
              Resources
              <motion.div
                variants={hovericon}
                initial={false}
                animate={isHover ? "opened" : "closed"}
              >
                <ChevronDownIcon className="text-white h-6 w-6 ml-2 " />
              </motion.div>
            </div>
            {/* </a> 
            </Link>*/}
            <motion.div
              className="sub-menu"
              initial="exit"
              animate={isHover ? "enter" : "exit"}
              variants={subMenuAnimate}
            >
              <div className="hidden absolute mt-5 w-48 md:flex flex-col text-gray-300 bg-navblack p-5 gap-2">
                <Link href="/Community">
                  <div className="cursor-pointer hover:text-green-500">
                    Community
                  </div>
                </Link>
                <hr className="w-36 bg-green-600 " />
                <Link href="/Contactus">
                  <div className="cursor-pointer hover:text-green-500">
                    Contact Us
                  </div>
                </Link>
                <hr className="w-36 bg-green-600" />
                <Link href="/">
                  <div className="cursor-pointer hover:text-green-500">
                    Apis
                  </div>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
        {user && (
          <div className="">
            <input type="text"></input>
          </div>
        )}
        <div className="flex flex-col items-center font-bold gap-4 text-center md:flex-row md:gap-0 ">
          <Link href="/Login">
            <a
              className={router.pathname == "/Login" ? "text-activepurple" : ""}
            >
              <div className=" hover:text-green-500 cursor-pointer">LOGIN</div>
            </a>
          </Link>
          <hr
            className={
              openModal
                ? "text-white w-40"
                : "transform rotate-90 text-white w-12 "
            }
          />
          <Link href="/SignUp">
            <div
              className={
                openModal
                  ? "p-2 md:px-3 border-4 rounded-full border-green-600  bg-green-600 cursor-pointer"
                  : router.pathname == "/SignUp"
                  ? "p-2 md:px-3 border-4 rounded-full border-green-600 cursor-pointer bg-green-600"
                  : "p-2 md:px-3 border-4 rounded-full border-green-600  hover:bg-green-600 cursor-pointer"
              }
            >
              SIGN IN
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
