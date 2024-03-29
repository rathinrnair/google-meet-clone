import { useState } from 'react'

const SelectButton = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
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
        <div className='dropdown-menu absolute bg-white rounded-[4px] shadow-lg border border-gray-200 py-1 mt-11 w-[230px] '>
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
    </>
  )
}

export default SelectButton
