import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
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
            element: <Browse
        }
    ])
  return (
    <div>Body</div>
  )
}
