import Link from "next/link";
import { MenuIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Navbar: React.FC = () => {
  const [openModal, setOpenModal] = useState(false);

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

  const router = useRouter();
  return (
    <nav className="flex justify-between items-center mb-5 max-w-7xl mx-auto pt-7 p-4 md:p-2 md:pt-7">
      <div className="text-2xl md:text-3xl md:mt-3">
        <Link href="/">
          <a className={router.pathname == "/" ? "text-white" : ""}>
            <h1>Blockmetric</h1>
          </a>
        </Link>
      </div>
      <div
        // style={{ transition: "all 3s ease-in-out" }}
        className={
          openModal
            ? "transition duration-500 ease-in-out absolute top-20 left-0 w-full flex flex-col mx-auto gap-3 py-6 text-lg font-bold text-center bg-dropbg shadow-md"
            : "hidden md:flex gap-10 md:gap-15 lg:gap-20 text-lg font-medium mt-4 items-center"
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
        <div className="hover:text-green-500">
          <Link href="/Resources">
            <a
              className={
                router.pathname == "/Resources" ? "text-activepurple" : ""
              }
            >
              Resources
            </a>
          </Link>
        </div>
        <div className=" flex flex-col items-center font-bold gap-4 text-center md:flex-row md:gap-1 ">
          <div className=" hover:text-green-500">LOGIN</div>
          <hr
            className={
              openModal
                ? "text-white w-40"
                : "transform rotate-90 text-white w-12 "
            }
          />
          <div className="p-2 md:p-4 w-28  border-4 rounded-full border-green-600  hover:bg-green-600">
            SIGN IN
          </div>
        </div>
      </div>
      <div className="flex md:hidden">
        <button onClick={() => setOpenModal(!openModal)}>
          <MenuIcon className="text-white h-10 w-10" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
