import React from 'react'
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase'
import { addUser , removeUser } from '../utils/userSlice'
import { AVATAR_URL , SUPPORTED_LANGUAGES } from '../utils/constants';
import { toggleGptSearch } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice'

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

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

  const handleGptSearch = () => {
    dispatch(toggleGptSearch());
  }

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  }

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
      {user && (<div className = "m-2 flex">
        {showGptSearch && <select className='px-4 py-2 h-10 m-2 rounded-md bg-gray-500 text-white' onChange = {handleLanguageChange}>
          {SUPPORTED_LANGUAGES.map(lang => <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
        </select>}
        <button className = "py-2 px-4 h-10 mx-4 my-2 text-white bg-red-600 rounded-md" onClick={handleGptSearch}>{showGptSearch ? "Homepage" : "GPT Search"}</button>
        <img className = "w-12 h-12" src = {AVATAR_URL} alt = "userlogo"/>
        <button className = "p-2 font-bold text-white" onClick = {handleSignOut}>Sign Out</button>
      </div>)}
    </div>
  )
}

export default Header