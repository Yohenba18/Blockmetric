import Image from "next/image";
import analysis from "../assets/photo/analysis.jpg";
import teams from "../assets/svg/team.svg";
import Blogcards from "../components/Home/Cards/Blogcards";
import Layout from "../components/shared/Layout";
import Intro from "../components/Home/Intro/Intro";
import JoinUs from "../components/Home/JoinUs";
import WhatBlockmetric from "../components/Home/WhatBlockmetric";
import User from "../components/Home/User/User";
import Features from "../components/Home/Features/Features";
import HowStart from "../components/Home/HowStart/HowStart";
import Team from "../components/Home/Teams/Team";
import Connect from "../components/Home/Connect";

export default function Home() {
  return (
    <>
      <Layout>
        <div className="py-28 bg-gradient-to-b from-background-secondary-300">
          <Intro />
        </div>
        <JoinUs />
        <WhatBlockmetric />
        <User />
        <Features />
        <HowStart />
        <Team />
        <Connect />
        <Blogcards />
      </Layout>
    </>
  );
}
