import React from 'react'
import Browse from './Browse'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router'
import Login from './Login'

const Body = () => {

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
