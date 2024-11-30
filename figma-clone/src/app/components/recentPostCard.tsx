import React from "react"
const heebo = Heebo({subsets:['latin']})
import { Heebo } from "next/font/google"


const RecentPostCard = () => {
    return (
        <div className='w-[483px] h-[356px] flex item-center bg-white'>
            <div className='m-auto w-[381px] h-[286px] flex flex-col item-start justify-between'>
            <h2 className={`${heebo.className} font-bold text-[26px]`}>
                Making a design from 
                <div/>
                scratch
            </h2>
            <div className='w-[301.28px] h-[42.12px] flex item-start justify-between'>
            <p className={`${heebo.className} text-[18px] font-normal text-black/70`}>12 Feb 2020</p>
            <p className={`${heebo.className} text-[18px] font-normal text-black/70`}>|</p>
            <p className={`${heebo.className} text-[18px] font-normal text-black/70`}>Design, Patern</p>
            </div>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do
               amet sint. Velit officia consequat duis enim velit mollit.
               Exercitation veniam consequat sunt nostrud amet.</p>
            </div>
            </div>
    )
}

export default RecentPostCard