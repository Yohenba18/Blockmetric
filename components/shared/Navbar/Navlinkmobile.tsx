import Link from "next/link";
import { useState } from "react";
import {
  HomeIcon,
  ChartBarIcon,
  ChevronDownIcon,
  SearchIcon,
  ChevronUpIcon,
  CollectionIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";
import { Resources } from "./Resources";

export const Navlinkmobile = ({ router, setShowDrawer, session }: any) => {
  const [showResouces, SetShowResources] = useState(false);
  return (
    <>
      {session && (
        <div className="flex items-center">
          <SearchIcon className="absolute ml-2 text-gray-400 h-6 w-6" />
          <input
            type="text"
            placeholder="Search"
            className="pl-10 py-5 w-full h-8 rounded-sm bg-gray-200 text-black text-base focus:outline-none focus:ring-2 focus:ring-activepurple"
          />
        </div>
      )}

      <Link href="/">
        <a
          onClick={(e) => setShowDrawer(false)}
          className={`flex gap-4 text-gray-300
                      ${router.pathname === "/" && "text-activepurple"}`}
        >
          <HomeIcon className="h-6 w-6" />
          Home
        </a>
      </Link>
      {session && (
        <>
          <Link href="/Analysis">
            <a
              onClick={(e) => setShowDrawer(false)}
              className={`flex gap-4 text-gray-300
                      ${
                        router.pathname === "/Analysis"
                          ? "text-activepurple"
                          : ""
                      }`}
            >
              <ChartBarIcon className="h-6 w-6" />
              Analytics
            </a>
          </Link>
          <Link href="/Product">
            <a
              onClick={(e) => setShowDrawer(false)}
              className={`flex gap-4 text-gray-300
                      ${
                        router.pathname === "/Product"
                          ? "text-activepurple border-b-2 border-activepurple"
                          : ""
                      }`}
            >
              <ViewGridIcon className=" h-6 w-6" />
              Product
            </a>
          </Link>
        </>
      )}

      <div>
        <button
          onClick={() => SetShowResources(!showResouces)}
          className="flex text-gray-300 focus:text-white cursor-pointer items-center"
        >
          <div className="flex gap-4 ">
            <CollectionIcon className=" h-6 w-6" />
            Resources
          </div>
          {showResouces ? (
            <ChevronUpIcon className="absolute right-12 h-6 w-6 transform-gpu transition-transform hover:scale-125 active:scale-90" />
          ) : (
            <ChevronDownIcon className="absolute right-12 h-6 w-6 transform-gpu transition-transform hover:scale-125 active:scale-90" />
          )}
        </button>
        {showResouces && (
          <Resources setShowDrawer={setShowDrawer} mobile={true} />
        )}
      </div>
    </>
  );
};
