import React from 'react'
import Link from 'next/link'

const Button = ({url, text})=>{
    return (
        <Link href={url}>
            <button className=' p-5 cursor-pointer bg-green-400 rounded-md w-max text-white'>{text}</button>
        </Link>
    )
}

export default Button