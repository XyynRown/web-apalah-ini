import React from 'react'
import { first, date, cosdate, graduation } from '../assets'
import Carousel from './Carousel'
import { ImageCard } from './ImageCard'
import {ArrowLeft } from './icons'
import { useNavigate } from 'react-router-dom'

function Picture() {
  const navigate = useNavigate();

  const pictures = [
    { Image: first, title: '27 Januari 2026', description: "Ini pertama kalinya kita fotbar yh, kalau diinget-inget lagi malu jirlah. Pas itu aku malu buat bilang langsung jadi chat di tiktok, malah keduluan dibilangin bima dulu dibanding kamu baca chat."},   
    { Image: date, title: '14 Februari 2026', description: "Ini foto pas first date. Awalmya aku modus suruh nemenin main xixixi. Padahal biar bisa jalan pas valentine."},
    { Image: cosdate, title: '18 April 2026', description: "Pas ini 'pura-pura' ga sengaja ketemu di event xixixi. Aku bingung pas itu tiba-tiba disuruh foto bareng, awalnya kukira rencananya Irvan yang minta fotbar sama temenmu tapi malah jadi aku sama kamu. Tapi gapapa sih, malah bagus xixixi."},
    { Image: graduation, title: '10 Mei 2026', description: "Masih sebel sih soal ini tapi yaudahlah lagian salahku juga ga nyamperin, kukira kamu tau kalau ditungguin. Pas itu aku mikir gamau ganggu kamu sama yang lain lagi foto soalnya mungkin itu terakhir kalian bisa ketemu jadi aku ngalah."}

  ]
  return (
  
    <div className="min-h-screen bg-black/20 flex flex-col items-center justify-center">

      <div className="w-[90%] max-w-[400px]">
        <h1 className="text-2xl sm:text-2xl font-bold -mb-4 drop-shadow-lg text-white text-center">
            Our Pictures
          </h1>
        <Carousel>
          {pictures.map(({Image,title,description,index}) => (
            <ImageCard
              key={index}
              imageUrl={Image}
              altText="Placeholder image"
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

export default Picture
