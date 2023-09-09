'use client'

import styles from './page.module.css'
import useSWR from 'swr'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Button from '@/components/button/Button'
 


const Dashboard = ()=>{

    const session = useSession();
    const router = useRouter();
    const fetcher = (...args) => fetch(...args).then((res) => res.json())

    const { data, mutate, error, isLoading } = useSWR(`/api/posts?username=${session?.data?.user.name}`, fetcher)

    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>
    console.log(data)

    console.log(session)

    
    if (session?.status === "unauthenticated"){
      router?.push("/dashboard/login")
    }
    if (session?.status === "loading"){
      return <div>Loading</div>
    }

    const handleSubmit = async (e)=>{
      e.preventDefault();
      const title = e.target[0].value
      const desc = e.target[1].value
      const img = e.target[2].value
      const content = e.target[3].value

      try{
        await fetch("api/posts", {
          method: "POST",
          body: JSON.stringify({
            title,
            desc,
            img,
            content,
            username: session.data.user.name
          })
        })
        mutate()
        e.target.reset()
      }catch(err){
        console.log(err)
      }
      
    }
    const handleDelete = async (id) =>{

      try{
        await fetch(`api/posts/${id}`, {
          method: "DELETE",
        })
        
        mutate()
        

      }catch(err){
        throw new Error("Delete Failed")
      }

    }


    if (session?.status === "authenticated"){
      return (
        <div className='flex gap-24 overflow-scroll'>
          <div className='flex-1'>
            { isLoading ? "LOADING" 
              : data?.map((post)=> (
                <div key={post._id} className='flex items-center justify-between my-14 mx-0'>
                  <div className=' w-52 h-24 relative'>
                    <Image fill={true} src={post.img} alt="" className=' object-cover' />  
                  </div>
                  <h2>{post.title}</h2>
                  <span onClick={()=>handleDelete(post._id)} className=' text-red-500 cursor-pointer'>X</span>
                </div>
              ) )
            }
            
          </div>
          <form onSubmit={handleSubmit} className='flex-1 flex flex-col gap-5'>
            <h1 className=' text-3xl font-bold'>Add New Post</h1>
            <input type='text' placeholder='Title' className=' p-3 bg-transparent border-2 border-gray-500 rounded-sm text-white font-bold text-xl' />
            <input type='text' placeholder='Desc'  className=' p-3 bg-transparent border-2 border-gray-500 rounded-sm text-white font-bold text-xl' />
            <input type='text' placeholder='Image' className=' p-3 bg-transparent border-2 border-gray-500 rounded-sm text-white font-bold text-xl' />
            <textarea placeholder='content' className=' p-3 bg-transparent border-2 border-gray-500 rounded-sm text-white font-bold text-xl' cols="30" rows="10"></textarea>
            <button className=' p-5 cursor-pointer bg-green-400 rounded-md  text-white'>POST</button>
          </form>
        </div>
      )  
    }
      
    
    

    

  }

export default Dashboard;  



// import { useEffect, useState } from 'react'
// const [data, setData] = useState([])
    // const [err, setErr] = useState(false)
    // const [isLoad, setIsLoad] = useState(false)

    // useEffect(() => {
    //   const getData = async ()=>{
    //     setIsLoad(true)
    //     const res = await fetch('https://jsonplaceholder.typicode.com/posts', {next: 'no-store'})
    //     // The return value is *not* serialized
    //     // You can return Date, Map, Set, etc.

    //     if (!res.ok) {
    //     // This will activate the closest `error.js` Error Boundary
    //       setError(true)
    //     }
    //     const data = await res.json() 

    //     setData(data)
    //     setIsLoad(false)
    //   }
    //   getData()
    // },[])

    // console.log(data)