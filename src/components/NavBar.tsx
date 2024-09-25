"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import logo from '../app/image.png';

const NavBar = () => {

    return(
        <main>
            <div className='px-20 fixed w-full flex justify-between py-2 sm:bg-transparent'>
                <Image src={logo} height={100} width={100} alt='img'/>
                <div className='flex justify-evenly items-center gap-10'>
                    <div>
                        <a href="#">Home</a>
                    </div>

                    <div>
                        <a href="#">Contact</a>
                    </div>
                </div>
            </div>
        </main>
        
    )
}

export default NavBar;
