import { useState } from "react";
import { BsArrowLeftShort,
         BsSearch, 
         BsChevronDown,
         BsPerson,
         BsFillBellFill,
         BsPeopleFill,

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
import { Chart } from "react-google-charts";


        


export const data = [
  ["Hadir", "Hours per Day"],
  ["Hadir", 20],
  ["Terlambat", 5],
  ["Belum Absen", 17],
  ["Cuti", 8],
  ["Izin", 6],
  ["Sakit", 9], // CSS-style declaration
];

export const options = {
  pieHole: 0.4,

};




const App = () => {
  const [open, setOpen] = useState(true);
  const [submenuOpen, setsubmenuOpen] = useState(false);
  const Menus = [
    { title: "Dashboard",link: "/dashtemp" ,active: true },
    { title: "Master Data",
     icon: <AiOutlineFile/>,
     active: true,
    submenu: true,
    submenuItems: [{title: "Jabatan", link: "/MDJabatan"}, {title: "Karyawan"}, {title:"Laporan Absensi"}, {title:"Rekap Abesensi"}],
    },
    { title: "Profile", icon: <BsPerson/>, active: false },
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
          <li key={index} className={` ${menu.active ? "active" : ""} text-main-hbm text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-main-surface rounded-md  ${menu.spacing ? "mt-9" : "mt-2"}`}>
            
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
                  <a href={menu.link}>
                  {submenuItem.title}
                  </a>
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
        <a href="/" className="text-2xl font-semibold text-main-hbm">Selamat Datang</a>
        <div className="flex items-center">
          <a href="/" className="mr-4">
            <img src={images1}  alt="INI PROFILE" className="rounded-full h-8 w-9"/>
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
        <div className="bg-white p-5 shadow-md lg:max-w border-solid  rounded-xl ">
                <span className="text-2xl font-semibold ">
                 <p className="mb-2 relative top-1 left-1">Activity</p>
                   <hr></hr>
                </span>
                <div className="space-y-6 container  flex justify-between  ">
                <p className="text-black text-1xl font-medium align-center mt-7">
               <BsPeopleFill className="mt-1 m-1 h-8 w-8 justify-center"/> <p className="font-semibold text-2xl mt-1">Karyawan Aktif</p> 
                <span className="text-gray-400">70 dari Max 100 Karyawan</span>
                </p>
                <p className="text-black text-1xl font-medium align-center mt-7">
               <BsPeopleFill className="mt-1 m-1 h-8 w-8 justify-center"/> <p className="font-semibold text-2xl mt-1">Karyawan</p> 
                <span className="text-gray-400">40 dari Max 100 Karyawan</span>
                </p>
            </div>
            
         </div>
      <div className="px-0 mx-auto mt-10 h-screen justify-between flex">
        <div className="border rounded-lg shadwod-lg p-5 bg-white h-screen w-3/5 mr-5">
          <span className="text-2xl font-semibold ">
              <p className="mb-2 relative top-1 left-1">Rekap Absensi Hari Ini</p>
              <hr></hr>
          </span>
          <div className="p-1">
            <div className="container flex">
            <p className="ml-1 ">Cabang :</p>
            <p className="ml-36 ">Jam kerja :</p>
            </div>
            <select className="container border-solid rounded-lg border-gray-400 w-40 shadow-md mt-2 p-2 bg-slate-200">
              <option value="">PST</option>
            </select>
            <select className="container ml-10 border-solid rounded-lg border-gray-400 w-40 shadow-md mt-2 p-2 bg-slate-200">
              <option value="">Normal</option>
              <option value="">Lembur</option>
            </select>
           </div>
         
          <Chart
            
            chartType="PieChart"
            width="90%"
            height="350px"
            data={data}
            options={options}
           />
            <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-main-hbm">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                  >
                    Hadir
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                  >
                    Terlambat
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                  >
                    Belum Absen
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                  >
                    Cuti
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                  >
                    Izin
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                  >
                    Sakit
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">1</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">4</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">3</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">0</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">3</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">0</div>
                  </td>
                </tr>
                
              </tbody>
            </table>
        </div>
      </div>
    </div>
        </div>
      </div>
        <div className="border rounded-lg shadwod-lg p-5 bg-white h-screen w-1/2">
          <span className="text-2xl font-semibold ">
              <p className="mb-2 relative top-1 left-1">Daftar Pengajuan</p>
              <hr></hr>
          </span>
          
      </div>
      </div>
    </div>
        </div>

  );
};


export default App;
