import styles from './page.module.css'
import Link from 'next/link'
import Image from 'next/image'

async function getData() {
  const res = await fetch("https://nextfaolad.vercel.app/api/posts", {cache: 'no-store'})
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

const Blog = async ()=>{

    const data = await getData();
    // const textWrap = (text)=>{
    //   if(text.length > 20){
    //     return text.substring(0, 20) + "..."
    //   }
    //   return text;
    // }

    return (
      
        <div className=""> 
          {  
            data.map((item) => (
              <Link href={`/blog/${item._id}`} key={item._id} className='flex justify-between items-center m-2 lg:m-5 gap-5 lg:gap-20 '>
                <div className=' w-1/2 border-4 border-white  items-center pr-4'>
                    <Image src={item.img} width={400} height={250} alt={item.desc} className=' object-contain' />
                </div>  
                <div className=' w-1/2 '>
                  <h1 className=' '>{item.title}</h1>
                  <h5 className=''>{item.desc}</h5>
                </div>

              </Link>
            ))

          }      
        </div>
      
      
      
    )
  }
  
export default Blog  

// data.map((item) => (
//   <div  key={item.id} className='w-full'>
//     <Link href={`/blog/${item._id}`} className='flex flex-col lg:flex-row items-center gap-1 lg:gap-12 mb-12 '>
//       <div className='flex-1 max-w-full relative w-96 h-60'>
//         <Image fill={true} alt="ssmjfc" className=' object-cover ' src={item.img} />
//       </div>
//       <div className='flex-1 border-4 border-white max-w-xl whitespace-nowrap text-ellipsis'>
//         <div><h1 className=' mb-2 text-xl font-bold '>{item.title}</h1></div>
//         <div><p className=' text-lg w-40'>{item.desc}</p></div>
//       </div>
//     </Link>
//   </div>
// ))



    // <div className="flex flex-wrap gap-4">
    //   {data.map((item) => (
    //     <div key={item.id} className="w-full lg:w-1/2">
    //       <Link href={`/blog/${item._id}`} className={`flex border-4 border-white p-4 ${styles.blogItem}`}>
    //         <div className="w-1/2 max-w-full pr-4">
    //           <Image width={400} height={250} alt="ssmjfc" className="object-cover" src={item.img} />
    //         </div>
    //         <div className="w-1/2">
    //           <div>
    //             <h1 className="text-xl font-bold mb-2">{item.title}</h1>
    //           </div>
    //           <div>
    //             <span className="text-lg">{item.desc}</span>
    //           </div>
    //         </div>
    //       </Link>
    //     </div>
    //   ))}
    // </div>