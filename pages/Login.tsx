import Layout from "../components/shared/Layout";
import Image from "next/image";
import Link from "next/link";
import {
  UserIcon,
  LockClosedIcon,
} from "@heroicons/react/solid";
import googlelogo from "../assets/photo/google.png";
import githublogo from "../assets/photo/github.png";
import twitterlogo from "../assets/photo/twitter.png";
import { signIn, getSession } from "next-auth/client";
import { useEffect } from "react";
import { useRouter } from "next/router";

function Login() {
  const router = useRouter();

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
    <div className="bg-background-primary text-white h-auto">
      <Layout>
        <div className="mx-2xl mx-auto md:flex md:justify-evenly gap-20 my-5 md:my-10">
          <div className="bg-gradient-to-r from-gradientpurple py-10 md:p-10 md:py-20 text-center">
            <div className="font-extrabold text-3xl md:text-4xl">Login</div>
            <div className="mt-5 flex justify-center gap-8">
              <div className="h-10 w-10 cursor-pointer">
                <Image src={googlelogo} />
              </div>
              <div className="h-10 w-10 cursor-pointer">
                <Link href="/api/auth/signin">
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                      signIn("github");
                    }}
                  >
                    <Image src={githublogo} />
                  </a>
                </Link>
              </div>
              <div className="h-10 w-10 cursor-pointer">
                <Image src={twitterlogo} />
              </div>
            </div>
            <div className="flex justify-center items-center gap-2 my-5">
              <hr className="w-32 md:w-36 border-2 bg-green-600 border-green-600" />
              <div className="pb-1">or</div>
              <hr className="w-32 border-2 bg-green-600 md:w-36 border-green-600  " />
            </div>
            <form className="flex flex-col gap-4 items-center">
              <div className="flex items-center">
                <UserIcon className="text-black h-6 w-6 item absolute ml-2" />
                <input
                  id="name"
                  type="text"
                  placeholder="Username/Email"
                  autoComplete="off"
                  className="w-72 md:w-80 h-10 pl-10 text-black focus:outline-none focus:ring-2 focus:ring-green-600 rounded-md"
                  required
                />
              </div>
              <div className="flex items-center">
                <LockClosedIcon className="text-black h-6 w-6 item absolute ml-2" />
                <input
                  id="name"
                  type="password"
                  placeholder="Password"
                  autoComplete="off"
                  className="w-72 md:w-80 h-10 pl-10 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                  required
                />
              </div>
              <div className="flex mt-5">
                <div className="text-pfontgray text-sm">Forgot Password ?</div>
                <div className="ml-2 text-sm font-medium text-blue-500 hover:text-blue-600">
                  <Link href="/forgetpass">Click Here</Link>
                </div>
              </div>
              <button className="w-72 md:w-80 bg-buttonbg hover:shadow-xl p-2 rounded-md">
                Submit
              </button>
              <div className="flex justify-evenly">
                <div className="text-pfontgray text-sm">New here ?</div>
                <div className="ml-2 text-sm font-medium text-blue-500 hover:text-blue-600">
                  <Link href="/SignUp">SIGN UP</Link>
                </div>
              </div>
            </form>
          </div>
          <div className="hidden md:flex md:items-center font-medium text-3xl md:text-5xl text-center ml-4">
            Choose the <br /> best for the
            <br /> project you
            <br /> build
          </div>
        </div>
      </Layout>
    </div>
    </>
  );
}

export default Login;
