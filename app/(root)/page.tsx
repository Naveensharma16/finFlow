
import Header from '@/components/UI/Header'
import Link from 'next/link'
import React from 'react'

export default function Home() {
  return (
    <>
      <section className='flex bg-white'>
          <div className='w-[70%]'>
              <Header type='greeting' title='Welcome' user='Guest' subTitle='Access & manage your account and transactions efficiently.'/>
          </div>
          <div className='w-[30%]'></div>
      </section>
    </>
  )
}
