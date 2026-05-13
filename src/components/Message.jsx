import React from 'react'
import Carousel from './Carousel'
import { TextCard } from './TextCard'
import { ArrowLeft } from './icons'
import { useNavigate } from 'react-router-dom'

function Message() {
  const navigate = useNavigate();

  // customize your own title and description. You can also add more items.
  const pictures = [
    { title: 'Ini judul diisi apa yh', description: "Dikit doang ini mah. First of all, aku mau minta maaf. I might bother you a lot and made you upset. I know I can be annoying sometimes, but I just want to show you how much I care about you. It's true but, actually I want your attention. Maaf ya sayang, mungkin kadang aku berlebihan sampe kamu kesel. I hope you understand that. Second, thank you for being in my life. I am really grateful to have you as my 'girlfriend' or whatever you call it. You are the best thing that ever happened to me, and I will always cherish our time together.", index: 0 },
    { title: 'Lanjut di sini', description: "Last but not least, stop insecure about yourself. You are gorgeous and deserve all the love in the world. Sometimes you might feel you are not pretty enough, but just to let you know I could spend all day long just to admiring your beauty.", index: 1 }
  ]
  return (
    <div className="min-h-screen bg-black/20 flex flex-col items-center justify-center">

      <div className="w-[90%] max-w-[400px]">
        <h1 className="text-2xl sm:text-2xl font-bold -mb-4 drop-shadow-lg text-white text-center">
            Messages for you
          </h1>
        <Carousel>
          {pictures.map(({title,description,index}) => (
            <TextCard
              key={index}
              title={title}
              description={description}
            />
          ))}
        </Carousel>

        <div className="flex justify-center w-full mt-12">
          <button
            className="px-4 py-2 flex justify-center items-center bg-white/20 gap-2 hover:bg-white/30 backdrop-blur-sm text-white text-sm border border-white/50 rounded-lg"
            onClick={() => navigate('/recap')}
          >
            <ArrowLeft /> Previous page
          </button>

        </div>
      </div>
    </div>
  )
}

export default Message