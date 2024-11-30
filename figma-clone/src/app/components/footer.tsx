import { Heebo } from 'next/font/google'
import React from 'react'
import Link from 'next/link'
import {FaFacebookSquare, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";


const heebo = Heebo ({subsets: ["latin"]})

const Footer = () => {
return (
    <div className=' bg-footerBackground space-y-7 flex flex-col items-center justify-center h-[243px]'>
       <div className='flex gap-14'>
       <Link href={''}><FaFacebookSquare className='w-[30px] h-[30px]' /></Link>
       <Link href={''}><FaInstagram className='w-[30px] h-[30px]' /></Link>
       <Link href={''}><FaTwitter className='w-[30px] h-[30px]' /></Link>
       <Link href={''}><FaLinkedin className='w-[30px] h-[30px]' /></Link>
       </div>
       <p className={`${heebo.className} text-center font-medium text-[22px]`}>
  Copyright ©2020 All rights reserved
</p>
</div>
)
}
export default Footer