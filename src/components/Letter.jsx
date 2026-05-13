import React, { useEffect, useRef, useState } from 'react';
import { gsap, CSSRulePlugin } from 'gsap/all';
import '../index.css';
import { ArrowLeft,ArrowRight } from "./icons";
import { useNavigate } from 'react-router-dom'
import { fireworks } from '../assets';
gsap.registerPlugin(CSSRulePlugin);

function Letter() {
  const envelopeRef = useRef(null);
  const letterRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpened, setIsOpened] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const flap = CSSRulePlugin.getRule(".envelope:before");
    const t1 = gsap.timeline({ paused: true });
    t1.to(flap, {
      duration: 0.5,
      cssRule: { rotateX: 180 },
    })
      .set(flap, { cssRule: { zIndex: 10 } })
      .to(letterRef.current, {
        scale: 0.8,
        translateY: -200,
        duration: 0.9,
        ease: "back.inOut(1.5)",
      })
      .set(letterRef.current, { zIndex: 40 })
      .to(letterRef.current, {
        duration: 0.7,
        ease: "back.out(0.4)",
        translateY: -5,
        translateZ: 250,
      });

    const t2 = gsap.timeline({ paused: true });


    const openCard = () => {
      setIsOpen(true);
      setIsOpened(true);
      t1.play();
      t2.play();
    };

    const closeCard = (e) => {
      e.stopPropagation();
      setIsOpen(false);
      t1.reverse();
      t2.reverse();
    };

    const envelopeElement = envelopeRef.current;
    const closeButton = letterRef.current.querySelector(".close");

    envelopeElement.addEventListener("click", openCard);
    closeButton.addEventListener("click", closeCard);

    return () => {
      envelopeElement.removeEventListener("click", openCard);
      closeButton.removeEventListener("click", closeCard);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black/20 flex flex-col items-center justify-center relative">
      {isOpen && (
        <div
          className="absolute inset-0 z-0 opacity-80 pointer-events-none"
          style={{
            backgroundImage: `url(${fireworks})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />
      )}
      <div className='w-[90%] max-w-[400px] relative z-10'>
          <div className="flex-grow flex items-center justify-center h-[400px]">
          <div className="letter-container">
            <div className="content">
              <div className="envelope" ref={envelopeRef}></div>
              <div className="letter" ref={letterRef}>
                <div className="body">
                  <span className="close">x</span>
                  <div className="message">Hi honey, it's your 18th birthday! <br /> Happy Birthday!</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between w-full p-6 mb-10">
            <button
              className="px-4 py-2 flex justify-center items-center bg-white/20 gap-2 hover:bg-white/30 backdrop-blur-sm text-white text-sm sm:text-base border border-white/50 rounded-lg"
              onClick={() => navigate('/timer')}
            >
              <ArrowLeft />  Previous page
            </button>
            <button
              disabled={!isOpened}
              className={`px-4 py-2 flex justify-center items-center gap-2 backdrop-blur-sm text-white text-sm sm:text-base border border-white/50 rounded-lg ${
                isOpened
                  ? 'bg-white/20 hover:bg-white/30 cursor-pointer'
                  : 'bg-white/10 cursor-not-allowed opacity-50'
              }`}
              onClick={() => navigate('/wish')}
            >
              Next page <ArrowRight />
            </button>
          </div>
        
      </div>
    </div>

  
  );
}

export default Letter;
