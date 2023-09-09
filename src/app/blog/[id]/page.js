import Image from "next/image"
import {notFound} from 'next/navigation'

async function getData(id) {
  const res = await fetch(`https://nextfaolad.vercel.app/api/posts/${id}`, {cache: 'no-store'})
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    return notFound()
  }
 
  return res.json()
}

export async function generateMetadata({ params }) {
  const post = await getData(params.id)
  return {
    title: post.title,
    description: post.desc,
  }
}
const BlogPost = async ({params})=>{
    const data = await getData(params.id)
    return (
        <div className="">
          <div className="flex mb-24 mt-0">
            <div className="flex-1 flex flex-col justify-between">
              <h1 className="font-bold">{data.title}</h1> 
              <p>{data.desc}</p> 
              <div className="flex items-center">
                <Image width={40} height={40} alt="each post" className=" rounded-full" src={data.img} />
                <span className=" ">{data.username}</span>
              </div>
            </div>

            <div className="flex-1 relative h-32 mt-0 lg:h-60">
              <Image fill={true} alt="each post" className="object-cover" src={data.img} />  
            </div>  
          </div>      
          <div>
            <p>{data.content}</p>
          </div>
        </div>
      
      
      
    )
  }
  
export default BlogPost;