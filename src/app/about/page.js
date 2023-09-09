import styles from './page.module.css'
import Image from 'next/image'
import Button from '/src/components/button/Button.jsx'

export default function About() {
    return (
      
      <div className="">
      <div className=" w-full h-72 relative ">
        <Image
          src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          fill={true}
          alt="3 people on a computer"
          className={styles.image+' object-cover'}
        />
        <div className=" absolute bottom-5  lg:left-5 bg-green-400 text-white">
          <h1 className="">Digital Storytellers</h1>
          <h2 className="">
            Handcrafting award winning digital experiences
          </h2>
        </div>
      </div>
      <div className=" flex flex-col lg:flex-row gap-16 lg:gap-24 mt-5 mb-10">
        <div className=" flex flex-1 flex-col gap-5">
          <h1 className="">Who Are We?</h1>
          <p className=" text-lg font-light text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quae dolor, optio voluptatibus magnam iure esse tempora beatae. A
            suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
            eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ducimus quae dolor, optio voluptatibus magnam iure esse tempora
            beatae, a suscipit eos. Animi quibusdam cum omnis officiis
            <br />
            <br />
            voluptatum quo ea eveniet? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ducimus quae dolor, optio voluptatibus magnam iure
            esse tempora beatae, a suscipit eos. Animi quibusdam cum omnis
            officiis voluptatum quo ea eveniet?
          </p>
        </div>
        <div className=" flex flex-1 flex-col gap-5">
          <h1 className="">What We Do?</h1>
          <p className="text-lg font-light text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quae dolor, optio voluptatibus magnam iure esse tempora beatae, a
            suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
            eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. -
            Creative Illustrations
            <br />
            <br /> - Dynamic Websites
            <br />
            <br /> - Fast and Handy
            <br />
            <br /> - Mobile Apps
          </p>
          <Button url="/contact" text="Contact" />
        </div>
      </div>
    </div>
      
      
      
    )
  }
  