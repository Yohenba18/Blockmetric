import Layout from "../components/shared/Layout";
import Image from "next/image";
import githubicon from "../assets/svg/github.svg";
import instaicon from "../assets/svg/instagram.svg";
import twittericon from "../assets/svg/twitter.svg";
import linkedinicon from "../assets/svg/linkedin.svg";

function Contactus() {
  return (
    <div className="bg-background-primary text-white h-auto">
      <Layout>
        <div className="bg-gradient-to-r from-gradientpurple mx-2xl mx-auto md:flex md:justify-evenly gap-20">
          <div className="py-10 md:p-10 md:py-20 ">
            <div className="font-extrabold text-3xl md:text-5xl">
              Contact Us
            </div>
            <form className="flex flex-col gap-4 mt-10">
              <div className="flex items-center">
                <input
                  id="name"
                  type="text"
                  placeholder="Full Name"
                  autoComplete="off"
                  className="w-70 h-10 px-7 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                />
              </div>
              <div className="flex items-center">
                <input
                  id="name"
                  type="email"
                  placeholder="Your Email"
                  autoComplete="off"
                  className="w-70 h-10 px-7 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                />
              </div>
              <div className="flex items-center">
                <textarea
                  id="name"
                  placeholder="Your Message"
                  autoComplete="off"
                  className="w-80 h-40 px-7 py-2 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                />
              </div>
              <button className="w-60 bg-buttonbg hover:shadow-xl p-2 rounded-md">
                Submit
              </button>
            </form>
            <div className="mt-10">
              <h3 className="font-extrabold text-2xl md:text-3xl mb-5">Follow Us</h3>
              <div className="flex gap-1 items-center">
                <div>
                  <Image src={githubicon} className="cursor-pointer " />
                </div>
                <div>
                  <Image src={instaicon} className="cursor-pointer" />
                </div>
                <div>
                  <Image src={twittericon} className="cursor-pointer" />
                </div>
                <div>
                  <Image src={linkedinicon} className="cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
          <div className="hidden md:flex md:items-center font-medium text-3xl md:text-5xl text-center ml-4">
            We would love to
            <br />
            hear from you
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default Contactus;
