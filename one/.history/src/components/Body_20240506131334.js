import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {Login} from './Login'
import { Browse } from './Browse'
export const Body = () => {
    const appRouterr = createBrowserRouter([
        {
            path:'/',
            element:<Login/>
        },
        {
            path:'/browse',
            element: <Browse/>
        }
    ])
  return (
    <div>
        <RouterProvider  router={app/>

    </div>
  )
}
