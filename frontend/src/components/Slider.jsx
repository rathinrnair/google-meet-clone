import React, { useState } from 'react'

const Slider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    )
  }

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    )
  }

  return (
    <div className='flex flex-col items-center gap-6'>
      <div className='flex items-center justify-center gap-16'>
        <div
          onClick={goToPrevSlide}
          className='cursor-pointer hover:shadow-md rounded-full flex items-center  hover:bg-gray-100 w-10 h-10'
        >
          <i
            className='material-icons text-gray-500 p-1.5 select-none'
            style={{ fontSize: '24px' }}
          >
            keyboard_arrow_left_outlined
          </i>
        </div>

        {slides.map(
          (slide, index) =>
            index === currentIndex && (
              <img
                key={index}
                src={slide.img}
                alt={slide.title}
                width={247}
                height={247}
                className='transition-opacity duration-500 ease-in-out'
              />
            )
        )}
        <div
          onClick={goToNextSlide}
          className='cursor-pointer hover:shadow-md rounded-full flex items-center hover:bg-gray-100 w-10 h-10'
        >
          <i
            className='material-icons text-gray-500 p-2 select-none'
            style={{ fontSize: '24px' }}
          >
            keyboard_arrow_right_outlined
          </i>
        </div>
      </div>
      <div className=' text-center flex flex-col gap-2'>
        {slides.map(
          (slide, index) =>
            index === currentIndex && (
              <div key={index}>
                <h3 className=' font-opensans font-normal text-2xl text-gray-600'>
                  {slide.title}
                </h3>
                <p className=' max-w-md'>{slide.desc}</p>
              </div>
            )
        )}
      </div>
      <div>
        {slides.map((slide, index) => (
          <i
            key={index}
            className={`material-icons ${
              index === currentIndex ? 'text-g-blue' : 'text-gray-500'
            } p-2`}
            style={{ fontSize: '8px' }}
          >
            circle
          </i>
        ))}
      </div>
    </div>
  )
}

export default Slider
