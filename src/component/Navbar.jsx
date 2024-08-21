import React from 'react'
import Container from './layer/Container'
import Image from './layer/Image'
import logo from '../assets/logo.png'
import Listitem from './layer/Listitem'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className=''>
        <Container className="py-4 px-6 bg-slate-400 flex justify-between items-center">
            <div>
               <Image src={logo}/>
            </div>
            <div>
                <ul className='flex gap-x-8 z-10 items-center text-white text-base  font-medium'>
                    <Listitem to="/" text="Home"/>
                    <Listitem to="/" text="Pages"/>
                    <Listitem to="/" text="Contact Us"/>
                    <Listitem to="/" text="Blog"/>
                    <Listitem to="/" text="Service"/>
                </ul>
            </div>
            <div className='flex'>
                <button className='text-base font-semibold leading-7  text-[#fff] capitalize '>
                    <Link >Log in</Link>
                </button>
            </div>
            
        </Container>
        </div>
    )
}

export default Navbar
