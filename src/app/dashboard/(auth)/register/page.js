"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const Register =()=>{
  const [err, setErr] = useState(false)
  const router = useRouter();

  const handleSubmit = async (e)=>{
    e.preventDefault();
    const name = e.target[0].value
    const email = e.target[1].value
    const password = e.target[2].value
    try{

      const res = await fetch("/api/auth/register", {
        method: "POST", 
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name,
          email,
          password
        })
      })

      res.status === 201 && router.push("/dashboard/login?success=Acoount has been created successfully")


    }catch(err){
      setErr(true) 
      console.log(err) 
    }

  }

  return(
    <div className='flex flex-col items-center justify-center gap-5'>
      <form onSubmit={handleSubmit} className=' w-72 flex flex-col gap-5'>
        <input type='text' placeholder='username' required className=' p-5 bg-transparent border-2 border-white rounded-md text-xl font-bold' />
        <input type='email' placeholder='email' required className=' p-5 bg-transparent border-2 border-white rounded-md text-xl font-bold' />
        <input type='password' placeholder='password'  required className=' p-5 bg-transparent border-2 border-white rounded-md text-xl font-bold' />
        <button className=' p-5 cursor-pointer bg-green-400 rounded-md w-72 text-white'>Register</button>
        
      </form>
      {err && "Something went wrong"}
      <Link href="/dashboard/login">Login with existing account</Link>
    </div>
  )
}

export default Register
  


// const [name, setName] = useState("");
//   const [password, setPassword] = useState("");
//   const [email, setEmail] = useState("");
//   const handleSubmitEmail =(e)=>{
//     setEmail(e.target.value)
//   }
//   console.log(email)

// value={email} onChange={handleSubmitEmail} 