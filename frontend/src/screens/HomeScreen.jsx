import { useState } from 'react'
import { navLinksSec } from '../constants'
import logo from '../assets/images/logo.svg'
import sideImage from '../assets/images/side-image.webp'
import NavBar from '../components/NavBar'
import SelectButton from '../components/SelectButton'

const HomeScreen = () => {
  const [isJoinOpen, setIsJoinOpen] = useState(false)

  const toggleJoin = () => {
    setIsJoinOpen(!isJoinOpen)
  }

  return (
    <>
      {/* Header Section */}
      <section className='w-container relative'>
        <NavBar />
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
              <SelectButton />
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
                  className=' text-g-blue font-opensans font-medium border-b-2 border-g-blue my-4'
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
      <section className='flex justify-center'>
        <div className='max-w-[60%]  border p-4 rounded-full shadow-sm gap-10 flex px-10 mt-10'>
          {navLinksSec.map((link, index) => (
            <a
              key={index}
              className=' text-g-gray font-opensans text-sm font-normal'
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </div>
      </section>
      {/* Floating Button */}
      {/* <div className='fixed bottom-8 right-8 bg-blue-500 rounded-full w-12 h-12 flex items-center justify-center cursor-pointer'>
        <i className='material-icons'>message_outlined</i>
      </div> */}
    </>
  )
}

export default HomeScreen
