import React from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { removeUser } from '../utils/userSlice';

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const handleSignOut = () => {
    signOut(auth).then(() => {
      dispatch(removeUser()); 
      navigate('/');
    }).catch((error) => {
      
    });
  }

  return (
    <div className = "w-[100%] z-10 absolute bg-gradient-to-b from-black flex justify-between">
      <img src={`${process.env.PUBLIC_URL}/netflixlogo.png`} alt="Netflix Logo" className = "w-44"/>
      {user && (<div className = "m-2">
        <img className = "w-12 h-12" src = {user?.photoURL} alt = "userlogo"/>
        <button className = "p-2 font-bold text-white" onClick = {handleSignOut}>Sign Out</button>
      </div>)}
    </div>
  )
}

export default Header