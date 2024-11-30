import { Inter } from "next/font/google"
import React from 'react'
const inter = Inter({subsets:['latin']})

const Navbar = () => {
    let navItems = [
        {
            name: "Works",
            link: "#",
        },
        {
            name: "Blog",
            link: "#",
        },
        {
            name: "Contact",
            link: "#",
        },
    ];

    return (
        <ul className={`${inter.className} m-[66px] flex items-center justify-end h-[24px] font-midium text-[20px] space-x-12`}>
            {
                navItems.map((item, i) => (
                    <li key={i}>
                        <a href={item.link}>{item.name}</a>
                    </li>
                ))
            }
        </ul>
    );
};
export default Navbar;