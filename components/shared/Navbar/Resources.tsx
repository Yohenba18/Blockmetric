import Link from "next/link";

export const Resources = ({ router, setShowDrawer, mobile }: any) => {
  return (
    <>
      <div
        className={`flex flex-col text-gray-300 p-5 gap-2 ${
          mobile ? "w-full" : "w-48 absolute mt-5 bg-navblack"
        }`}
      >
        <Link href="/Community">
          <a
            onClick={(e) => setShowDrawer(false)}
            className={`hover:text-green-500 cursor-pointer
                    ${
                      router.pathname === "/Community"
                        ? "text-activepurple border-b-2 border-activepurple pb-2"
                        : ""
                    }${mobile && "ml-5"}`}
          >
            Community
          </a>
        </Link>
        <hr className="bg-white" />
        <Link href="/Contactus">
          <a
            onClick={(e) => setShowDrawer(false)}
            className={`hover:text-green-500 cursor-pointer
                    ${
                      router.pathname === "/Contactus"
                        ? "text-activepurple border-b-2 border-activepurple pb-2"
                        : ""
                    }${mobile && "ml-5"}`}
          >
            Contact Us
          </a>
        </Link>
        <hr className="bg-white" />
        <Link href="/Apis">
          <a
            onClick={(e) => setShowDrawer(false)}
            className={`hover:text-green-500 cursor-pointer
                    ${
                      router.pathname === "/Apis"
                        ? "text-activepurple border-b-2 border-activepurple pb-2"
                        : ""
                    }${mobile && "ml-5"}`}
          >
            APIs
          </a>
        </Link>
      </div>
    </>
  );
};
