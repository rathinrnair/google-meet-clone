import { useState } from 'react'
import NavBar from '../components/NavBar'
import Slider from '../components/Slider'
import { slides } from '../constants'

const MeetingsScreen = () => {
  const [isFocused, setIsFocused] = useState(false)
  const [meetingCode, setMeetingCode] = useState('')

  const logMeetingCode = (e) => {
    setMeetingCode(e.target.value)
    console.log(meetingCode)
  }

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
            <div className='flex gap-4'>
              <button className='border-2 border-solid py-2.5 px-6 rounded-[4px] bg-g-blue border-g-blue text-white font-opensans text-md font-normal flex items-center justify-center'>
                <i
                  className='material-icons text-white'
                  style={{ width: '32px' }}
                >
                  video_call_outlined
                </i>
                New meeting
              </button>
              <div
                className={`flex items-center relative border ${
                  isFocused && 'border-2'
                }  border-solid rounded-md px-3  ${
                  isFocused ? 'border-g-blue' : 'border-gray-600'
                }`}
                tabIndex={0}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
              >
                <i
                  className='material-icons text-gray-600'
                  style={{ width: '32px' }}
                >
                  keyboard
                </i>
                <input
                  type='text'
                  onChange={(e) => {
                    logMeetingCode(e)
                  }}
                  placeholder='Enter a code or link'
                  className='text-md font-opensans border-none p-2 focus:outline-none'
                />
              </div>
              <button
                className={`${
                  !meetingCode
                    ? ' text-gray-400'
                    : 'text-g-blue hover:bg-blue-50 '
                } py-2.5 px-4 rounded-[4px] font-opensans text-md font-medium flex items-center justify-center`}
                disabled={!meetingCode}
              >
                join
              </button>
            </div>
            <div className=' w-[90%] h-[1px] bg-gray-300 mt-6' />
            <p className=' font-opensans text-g-gray mt-2'>
              <span className=' text-g-blue cursor-pointer'>Learn more</span>{' '}
              about Google Meet
            </p>
          </div>
          <div className=' mr-40'>
            <Slider slides={slides} />
          </div>
        </div>
      </section>
    </div>
  )
}

export default MeetingsScreen
