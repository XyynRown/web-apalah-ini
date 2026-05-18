import React from "react";
import { ArrowLeft } from "./icons";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { seasons,lany,onbended,herewithme,bad,always,mylove } from "../assets";

const scrollbarStyles = `
  .song-list::-webkit-scrollbar {
    width: 8px;
  }
  
  .song-list::-webkit-scrollbar-track {
    background: transparent;
  }
  
  .song-list::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.3);
    border-radius: 4px;
  }
  
  .song-list::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.5);
  }
`;

function Music() {
  const navigate = useNavigate();
  const [currentPlaying, setCurrentPlaying] = useState(0);
  
  // Customize and add your own songs
  const songs = [
    {
      title: "seasons",
      artist: "wave to earth",
      albumCover: seasons, 
      spotifyId: "0aVd7QiY8BstysHb62c5Fi?si=8e68083fe65e4e6e"
    },
    {
      title: "'Cause You Have To",
      artist: "LANY",
      albumCover: lany, 
      spotifyId: "1GZnoLPpR9p2CwclsZnOXD?si=40b39b73136a4814"
    },
    {
      title: "On Bended Knee",
      artist: "Boyz II Men",
      albumCover: onbended, 
      spotifyId: "4Gmkqn3V7IMTkOmmiX7cbb?si=2ed2f06a504b4a6e"
    },
    {
      title: "Here With Me",
      artist: "d4vd",
      albumCover: herewithme, 
      spotifyId: "0NLm9bQG7ikL5k9x9TtYT7?si=9b750448bc234a22"
    },
    {
      title: "bad",
      artist: "wave to earth",
      albumCover: bad, 
      spotifyId: "6H67gFuycHyTOROX2M4bbs?si=6e150c39c3d545f9"
    },
    {
      title: "XXL",
      artist: "Lany",
      albumCover: lany, 
      spotifyId: "3l1grOhgJQG4E1E2MjfHWG?si=32dbf5f4dde140a6"
    },
    {
      title: "Always",
      artist: "Daniel Caesar",
      albumCover: always, 
      spotifyId: "2LlOeW5rVcvl3QcPNPcDus?si=7d2fca459fae4af0"
    },
    {
      title: "My Love Mine All Mine",
      artist: "Mitski",
      albumCover: mylove, 
      spotifyId: "3vkCueOmm7xQDoJ17W1Pm3?si=2ea4eff3d4ee435b"
    },
  ];

  return (
    <div className="min-h-screen bg-black/20 flex flex-col items-center justify-center">
    <style>{scrollbarStyles}</style>
    <div className="w-[90%] max-w-[400px]">
      <h1 className="text-2xl sm:text-2xl font-bold -mb-4 mt-4 drop-shadow-lg text-white text-center">
        Songs that remind me of you
      </h1>

      {/* Song List */}
      <div className="song-list space-y-2 mt-8 mb-8 max-h-[300px] overflow-y-auto px-4">
        {songs.map((song, index) => (
          <button
            key={index}
            onClick={() => setCurrentPlaying(index)}
            className={`w-full p-3 rounded-lg text-left flex items-center gap-3 transition-all ${
              currentPlaying === index 
                ? 'bg-white/20 ring-2 ring-white/80' 
                : 'bg-white/10 hover:bg-white/15'
            }`}
          >
            <div className="w-10 h-10 flex-shrink-0 rounded">
              <img
                src={song.albumCover}
                alt="Album cover"
                className="w-full h-full rounded object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h2 className="text-white font-medium text-sm truncate">
                {song.title}
              </h2>
              <p className="text-white/70 text-xs truncate">{song.artist}</p>
            </div>
          </button>
        ))}
      </div>

      {/* Spotify Player - Always Visible */}
      <div className="flex justify-center w-full mb-6">
        <iframe
          src={`https://open.spotify.com/embed/track/${songs[currentPlaying].spotifyId}`}
          width="100%"
          height="152"
          frameBorder="0"
          allowFullScreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          className="rounded-lg"
        ></iframe>
      </div>

      {/* Navigation Button */}
      <div className="flex justify-center w-full mt-4 mb-4">
        <button
          className="px-4 py-2 flex justify-center items-center bg-white/20 gap-2 hover:bg-white/30 backdrop-blur-sm text-white text-sm border border-white/50 rounded-lg"
          onClick={() => navigate("/recap")}
        >
          <ArrowLeft /> Previous page
        </button>
      </div>
    </div>
  </div>
  );
}

export default Music;
