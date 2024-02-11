import React, { useState } from 'react'
import { IoSunnyOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlinePerson } from "react-icons/md";

const Topbar = () => {
    
    
  return (
    <div className='bg-slate-950 flex justify-end h-14 items-center gap-6 px-8 text-xl cursor-pointer '>
        <IoSunnyOutline></IoSunnyOutline>
        <IoMdNotificationsOutline></IoMdNotificationsOutline>
        <IoSettingsOutline></IoSettingsOutline>
        <MdOutlinePerson></MdOutlinePerson>
    </div>
  )
}

export default Topbar