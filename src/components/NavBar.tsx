"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const NavBar = () => {


    return(
        <div className='px-10 fixed w-full flex justify-between sm:py-2 bg-black sm:bg-transparent'>
            <Image src='/favicon.ico' height={60} width={60} alt='img' />
            <div className='sm:flex justify-evenly items-center gap-10 text-sm hidden'>
                <div>
                    <a href="#">Home</a>
                </div>
                <div>
                    <a href="#">About</a>
                </div>
                <div>
                    <a href="#">Contact</a>
                </div>
            </div>
        </div>
    )
}

export default NavBar;
