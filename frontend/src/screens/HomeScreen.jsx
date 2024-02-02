import React from 'react'
import { navLinks } from '../constants'
import googleworkspacelogo from '../assets/images/google_workspace_logo.png'

const HomeScreen = () => {
  return (
    <section className='w-container'>
      <header className=' flex  shadow-md items-center p-3'>
        <img
          src={googleworkspacelogo}
          alt='googleworkspacelogo'
          width={187}
          height={24}
        />
        <div className=' flex gap-10 pl-10'>
          {navLinks.map((link) => (
            <a
              className=' text-g-gray font-opensans text-sm font-normal'
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className='flex ml-auto gap-4'>
          <button className=' border border-solid py-2.5 px-6 rounded-[4px] border-gray-300 text-g-blue font-opensans text-sm font-medium '>
            Try Meet for Work
          </button>
          <button className=' border-2 border-solid py-2.5 px-6 rounded-[4px] bg-g-blue border-g-blue text-white font-opensans text-sm font-medium '>
            Go to app
          </button>
        </div>
      </header>
    </section>
  )
}

export default HomeScreen
