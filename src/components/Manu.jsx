import React from 'react'
import { RxDotFilled } from "react-icons/rx";
import { HiMenuAlt1 }  from "react-icons/hi"

function Manu() {
  return (
    <div className='flex flex-row justify-between '>
        <div className='md:hidden block font-semibold'>
            <div className='flex flex-row'>
            <div><RxDotFilled size='1.5rem'/></div>
            <div>Unititled UI</div></div>
            </div>
        <button className='md:hidden block'><HiMenuAlt1 /></button>
        </div>
  )
}

export default Manu