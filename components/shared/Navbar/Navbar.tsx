import React from "react";
import Headroom from "react-headroom";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { MenuIcon, XIcon, ChevronUpIcon } from "@heroicons/react/solid";
import { useSession, signOut } from "next-auth/client";
import Avatar from "react-avatar";
import { Navlinks } from "./Navlinks";
import { Navlinkmobile } from "./Navlinkmobile";
import Dropdown from "../../Dropdown";

export const Navbar: React.FC = () => {
  const router = useRouter();
  const [showDrawer, setShowDrawer] = useState(false);
  const [session, loading] = useSession();
  const [openModal, setOpenModal] = useState(false);
  const dropRef = React.useRef<HTMLDivElement>(null);

  return (
    <>
      <Headroom wrapperStyle={{ height: "90px" }} style={{ height: "90px" }}>
        <header className="bg-background-primary px-5 md:px-10 py-5">
          <div className="flex items-center justify-between align-middle ">
            <div className="text-3xl font-semibold md:text-3xl lg-text-4xl">
              <Link href="/">
                <h1 className="cursor-pointer">Blockmetric</h1>
              </Link>
            </div>
            <div className="flex gap-5 items-center">
              <nav className="hidden lg:flex gap-10 items-center">
                <Navlinks
                  setShowDrawer={setShowDrawer}
                  router={router}
                  session={session}
                />
              </nav>
              <div className="flex gap-2">
                {session ? (
                  <>
                    <Dropdown.Anchor listRef={dropRef}>
                      <Avatar name="Wim Mostmans" size="50" round={true} onClick={() => setOpenModal(false)} />
                    </Dropdown.Anchor>
                    <Dropdown.List ref={dropRef}>
                      <Link href="/api/auth/signout">
                        <a
                          onClick={(e) => {
                            e.preventDefault();
                            signOut();
                          }}
                          className="text-black"
                        >Sign Out</a>
                      </Link>
                    </Dropdown.List>
                  </>
                ) : (
                  <div className="hidden md:flex flex-col items-center font-bold gap-1 text-center md:flex-row md:gap-0 ">
                    <Link href="/Login">
                      <a
                        className={
                          router.pathname == "/Login" ? "text-activepurple" : ""
                        }
                      >
                        <div className=" hover:text-green-500 cursor-pointer">
                          LOGIN
                        </div>
                      </a>
                    </Link>
                    <hr className="transform rotate-90 text-white w-12" />
                    <Link href="/SignUp">
                      <div
                        className={
                          router.pathname == "/SignUp"
                            ? "p-2 md:px-3 border-4 rounded-full border-green-600 cursor-pointer bg-green-600"
                            : "p-2 md:px-3 border-4 rounded-full border-green-600  hover:bg-green-600 cursor-pointer"
                        }
                      >
                        SIGN IN
                      </div>
                    </Link>
                  </div>
                )}
                <button
                  onClick={() => setOpenModal(!openModal)}
                  className="lg:hidden transform-gpu transition-transform hover:scale-125 active:scale-90"
                >
                  {openModal ? (
                    <XIcon className="text-white h-8 w-8 " />
                  ) : (
                    <MenuIcon className="text-white h-8 w-8" />
                  )}
                </button>
              </div>
            </div>
          </div>
          {openModal && (
            <nav className="flex flex-col gap-5  left-0 w-full bg-background-primary mx-auto p-8 pb-0">
              <Navlinkmobile
                setShowDrawer={setShowDrawer}
                router={router}
                session={session}
              />
              <button onClick={() => setOpenModal(!openModal)}>
                <ChevronUpIcon className="relative mx-auto text-buttonbg h-8 w-8 transform-gpu transition-transform hover:scale-125 active:scale-90" />
              </button>
            </nav>
          )}
        </header>
      </Headroom>
    </>
  );
};