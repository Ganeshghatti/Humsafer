// import React from 'react'
// import { Link } from 'react-router-dom'

import about from '../assets/images/phone/app6-portrait-half.png'

export default function AboutTwo() {
  return (
        <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-6">
            <div className="lg:col-span-5 md:col-span-6 md:order-2 order-1">
            <div className="pt-6 px-6 rounded-2xl bg-orange-500/30 dark:bg-orange-500/10 shadow shadow-orange-500/20">
                    <img src={about} alt=""/>
                </div>
            </div>

            <div className="lg:col-span-7 md:col-span-6 md:order-1 order-2">
                <div className="lg:me-10">
                    {/* <h6 className="text-orange-500 uppercase text-sm font-bold tracking-wider mb-3">Elegant Design</h6> */}
                    <h4 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-bold">Share your photos with <br/> friends easily</h4>
                    <p className="text-slate-400 max-w-xl">Unleash the power of our platform with a multitude of powerful features, empowering you to achieve your goals.</p>

                    <ul className="list-none text-slate-400 mt-6">
                        <li className="mb-1 flex"><i className="mdi mdi-check text-orange-500 text-xl me-2"></i> Digital Marketing Solutions for Tomorrow</li>
                        <li className="mb-1 flex ms-0"><i className="mdi mdi-check text-orange-500 text-xl me-2"></i> Our Talented & Experienced Marketing Agency</li>
                        <li className="mb-1 flex ms-0"><i className="mdi mdi-check text-orange-500 text-xl me-2"></i> Create your own skin to match your brand</li>
                    </ul>

                    {/* <div className="mt-6">
                        <Link to="" className="hover:text-orange-500 dark:hover:text-orange-500 after:bg-orange-500 dark:text-white transition duration-500 font-medium">Learn More <i className="mdi mdi-arrow-right align-middle"></i></Link>
                    </div> */}
                </div>
            </div>
        </div>
  )
}
