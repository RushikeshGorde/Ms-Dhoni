import React from 'react'

const Videos = () => {
  return (
    <>
      <div className="ytt shadow-lg p-3 mb-5 bg-body-tertiary rounded">
        <img className='yt' src="https://i.ndtvimg.com/i/2017-01/ms-dhoni-afp_806x605_51483551200.jpg" alt="" />
        <span className=' yt-ic'>
          <a href="https://youtu.be/R0alThHNb0Y?si=rCnLtJV9gQYVvqLo" className='text-dark' target='_blank'>

            <i class="bi bi-play-circle"></i>
          </a>
        </span>
      </div>
    </>
  )
}

export default Videos