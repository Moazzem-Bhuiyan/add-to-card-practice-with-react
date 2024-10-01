import React from 'react'
import { MdOutlinePhoneAndroid } from 'react-icons/md'

export default function Newcard({newcard,handlecookcard}) {

    const{recipe_id,recipe_name,short_description,image_url,ingredients,preparing_time,calories}=newcard


  return (


  <div className='shadow-xl rounded-xl p-10'>

   <div>
       {/* img */}

       <div>
        <img className=' h-20 rounded-xl' src={image_url} alt="" />
      </div>
      {/* title */}
      <div>
        <h1 className='text-[4px] font-bold'>
          {recipe_name}
        </h1>
      </div>
      {/* description */}
      <div>
        <h1 className='text-xl pb-8'>
          {short_description}
        </h1>
        <hr className='text-black'></hr>
      </div>
      
      {/* ingrient */}
      <div>
        <h1>

       <h1 className='text-[30px] font-bold'>Ingredients : {ingredients.length}</h1>
          {
            ingredients.map((item)=> <div><h1>
              <li className='pt-5 text-2xl'>
              
              {item}
              
              </li>
              </h1> </div>)
          }

        </h1>
      </div>
      {/* btn */}

         <div>

          <button onClick={()=>handlecookcard(newcard)} className='bg-green-300 w-[150px] h-12 font-bold text-[20px] mt-4 rounded-full'>Want to cook</button>

         </div>

         {/* time calorie */}

         <div className='flex justify-between mt-10'>
          <span>Time : {preparing_time}</span>
          <span>Calorie : {calories}</span>
         </div>

    </div>
        
  </div>
  )
}