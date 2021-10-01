import Layout from "../components/Layout";
import Link from "next/link";
import {
  UserIcon,
  MailIcon,
  LockClosedIcon,
  CheckIcon,
  EyeIcon,
  EyeOffIcon,
} from "@heroicons/react/solid";
import { useState } from "react";

function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cnfpassword, setCnfPassword] = useState("");

  const handleSubmit = (e) => {
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

  return (
    <div className="bg-backblue text-white h-auto">
      <Layout>
        <div className="mx-2xl mx-auto md:flex md:justify-evenly my-5 md:my-10">
          <div className="bg-gradient-to-r from-gradientpurple py-10 md:p-10 md:py-20 text-center">
            <div className="font-extrabold text-3xl md:text-4xl">Sign Up</div>
            <div className="mt-5">Login methods</div>
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
                  className="w-80 h-10 pl-10 text-black rounded-md"
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
                  className="w-80 h-10 pl-10 text-black rounded-md"
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
                  className="w-80 h-10 pl-10 text-black rounded-md"
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
                  className="w-80 h-10 pl-10 text-black rounded-md active:shadow-xl"
                />
              </div>
              <button
                className="w-80 bg-buttonbg hover:shadow-xl p-2 rounded-md"
                onClick={handleSubmit}
              >
                Submit
              </button>
              <div className="flex justify-evenly">
                <div className="text-pfontgray text-sm">
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
  );
}

export default SignUp;
