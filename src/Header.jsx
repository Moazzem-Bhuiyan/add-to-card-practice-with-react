import React from 'react'
import { CgProfile } from "react-icons/cg";

export default function Header() {


  return (
    <div>

        <navber>

        <div className='navber'>
            <div  className='grid grid-cols-3 h-20'>
                {/* logo img */}
                 <div>
                    <h1 className='text-[40px] font-bold pl-5'>

                        Recipe Calories

                    </h1>
                 </div>

                {/* nav item */}

                <div >

                    <ul className='flex justify-around text-[20px] pt-4 font-bold'>
                        <li>Home</li>
                        <li>Recipes</li>
                        <li>About</li>
                        <li>Search</li>
                    </ul>

                </div>
                {/* searchbox */}

                <div className='flex gap-2'>

                    <input className='h-10 w-[300px] rounded-lg mt-4 pl-4' type="text" placeholder='search' />

                    <p className='text-[40px] pt-4'>

                    <CgProfile />

                    </p>

                  

                </div>

            </div>

        </div>
    </navber>

        {/* banner */}

        <section >

            <div className="hello" >

            <div className='hii'>
                <h1 className='text-[60px]  font-black'>
                    Discover an exceptional cooking <br></br>

                    class tailored for you !

                </h1>

                <p className=''>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, eligendi.
                </p>

                {/* buttton */}

                <div className='flex gap-10 items-center mt-10'>
                    <button className='bg-green-400 w-48 h-10 rounded-full text-[20px]'>Explore Now</button>
                    <button className='bg-red-200 w-48 h-10 rounded-full text-[20px]'>Our feedback</button>


                </div>
            </div>

            </div>

        </section>


    </div>
  )
}
