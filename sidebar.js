import { useState } from "react";
import { BsArrowLeftShort,
         BsSearch, 
         BsChevronDown,
         BsPerson,
         BsFillBellFill,
         

        } 
         from "react-icons/bs";
import { 
          AiOutlineFile,
          AiOutlineSetting,
          AiOutlineLogout,
        } 
          from "react-icons/ai";
import { MdDashboard } from "react-icons/md";
import images from '../images/HBMLOGO.png'
import images1 from '../images/pp.png'

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const [submenuOpen, setsubmenuOpen] = useState(false);
  const Menus = [
    { title: "Dashboard", active: true },
    { title: "Master Data",
     icon: <AiOutlineFile/>,
     active: true,
    submenu: true,
    submenuItems: [{title: "Jabatan", link: "/" }, {title: "Karyawan"}, {title:"Laporan Absensi"}, {title:"Rekap Abesensi"}],
    },
    { title: "Profile", icon: <BsPerson/>,active:false },
    { title: "Setting", icon: <AiOutlineSetting/>, active: false },
    { title: "Logout",  icon: <AiOutlineLogout/>, active:false },
  ];

  

  return (
    <div className="flex">
      <div className={`bg-white h-screen sticky -top-10 -left-10 border-main-surface p-5 pt-8 ${open ? "w-72" : "w-20"} duration-300 relative`}
       >
      <BsArrowLeftShort
       className={`bg-white text-main-hbm  text-3xl rounded-full absolute -right-3 top-9 border border-main-hbm cursor-pointer ${!open && "rotate-180"}`}
      onClick={() => setOpen (!open)}
      />
      <div className="inline-flex">
      <img src={images} alt="ini gambar logo" className={` w-10 h-10 rounded cursor-pointer block float-left mr-2 duration-500   ${open && "rotate-[360deg]"}`}/>
      <h1 className={`text-main-hbm origin-left font-medium text-2xl duration-300 ${!open &&  "scale-0"}`}>HexaHR</h1>
      </div>
      <div className={`flex items-center rounded-md bg-gray-300 mt-6 ${!open ? "px-2.5" : "px-4"} px-4 py-2`} >
        <BsSearch className={`text-black text-lg block float-left cursor-pointer ${open && "mr-2"}`}/>
        
        <input type={"Search"} placeholder="Search" className={`text-base bg-transparent w-full text-black focus:outline-none ${!open && "hidden"}`} />
      </div>
      <ul className="pt-2"> 
        {Menus.map((menu, index) => (
          <>
          <li key={index} className={` ${menu.active ? "active:" : ""} text-main-hbm text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-main-surface rounded-md  ${menu.spacing ? "mt-9" : "mt-2"}`}>
          <span className="text-2xl block float-left">
            {menu.icon ? menu.icon  :<MdDashboard/>}
          </span>
            <span className={`text-base font-medium flex-1 duration-200 ${!open &&  "hidden"}`}>{menu.title}</span>
            {menu.submenu && open &&  (
              <BsChevronDown className={`${submenuOpen && "rotate-180 duration-100"}`} onClick={() => setsubmenuOpen(!submenuOpen)}/>
            )}
          </li>
          {menu.submenu && submenuOpen && open && (
            <ul>
              {menu.submenuItems.map((submenuItem, index) => (
                <li key={index} className="text-main-hbm text-sm flex items-center gap-x-4 cursor-pointer p-2 
                 px-2 hover:bg-main-surface rounded-md">
                  {submenuItem.title}
                </li>
              ))}
            </ul>
          )}
          </>
        ))}
      </ul>
      </div>
      <div className="body  flex-grow px-6 bg-slate-200 ">
      <nav className=" px-4 py-2 mb-4 ">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <a href="/" className="mr-4">
            <img src={images1} alt="INI PROFILE" className="rounded-full h-8 w-9"/>
          </a>
          <p className="text-black font-medium mr-4 mb-4">
                Dimas Agung Pirnanto
          </p>
          <a href="/" className="text-main-hbm hover:text-main-hover h-8 w-8">
                <BsFillBellFill/>
          </a>
        </div>
      </div>
     </nav>
    </div>
</div>


  );
};


export default Sidebar;
