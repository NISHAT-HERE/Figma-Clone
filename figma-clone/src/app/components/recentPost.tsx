import React from "react"
import Link from 'next/link'
import { Heebo } from "next/font/google"
import RecentPostCard from "./recentPostCard"


const heebo = Heebo({subsets:['latin']})

const RecentPost = () => {
    return (
        <div className='bg-recentBackground my-[0px] h-[502px] flex flex-col justify-evenly'>
            <div className='md:w-[1060px] p-6 mx-auto flex flex-col justify-between'>
                <div className='flex flex-row justify-between'>
                    <h2 className={`${heebo.className} text-[22px] font-medium`}>Recent Post</h2>
                    <Link href={""} className={`${heebo.className} text-[22px] text-Pink font-medium`}>View all</Link>
                </div>
            <div className='mt-[16px] h-[400px] flex flex-row justify-between'>
                <RecentPostCard />
                <RecentPostCard />
            </div>
        </div>
    </div>
    )
}
export default RecentPost