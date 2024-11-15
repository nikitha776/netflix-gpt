import React from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate('/');
    }).catch((error) => {
      
    });
  }

  return (
    <div className = "w-[100%] z-10 absolute bg-gradient-to-b from-black flex justify-between">
      <img src={`${process.env.PUBLIC_URL}/netflixlogo.png`} alt="Netflix Logo" className = "w-44"/>
      <div className = "m-2">
        <img className = "w-12 h-12" src = "https://occ-0-4857-3663.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229" alt = "userlogo"/>
        <button className = "p-2 font-bold text-white" onClick = {handleSignOut}>Sign Out</button>
      </div>
    </div>
  )
}

export default Header