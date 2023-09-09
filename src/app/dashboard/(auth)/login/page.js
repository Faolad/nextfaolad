'use client'
import { signIn, useSession } from "next-auth/react"
import { useRouter } from "next/navigation";
import { useEffect } from "react";


const Login = ()=>{
    const session = useSession();
    const router = useRouter();

    // useEffect(() => {
    //   if (session?.status === "authenticated") {
    //     router?.push("/dashboard");
    //   }
    // }, [session, router]);
  
    // if (session?.status === "loading") {
    //   return <p>Loading</p>;
    // }

    if(session.status === "loading"){
      return <p>Loading</p>
    }

    if(session.status === "authenticated"){
      router.push("/dashboard")
    }
    

    
      
    
    const handleSubmit = async (e)=>{
      e.preventDefault();
      const email = e.target[0].value
      const password = e.target[1].value

      signIn("credentials", {email, password})
    }

      
      return (
        <div className=" shadow-2xl py-10 px-2">
          <div className='flex flex-col items-center justify-center gap-5'>
            <form onSubmit={handleSubmit} className=' w-72 flex flex-col gap-5'>
              <input type='email' placeholder='email' required className=' p-5 bg-transparent border-4 rounded-md text-xl font-bold' />
              <input type='password' placeholder='password'  required className=' p-5 bg-transparent border-4  rounded-md text-xl font-bold' />
              <button className=' p-5 cursor-pointer bg-green-400 rounded-md w-72 text-white'>Login</button>
          
            </form>

            <button onClick={()=>signIn("google")}>
              Log in with google
            </button>
          </div>
        
        </div>
        
      )
    
  }
 export default Login  