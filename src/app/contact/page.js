import styles from './page.module.css'
import Image from 'next/image'
import Button from '/src/components/button/Button.jsx'

export const metadata = {
  title: 'devFaolad Contact',
  description: 'This is devfaolad contact Page',
}

export default function Contact() {
    return (
      
        <div className={styles.container}>      
          <h2 className=' text-3xl lg:text-6xl mb-24  text-center'>Lets Keep in touch</h2>
          <div className='lg:flex gap-24 items-center mb-10'>
            <div className={styles.img+' flex-1 relative hidden lg:block'}>
              <Image src="/contact.png" fill={true} alt="Contact Image" className={styles.image+' object-contain '}/>
            </div>
            <div className=' flex-1 relative h-48 lg:hidden'>
              <Image src="/contact.png" fill={true} alt="Contact Image" className={styles.image+' object-contain '}/>
            </div>
            <form className='flex-1 flex flex-col gap-5'>
              <input type='text' placeholder='name' className=' p-5 bg-transparent outline-0 border-2 font-semibold'/>
              <input type='text' placeholder='email' className='p-5 bg-transparent outline-0 border-2  font-semibold'/>
              <textarea placeholder='message' cols="30" rows="10" className='p-5 bg-transparent outline-0 border-2  text-xl font-semibold'></textarea>
              <div className=' text-center lg:text-left'>
                <Button url="#" text="send" />
              </div>
            </form>
          </div>
        </div>
      
      
      
    )
  }
  