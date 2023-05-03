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
          AiFillDelete,
          AiFillEdit,
        } 
          from "react-icons/ai";
import { MdDashboard } from "react-icons/md";
import images from '../images/HBMLOGO.png'
import images1 from '../images/pp.png'
import ModalTamdat from "./ModalTamdat";







const MDJabatann = () => {
  const [inputValue, setInputValue] = useState('');
  const [inputNamaValue, setNamaValue] = useState('');
  const [inputPekerjaanValue, setPekerjaanValue] = useState('');
  const [inputJabatanValue, setJabatanValue] = useState('');

  const handleNamaInputChange = (e) => {
    setNamaValue(e.target.value);
  };
  
  const handlePekerjaanInputChange = (e) => {
    setPekerjaanValue(e.target.value);
  };
  
  const handleJabatanInputChange = (e) => {
    setJabatanValue(e.target.value);
  };


  
  
  
  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  const [isOpen, setIsOpen] = useState(false);

  function handleOpenModal() {
    setIsOpen(true);
  }

  function handleCloseModal() {
    setIsOpen(false);
  }

  


  const [open, setOpen] = useState(true);
  const [submenuOpen, setsubmenuOpen] = useState(false);
  const Menus = [
    { title: "Dashboard", active: true },
    { title: "Master Data",
     icon: <AiOutlineFile/>,
    submenu: true,
    submenuItems: [{title: "Jabatan"}, {title: "Karyawan"}, {title:"Laporan Absensi"}, {title:"Rekap Abesensi"}],
    },
    { title: "Profile", icon: <BsPerson/>, active: false },
    { title: "Setting", icon: <AiOutlineSetting/>, active: false },
    { title: "Logout",  icon: <AiOutlineLogout/>, active: false }
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
          <li key={index} className={`text-main-hbm text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-main-surface rounded-md  ${menu.spacing ? "mt-9" : "mt-2"}`}>
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
      <div className="flex items-center right-0 absolute mr-10">
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
    <div className="bg-white rounded-xl shadow-xl p-6 mt-10 ">
    <span className="text-2xl font-semibold">
        <p className="relative top-0 left-0">Jabatan</p>
        
    </span>        
    <div className="breadcrumb mt-3">
    <nav className="text-sm font-medium" aria-label="Breadcrumb">
      <ol className="list-none p-0 inline-flex">
        <li className="flex items-center">
          <a href="duihuihs" className="text-grey-200 hover:text-gray-700">
            Master Data
          </a>
          <svg
            className="fill-current w-3 h-3 mx-3 text-grey-200s"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
          >
            <path
              d="M259.31 268.69l-160 160c-9.373 9.373-24.569 9.373-33.941 0l-22.627-22.627c-9.373-9.373-9.373-24.569 0-33.941L187.758 256 42.743 110.941c-9.373-9.373-9.373-24.569 0-33.941l22.627-22.627c9.373-9.373 24.569-9.373 33.941 0l160 160c9.357 9.357 9.375 24.522.031 33.884z"
            />
          </svg>
        </li>
        <li className="flex items-center">
          <a href="suhdauihsd" className="text-grey-200 hover:text-gray-700">
            Jabatan
          </a>
        </li>
        <div className="p-4">
      <button className="flex p-4 bg-main-hbm rounded-lg hover:bg-main-hover text-white absolute right-8 mr-10 top-24" onClick={handleOpenModal}>
        Tambah Data
      </button>
      <ModalTamdat isOpen={isOpen} onClose={handleCloseModal}>
          <h2 className="text-lg text-white font-bold  bg-main-hbm p-3">Form Tambah Jabatan</h2>
        <div className="p-3 ">
          {/* content start */}
          <label className="text-lg">Nama :</label>
          <label className="text-slate-500 container flex py-1">
              <input type="text" className="border border-slate-500 p-1 rounded-md w-full"  value={inputNamaValue} onChange={handleNamaInputChange} />
              </label>
            
          <label className="text-lg">Pekerjaan :</label>
          <label className="text-slate-500 container flex py-1">
              <input type="text" className="border border-slate-500 p-1 rounded-md w-full"  value={inputPekerjaanValue} onChange={handlePekerjaanInputChange} />
              </label>
            
          <label className="text-lg">Jabatan :</label>
          <label className="text-slate-500 container flex py-1">
              <input type="text" className="border border-slate-500 p-1 rounded-md w-full"  value={inputJabatanValue} onChange={handleJabatanInputChange} />
              </label>
            
         
          {/* content end */}
          <button className=" bg-main-hbm hover:bg-main-hover text-white px-7 first-letter: py-2 rounded mt-2" onClick={handleCloseModal}>
            Simpan
          </button>
        </div>
      </ModalTamdat>
    </div>
      </ol> 
    </nav>
  </div>
</div>
    <div className="px-0 mx-auto mt-10 h-screen justify-between flex">
        <div className="border rounded-lg shadwod-lg p-5 bg-white h-screen w-full">
          <span>
            <label className="text-slate-500 container flex p-1">
              Cari :
              <input type="text" className="border ml-3 "  value={inputValue} onChange={handleInputChange} />
              
              </label>
            
          </span>
        <table className="container mx-auto my-4 divide-y divide-gray-200  ">
              <thead className="bg-main-hbm rounded-md  ">
                <tr>
                  <th
                    scope="col"
                    className=" py-3  text-center text-xs font-medium  text-white uppercase tracking-wider"
                  >
                    No
                  </th>
                  <th
                    scope="col"
                    className=" py-3  text-center text-xs font-medium text-white uppercase tracking-wider"
                  >
                    Pekerjaan
                  </th>
                  <th
                    scope="col"
                    className=" py-3  text-center text-xs font-medium text-white uppercase tracking-wider"
                  >
                    Jabatan
                  </th>
                  <th
                    scope="col"
                    className=" py-3  text-center text-xs font-medium text-white uppercase tracking-wider"
                  >
                    Aksi
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white text-center  justify-center divide-gray-200">
                <tr>
                  <td className=" py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">1</div>
                  </td>
                  <td className=" py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">Design</div>
                  </td>
                  <td className=" py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">Karyawan</div>
                  </td>
                  <td className=" py-4 whitespace-nowrap">
                   
                  </td>
                </tr>
                
              </tbody>
            </table>
           
         
        </div>
      </div>
    </div>
</div>


  );
};


export default MDJabatann;
