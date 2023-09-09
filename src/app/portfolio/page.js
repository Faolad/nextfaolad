import styles from './page.module.css'
import Link from 'next/link'

export default function Portfolio() {
    return (
      
        <div className={styles.container}>      
          <h1 className=' mx-0 my-5 font-bold text-xl'>Choose A gallery</h1>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-center'>
            <Link href="/portfolio/illustrations" className={styles.item +' border-4 border-gray-300 rounded-md w-80 h-96 relative'}>
              <span className=' absolute right-2 bottom-2 text-4xl font-bold text-white'>Illustrations</span>
            </Link>
            <Link href="/portfolio/websites" className={styles.item +' border-4 border-gray-300 rounded-md w-80 h-96 relative'}>
              <span className=' absolute right-2 bottom-2 text-4xl font-bold text-white'>Website</span>
            </Link>
            <Link href="/portfolio/applications" className={styles.item +' border-4 border-gray-300 rounded-md w-80 h-96 relative'}>
              <span className=' absolute right-2 bottom-2 text-4xl font-bold text-white'>Application</span>
            </Link>
          </div>
        </div>
      
      
      
    )
  }
  
  