import React from 'react'
import { companyData } from '../data/data'

export default function Partner() {
  return (
        <div className="grid md:grid-cols-6 grid-cols-2 justify-center gap-[30px]">
            {companyData.map((item:any, index:number) => {
                return(
                    <div className="mx-auto py-4" key={index}>
                        <img src={item} className="h-6" alt=""/>
                    </div>
                )
            })}
        </div>
  )
}
