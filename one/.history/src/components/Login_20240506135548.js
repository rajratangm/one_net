import React from 'react'
import { Header } from './Header'

export const Login = () => {
  return (
    <div>
        <Header/>
        <div className=''>
        <img className='absolute w-[100vw] h-[100vh] bg-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/dc1cf82d-97c9-409f-b7c8-6ac1718946d6/14a8fe85-b6f4-4c06-8eaf-eccf3276d557/IN-en-20230911-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="banner" />
        </div>
        <form className='flex flex-col w-3/12 p-12 my-36 left-0 right-0  mx-auto items-center justify-center absolute rounded-md bg-black opacity-90'>
            <div className='flex flex-col'>
                <input type= 'text' placeholder='fullname'/>
                <input type='email' placeholder='Email'/>
                <input type= 'text'/>
                <input/>
            </div>
        </form>
    </div>
  )
}
