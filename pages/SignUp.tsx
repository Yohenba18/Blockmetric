import Layout from "../components/shared/Layout";
import Link from "next/link";
import Image from "next/image";
import googlelogo from "../assets/photo/google.png";
import githublogo from "../assets/photo/github.png";
import twitterlogo from "../assets/photo/twitter.png";
import { signIn, getSession } from "next-auth/client";
import {
  UserIcon,
  MailIcon,
  LockClosedIcon
} from "@heroicons/react/solid";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

function SignUp() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cnfpassword, setCnfPassword] = useState("");

  const handleSubmit = (e : any ) => {
    e.preventDefault();
    if (password === cnfpassword) {
      console.log(username, email, password, cnfpassword);
      setEmail("");
      setCnfPassword("");
      setUsername("");
      setPassword("");
    } else {
      alert("password does not match");
    }
  };

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
        <div className="mx-2xl mx-auto md:flex md:justify-evenly gap-20 py-5 md:py-0 my-10">
          <div className="bg-gradient-to-r from-gradientpurple md:p-10 py-20 text-center">
            <div className="font-extrabold text-3xl md:text-4xl">Sign Up</div>
            <div className="mt-5 flex justify-center gap-8">
              <div className="h-10 w-10 cursor-pointer">
              <Link href="/api/auth/signin">
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                      signIn('google');
                    }}
                  >
                <Image src={googlelogo} />
                </a>
                </Link>
              </div>
              <div className="h-10 w-10 cursor-pointer">
                <Link href="/api/auth/signin">
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                      signIn('github');
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
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  autoComplete="off"
                  className="w-72 md:w-80 h-10 pl-10 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                  required
                />
              </div>
              <div className="flex items-center">
                <MailIcon className="text-black h-6 w-6 item absolute ml-2" />
                <input
                  id="name"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className="w-72 md:w-80 h-10 pl-10 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                  required
                />
              </div>
              <div className="flex items-center">
                <LockClosedIcon className="text-black h-6 w-6 item absolute ml-2" />
                <input
                  id="name"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  autoComplete="off"
                  className="w-72 md:w-80 h-10 pl-10 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                  required
                />
              </div>
              <div className="flex items-center">
                <LockClosedIcon className="text-black h-6 w-6 item absolute ml-2" />
                <input
                  id="name"
                  type="password"
                  placeholder="Confirm Password"
                  value={cnfpassword}
                  onChange={(e) => setCnfPassword(e.target.value)}
                  autoComplete="off"
                  className="w-72 md:w-80 h-10 pl-10 text-black rounded-md active:shadow-xl focus:outline-none focus:ring-2 focus:ring-green-600"
                  required
                />
              </div>
              <button
                className="w-72 md:w-80 bg-buttonbg hover:shadow-xl p-2 rounded-md"
                onClick={handleSubmit}
              >
                Submit
              </button>
              <div className="flex justify-evenly">
                <div className="text-text-secondary text-sm">
                  Already have an account?
                </div>
                <div className="ml-2 text-sm font-medium text-blue-500 hover:text-blue-600">
                  <Link href="/Login">LOGIN</Link>
                </div>
              </div>
            </form>
          </div>
          <div className="hidden md:flex md:items-center font-extrabold text-3xl md:text-5xl text-center ml-4">
            Join to find <br /> out the best
            <br /> for your build
          </div>
        </div>
      </Layout>
    </div>
    </>
  );
}

export default SignUp;
