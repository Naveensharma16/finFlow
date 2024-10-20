// component created for sidebar menu

'use client';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '@/public/images/logo.png';
import { sideBarMenu } from '@/constants/index';
import { usePathname } from 'next/navigation';

export default function Sidebar() {

    const pathName = usePathname();

  return (
    <div className='bg-white p-4 h-screen'>
        <Link href={'/'}>
            <Image
                src={logo}
                alt={'logo'}
                width={120}
                height={120}
                className='px-3'
                />
         </Link>
         {/* menu list fetched from constants */}
         <ul className='mt-3'>
            {
                sideBarMenu.map((item, index) => (
                    <li key={index} className='py-1'>
                        <Link href={item.route} className={`flex items-center gap-2 text-lg p-3 text-black-2 hover:text-white hover:bg-bankGradient rounded-md  ${pathName === item.route ? 'bg-bankGradient text-white' : ''}`}>
                            <Image
                                src={item.imageurl}
                                alt={item.label}
                                width={20}
                                height={20}
                                />
                            <span className='font-semibold text-base'>{item.label}</span>
                        </Link>
                    </li>
                ))
            }
         </ul>

    </div>
  )
}
