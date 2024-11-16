import React from 'react'
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase'
import { addUser , removeUser } from '../utils/userSlice'
import { AVATAR_URL } from '../utils/constants';

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid , email , displayName , photoURL } = user;
        dispatch(addUser({ uid : uid, email : email, displayName : displayName, photoURL : photoURL}));
        navigate('/browse');
      } else {
        navigate('/');
        dispatch(removeUser());
      }
    });
    return () => unsubscribe();
  },[]);

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
        <img className = "w-12 h-12" src = {AVATAR_URL} alt = "userlogo"/>
        <button className = "p-2 font-bold text-white" onClick = {handleSignOut}>Sign Out</button>
      </div>)}
    </div>
  )
}

export default Header