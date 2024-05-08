import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import {Login} from './Login'
export const Body = () => {
    const appRouterr = createBrowserRouter([
        {
            path:'/',
            element:<Login/>
        },
        {
            path:''
        }
    ])
  return (
    <div>Body</div>
  )
}
