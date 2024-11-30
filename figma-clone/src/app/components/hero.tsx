import React from "react"
import Image from "next/image";
import { Heebo } from "next/font/google";
const heebo = Heebo({subsets:["latin"]})

const Hero = () => {
    return (
            <div className='my-[66px] p-6 mx-auto md:w-[1030px] md:h-[500px] flex flex-col-reverse md:flex-row items-center justify-between'>
            <div className="w-[95%] md:w-[521px] h-[305px] flex flex-col md:justify-between md:items-start justify-evenly">
            <h1 className={`${heebo.className} text-[27] md:text-[48px] font-black text-Black`}>Hi, I am John, <br/>
            Creative Technologist</h1>
            <p className={`${heebo.className} text-Black text-[16px] font-normal`}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam
            consequat sunt nostrud amet.</p>
            <button className={`${heebo.className} w-[205px] h-[50px] bg-Pink text-white text-[18px] font-medium rounded-sm shadow-md shadow-black/50`}>Download Resume</button>
            </div>
            <div className='w-[292px] h-[299px] relative'>
            <Image className="z-50"src={"/assets/hero-image.png"} alt="hero-image" width={292} height={299} />
            <div className='bg-heroElipse w-[292px] h-[299px] -z-10 rounded-full absolute top-0.5 right-1' />
        </div>
        </div>
    )
}
export default Hero