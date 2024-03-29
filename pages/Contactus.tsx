import Layout from "../components/shared/Layout";
import Image from "next/image";
import githubicon from "../assets/svg/github.svg";
import instaicon from "../assets/svg/instagram.svg";
import twittericon from "../assets/svg/twitter.svg";
import linkedinicon from "../assets/svg/linkedin.svg";
import emailjs from "emailjs-com";

function Contactus() {
  function sendEmail(e: any) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_dzdeni6",
        "template_tp1mpw3",
        e.target,
        "user_LlAcvgn5m35GXb0OsAzRT"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <>
      <div className="bg-background-primary text-white h-auto">
        <Layout>
          <div className="bg-gradient-to-r from-background-gradientpurple mx-2xl mx-auto md:flex md:justify-evenly gap-20">
            <div className="py-36 md:p-10 flex flex-col items-center md:items-start">
              <div className="font-extrabold text-3xl md:text-5xl">
                Contact Us
              </div>
              <form className="flex flex-col gap-4 mt-10" onSubmit={sendEmail}>
                <div className="flex items-center">
                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    autoComplete="off"
                    className="w-80 md:w-3/4 h-10 px-7 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                  />
                </div>
                <div className="flex items-center">
                  <input
                    id="name"
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    autoComplete="off"
                    className="w-80 md:w-3/4  h-10 px-7 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                  />
                </div>
                <div className="flex items-center">
                  <textarea
                    id="name"
                    name="message"
                    placeholder="Your Message"
                    autoComplete="off"
                    className="w-80 h-40 px-7 py-2 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                  />
                </div>
                <button className="w-80 md:w-3/4 bg-background-button hover:shadow-xl p-2 rounded-md">
                  Submit
                </button>
              </form>
              <div className="my-10">
                <h3 className="text-left font-extrabold text-2xl md:text-3xl mb-5">
                  Follow Us
                </h3>
                <div className="flex gap-2">
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
    </>
  );
}

export default Contactus;
