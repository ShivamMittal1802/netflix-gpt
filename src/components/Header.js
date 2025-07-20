import { signOut } from 'firebase/auth';
import React from 'react'
import { auth } from '../utils/FirebaseConfig';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
    const navigate = useNavigate(); 
    const userData = useSelector((store) => store.user);
    async function handleSignOut() {
        try {
          await signOut(auth);
          console.log("User signed out successfully!");
          navigate("/")
        } catch (error) {
          navigate("/error")
        }
      }

      console.log("store ka data ",userData)

  return (
    <div className='z-10 flex justify-between absolute bg-gradient-to-b from-black w-full'>
      <img className='w-40 px-6' src='https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo.png' alt='logo'/>
      {userData && <div className='flex p-4 '>
        <img src={userData.photoURL} alt='userImage' className='w-10 h-10 rounded-3xl' />
        <div className='p-2 text-white font-bold' onClick={handleSignOut} >Sign out</div>
      </div>}
    </div>
  )
}

export default Header
