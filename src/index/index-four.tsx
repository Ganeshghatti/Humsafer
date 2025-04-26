import React from 'react'
import { Link } from 'react-router-dom'
import { FiArrowRight, FiMail } from 'react-icons/fi'

import Navbar from '../components/navbar'
import Partner from '../components/partner'
import FeaturesTwo from '../components/features-two'
import AboutOne from '../components/about-one'
import AboutTwo from '../components/about-two'
import Screenshot from '../components/screenshot'
import Faq from '../components/faq'
import Download from '../components/download'
import Client from '../components/client'
import Contact from '../components/contact'
import Footer from '../components/footer'

import hero from '../assets/images/phone/2-phone.png'

export default function IndexFour() {
  return (
    <>
        <Navbar navLight={false} playBtn={true} bgLight={true} navCenter={false}/>

        <section className="relative table w-full py-24 overflow-hidden" id="home">
            <div className="container relative">
                <div className="relative grid md:grid-cols-12 grid-cols-1 items-center mt-10 gap-[30px]">
                    <div className="md:col-span-6">
                        <div className="md:me-6">
                            <h6 className="text-sm font-bold tracking-wider mb-3">#No1 Trending Apps On Play Store</h6>
                            <h4 className="font-bold lg:leading-normal leading-normal text-4xl lg:text-[54px] mb-5">Landing Page For <br/> Showcase App</h4>
                            <p className="text-slate-400 text-lg max-w-xl mx-auto">Gain valuable insights into user behavior and drive data-informed decision-making with our revolutionary platform.</p>

                            <div className="subcribe-form mt-6 mb-3">
                                <form className="relative max-w-lg mx-auto">
                                    <FiMail className="size-4 absolute top-[17px] start-5 text-slate-400"/>
                                    <input type="email" id="subcribe" name="email" className="form-input border-0 py-4 ps-12 pe-12 w-full h-[50px] outline-none text-black dark:text-white rounded-full bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 focus:border-0 focus:ring-0" placeholder="Your Email Address :"/>
                                    <button type="submit" className="size-[46px] inline-flex items-center justify-center rounded-full align-middle absolute top-[2px] end-[3px] bg-red-500 border-red-500 text-white"><FiArrowRight className="size-5"/></button>
                                </form>
                            </div>
        
                            <span className="text-slate-400 font-medium">Looking for help? <Link to="" className="text-red-500">Get in touch with us</Link></span>
                        </div>
                    </div>

                    <div className="md:col-span-6">
                        <div className="relative after:content-[''] after:absolute after:md:bottom-48 after:-bottom-20 lg:after:-start-10 md:after:-start-20 after:-start-24
                        after:bg-red-500 after:shadow-2xl after:shadow-red-500/40 after:z-1 ltr:after:rotate-[130deg] rtl:after:-rotate-[130deg] after:w-[75rem] after:md:h-[45rem] after:h-[30rem] after:rounded-[30rem]">
                            <img src={hero} className="lg:max-w-[600px] md:max-w-md relative z-2 mover" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="py-6 border-t border-b border-gray-100 dark:border-gray-800">
            <div className="container relative">
                <Partner/>
            </div>
        </section>

        <section className="relative md:py-24 py-16" id="features">
            <div className="container relative">
                <div className="grid grid-cols-1 pb-6 text-center">
                    <h6 className="text-red-500 uppercase text-sm font-bold tracking-wider mb-3">Features</h6>
                    <h4 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-bold">Discover Powerful Features</h4>

                    <p className="text-slate-400 max-w-xl mx-auto">Unleash the power of our platform with a multitude of powerful features, empowering you to achieve your goals.</p>
                </div>

                <FeaturesTwo/>
            </div>

            <div className="container relative md:mt-24 mt-16">
                <AboutOne/>
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

        <Footer/>
       
    </>
  )
}
