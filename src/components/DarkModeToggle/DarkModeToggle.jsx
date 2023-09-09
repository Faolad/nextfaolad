"use client"

import React, { useContext } from "react";
import styles from './DarkModeToggle.module.css'
import { ThemeContext } from "../../context/ThemeContext";

const DarkModeToggle = ()=>{
    const {toggle, mode} = useContext(ThemeContext); 

    return (
        <div onClick={toggle} className=" w-11 h-6  border-2 border-green-700 rounded-3xl flex justify-between items-center relative cursor-pointer">
            <div className=" text-sm">🌙</div>
            <div className="text-sm">🌞</div>
            <div 
                className=" w-4 h-4 bg-green-400 rounded-full absolute " 
                style={mode === "light" ? { left:"2px" }: {right :"2px"}}
            />
        </div>
    )
}

export default DarkModeToggle   