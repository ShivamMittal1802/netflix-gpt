import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
    const [isSignIn, setIsSignIn] = useState(true);

    const toggleSignInForm = () =>{ 
        setIsSignIn(!isSignIn);
    }

  return (
    <div className="w-full">
      <Header/>
      <div>
        <div className="">
          <img className='absolute w-full' src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f562aaf4-5dbb-4603-a32b-6ef6c2230136/dh0w8qv-9d8ee6b2-b41a-4681-ab9b-8a227560dc75.jpg/v1/fill/w_1192,h_670,q_70,strp/the_netflix_login_background__canada__2024___by_logofeveryt_dh0w8qv-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvZjU2MmFhZjQtNWRiYi00NjAzLWEzMmItNmVmNmMyMjMwMTM2XC9kaDB3OHF2LTlkOGVlNmIyLWI0MWEtNDY4MS1hYjliLThhMjI3NTYwZGM3NS5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.LOYKSxIDqfPwWHR0SSJ-ugGQ6bECF0yO6Cmc0F26CQs' alt='background-image'/>
        </div>
        <form className="rounded-lg absolute w-1/4 right-0 left-0 bg-black  my-36 mx-auto px-10 py-12 bg-opacity-80">
          <div className="font-bold text-2xl text-white pb-6 m-2 ">{isSignIn ? "Sign In" : "Sign Up"  } </div>
          { !isSignIn && <input className="p-2 m-2 w-full bg-gray-500 " type="text" placeholder="Full Name" />}
          <input className="p-2 m-2 w-full bg-gray-500 " type="email" placeholder="Email or Phone Number" />
          <input
            className="p-2 m-2 w-full bg-gray-500"
            type="password"
            placeholder="Password"
          />
          <button className="p-4 m-2 w-full bg-red-500 rounded-lg">{isSignIn ? "Sign In" : "Sign Up"  }</button>
          <div onClick={toggleSignInForm} className="text-white m-2 p-2 pt-6">{ isSignIn ? "New to Netflix? sign up now" : "Already registered? Sign In now" }</div>
        </form>
      </div>
    </div>
  );
};

export default Login;
