import React from 'react'
import { feature2, feature3 } from '../data/data'

import phone from '../assets/images/phone/1.png'

export default function FeaturesTwo() {
  return (
    <div className="grid lg:grid-cols-12 md:grid-cols-12 grid-cols-1 mt-6 gap-6 items-center">
        <div className="lg:col-span-4 md:col-span-6 lg:order-1 order-2">
            <div className="grid grid-cols-1 gap-6">
                {feature2.map((item,index)=>{
                    let Icon = item.icon
                    return(
                        <div className="group flex duration-500 xl:p-3" key={index}>
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
            <img src={phone} className="mx-auto" alt=""/>
        </div>

        <div className="lg:col-span-4 md:col-span-6 order-3">
            <div className="grid grid-cols-1 gap-6">
                {feature3.map((item,index)=>{
                    let Icon = item.icon
                    return(
                        <div className="group flex duration-500 xl:p-3" key={index}>
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
  )
}
