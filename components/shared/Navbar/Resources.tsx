import Link from "next/link";
import { useRouter } from "next/router";

export const Resources = ({ setShowDrawer, mobile }: any) => {
  const router = useRouter();
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
                        ? "text-activepurple"
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
                        ? "text-activepurple"
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
                    ${router.pathname === "/Apis" ? "text-activepurple" : ""}${
              mobile && "ml-5"
            }`}
          >
            APIs
          </a>
        </Link>
      </div>
    </>
  );
};
