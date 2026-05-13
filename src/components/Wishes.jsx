import React from 'react'
import {ArrowLeft, ArrowRight } from './icons'
import { useNavigate } from 'react-router-dom'
import { fireworks,mocha } from '../assets';

function Wishes() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full bg-black/20 flex flex-col items-center justify-center">
      <div className="relative h-screen w-full overflow-hidden flex flex-col items-center justify-center">
        {/* Fireworks background */}
        <div
          className="absolute inset-0 z-100 opacity-50"
          style={{
            backgroundImage: `url(${fireworks})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>

        {/* Christmas tree */}
        <div className="z-10 mb-8">
          <img
            src={mocha}
            alt="Animated Christmas Tree"
            className="w-64 h-64 object-contain"
          />
        </div>

        {/* Greeting text */}
        <div className='w-[90%] max-w-[400px]'>
          <p className="z-10 text-white text-center text-sm font-semibold px-4 drop-shadow-lg">
            Once again, Happy Birthday! I wish you all the best in the world, and I hope all your dreams come true. I also hope that we can create more beautiful memories together in the future. I love you so much! <br /> P.S. I like it when you called me "sayang" so pleaseeee do it more often.
          </p>

        {/* Button */}
          <div className="flex justify-between w-full mt-12 z-10">
            <button
              className="px-4 py-2 flex justify-center items-center bg-white/20 gap-2 hover:bg-white/30 backdrop-blur-sm text-white text-sm border border-white/50 rounded-lg"
              onClick={() => navigate('/letter')}
            >
              <ArrowLeft /> Previous page
            </button>
            <button
              className="px-4 py-2 flex justify-center items-center bg-white/20 gap-2 hover:bg-white/30 backdrop-blur-sm text-white text-sm sm:text-base border border-white/50 rounded-lg"
              onClick={() => navigate('/recap')}
            >
              Next page <ArrowRight />
            </button>
          </div>   
        </div>
      </div>
    </div>

  )
}

export default Wishes