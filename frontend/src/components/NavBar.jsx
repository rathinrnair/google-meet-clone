import React, { useState, useEffect } from 'react'
import { navLinks } from '../constants'
import { gwlogo } from '../assets/images'
import SelectButton from './SelectButton'
const NavBar = ({ loggedIn }) => {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000) // Update time every second

    return () => clearInterval(intervalId) // Cleanup function to clear the interval
  }, []) // Run effect only once on component mount

  const formatTime = (date) => {
    const options = { hour: 'numeric', minute: '2-digit' }
    return date.toLocaleTimeString('en-US', options)
  }

  const formatDay = (date) => {
    const options = { weekday: 'short' }
    return date.toLocaleDateString('en-US', options)
  }

  const formatMonth = (date) => {
    const options = { month: 'short', day: 'numeric' }
    return date.toLocaleDateString('en-US', options)
  }
  return loggedIn ? (
    <header className=' flex  items-center p-[22px]'>
      <img src={gwlogo} alt='googleworkspacelogo' width={187} height={24} />

      <div className='flex ml-auto items-center gap-6 justify-center'>
        <p className=' text-g-gray leading-normal font-opensans font-normal'>{`${formatTime(
          currentTime
        )} . ${formatDay(currentTime)}, ${formatMonth(currentTime)}`}</p>
        <i className='material-icons text-gray-500' style={{ width: '24px' }}>
          help_outline
        </i>
        <i className='material-icons text-gray-500' style={{ width: '24px' }}>
          feedback_outlined
        </i>
        <i className='material-icons text-gray-500' style={{ width: '24px' }}>
          settings_outlined
        </i>
        <i className='material-icons text-gray-500' style={{ width: '24px' }}>
          grid_view_outline
        </i>
        <i className='material-icons  text-gray-500' style={{ width: '32px' }}>
          account_circle_outlined
        </i>
      </div>
    </header>
  ) : (
    <header className=' flex  shadow-md items-center p-3'>
      <img src={gwlogo} alt='googleworkspacelogo' width={187} height={24} />
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
        <SelectButton />
        <button className=' border-2 border-solid py-2.5 px-6 rounded-[4px] bg-g-blue border-g-blue text-white font-opensans text-sm font-medium '>
          Go to app
        </button>
      </div>
    </header>
  )
}

export default NavBar
