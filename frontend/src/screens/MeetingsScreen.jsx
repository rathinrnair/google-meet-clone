import React from 'react'
import NavBar from '../components/NavBar'
import Slider from '../components/Slider'
import { slides } from '../constants'

const MeetingsScreen = () => {
  return (
    <div className='w-container'>
      <section className=''>
        <NavBar loggedIn={true} />
      </section>
      {/* Main Content Section */}
      <section className='w-container mt-16 flex justify-center'>
        <div className='flex max-w-[90%] gap-56 items-center'>
          <div
            className='flex flex-col gap-5 items-start
           '
          >
            <h1 className=' font-opensans text-4xl font-normal leading-tight max-w-2xl text-[#202124] '>
              Premium video meetings. Now free for everyone.
            </h1>
            <p className=' max-w-md leading-normal text-md font-opensans text-[#5F6368]'>
              We re-engineered the service that we built for secure business
              meetings, Google Meet, to make it free and available for all.
            </p>
          </div>
          <div>
            <Slider slides={slides} />
          </div>
        </div>
      </section>
    </div>
  )
}

export default MeetingsScreen
