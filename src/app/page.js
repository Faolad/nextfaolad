import styles from './page.module.css'
import Hero from "public/hero.png"
import Image from 'next/image'
import Button from '/src/components/button/Button.jsx'

export default function Home() {
  return (
    <div>
        <div><marquee>WELCOME TO FAOLAD WEBSITE!!! WE ARE HAPPY TO HAVE YOU HERE</marquee></div>
        <div className='flex flex-col lg:flex-row items-center gap-24 mb-12'>
          <div className='flex-1 lg:hidden'>
            <Image className={styles.image + ' w-full object-cover'} height={300} src={Hero}  alt="Home" />
          </div>
          <div className=' flex flex-1 flex-col gap-4'>
            
            <h1 className={styles.head_text+' text-4xl lg:text-7xl'}>Better design for your digital products</h1>
            
            <p className=' text-xl lg:text-2xl font-light'>Turning your idea into reality. We bring together teams from the global tech industry</p>
            <div className=" w-full text-center p-2 lg:p-0 lg:text-left">
              <Button url="/portfolio" text="See our works" />
            </div>
          </div>
          <div className='flex-1 hidden lg:block'>
            <Image className={styles.image + ' w-full object-cover'} height={500} src={Hero}  alt="Home" />
          </div>     
        </div>
      </div>
    
    
    
  )
}
