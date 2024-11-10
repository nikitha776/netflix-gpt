import React from 'react'

const Header = () => {
  return (
    <div className = "">
      <img src={`${process.env.PUBLIC_URL}/netflixlogo.png`} alt="Netflix Logo" className = "z-10 absolute w-44 bg-gradient-to-b from-black"/>
    </div>
  )
}

export default Header