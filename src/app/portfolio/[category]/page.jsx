import React from "react";
import Button from "@/components/button/Button";
import Image from "next/image";
import styles from './page.module.css'
import { items } from "./data";
import { notFound } from "next/navigation";

const getData = (cat)=>{
  const data = items[cat]

  if(data){
    return data
  }

  return notFound()

}

const Category = ({params})=>{

    const data = getData(params.category);
    return (
      
        <div>      
          <h1 className=' mx-0 my-5 font-bold text-xl text-green-400'>{params.category}</h1>
          {data.map((item) => (
              <div className={styles.cont+" flex gap-12 mt-12 mb-24"} key={item.id}>
                <div className="flex-1 flex flex-col gap-5 justify-center">
                  <h1 className=" text-5xl">{item.title}</h1>
                  <p className=" text-xl">{item.desc}</p>
                  <Button text="see more" url="#" />
                </div>
                <div className="flex-1 h-96 relative">
                  <Image fill={true} src={item.image} alt="" className=" object-cover"/>

                </div>
              </div>

            ))
          }
          
          
        </div>
      
      
      
    )
  }
  
export default Category;