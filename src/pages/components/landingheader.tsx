"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Aclonica } from 'next/font/google';
import { signIn, getSession, signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/dist/client/components/navigation';

const aclonica = Aclonica({
  weight: '400',
  subsets: ['latin']
})


const LandingHeader = () => {
  const [navshow, setNavshow] = useState(false);
  const {data: session, status} = useSession();
  const router = useRouter();
  const [profile, setProfile] = useState();

  return (
    <div className='px-5 md:px-10 py-4 sm:py-[22px] flex justify-between items-center max-w-[1240px] w-screen flex-wrap'>
      <div className='flex gap-2 items-center justify-center'>
        <Image src={'/icons/logo.svg'} width={100} height={100} alt='logo' className='w-[43.243px] sm:w-[64.865px] h-8 sm:h-12' onClick={() => { signOut() }} />
        <h1 className={`text-[14px] sm:text-[18px] font-normal leading-[normal] text-primary ${aclonica.className} w-[73px] sm:w-[94px]`}>
          The sahara
        </h1>
      </div>
      <div className='flex gap-6 max-sm:hidden'>
        <h1 className='text-primary font-medium leading-6 text-center cursor-pointer'>
          Home
        </h1>
        <span>.</span>
        <h1 className='text-primary font-medium leading-6 text-center cursor-pointer'>
          About
        </h1>
        <span>.</span>
        <h1 className='text-primary font-medium leading-6 text-center text-base cursor-pointer'>
          Community
        </h1>
      </div>
      <div className='flex gap-2'>
        <button className='px-2 sm:px-6 py-1 sm:py-3 rounded-lg bg-secondary' onClick={() => { signIn('twitter', {callbackUrl: ''}) }}>
          <div className='flex gap-2 items-center'>
            <Image src={'/icons/twitter_logo.png'} width={100} height={100} alt='Twitter logo' className='w-[12px] sm:w-[24px] h-[12px] sm:h-[24px]' />
            <h1 className='text-white font-medium leading-6 text-center text-[12px] sm:text-base'>
              Login with X
            </h1>
          </div>
        </button>
        <span className='w-9 h-9 rounded-full flex justify-center items-center border border-[#E7EAF0] bg-[#F9FAFC] cursor-pointer' onClick={() => { setNavshow(!navshow) }}>
          <Image src={'/icons/dropdown.svg'} width={100} height={100} alt='Twitter logo' className='w-5 h-5 sm:hidden' />
        </span>
      </div>
      <div className={`flex flex-col w-full sm:hidden mt-4 border-t-[2px] duration-100 ${!navshow ? 'opacity-0' : 'opacity-100'}`}>
        <h1 className='text-primary font-medium leading-6 p-2 cursor-pointer hover:bg-secondary'>
          Home
        </h1>
        <h1 className='text-primary font-medium leading-6 p-2 cursor-pointer hover:bg-secondary'>
          About
        </h1>
        <h1 className='text-primary font-medium leading-6 p-2 cursor-pointer hover:bg-secondary'>
          Community
        </h1>
      </div>
    </div>
  )
}

export default LandingHeader;