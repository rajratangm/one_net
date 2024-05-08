import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import {Login}
export const Body = () => {
    const appRouterr = createBrowserRouter([
        {
            path:'/',
            element:<Login/>
        }
    ])
  return (
    <div>Body</div>
  )
}
