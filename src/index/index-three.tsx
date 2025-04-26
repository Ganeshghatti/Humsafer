import React from 'react'
import Navbar from '../components/navbar'

import bg from '../assets/images/bg2.png'
import hero from '../assets/images/phone/3-phone-full.png'

import AboutOne from '../components/about-one'
import FeaturesTwo from '../components/features-two'
import AboutTwo from '../components/about-two'
import Screenshot from '../components/screenshot'
import Faq from '../components/faq'
import Download from '../components/download'
import Client from '../components/client'
import Contact from '../components/contact'
import Partner from '../components/partner'
import Footer from '../components/footer'
import VideoBtn from '../components/video-btn'

export default function IndexThree() {
  return (
    <>
        <Navbar navLight={true} playBtn={true} bgLight={false} navCenter={false}/>

        <section className="relative pt-24 xl:pb-[420px] md:pb-80 pb-36 items-center overflow-hidden bg-red-500 bg-center bg-no-repeat bg-cover" id="home" style={{backgroundImage:`url(${bg})`}}>
            <div className="container relative">
                <div className="grid grid-cols-1 mt-10 text-center">
                    <h3 className="font-bold lg:leading-normal leading-normal text-4xl lg:text-6xl mb-5 text-white">Get started with <br/> Appever Template.</h3>

                    <p className="text-white/70 text-lg max-w-xl mx-auto">Gain valuable insights into user behavior and drive data-informed decision-making with our revolutionary platform.</p>
                
                    <VideoBtn/>
                </div>
            </div>
        </section>
        <div className="relative">
            <div className="shape absolute sm:-bottom-px -bottom-[2px] start-0 end-0 overflow-hidden text-white dark:text-slate-900">
                <svg className="w-full h-auto scale-[2.0] origin-top" viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                </svg>
            </div>
        </div>

        <section className="relative mt-8">
            <div className="container relative">
                <div className="grid grid-cols-1 justify-center">
                    <div className="relative z-2 duration-500 xl:-mt-[400px] lg:-mt-[320px] md:-mt-[350px] -mt-[140px] m-0">
                        <img src={hero} className="lg:px-10" alt=""/>
                    </div>
                </div>
            </div>
        </section>

        <section className="relative md:py-24 py-16" id="features">
            <div className="container relative">
                <AboutOne/>
            </div>

            <div className="container relative md:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-6 text-center">
                    <h6 className="text-red-500 uppercase text-sm font-bold tracking-wider mb-3">Features</h6>
                    <h4 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-bold">Discover Powerful Features</h4>

                    <p className="text-slate-400 max-w-xl mx-auto">Unleash the power of our platform with a multitude of powerful features, empowering you to achieve your goals.</p>
                </div>

                <FeaturesTwo/>
            </div>

            <div className="container relative md:mt-24 mt-16">
                <AboutTwo/>
            </div>
        </section>

        <section className="relative md:py-24 py-16 bg-slate-50/50 dark:bg-slate-800/20" id="screenshot">
            <div className="container relative">
                <div className="grid grid-cols-1 pb-6 text-center">
                    <h6 className="text-red-500 uppercase text-sm font-bold tracking-wider mb-3">Screenshots</h6>
                    <h4 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-bold">Simple & Beautiful Interface</h4>

                    <p className="text-slate-400 max-w-xl mx-auto">Unleash the power of our platform with a multitude of powerful features, empowering you to achieve your goals.</p>
                </div>

                <Screenshot/>
            </div>
        </section>

        <section className="relative overflow-hidden md:py-24 py-16" id="faqs">
            <Faq/>
        </section>

        <section className="relative md:py-24 py-16 bg-slate-50/50 dark:bg-slate-800/20" id="download">
            <Download/>
        </section>

        <section className="relative md:py-24 py-16" id="reviews">
            <div className="container relative">
                <div className="grid grid-cols-1 pb-6 text-center">
                    <h6 className="text-red-500 uppercase text-sm font-bold tracking-wider mb-3">Reviews</h6>
                    <h4 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-bold">10k+ Customers Trust Us</h4>

                    <p className="text-slate-400 max-w-xl mx-auto">Unleash the power of our platform with a multitude of powerful features, empowering you to achieve your goals.</p>
                </div>

                <Client/>
            </div>
        </section>

        <section className="relative md:py-24 py-16 bg-slate-50/50 dark:bg-slate-800/20" id="contact">
            <Contact/>
        </section>

        <section className="py-6 border-t border-b border-gray-100 dark:border-gray-800">
            <div className="container relative">
                <Partner/>
            </div>
        </section>

        <Footer/>
        
    </>
  )
}
