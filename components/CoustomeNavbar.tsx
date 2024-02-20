"use client"


import Link from 'next/link'
import React from 'react'

const CoustomeNavbar = () => {
  return (
    <nav className='bg-[#1F2937] flex justify-around h-16 text-[#D8B4FE] py-3'>
      <div className="header text-[17px]">Work_Manager</div>
      <div className="middle">
        <ul className='flex gap-8'>
          <Link className='hover:-translate-y-[2px]' href={"/"}><li>Home</li></Link>
          <Link className='hover:-translate-y-[2px]' href={"/addtask"}><li>Add Task</li></Link>
          <Link className='hover:-translate-y-[2px]' href={"/showtask"}><li>Show Task</li></Link>
        </ul>
      </div>
      <div className="last flex gap-8">
        <div>
          <button className='hover:text-[#8e63b1]'>SignUp</button>
        </div>
        <div>
          <button className='hover:text-[#8e63b1]'>LogIn</button>
        </div>
      </div>
    </nav>
  )
}

export default CoustomeNavbar