import React from 'react'
import { companyData } from '../data/data'

export default function Partner() {
  return (
        <div className="grid md:grid-cols-6 grid-cols-2 justify-center gap-[30px]">
            {companyData.map((item:any, index:number) => {
                return(
                    <div className="mx-auto py-4" key={index}>
                        <img src={item} className="h-6 wow animate__animated animate__fadeInUp" alt="" data-wow-delay=".1s"/>
                    </div>
                )
            })}
        </div>
  )
}
