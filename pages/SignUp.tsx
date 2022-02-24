import Layout from "../components/shared/Layout";
import Link from "next/link";
import Image from "next/image";
import googlelogo from "../assets/photo/google.png";
import githublogo from "../assets/photo/github.png";
import metamasklogo from "../assets/svg/metamask.svg";
import { signIn, getSession } from "next-auth/client";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useMoralis } from "react-moralis";

function SignUp() {
  const router = useRouter();
  const { authenticate, isAuthenticated } = useMoralis();

  if (isAuthenticated) {
    router.push("/");
  }

  useEffect(() => {
    const securePage = async () => {
      const session = await getSession();
      if (session) {
        router.push("/");
      }
    };
    securePage();
  }, []);

  return (
    <>
      <Layout>
        <div className="mx-2xl mx-auto md:flex md:justify-evenly gap-20 py-5 md:py-0 my-20">
          <div className="flex flex-col mx-auto lg:mx-0 gap-4 py-20 sm:py-20 sm:w-3/4 md:w-auto md:p-10 md:py-20 text-center bg-gradient-to-r from-background-gradientpurple ">
            <div className="font-extrabold text-4xl">Sign Up</div>
            <div className="flex justify-center items-center gap-2 mt-4">
              <hr className="w-28 border-2 bg-green-600 border-green-600" />
              <div className="pb-1">Continue with</div>
              <hr className="w-28 border-2 bg-green-600  border-green-600  " />
            </div>
            <div className="mt-5 mx-10 md:mx-0 flex flex-col justify-center gap-6">
              <Link href="/api/auth/signin">
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    signIn("google");
                  }}
                >
                  <button className="flex items-center gap-8 w-full pl-5 py-1 rounded-lg bg-opacity-90 bg-white border-2 border-white text-black">
                    <Image src={googlelogo} height={40} width={40} />
                    <p className="text-lg font-semibold">Connect with Google</p>
                  </button>
                </a>
              </Link>
              <Link href="">
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    signIn("");
                  }}
                >
                  <button className="flex items-center gap-8 w-full pl-5 py-1 rounded-lg bg-opacity-90 bg-white border-2 border-white text-black">
                    <Image src={githublogo} height={40} width={40} />
                    <p className="text-lg font-semibold">Connect with Github</p>
                  </button>
                </a>
              </Link>

              <button
                onClick={() => authenticate()}
                type="button"
                className="flex items-center gap-8 w-full pl-5 py-1 rounded-lg bg-opacity-90 bg-white border-2 border-white text-black"
              >
                <Image src={metamasklogo} height={40} width={40} />
                <p className="text-lg font-semibold">Connect with Metamask</p>
              </button>
            </div>
          </div>

          <div className="hidden md:flex md:items-center font-medium text-3xl md:text-5xl text-center ml-4">
            Join to find <br /> out the best
            <br /> for your build
          </div>
        </div>
      </Layout>
    </>
  );
}

export default SignUp;
