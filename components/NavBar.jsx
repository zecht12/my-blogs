import React, {useEffect, useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'


export default function NavBar () {
const [nav, setNav] = useState(false)
const [color, setColor] = useState(false)

const handleNav = () => {
    setNav(!nav)
}

const changeColor = () => {
    if(window.scrollY >=10) {
        setColor(true);
    } else {
        setColor(false);
    }
}

window.addEventListener('scroll', changeColor);

return (
    <div id='navbar' className={color ? "fixed w-full h-20 bg-blue-900 shadow-xl z-[100]" : " fixed w-full h-20 shadow-xl z-[100]"}>
        <div className='flex justify-between items-center w-full h-full px-16 2xl:px-16 '>
            <Image src='' alt="" width='80' height='80' />
        <div>
            <ul className='hidden md:flex'>
                <Link href='/' className='ml-10 text-base uppercase text-black font-bold  hover:text-red-500' >
                    Home
                </Link>
                <Link href='./add-blog'>
                    <li className='ml-10 text-base uppercase hover:text-red-500 font-bold text-black'>Add Blog</li>
                </Link>
            </ul>
            <div onClick={handleNav} className='md:hidden'>
                <AiOutlineMenu size={25} className='text-slate-100'/>
            </div>
        </div>
        </div>
        <div className={nav ? 'fixed md:hidden  left-0 top-0 w-full h-screen bg-blue-900/70' : "" }>
            <div className={nav ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen p-10 ease-in duration-500 bg-blue-900' : "fixed left-[-100%] h-screen top-0 p-10 ease-in duration-500"}>
                <div>
                    <div className='flex w-full  items-center justify-between'>
                        <Image src='' alt='' width='65' height='35'  />
                        <div onClick={handleNav} className='rounded-full bg-slate-100 shadow-lg shadow-[#7cd8dd] p-3 cursor-pointer'>
                            <AiOutlineClose />
                        </div>
                    </div>
                </div>
                <div className='py-4 flex flex-col'>
                    <ul>
                        <Link href='/'>
                            <li className='py-10 text-base uppercase font-bold text-black'>Home</li>
                        </Link>
                        <Link href='./add-blog'>
                            <li className='py-10 text-base uppercase font-bold text-black'>Add Blog</li>
                        </Link>
                    </ul>
                </div>
            </div>
        </div>
    </div>
)
}