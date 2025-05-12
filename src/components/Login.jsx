import React, { useState, useRef } from 'react'

import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

import Header from './Header'
import { emailAndPasswordValidation } from "../utils/emailAndPasswordValidation"
import { auth } from '../utils/firebase';

const Login = () => {
  const [isSignUpForm, setIsSignUpForm] = useState(false)
  const [errorMessage, setErrorMessage] = useState(null)
  const email = useRef(null)
  const password = useRef(null)

  const handleSignUp = () => {
    setIsSignUpForm(!isSignUpForm)
  }

  const handleFormSubmit = () => {
    const message = emailAndPasswordValidation(email.current.value, password.current.value)
    setErrorMessage(message)

    if(!message){
      if(isSignUpForm){
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
          .then((userCredential) => {
            const user = userCredential.user;
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode+"-"+errorMessage)
          });
      } else{
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
          .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode+"-"+errorMessage)
        });
      }
    }
  }

  return (
    <div>
      <Header></Header>
      <div className='absolute'>
        <img className='w-full' src='https://assets.nflxext.com/ffe/siteui/vlv3/cb17c41d-6a67-4472-8b91-cca977e65276/web/IN-en-20250505-TRIFECTA-perspective_03ae1a85-5dcf-4d20-a8a6-1e61f7ef73cb_large.jpg'
        alt='logo'></img>
      </div>
      <form onSubmit={(e) => e.preventDefault()} className='absolute w-3/12 bg-black  top-[40%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 opacity-80 flex flex-col max-lg:w-[260px] rounded-lg'>
        <h1 className='text-white text-4xl font-bold pl-16 mt-16'>{!isSignUpForm ? "Sign In" : "Sign Up"}</h1>
        {isSignUpForm && 
          <input type='text' placeholder='Full Name' className='text-white border block rounded-sm p-3 ml-16 mt-4 mr-20'></input>
        }
        <input ref={email} type='email' placeholder='Email or mobile number' className='text-white border block rounded-sm p-3 ml-16 mt-4 mr-20'></input>
        <input ref={password} type='password' placeholder='Password' className='text-white border block rounded-sm p-3 ml-16 mt-4 mr-20'></input>
        { errorMessage && <p className='text-red-600 font-bold text-xl ml-16 mt-4 mr-20'>{errorMessage}</p> }
        <button className='text-white bg-red-700 block rounded-sm p-3 ml-16 mt-4 mr-20 cursor-pointer' onClick={handleFormSubmit}>{!isSignUpForm ? "Sign In" : "Sign Up"}</button>
        <p className='text-white p-3 ml-14 mt-4 mr-20 mb-14 cursor-pointer' onClick={handleSignUp}>{!isSignUpForm ? "New to Netflix? Sign Up Now": "Already register? Sign In now"}</p>
      </form>
    </div>
  )
}

export default Login