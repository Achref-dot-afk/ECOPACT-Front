import { IoIosHome, IoIosSettings } from "react-icons/io";
import { IoCodeSharp } from "react-icons/io5";
import { FaDatabase, FaNoteSticky, FaRegCircleQuestion, FaAngleRight, FaAngleDown } from "react-icons/fa6";
import { MdContacts } from "react-icons/md";
import { IoMdContact } from "react-icons/io";
import { ImProfile } from "react-icons/im";
import { Link } from 'react-router-dom';
import { useState } from "react";


function Sidebar() {
    
    const [isDataExpanded,setIsDataExpanded] = useState(false);
    const [isPagesExpanded,setIsPagesExpanded] = useState(false);
    const [sidebarWidth,setSidebarWidth] = useState('w-60');
    const [isCollapsed,setIsCollapsed] = useState(true);
    function ToggleDataBar(){
        setIsDataExpanded(!isDataExpanded);
        setSidebarWidth('w-60');
        if(!isCollapsed){
            setIsCollapsed(!isCollapsed);
        }
        if(!isDataExpanded) {
            document.querySelector(".sec").style.color="indigo-600"
            
        }
        else {
            document.querySelector(".sec").style.color=""
        }
    }
    function TogglePagesBar(){
        setSidebarWidth('w-60');
        if(!isCollapsed){
            setIsCollapsed(!isCollapsed);
        }
        setIsPagesExpanded(!isPagesExpanded);
        if(!isPagesExpanded) {
            document.querySelector(".pag").style.color="indigo-600"
        }
        else {
            document.querySelector(".pag").style.color=""
        }
    }
    function ToggleNavBar() {
        setSidebarWidth(sidebarWidth === 'w-60' ? 'w-20' : 'w-60');
        setIsCollapsed(!isCollapsed);
        if(isCollapsed){
            document.querySelector('.top').style.marginLeft="80px";
        }
        else {
            document.querySelector('.top').style.marginLeft="240px";
        }
    }

    return(<>
    <nav style={{ backgroundColor: '#080f25' }} className={`nav ${sidebarWidth}  h-screen bg-slate-600 border-r-1 fixed`}>
      <div className=" wid border-white w-full h-3/4 p-7">
        <div className="flex items-center justify-between my-3 font-bold">
            <h3 className={`cursor-pointer text-xl ${isCollapsed ? 'block':'hidden'}` }>ECOPACT</h3>
            <h3 className="cursor-pointer" onClick={ToggleNavBar}><IoCodeSharp /></h3>
        </div>
        <div className="flex">   
            <input style={{background:'#101935'}} type="stext" className={`my-5 p-2 w-full rounded ${isCollapsed ? 'block':'hidden'} text-sm outline-none focus:ring transition-all focus:ring-violet-300`} placeholder="search for..." />
            
        </div>
        <div className="flex items-center justify-between my-6 cursor-pointer">
            <div className="flex gap-1 items-center font-bold text-lg" style={{color: '#6c72ff'}} >
                <IoIosHome/>
                <p className={`${isCollapsed ? 'block':'hidden'} tracking-wide`}>Dashboard</p>
            </div>
            
            
        </div>
        <div className="flex sec items-center justify-between my-6 cursor-pointer transition-all hover:text-indigo-600 " onClick={ToggleDataBar}>
            <div className={`flex gap-2 items-center font-bold `} >
                <FaDatabase />
                <div className={`tracking-wide ${isCollapsed ? 'block':'hidden'}`}>Data</div>

            </div>
            {isDataExpanded ? <span><FaAngleDown className={`tracking-wide ${isCollapsed ? 'block':'hidden'}`}></FaAngleDown></span> : <span className={`tracking-wide ${isCollapsed ? 'block':'hidden'}`}><FaAngleRight></FaAngleRight></span>}            
        </div>
        {
            isDataExpanded && (
                <ul className="">
                    <li className="flex gap-2 items-center px-4 my-3 text-sm cursor-pointer">
                        <IoMdContact />
                        <p className={`${isCollapsed ? 'block':'hidden'} cursor-pointer`}>Manage Users</p>
                    </li>   
                    <li className="flex gap-2 items-center px-4 mb-5 text-sm cursor-pointer">  
                        <MdContacts />
                        <p className={`${isCollapsed ? 'block':'hidden'} cursor-pointer`}>Contacts Infos</p>
                    </li>
                    
        </ul>
           )
        }
        <div className="flex pag items-center justify-between my-6 cursor-pointer hover:text-indigo-600" onClick={TogglePagesBar}>
            <div className="flex gap-2 items-center transition-all font-bold ">
                <FaNoteSticky />
                <p className={`tracking-wide ${isCollapsed ? 'block':'hidden'}`}>Pages</p>
            </div>
            {isPagesExpanded ? <span className={`${isCollapsed ? 'block':'hidden'}`}><FaAngleDown className={`tracking-wide ${isCollapsed ? 'block':'hidden'}`}></FaAngleDown></span> : <span className={`${isCollapsed ? 'block':'hidden'}`}><FaAngleRight></FaAngleRight></span>}
            
        </div>
        {
            isPagesExpanded && (
                <ul className={`w-full transition-all duration-500 overflow-hidden ${isPagesExpanded ? 'block' : 'hidden'}`}>
                    <li className="flex gap-2 items-center px-4 my-3 text-sm cursor-pointer">
                        <ImProfile />
                        <Link to={'/profileForm'}>
                        <p className={`${isCollapsed ? 'block':'hidden'}`}>Profile Form</p>
                        </Link>
                    </li>   
                    <li className="flex gap-2 items-center px-4 mb-5 text-sm cursor-pointer">  
                        <FaRegCircleQuestion />
                        <Link to={'/FAQ'}>
                        <p className={`${isCollapsed ? 'block':'hidden'}`}>FAQ Page</p>
                        </Link>
                    </li>
                    
        </ul>   
            )
        }
      </div>
      <div className="w-full h-px bg-zinc-100"></div>
      <div className="border-white w-full h-full p-7">
        <div className="flex items-center justify-between my-2 cursor-pointer hover:text-indigo-600 transition-all">
            <div className="flex gap-1 items-center font-bold tracking-wide">
                <IoIosSettings />
                <p className={`tracking-wide ${isCollapsed ? 'block':'hidden'}`}>Settings</p>
            </div>       
        </div>
      </div>
    </nav>
    </>);
}

export default Sidebar;