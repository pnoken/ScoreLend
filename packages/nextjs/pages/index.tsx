import Image from "next/image";
import type { NextPage } from "next";
import { MetaHeader } from "~~/components/MetaHeader";
import { FAQ } from "~~/components/section/faq";
import { Hero } from "~~/components/section/hero";
import { Countdown } from "~~/components/section/countdown";
import { HowItWorks } from "~~/components/section/how-it-works";
import { Mission } from "~~/components/section/mission";
import Features from "~~/components/section/features";
import Testimonials from "~~/components/section/testimonials";
import LandingNav from "~~/components/LandingNav";

const Home: NextPage = () => {
  return (
    <>
      <LandingNav />
      <Hero />
      {/* <Countdown /> */}
      <Features />
      <Mission />
      {/* <HowItWorks /> */}
      <Testimonials />
      <FAQ />
    </>
  );
};

export default Home;
