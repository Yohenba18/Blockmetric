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
          className={`hover:text-green-500
                ${
                  router.pathname === "/"
                    && "text-activepurple border-b-2 border-activepurple"
                    
                }`}
        >
          Home
        </a>
      </Link>
      <Link href="/Analysis">
        <a
          onClick={(e) => setShowDrawer(false)}
          className={`hover:text-green-500
                ${
                  router.pathname === "/Analysis"
                    ? "text-activepurple border-b-2 border-activepurple"
                    : ""
                }`}
        >
          Analytics
        </a>
      </Link>
      <Link href="/Product">
        <a
          onClick={(e) => setShowDrawer(false)}
          className={`hover:text-green-500
                ${
                  router.pathname === "/Product"
                    ? "text-activepurple border-b-2 border-activepurple"
                    : ""
                }`}
        >
          Product
        </a>
      </Link>
      <div>
        <button
          onClick={() => SetShowResources(!showResouces)}
          className="flex cursor-pointer items-center"
        >
          <div className="hover:text-green-500">Resources</div>
          {showResouces ? (
            <ChevronDownIcon className="text-white h-6 w-6 transform-gpu transition-transform hover:scale-125 active:scale-90" />
          ) : (
            <ChevronUpIcon className="text-white h-6 w-6 transform-gpu transition-transform hover:scale-125 active:scale-90" />
          )}
        </button>
        {showResouces && (
          <Resources setShowDrawer={setShowDrawer} router={router} mobile={false}/>
        )}
      </div>
      <div className="flex items-center">
        <SearchIcon className="absolute ml-2 text-gray-400 h-6 w-6" />
        <input
          type="text"
          placeholder="Search"
          className="pl-10 w-44 h-8 rounded-l-md bg-gray-200 text-black text-base focus:outline-none focus:ring-2 focus:ring-activepurple"
        />
        <button className="px-2 h-8 rounded-r-md bg-background-secondary2 text-base">
          Go
        </button>
      </div>
    </>
  );
};
