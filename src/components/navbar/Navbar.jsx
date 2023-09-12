"use client"
import React, { useState } from "react";
import Link from 'next/link'
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import { signOut, useSession } from "next-auth/react";


const links =[
    {
        id: 1,
        title: "Home",
        url: '/',
    },
    {
        id: 2,
        title: "Portfolio",
        url: '/portfolio',
    },
    {
        id: 3,
        title: "Blog",
        url: '/blog',
    },
    {
        id: 4,
        title: "About",
        url: '/about',
    },
    {
        id: 5,
        title: "Contact",
        url: '/contact',
    },
    {
        id: 6,
        title: "Dashboard",
        url: '/dashboard',
    },
]
const Navbar =()=>{
    const session = useSession();

    

    
    const [isMenuOpen, setMenuOpen] = useState(false);

    const handleToggle = () => {
        setMenuOpen(!isMenuOpen);
    }

    return (
        <div className={`h-${isMenuOpen ? 'full' : '24'} flex flex-col lg:flex-row justify-between items-center gap-4 mt-5 lg:mt-0`}>
            <div className="flex justify-between items-center  w-full">
                <Link href="/" className='logo font-bold'>Faolad</Link>
                <div className="flex justify-between items-center gap-5 md:gap-10">
                    <DarkModeToggle />
                    <button className="lg:hidden" onClick={handleToggle}>
                        {isMenuOpen ? "X" : "Y"}
                    </button>
                </div>
            </div>
            <div className={`links  w-full flex ${isMenuOpen?"flex-col": "hidden"} lg:flex lg:items-center lg:justify-between gap-5`}>
                <div  className="flex flex-col lg:flex-row items-center justify-between gap-5 w-full ">
                    {   
                        links.map(link=> (
                            <Link key={link.id} href={link.url} className="link">{link.title}</Link>
                        ))
                    }
                    
                    {
                        session.status === "authenticated" &&
                    <button className="logout p-1 border-0 bg-green-300 text-white cursor-pointer rounded-md  " onClick={signOut}>Logout</button>
                    }
                </div>    
            </div>
        </div>
    )
}

export default Navbar


// import React, { useState } from "react";
// import Link from 'next/link'
// import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
// import { signOut, useSession } from "next-auth/react";

// const links = [
//   // ... your links array
// ];

// const Navbar = () => {
//   const session = useSession();
//   const [isMenuOpen, setMenuOpen] = useState(false);

//   const handleToggle = () => {
//     setMenuOpen(!isMenuOpen);
//   }

//   return (
//     <div className={`h-${isMenuOpen ? 'full' : '24'} flex flex-col lg:flex-row justify-between items-center gap-4 max-w-full`}>
//       <div className="flex justify-between items-center w-full">
//         <Link href="/" className='logo font-bold'>Faolad</Link>
//         <div className="flex justify-between items-center gap-5 md:gap-10">
//           <DarkModeToggle />
//           <button className="lg:hidden" onClick={handleToggle}>
//             {isMenuOpen ? "Y" : "X"}
//           </button>
//         </div>
//       </div>
//       <div className={`links bg-white w-full flex ${isMenuOpen ? 'flex-col' : 'hidden'} lg:flex lg:items-center lg:justify-between gap-5`}>
//         <div className="flex flex-col lg:flex-row items-center justify-between gap-5">
//           {   
//             links.map(link => (
//               <Link key={link.id} href={link.url} className="link">{link.title}</Link>
//             ))
//           }
//           {session.status === "authenticated" && (
//             <button className="logout p-1 border-0 bg-green-300 text-white cursor-pointer rounded-md" onClick={signOut}>
//               Logout
//             </button>
//           )}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Navbar;




// const handleLogout = async () => {
//     await signOut({ redirect: false }); // Sign out the user without redirection
//     router.push('/login'); // Redirect to the login page
//   };

// const navLinks = document.querySelector('.links')
// const handleToggle = ()=>{
//     const btnToggle = document.querySelector(".btnToggle")
//     btnToggle.innerHTML = btnToggle.innerHTML === "X" ? "Y": "X"
//     navLinks.classList.toggle('hidden')
//     console.log(navLinks)
// }