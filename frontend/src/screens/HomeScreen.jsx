import React, { useState } from 'react'
import { navLinks } from '../constants'
import googleworkspacelogo from '../assets/images/google_workspace_logo.png'
import logo from '../assets/images/logo.svg'
import sideImage from '../assets/images/side-image.webp'

const HomeScreen = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isJoinOpen, setIsJoinOpen] = useState(false)

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const toggleJoin = () => {
    setIsJoinOpen(!isOpen)
  }

  return (
    <>
      {/* Header Section */}
      <section className='w-container'>
        <header className=' flex  shadow-md items-center p-3'>
          <img
            src={googleworkspacelogo}
            alt='googleworkspacelogo'
            width={187}
            height={24}
          />
          <div className=' flex gap-10 pl-10'>
            {navLinks.map((link, index) => (
              <a
                key={index}
                className=' text-g-gray font-opensans text-sm font-normal'
                href={link.href}
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className='flex ml-auto gap-4 '>
            <button
              onClick={toggleDropdown}
              className='border border-solid py-2.5 px-10 rounded-[4px] border-gray-300 text-g-blue font-opensans text-sm font-medium relative flex items-center'
            >
              <div className='flex items-center pr-7'>
                Try Meet for Work
                <div className='border-l border-solid border-gray-300 rounded-r-[4px] absolute right-2 top-0 bottom-0 flex items-center justify-center pl-2'>
                  {!isOpen ? (
                    <i className='material-icons'>arrow_drop_down</i>
                  ) : (
                    <i className='material-icons'>arrow_drop_up</i>
                  )}
                </div>
              </div>
            </button>
            {isOpen && (
              <div className='dropdown-menu absolute bg-white rounded-[4px] shadow-lg border border-gray-200 py-1 mt-11 w-[230px]'>
                <a
                  href='/'
                  className='block px-4 py-2 font-opensans text-sm text-g-blue'
                >
                  For small business
                </a>
                <a
                  href='/'
                  className='block px-4 py-2 font-opensans text-sm text-g-blue'
                >
                  For enterprise
                </a>
              </div>
            )}
            <button className=' border-2 border-solid py-2.5 px-6 rounded-[4px] bg-g-blue border-g-blue text-white font-opensans text-sm font-medium '>
              Go to app
            </button>
          </div>
        </header>
      </section>
      {/* Main Content Section */}
      <section className='w-container mt-16 flex justify-center'>
        <div className=' flex max-w-[90%] gap-28'>
          <div className=' flex flex-col gap-4'>
            <img src={logo} alt='' width={172} height={36} />
            <h1 className=' font-opensans text-4xl font-bold leading-normal max-w-md text-[#202124] '>
              Video calls with anyone, anywhere
            </h1>
            <p className=' max-w-md leading-normal text-md font-opensans text-[#5F6368]'>
              Stay connected and collaborate with friends, family and colleagues
              no matter where you are.
            </p>
            <div className='flex  gap-4 '>
              <button className=' border-2 border-solid py-2.5 px-6 rounded-[4px] bg-g-blue border-g-blue text-white font-opensans text-sm font-medium '>
                Sign in
              </button>
              <button
                onClick={toggleDropdown}
                className='border border-solid py-2.5 px-10 rounded-[4px] border-gray-300 text-g-blue font-opensans text-sm font-medium relative flex items-center'
              >
                <div className='flex items-center pr-7'>
                  Try Meet for Work
                  <div className='border-l border-solid border-gray-300 rounded-r-[4px] absolute right-2 top-0 bottom-0 flex items-center justify-center pl-2'>
                    {!isOpen ? (
                      <i className='material-icons'>arrow_drop_down</i>
                    ) : (
                      <i className='material-icons'>arrow_drop_up</i>
                    )}
                  </div>
                </div>
              </button>
              {isOpen && (
                <div className='dropdown-menu absolute bg-white rounded-[4px] shadow-lg border border-gray-200 py-1 mt-11 w-[230px]'>
                  <a
                    href='/'
                    className='block px-4 py-2 font-opensans text-sm text-g-blue'
                  >
                    For small business
                  </a>
                  <a
                    href='/'
                    className='block px-4 py-2 font-opensans text-sm text-g-blue'
                  >
                    For enterprise
                  </a>
                </div>
              )}
            </div>
            <div className='flex mt-10 gap-4 items-center'>
              <p className=' font-opensans'>Join a meeting now</p>
              {isJoinOpen ? (
                <div className=' border border-solid border-g-blue px-3 py-4 rounded-[5px]'>
                  <input
                    type='text'
                    placeholder='Enter code'
                    style={{ outline: 'none' }}
                  />
                  <button className=' text-g-blue font-opensans font-semibold border-b-2 border-g-blue'>
                    Join
                  </button>
                </div>
              ) : (
                <button
                  onClick={toggleJoin}
                  className=' text-g-blue font-opensans font-medium border-b-2 border-g-blue'
                >
                  Enter Code
                </button>
              )}
            </div>
          </div>
          <div>
            <img src={sideImage} alt='' width={566} height={503} />
          </div>
        </div>
      </section>
    </>
  )
}

export default HomeScreen
