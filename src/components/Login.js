import React, { useRef, useState } from "react";
import Header from "./Header";
import {checkValidationData} from '../utils/Validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/FirebaseConfig";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/UserSlice";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMsg, setErrorMsg] = useState();
  const navigate = useNavigate();
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
            photoURL: "https://media.licdn.com/dms/image/v2/D5635AQGYsUWXODNFQw/profile-framedphoto-shrink_400_400/B56ZgctioQG0Ak-/0/1752828357422?e=1753646400&v=beta&t=--GrV9V_6xVqaAHRohIpmFGwLggEkG7jB4OLsYhT6kA"
          }).then(() => {
                const { displayName, email, uid, photoURL } = auth.currentUser;
                dispatch(addUser({displayName: displayName, email: email, uid: uid, photoURL: photoURL }));
                navigate('/browse');
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
                navigate('/browse');
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
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f562aaf4-5dbb-4603-a32b-6ef6c2230136/dh0w8qv-9d8ee6b2-b41a-4681-ab9b-8a227560dc75.jpg/v1/fill/w_1192,h_670,q_70,strp/the_netflix_login_background__canada__2024___by_logofeveryt_dh0w8qv-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvZjU2MmFhZjQtNWRiYi00NjAzLWEzMmItNmVmNmMyMjMwMTM2XC9kaDB3OHF2LTlkOGVlNmIyLWI0MWEtNDY4MS1hYjliLThhMjI3NTYwZGM3NS5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.LOYKSxIDqfPwWHR0SSJ-ugGQ6bECF0yO6Cmc0F26CQs"
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
