import React, { useRef, useState } from "react";
import Header from "./Header";
import {checkValidationData} from '../utils/Validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/FirebaseConfig";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/UserSlice";
import { BG_URL, USER_PROFILE } from "../utils/Constants";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMsg, setErrorMsg] = useState();
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const dispatch = useDispatch();

  const handleClick = () =>{
    let message;
    if(isSignIn){
        message =  checkValidationData("shivam", email.current.value, password.current.value);
    }
    else message = checkValidationData(name.current.value, email.current.value, password.current.value);
    setErrorMsg(message);

    if(message) return ;

    if(!isSignIn){
        //sign up form

        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_PROFILE
          }).then(() => {
                const { displayName, email, uid, photoURL } = auth.currentUser;
                dispatch(addUser({displayName: displayName, email: email, uid: uid, photoURL: photoURL }));
                console.log("name ", name.current.value);
          }).catch((error) => {
            // An error occurred
            console.error("Error updating profile:", error);
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + " - " + errorMessage);
        });

    }
    else{
        //sign in form
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => { 
                const user = userCredential.user;
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMsg(errorCode  + " - " + errorMessage)
            });
    }


  }

  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div className="w-full">
      <Header />
      <div>
        <div className="">
          <img
            className="absolute w-full"
            src={BG_URL}
            alt="background-image"
          />
        </div>
        <form onSubmit={(e)=> e.preventDefault()} className="rounded-lg absolute w-1/4 right-0 left-0 bg-black  my-36 mx-auto px-10 py-12 bg-opacity-80">
          <div className="font-bold text-2xl text-white pb-6 m-2 ">
            {isSignIn ? "Sign In" : "Sign Up"}{" "}
          </div>
          {!isSignIn && (
            <input
              ref={name}
              className="p-2 m-2 w-full bg-gray-500 "
              type="text"
              placeholder="Full Name"
            />
          )}
          <input
            ref={email}
            className="p-2 m-2 w-full bg-gray-500 "
            type="email"
            placeholder="Email or Phone Number"
          />
          <input
            ref={password}
            className="p-2 m-2 w-full bg-gray-500"
            type="password"
            placeholder="Password"
          />
          {errorMsg && <p className="m-2 p-2 text-xl text-red-600">{errorMsg}</p>}
          <button onClick={handleClick} className="p-4 m-2 w-full bg-red-500 rounded-lg">
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>
          <div onClick={toggleSignInForm} className="text-white m-2 p-2 pt-6">
            {isSignIn
              ? "New to Netflix? sign up now"
              : "Already registered? Sign In now"}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
