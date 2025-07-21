import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/FirebaseConfig";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/UserSlice";
import {NETFLIX_LOGO} from './../utils/Constants';

const Header = () => {
  const navigate = useNavigate();
  const userData = useSelector((store) => store.user);
  const dispatch = useDispatch();
  async function handleSignOut() {
    try {
      await signOut(auth);
    } catch (error) {
      navigate("/error");
    }
  }

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("User is signed in:", user);
        const { displayName, email, uid, photoURL } = user;
        dispatch(
          addUser({
            displayName: displayName,
            email: email,
            uid: uid,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        console.log("User is signed out");
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribed();
  }, []);

  return (
    <div className="z-10 flex justify-between absolute bg-gradient-to-b from-black w-full">
      <img
        className="w-40 px-6"
        src={NETFLIX_LOGO}
        alt="logo"
      />
      {userData && (
        <div className="flex p-4 ">
          <img
            src={userData.photoURL}
            alt="userImage"
            className="w-10 h-10 rounded-3xl"
          />
          <div className="p-2 text-white font-bold" onClick={handleSignOut}>
            Sign out
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
