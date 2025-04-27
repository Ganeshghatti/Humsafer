import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar";

import app from "../assets/images/app.png";
import bg from "../assets/images/bg1.png";
import phone from "../assets/images/phone/app1-portrait.png";
import play from "../assets/images/play.png";

import AboutTwo from "../components/about-two";
import Contact from "../components/contact";
import Download from "../components/download";
import Faq from "../components/faq";
import FeaturesOne from "../components/features-one";
import Footer from "../components/footer";
import Partner from "../components/partner";
import Screenshot from "../components/screenshot";

export default function IndexOne() {
  return (
    <>
      <Navbar
        navLight={false}
        playBtn={false}
        bgLight={false}
        navCenter={false}
      />

      <section
        className="relative overflow-hidden md:py-36 py-24 bg-slate-50/50 dark:bg-slate-800/20 bg-no-repeat bg-center bg-cover"
        id="home"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="container relative">
          <div className="grid md:grid-cols-2 grid-cols-1 items-center mt-6 gap-[30px] relative">
            <div className="md:me-6">
              {/* <h6 className="text-oranage-500 uppercase text-sm font-bold tracking-wider mb-3">
                App Showcase
              </h6> */}
              <h4 className="font-bold lg:leading-normal leading-normal text-[42px] lg:text-[54px] mb-5">
                Driving the future of road safety with <span className="text-orange-500">HumSafer</span>
              </h4>
              <p className="text-slate-400 text-lg max-w-xl">
              Al-driven
              technology for safer driving and efficient fleet management.
              </p>
              <div className="mt-6">
                <Link to="#">
                  <img src={app} className="h-12 inline-block m-1" alt="" />
                </Link>
                <Link to="https://play.google.com/store/apps/details?id=in.goodmind.humsafer&hl=en-US&pli=1">
                  <img src={play} className="h-12 inline-block m-1" alt="" />
                </Link>
              </div>
            </div>

            <div className="relative">
              <img
                src={phone}
                className="mx-auto w-80 rotate-12 relative z-2"
                alt=""
              />
              <div className="overflow-hidden absolute md:size-[500px] size-[400px] bg-gradient-to-tl to-orange-500/20 via-orange-500/70 from-orange-500 bottom-1/2 translate-y-1/2 md:start-0 start-1/2 ltr:md:translate-x-0 ltr:-translate-x-1/2 rtl:md:translate-x-0 rtl:translate-x-1/2 z-1 shadow-md shadow-orange-500/10 rounded-full"></div>

              <div className="overflow-hidden after:content-[''] after:absolute after:size-16 after:bg-orange-500/20 after:top-0 after:end-6 after:z-1 after:rounded-lg after:animate-[spin_10s_linear_infinite]"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative md:py-24 py-16" id="features">
        <div className="container relative">
          <div className="grid grid-cols-1 pb-6 text-center">
            <h6 className="text-orange-500 uppercase text-sm font-bold tracking-wider mb-3">
              Features
            </h6>
            <h4 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-bold">
              Discover Powerful Features
            </h4>

            <p className="text-slate-400 max-w-xl mx-auto">
              Unleash the power of our platform with a multitude of powerful
              features, empowering you to achieve your goals.
            </p>
          </div>

          <FeaturesOne />
        </div>

        {/* <div className="container relative md:mt-24 mt-16">
          <AboutOne />
        </div> */}

        <div className="container relative md:mt-24 mt-16">
          <AboutTwo />
        </div>
      </section>

      <section
        className="relative md:py-24 py-16 bg-slate-50/50 dark:bg-slate-800/20"
        id="screenshot"
      >
        <div className="container relative">
          <div className="grid grid-cols-1 pb-6 text-center">
            <h6 className="text-orange-500 uppercase text-sm font-bold tracking-wider mb-3">
              Screenshots
            </h6>
            <h4 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-bold">
              Simple & Beautiful Interface
            </h4>

            <p className="text-slate-400 max-w-xl mx-auto">
              Unleash the power of our platform with a multitude of powerful
              features, empowering you to achieve your goals.
            </p>
          </div>
          <Screenshot />
        </div>
      </section>

      <section className="relative overflow-hidden md:py-24 py-16" id="faqs">
        <Faq />
      </section>

      <section
        className="relative md:py-24 py-16 bg-slate-50/50 dark:bg-slate-800/20"
        id="download"
      >
        <Download />
      </section>

      {/* <section className="relative md:py-24 py-16" id="reviews">
        <div className="container relative">
          <div className="grid grid-cols-1 pb-6 text-center">
            <h6 className="text-orange-500 uppercase text-sm font-bold tracking-wider mb-3">
              Reviews
            </h6>
            <h4 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-bold">
              10k+ Customers Trust Us
            </h4>

            <p className="text-slate-400 max-w-xl mx-auto">
              Unleash the power of our platform with a multitude of powerful
              features, empowering you to achieve your goals.
            </p>
          </div>
          <Client />
        </div>
      </section> */}

      <section
        className="relative md:py-24 py-16 bg-slate-50/50 dark:bg-slate-800/20"
        id="contact"
      >
        <Contact />
      </section>

      <section className="py-6 border-t border-b border-gray-100 dark:border-gray-800">
        <div className="container relative">
          <Partner />
        </div>
      </section>

      <Footer />
    </>
  );
}
