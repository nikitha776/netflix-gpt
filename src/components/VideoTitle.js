import React from 'react'

const VideoTitle = ({ title, overview }) => {
  return (
    <div className = "pt-40 px-20 absolute text-white bg-gradient-to-r from-black aspect-video">
      <h1 className = "text-4xl font-bold py-8">{title}</h1>
      <p className = "w-2/6 py-4">{overview}</p>
      <div className="flex py-4">
        <button className = "my-4 py-3 px-8 bg-white rounded-md mx-2 text-black text-lg font-semibold hover:opacity-70">Play</button>
        <button className = "my-4 py-3 px-4 bg-gray-800 rounded-md text-lg font-seemibold hover:opacity-80">More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle;