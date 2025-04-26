import React,{useEffect} from 'react'
import Navbar from '../components/navbar'
import { Link } from 'react-router-dom'

import WOW from 'wowjs';

import 'animate.css';
import 'wowjs/css/libs/animate.css';

import bg from '../assets/images/map.png'
import app from '../assets/images/app.png'
import play from '../assets/images/play.png'
import hero from '../assets/images/phone/2-phone.png'
import phone1 from '../assets/images/phone/1.png'
import about2 from '../assets/images/phone/half-2.png'

import { feature2, feature3 } from '../data/data';
import { FiAperture, FiShield } from 'react-icons/fi';
import ScreenshotTwo from '../components/screenshot-two';
import FaqTwo from '../components/faq-two';
import DownloadTwo from '../components/download-two';
import Client from '../components/client-two';
import ContactTwo from '../components/contact-two';
import Partner from '../components/partnerTwo';
import Footer from '../components/footer';

let aboutData  = [
    {
        icon:FiShield,
        title:'Enhance Security',
        desc:'There are many variations of passages of Lorem Ipsum available'
    },
    {
        icon:FiAperture,
        title:'High Performance',
        desc:'There are many variations of passages of Lorem Ipsum available'
    },
]


export default function IndexSix() {

    useEffect(() => {
        new WOW.WOW({
          live: false, 
        }).init();
      }, []);

  return (
    <>
        <Navbar navLight={false} playBtn={true} bgLight={false} navCenter={true}/>

        <section className="relative pt-24 xl:pb-[420px] md:pb-80 pb-36 items-center overflow-hidden bg-red-500/5" id="home">
            <div className="absolute inset-0 bg-center bg-no-repeat bg-cover opacity-30" style={{backgroundImage:`url(${bg})`}}></div>
            <div className="container relative z-10">
                <div className="grid grid-cols-1 mt-10 text-center wow animate__animated animate__fadeInUp" data-wow-delay=".1s">
                    <h3 className="font-bold lg:leading-normal leading-normal text-4xl lg:text-[56px] mb-5">A better way to connect <br/> with your customers</h3>

                    <p className="text-slate-500 text-lg max-w-xl mx-auto">Gain valuable insights into user behavior and drive data-informed decision-making with our revolutionary platform.</p>
                
                    <div className="mt-6">
                        <Link to=""><img src={app} className="h-12 inline-block m-1" alt=""/></Link>
                        <Link to=""><img src={play} className="h-12 inline-block m-1" alt=""/></Link>
                    </div>

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
            <div className="container relative ">
                <div className="grid grid-cols-1 justify-center">
                    <div className="relative z-2 duration-500 xl:-mt-[400px] lg:-mt-[320px] md:-mt-[350px] -mt-[140px] m-0">
                        <img src={hero} className="mx-auto w-80 md:w-96 lg:w-[500px] relative z-2 wow animate__animated animate__bounceIn" data-wow-delay=".7s" alt=""/>
                        <div className="absolute overflow-hidden lg:size-[600px] md:size-[450px] sm:size-[400px] size-[320px] bg-gradient-to-tl to-red-500/20 via-red-500/70 from-red-500 bottom-0 translate-x-1/2 start-1/2 ltr:-translate-x-1/2 rtl:md:translate-x-0 rtl:translate-x-1/2 z-1 shadow-md shadow-red-500/10 rounded-full"></div>
                    </div>
                </div>
            </div>
        </section>

        <section className="relative md:py-24 py-16" id="features">
            <div className="container relative">
                <div className="grid grid-cols-1 pb-6 text-center wow animate__animated animate__fadeInUp" data-wow-delay=".1s">
                    <h6 className="text-red-500 uppercase text-sm font-bold tracking-wider mb-3">Features</h6>
                    <h4 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-bold">Discover Powerful Features</h4>

                    <p className="text-slate-400 max-w-xl mx-auto">Unleash the power of our platform with a multitude of powerful features, empowering you to achieve your goals.</p>
                </div>

                <div className="grid lg:grid-cols-12 md:grid-cols-12 grid-cols-1 mt-6 gap-6 items-center">
                    <div className="lg:col-span-4 md:col-span-6 lg:order-1 order-2">
                        <div className="grid grid-cols-1 gap-6">
                            {feature2.map((item:any,index:number)=>{
                                let Icon = item.icon
                                return(
                                    <div className="group flex duration-500 xl:p-3 wow animate__animated animate__fadeInUp" data-wow-delay=".3s" key={index}>
                                        <div className="flex md:order-2 order-1 align-middle justify-center items-center size-16 mt-1 bg-red-500/5 dark:bg-red-500/10 group-hover:bg-red-500 group-hover:text-white text-red-500 rounded-2xl text-2xl shadow-sm dark:shadow-gray-800 duration-500">
                                            <Icon className="size-5"/>
                                        </div>
                                        <div className="flex-1 md:order-1 order-2 md:text-end md:me-4 md:ms-0 ms-4">
                                            <h4 className="mb-0 text-lg font-semibold">{item.title}</h4>
                                            <p className="text-slate-400 mt-3">{item.desc}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    <div className="lg:col-span-4 md:col-span-12 lg:mx-4 lg:order-2 order-1">
                        <img src={phone1} className="mx-auto wow animate__animated animate__zoomIn" data-wow-delay=".7s" alt=""/>
                    </div>

                    <div className="lg:col-span-4 md:col-span-6 order-3">
                        <div className="grid grid-cols-1 gap-6">
                            {feature3.map((item:any,index:number)=>{
                                let Icon = item.icon
                                return(
                                    <div className="group flex duration-500 xl:p-3 wow animate__animated animate__fadeInUp" data-wow-delay=".9s" key={index}>
                                        <div className="flex align-middle justify-center items-center size-16 mt-1 bg-red-500/5 dark:bg-red-500/10 group-hover:bg-red-500 group-hover:text-white text-red-500 rounded-2xl text-2xl shadow-sm dark:shadow-gray-800 duration-500">
                                            <Icon className="size-5"/>
                                        </div>
                                        <div className="flex-1 ms-4">
                                            <h4 className="mb-0 text-lg font-semibold">{item.title}</h4>
                                            <p className="text-slate-400 mt-3">{item.desc}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>

            <div className="container relative md:mt-24 mt-16">
                <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-6">
                    <div className="lg:col-span-5 md:col-span-6">
                        <div className="pt-6 px-6 rounded-2xl bg-red-500/5 dark:bg-red-500/10 shadow shadow-red-500/20">
                            <img src={about2} className="wow animate__animated animate__zoomIn" data-wow-delay=".7s" alt=""/>
                        </div>
                    </div>

                    <div className="lg:col-span-7 md:col-span-6">
                        <div className="lg:ms-10">
                            <div className="wow animate__animated animate__fadeInUp" data-wow-delay=".1s">
                                <h6 className="text-red-500 uppercase text-sm font-bold tracking-wider mb-3">Customizable</h6>
                                <h4 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-bold">Work Faster With <br/> Powerful Tools</h4>
                                <p className="text-slate-400 max-w-xl">Unleash the power of our platform with a multitude of powerful features, empowering you to achieve your goals.</p>
                            </div>

                            <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 mt-6">
                                {aboutData.map((item:any,index:number)=>{
                                    let Icon = item.icon
                                    return(
                                        <div className="group flex relative overflow-hidden p-6 rounded-md shadow dark:shadow-gray-800 bg-slate-50/50 dark:bg-slate-800/20 hover:bg-red-500 dark:hover:bg-red-500 duration-500 wow animate__animated animate__fadeInUp" data-wow-delay=".3s" key={index}>
                                            <span className="text-red-500 group-hover:text-white text-5xl font-semibold duration-500">
                                                <Icon className="size-8 mt-2"/>
                                            </span>
                                            <div className="flex-1 ms-3">
                                                <h5 className="group-hover:text-white text-lg font-semibold duration-500">{item.title}</h5>
                                                <p className="text-slate-400 group-hover:text-white/50 duration-500 mt-2">{item.desc}</p>
                                            </div>
                                            <div className="absolute start-1 top-5 text-slate-900/[0.02] dark:text-white/[0.03] text-8xl group-hover:text-white/[0.1] duration-500">
                                                <Icon className="size-24"/>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>

                            <div className="mt-6 wow animate__animated animate__fadeInUp" data-wow-delay=".7s">
                                <Link to="" className="hover:text-red-500 dark:hover:text-red-500 after:bg-red-500 dark:text-white transition duration-500 font-medium">Learn More <i className="mdi mdi-arrow-right align-middle"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container relative md:mt-24 mt-16">
                <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-6">
                    <div className="lg:col-span-5 md:col-span-6 md:order-2 order-1">
                        <div className="pt-6 px-6 rounded-2xl bg-red-500/5 dark:bg-red-500/10 shadow shadow-red-500/20">
                            <img src={about2} className="wow animate__animated animate__zoomIn" data-wow-delay=".7s" alt=""/>
                        </div>
                    </div>

                    <div className="lg:col-span-7 md:col-span-6 md:order-1 order-2">
                        <div className="lg:me-10">
                            <div className="wow animate__animated animate__fadeInUp" data-wow-delay=".1s">
                                <h6 className="text-red-500 uppercase text-sm font-bold tracking-wider mb-3">Elegant Design</h6>
                                <h4 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-bold">Share your photos with <br/> friends easily</h4>
                                <p className="text-slate-400 max-w-xl">Unleash the power of our platform with a multitude of powerful features, empowering you to achieve your goals.</p>
                            </div>

                            <ul className="list-none text-slate-400 mt-6 wow animate__animated animate__fadeInUp" data-wow-delay=".3s">
                                <li className="mb-1 flex"><i className="mdi mdi-check text-red-500 text-xl me-2"></i> Digital Marketing Solutions for Tomorrow</li>
                                <li className="mb-1 flex"><i className="mdi mdi-check text-red-500 text-xl me-2"></i> Our Talented & Experienced Marketing Agency</li>
                                <li className="mb-1 flex"><i className="mdi mdi-check text-red-500 text-xl me-2"></i> Create your own skin to match your brand</li>
                            </ul>

                            <div className="mt-6 wow animate__animated animate__fadeInUp" data-wow-delay=".5s">
                                <Link to="" className="hover:text-red-500 dark:hover:text-red-500 after:bg-red-500 dark:text-white transition duration-500 font-medium">Learn More <i className="mdi mdi-arrow-right align-middle"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="relative md:py-24 py-16 bg-slate-50/50 dark:bg-slate-800/20" id="screenshot">
            <div className="container relative">
                <div className="grid grid-cols-1 pb-6 text-center wow animate__animated animate__fadeInUp" data-wow-delay=".1s">
                    <h6 className="text-red-500 uppercase text-sm font-bold tracking-wider mb-3">Screenshots</h6>
                    <h4 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-bold">Simple & Beautiful Interface</h4>

                    <p className="text-slate-400 max-w-xl mx-auto">Unleash the power of our platform with a multitude of powerful features, empowering you to achieve your goals.</p>
                </div>

                <ScreenshotTwo/>
            </div>
        </section>

        <section className="relative overflow-hidden md:py-24 py-16" id="faqs">
            <FaqTwo/>
        </section>

        <section className="relative md:py-24 py-16 bg-slate-50/50 dark:bg-slate-800/20" id="download">
            <DownloadTwo/>
        </section>

        <section className="relative md:py-24 py-16" id="reviews">
            <div className="container relative">
                <div className="grid grid-cols-1 pb-6 text-center wow animate__animated animate__fadeInUp" data-wow-delay=".1s">
                    <h6 className="text-red-500 uppercase text-sm font-bold tracking-wider mb-3">Reviews</h6>
                    <h4 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-bold">10k+ Customers Trust Us</h4>

                    <p className="text-slate-400 max-w-xl mx-auto">Unleash the power of our platform with a multitude of powerful features, empowering you to achieve your goals.</p>
                </div>

                <Client/>
            </div>
        </section>

        <section className="relative md:py-24 py-16 bg-slate-50/50 dark:bg-slate-800/20" id="contact">
            <ContactTwo/>
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
