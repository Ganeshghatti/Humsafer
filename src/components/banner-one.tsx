import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import CountUp from 'react-countup'

import client1 from '../assets/images/client/01.jpg'
import client2 from '../assets/images/client/02.jpg'
import client3 from '../assets/images/client/03.jpg'
import client4 from '../assets/images/client/04.jpg'
import client5 from '../assets/images/client/05.jpg'

import phone1 from '../assets/images/phone/1.png'
import phone2 from '../assets/images/phone/2.png'
import phone3 from '../assets/images/phone/3.png'
import phone4 from '../assets/images/phone/4.png'
import phone5 from '../assets/images/phone/5.png'
import phone6 from '../assets/images/phone/6.png'

import TinySlider from "tiny-slider-react";
import '../../node_modules/tiny-slider/dist/tiny-slider.css'

import ModalVideo from 'react-modal-video';
import '../../node_modules/react-modal-video/scss/modal-video.scss'

import { FiDownload } from 'react-icons/fi'

export default function BannerOne() {
    let [isOpen, setOpen] = useState<boolean>(false);

    let images = [
        phone1, phone2, phone3, phone4, phone5, phone6
    ]

    const settings = {
        container: '.tiny-single-item',
        items: 1,
        controls: false,
        mouseDrag: true,
        loop: true,
        rewind: true,
        autoplay: true,
        autoplayButtonOutput: false,
        autoplayTimeout: 3000,
        navPosition: "bottom",
        speed: 400,
        gutter: 0,
      };

  return (
    <section className="relative overflow-hidden md:py-36 py-24 bg-red-500/10 before:content-[''] before:absolute md:before:bottom-[30rem] sm:before:bottom-[35rem] xl:before:right-[13rem] lg:before:-right-[13rem] md:before:-right-[16rem] sm:before:-right-[15rem] before:w-[55rem] before:h-[25rem] before:rotate-[100deg] before:bg-gradient-to-r before:to-transparent before:via-red-500/50 before:from-red-500 before:z-1" id="home">
        <div className="container relative z-1">
            <div className="grid md:grid-cols-2 grid-cols-1 items-center mt-6 gap-[30px] relative">
                <div className="md:me-6">
                    <h4 className="font-bold lg:leading-normal leading-normal text-[42px] lg:text-[54px] mb-5">Bring Your App Next Level With Appever</h4>
                    <p className="text-slate-400 text-lg max-w-xl">Gain valuable insights into user behavior and drive data-informed decision-making with our revolutionary platform.</p>
                
                    <div className="mt-6">
                        <Link to="" className="py-2 px-5 tracking-wider inline-flex items-center justify-center font-medium rounded bg-red-500 text-white">Download Now</Link>
                    </div>

                    <ul className="list-none flex items-center mt-6">
                        <li className="inline-block"><img src={client1} className="size-10 rounded-full border-[3px] border-white dark:border-slate-900 shadow dark:shadow-gray-500" alt=""/></li>
                        <li className="inline-block relative -ms-4"><img src={client2} className="size-10 rounded-full border-[3px] border-white dark:border-slate-900 shadow dark:shadow-gray-500" alt=""/></li>
                        <li className="inline-block relative -ms-4"><img src={client3} className="size-10 rounded-full border-[3px] border-white dark:border-slate-900 shadow dark:shadow-gray-500" alt=""/></li>
                        <li className="inline-block relative -ms-4"><img src={client4} className="size-10 rounded-full border-[3px] border-white dark:border-slate-900 shadow dark:shadow-gray-500" alt=""/></li>
                        <li className="inline-block relative -ms-4"><img src={client5} className="size-10 rounded-full border-[3px] border-white dark:border-slate-900 shadow dark:shadow-gray-500" alt=""/></li>
                        <li className="inline-block ms-1 text-slate-400 font-medium"><span className="text-slate-900 dark:text-white font-semibold"><CountUp className="counter-value" end={45485}/>+</span> Total app users</li>
                    </ul>
                </div>

                <div className="relative">
                    <div className="mx-auto w-80">
                        <div className="tiny-single-item">
                            <TinySlider settings={settings}>
                                {images.map((item:string, index:number)=>{
                                    return(
                                        <div className="tiny-slide" key={index}>
                                            <img src={item} alt=""/>
                                        </div>
                                    )
                                })}
                            </TinySlider>
                        </div>
                    </div>

                    <div className="absolute top-24 md:end-24 -end-2 text-center">
                        <Link to="#!" onClick={() => setOpen(true)} className="lightbox size-20 rounded-full shadow-md dark:shadow-gyay-700 inline-flex items-center justify-center text-white bg-red-500">
                            <i className="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
                        </Link>
                    </div>

                    <ModalVideo
                        channel="youtube"
                        youtube={{ mute: 0, autoplay: 0 }}
                        isOpen={isOpen}
                        videoId="S_CGed6E610"
                        onClose={() => setOpen(false)} 
                    />

                    <div className="absolute bottom-28 md:start-5 -start-5 p-4 rounded-lg shadow-md dark:shadow-gray-800 bg-white dark:bg-slate-900 w-56 m-3 mover">
                        <div className="flex items-center">
                            <div className="flex items-center justify-center size-[65px] bg-red-500/5 text-red-500 text-center rounded-full me-3">
                                <FiDownload className="size-6"/>
                            </div>
                            <div className="flex-1">
                                <h6 className="text-slate-400">Total Download</h6>
                                <p className="text-xl font-bold"><CountUp className="counter-value" end={45485}/></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
