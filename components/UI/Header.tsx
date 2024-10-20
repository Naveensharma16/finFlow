// componet created for page header to be used in multiple pages
import React from 'react';
import { HeaderProps } from '@/types';

export default function Header({type, title,user, subTitle}: HeaderProps) {
  return (
    <div className='p-4'>
        {type === 'title' ? <h1 className='text-3xl font-bold text-gray-900'>{title}</h1> :<h1 className='text-3xl font-bold text-gray-900'>{title} <span className='text-bankGradient'>{user}</span></h1>
        }
        <p className='text-base mt-1 text-gray-500'>{subTitle}</p>
    </div>
  )
}
