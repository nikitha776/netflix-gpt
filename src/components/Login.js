import React from 'react'
import Header from './Header';
import { useState, useRef } from 'react';
import { checkValidData } from '../utils/validate'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword ,updateProfile} from "firebase/auth";
import { auth } from '../utils/firebase'
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { AVATAR_URL , BG_URL } from '../utils/constants';

const Login = () => {

  const [isSignIn, setIsSignIn] = useState(true);
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const displayName = useRef(null);

  const toggleIsSignIn = () => {
    setIsSignIn(!isSignIn);
  }

  const handleButtonClick = () => {
    const msg = checkValidData(email.current.value, password.current.value);
    setMessage(msg);

    if (msg) return;

    if (!isSignIn) {
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          // console.log(user);
          updateProfile(user, {
            displayName: displayName.current.value, photoURL: AVATAR_URL
          }).then(() => {
            const { uid , email , displayName , photoURL } = auth.currentUser;
            dispatch(addUser({ uid : uid, email : email, displayName : displayName, photoURL : photoURL}));
          }).catch((error) => {
            
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setMessage(errorCode + " " + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          // console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setMessage(errorCode + " " + errorMessage);
        });
    }
  }

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={BG_URL} alt="bgimage" className="w-[100%]" />
      </div>
      <form onSubmit={(e) => e.preventDefault()} className="py-4 absolute bg-black text-white w-3/12 my-[100px] mx-auto right-0 left-0 px-10 opacity-85 rounded-lg pr-12">
        <h1 className="text-4xl my-4 font-bold mb-6">{isSignIn ? "Sign In" : "Sign Up"}</h1>
        {!isSignIn && <input ref={displayName} type="text" placeholder="Full Name" className="bg-black border border-gray-500 p-4 m-2 w-[100%] my-4 rounded-lg" />}
        <input ref={email} type="text" placeholder="Email or mobile number" className="bg-black border border-gray-500 p-4 m-2 w-[100%] my-4 rounded-lg" />
        <input ref={password} type="password" placeholder="Password" className="bg-black border border-gray-500 p-4 m-2 my-4 w-[100%] rounded-lg" />
        <p className="text-red-700 font-semibold px-2">{message}</p>
        <button className="px-4 py-2 m-2 bg-red-700 my-4 w-[100%] rounded-lg" onClick={handleButtonClick}>{isSignIn ? "Sign In" : "Sign Up"}</button>
        <p className="m-2 cursor-pointer" onClick={toggleIsSignIn}>{isSignIn ? "New to Netflix? Sign up now." : "Already have an account? Sign In."}</p>
      </form>
    </div>
  )
}

export default Login;