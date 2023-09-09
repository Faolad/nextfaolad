import React from "react";
import styles from './footer.module.css'
import Image from "next/image";
const Footer =()=>{
    return (
        <div className=" flex h-12 items-center justify-between">
            <div>Footer</div>
            <div className=" flex justify-between">
                <Image src="/1.png" width={15} height={15} alt="facebook" className=" opacity-60 cursor-pointer"/>
                <Image src="/2.png" width={15} height={15} alt="facebook" className=" opacity-60 cursor-pointer"/>
                <Image src="/3.png" width={15} height={15} alt="facebook" className=" opacity-60 cursor-pointer"/>
                <Image src="/4.png" width={15} height={15} alt="facebook" className=" opacity-60 cursor-pointer"/>
            </div>
        </div>
    )
}

export default Footer