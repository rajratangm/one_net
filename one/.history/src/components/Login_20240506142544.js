import React,{useState} from 'react'
import { Header } from './Header'

export const Login = () => {
    const getInputData=(e)=>{
        e.preventDefault()
        console.log(fullName, email,password)
        setEmail('')
        setFullName('')
        setPassword('')
    }
    const loginHandler=()=>{
        setIsLogin(!isLogin)
    }
    const [isLogin, setIsLogin]= useState(false)
    const [fullName, setFullName] =useState('')
    const [email, setEmail] =useState('')
    const [password, setPassword] =useState('')
  return (
    <div>
        <Header/>
        <div className=''>
        <img className='absolute w-[100vw] h-[100vh] bg-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/dc1cf82d-97c9-409f-b7c8-6ac1718946d6/14a8fe85-b6f4-4c06-8eaf-eccf3276d557/IN-en-20230911-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="banner" />
        </div>
        <form onSubmit={getInputData} className='flex flex-col w-3/12 p-12 my-36 left-0 right-0  mx-auto items-center justify-center absolute rounded-md bg-black opacity-90'>
            <h1 className='text-3xl text-white mb-5 font-bold'>{isLogin? 'Login': 'Signup'}</h1>
            <div className='flex flex-col'>
                {
                    !isLogin && <input value={fullName} onChange={((e)=> setFullName(e.target.value))} type= 'text' placeholder='fullname' className='outline-none p -3 my-2 rounded-sm bg-gray-800 text-white'/>

                }
                <input value={email} onChange={((e)=> setEmail(e.target.value))} type='email' placeholder='Email' className='outline-none p -3 my-2 rounded-sm bg-gray-800 text-white'/>
                <input value={password} onChange={((e)=> setPassword(e.target.value))} type='password' placeholder='password' className='outline-none p -3 my-2 rounded-sm bg-gray-800 text-white'/>
                <button className='bg-red-600 mt-6 p-3 text-white rounded-sm font-medium'>{isLogin?'Login':'signup'}</button>
                <p className='text-white mt-2'>{isLogin? 'new to netflix ':"already have an acount"}<span className='ml-1 text-blue-900 font-medium cursor-pointer' onClick={loginHandler}>{isLogin?'Signup':'Login'}</span></p>

               
            </div>
        </form>
    </div>
  )
}
