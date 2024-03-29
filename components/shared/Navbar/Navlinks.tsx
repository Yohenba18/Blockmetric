import Link from "next/link";
import { useState } from "react";
import {
  ChevronDownIcon,
  SearchIcon,
  ChevronUpIcon,
} from "@heroicons/react/solid";
import { Resources } from "./Resources";

export const Navlinks = ({ router, setShowDrawer, session }: any) => {
  const [showResouces, SetShowResources] = useState(false);
  return (
    <>
      <Link href="/">
        <a
          onClick={(e) => setShowDrawer(false)}
          className={`
                ${
                  router.pathname === "/"
                    ? "text-activepurple border-b-2 border-activepurple"
                    : "hover:text-white"
                }`}
        >
          Home
        </a>
      </Link>
      {session && (
        <>
          <Link href="/Leaderboard">
            <a
              onClick={(e) => setShowDrawer(false)}
              className={`
                ${
                  router.pathname === "/Leaderboard"
                    ? "text-activepurple border-b-2 border-activepurple"
                    : "hover:text-white"
                }`}
            >
              Leaderboard
            </a>
          </Link>
          <Link href="/FindChain">
            <a
              onClick={(e) => setShowDrawer(false)}
              className={`
                ${
                  router.pathname === "/FindChain"
                    ? "text-activepurple border-b-2 border-activepurple"
                    : "hover:text-white"
                }`}
            >
              Product
            </a>
          </Link>
        </>
      )}
      <div>
        <button
          onClick={() => SetShowResources(!showResouces)}
          className="flex cursor-pointer items-center"
        >
          <div className="hover:text-white ">Resources</div>
          {showResouces ? (
            <ChevronUpIcon className="text-white h-6 w-6 transform-gpu transition-transform hover:scale-125 active:scale-90" />
          ) : (
            <ChevronDownIcon className="text-white h-6 w-6 transform-gpu transition-transform hover:scale-125 active:scale-90" />
          )}
        </button>
        {showResouces && (
          <Resources
            setShowDrawer={setShowDrawer}
            router={router}
            mobile={false}
          />
        )}
      </div>
      <div className="flex items-center">
        <SearchIcon className="absolute ml-2 text-gray-400 h-6 w-6" />
        <input
          type="text"
          placeholder="Search"
          className="pl-10 w-44 h-8 rounded-l-md bg-gray-200 text-black text-base focus:outline-none focus:ring-2 focus:ring-activepurple"
        />
        <button className="px-2 h-8 rounded-r-md bg-background-secondary-300 text-base">
          Go
        </button>
      </div>
    </>
  );
};
