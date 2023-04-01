import React from 'react'
import { RxDotFilled } from "react-icons/rx";
import { HiMenuAlt1 }  from "react-icons/hi"

function Manu() {
  return (
    <div className='flex flex-row justify-between py-1 '>
        <div className='md:hidden block font-semibold'>
            <div className='flex flex-row items-center text-2xl'>
            <div><RxDotFilled size='2rem'/></div>
            <div>Unititled UI</div></div>
            </div>
        <button className='md:hidden block'><HiMenuAlt1 
size='2rem' /></button>
        </div>
  )
}

export default Manu