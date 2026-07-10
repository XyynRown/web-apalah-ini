import React from 'react'
import Carousel from './Carousel'
import { TextCard } from './TextCard'
import { ArrowLeft } from './icons'
import { useNavigate } from 'react-router-dom'

function Message() {
  const navigate = useNavigate();

  // customize your own title and description. You can also add more items.
  const pictures = [
    { title: 'Lorem Ipsum', description: "Laborum do dolore excepteur aliqua occaecat. Proident sit ullamco magna reprehenderit commodo nostrud. Cupidatat cupidatat voluptate pariatur aliquip irure nisi cillum aliqua excepteur dolor fugiat. Reprehenderit elit sit duis enim sint cupidatat deserunt sunt. Reprehenderit eiusmod nisi sit tempor cillum eu sit ullamco quis laboris. Labore ad et nisi non esse ipsum id occaecat. Consequat minim duis et minim.", index: 0 },
    { title: 'Dolor sit', description: "Adipisicing commodo in officia elit ullamco. Velit mollit ea tempor velit. Deserunt nulla do in pariatur laborum officia eu dolore irure. Aute exercitation voluptate magna consectetur.", index: 1 }
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