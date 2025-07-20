import React, { useEffect } from 'react'
import Header from './Header'
import Browse from './Browse'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router'
import Login from './Login'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../utils/FirebaseConfig'
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/UserSlice'

const Body = () => {

    const dispatch = useDispatch();

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              console.log("User is signed in:", user);
              const { displayName, email, uid, photoURL } = user;
              dispatch(addUser({displayName: displayName, email: email, uid: uid, photoURL: photoURL }));
            } else {
              console.log("User is signed out");
                dispatch(removeUser());
            }
          });
    }, []);

    const appRouter = createBrowserRouter([
        {
            path: '/',
            element: <Login/>
        },
        {
            path:'/browse',
            element: <Browse/>
        }
    ])

  return (
    <RouterProvider router={appRouter}/>
  )
}

export default Body
