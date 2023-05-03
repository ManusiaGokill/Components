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
import { BiEdit }
        from "react-icons/bi"

import { MdDashboard } from "react-icons/md";
import images from '../images/HBMLOGO.png'
import images1 from '../images/pp.png'
import ModalTamdat from "./ModalTamdat";
import ModalDelete from "./ModalDelete";
import ModalEdit from "./ModalEdit";






const MDKaryawan = () => {
  const [selectedOption, setSelectedOption] = useState("Option 1");

  const [isOpen, setIsOpen] = useState(false);

  function handleOpenModal() {
    setIsOpen(true);
  }

  function handleCloseModal() {
    setIsOpen(false);
  }

  



  const [inputNamaValue, setNamaValue] = useState('');
  const [inputPekerjaanValue, setPekerjaanValue] = useState('');
  const [inputJabatanValue, setJabatanValue] = useState('');
  const [inputNamaKaryawanValue, setNamaKValue] = useState('');
  const [inputNamaJabatanValue, setNamaJValue] = useState('');
  const [inputNamaDepartemenValue, setNamaDValue] = useState('');

  const handleNamaDepartemenInputChange = (e) => {
    setNamaDValue(e.target.value);
  };
  const handleNamaJabatanInputChange = (e) => {
    setNamaJValue(e.target.value);
  };
  const handleNamaKaryawanInputChange = (e) => {
    setNamaKValue(e.target.value);
  };
  const handleNamaInputChange = (e) => {
    setNamaValue(e.target.value);
  };
  
  const handlePekerjaanInputChange = (e) => {
    setPekerjaanValue(e.target.value);
  };
  
  const handleJabatanInputChange = (e) => {
    setJabatanValue(e.target.value);
  };






  const [inputValue, setInputValue] = useState('');
  
  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  const [isOpenTamdat, setIsOpenTamdat] = useState(false);
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const [isOpenDelete, setIsOpenDelete] = useState(false);

  function handleOpenModalTamdat() {
    setIsOpenTamdat(true);
  }

  function handleCloseModalTamdat() {
    setIsOpenTamdat(false);
  }
  function handleOpenModalEdit() {
    setIsOpenEdit(true);
  }

  function handleCloseModalEdit() {
    setIsOpenEdit(false);
  }
  function handleOpenModalDelete() {
    setIsOpenDelete(true);
  }

  function handleCloseModalDelete() {
    setIsOpenDelete(false);
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
        <p className="relative top-0 left-0">Karyawan</p>
        
    </span>        
    <div className="breadcrumb mt-3">
    <nav className="text-sm font-medium" aria-label="Breadcrumb">
      <ol className="list-none p-0 inline-flex">
        <li className="flex items-center">
          <a href="asdad" className="text-grey-200 hover:text-gray-700">
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
          <a href="sadas" className="text-grey-200 hover:text-gray-700">
            Karyawan
          </a>
        </li>
          <button className="flex p-4 bg-main-hbm rounded-lg hover:bg-main-hover  text-white absolute right-8 mr-10 top-24 " onClick={handleOpenModalTamdat}>Tambah data</button>
          <ModalTamdat isOpen={isOpenTamdat} onClose={handleCloseModalTamdat}>
          <h2 className="text-lg text-white font-bold  bg-main-hbm p-3">Form Tambah Jabatan</h2>
        <div className="p-3 ">
          {/* content start */}
          <label className="text-lg">Nama :</label>
          <label className="text-slate-500 container flex py-1">
              <input type="text" className="appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-2 py-1  rounded shadow  focus:outline-none focus:shadow-outline "  value={inputNamaValue} onChange={handleNamaInputChange} />
              </label>
            
          <label className="text-lg">Status :</label>
          <label className="text-slate-500 container flex py-1">
          <div className="inline-block relative w-full">
      <select
        className='appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-2 py-1  rounded shadow  focus:outline-none focus:shadow-outline  '
        value={selectedOption}
        onChange={(e) => setSelectedOption(e.target.value)}
      >
        <option>Kontrak</option>
        <option>Tetap</option>
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg
          className="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M17.293 6.707a1 1 0 00-1.414 0L10 12.586l-5.293-5.293a1 1 0 10-1.414 1.414l6 6a1 1 0 001.414 0l6-6a1 1 0 000-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  </label>
            
          <label className="text-lg">Jabatan :</label>
          <label className="text-slate-500 container flex hover:border-gray-500 py-1">
      <div className="inline-block relative w-full">
      <select
        className='appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-2 py-1  rounded shadow  focus:outline-none focus:shadow-outline  '
        value={selectedOption}
        onChange={(e) => setSelectedOption(e.target.value)}
      >
        <option>Direksi</option>Staff
        <option>Staff</option>
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg
          className="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M17.293 6.707a1 1 0 00-1.414 0L10 12.586l-5.293-5.293a1 1 0 10-1.414 1.414l6 6a1 1 0 001.414 0l6-6a1 1 0 000-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
   </label>
          <label className="text-lg">Group :</label>
          <label className="text-slate-500 container flex hover:border-gray-500 py-1">
      <div className="inline-block relative w-full">
      <select
        className='appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-2 py-1  rounded shadow  focus:outline-none focus:shadow-outline  '
        value={selectedOption}
        onChange={(e) => setSelectedOption(e.target.value)}
      >
        <option>HRD</option>
        <option>IT</option>
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg
          className="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M17.293 6.707a1 1 0 00-1.414 0L10 12.586l-5.293-5.293a1 1 0 10-1.414 1.414l6 6a1 1 0 001.414 0l6-6a1 1 0 000-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
   </label>
            
         
          {/* content end */}
          <button className=" bg-main-hbm hover:bg-main-hover text-white px-7 first-letter: py-2 rounded mt-2" onClick={handleCloseModalTamdat}>
            Tambah
          </button>
        </div>
          </ModalTamdat>
      </ol> 
    </nav>
  </div>
</div>
    <div className="px-0 mx-auto mt-10 h-screen justify-between flex">
        <div className="border rounded-lg shadwod-lg p-5 bg-white h-screen w-full">
          <span>
          <label className="text-lg ml-1">Nama Karyawan :</label>
          <label className="text-slate-500 container flex p-1">
              <input type="text" className="appearance-none bg-white border border-gray-400 hover:border-gray-500 px-2 py-1  rounded shadow  focus:outline-none focus:shadow-outline "  value={inputNamaKaryawanValue} onChange={handleNamaKaryawanInputChange} />
              </label>
          <label className="text-lg ml-1">Jabatan :</label>
          <label className="text-slate-500 container flex p-1">
              <input type="text" className="appearance-none bg-white border border-gray-400 hover:border-gray-500 px-2 py-1  rounded shadow  focus:outline-none focus:shadow-outline "  value={inputNamaJabatanValue} onChange={handleNamaJabatanInputChange} />
              </label>
          <label className="text-lg ml-1">Departemen :</label>
          <label className="text-slate-500 container flex p-1">
              <input type="text" className="appearance-none bg-white border border-gray-400 hover:border-gray-500 px-2 py-1  rounded shadow  focus:outline-none focus:shadow-outline "  value={inputNamaDepartemenValue} onChange={handleNamaDepartemenInputChange} />
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
                    Foto
                  </th>
                  <th
                    scope="col"
                    className=" py-3  text-center text-xs font-medium text-white uppercase tracking-wider"
                  >
                    Karywan
                  </th>
                  <th
                    scope="col"
                    className=" py-3  text-center text-xs font-medium text-white uppercase tracking-wider"
                  >
                    Masa Kontrak
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
                    Status
                  </th>
                  <th
                    scope="col"
                    className=" py-3  text-center text-xs font-medium text-white uppercase tracking-wider"
                  >
                    Group
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
                  <td className="">
                    <img src={images1}  alt="INI PROFILE" className="rounded-full h-11 w-11 ml-11 "/>
                  </td>
                  <td className=" py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">Karyawan</div>
                  </td>
                  <td className=" py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">Under Develope</div>
                  </td>
                  <td className=" py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">Under Develope</div>
                  </td>
                  <td className=" py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">Under Develope</div>
                  </td>
                  <td className=" py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">Under Develope</div>
                  </td>
                  <td className=" py-4 whitespace-nowrap">
                    <div className="text-2xl text-gray-900 ">
                    <button className="text-green-500 m-2" onClose={handleCloseModalEdit} onClick={handleOpenModalEdit}> <AiFillEdit/></button> 
                    <button className="text-red-500" onClose={handleCloseModalDelete} onClick={handleOpenModalDelete}> <AiFillDelete/> </button> 
                    </div>
                  </td>
                </tr>
                
              </tbody>
            </table>

            <ModalEdit isOpen={isOpenEdit} onClose={handleCloseModalEdit}>
       
          <h2 className="text-lg text-white font-bold  bg-main-hbm p-3">Form Edit Jabatan</h2>
        <div className="p-3 ">
          {/* content start */}
          <label className="text-lg">Nama :</label>
          <label className="text-slate-500 container flex py-1">
              <input type="text" className="appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-2 py-1  rounded shadow  focus:outline-none focus:shadow-outline "  value={inputNamaValue} onChange={handleNamaInputChange} />
              </label>
            
          <label className="text-lg">Status :</label>
          <label className="text-slate-500 container flex py-1">
          <div className="inline-block relative w-full">
      <select
        className='appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-2 py-1  rounded shadow  focus:outline-none focus:shadow-outline  '
        value={selectedOption}
        onChange={(e) => setSelectedOption(e.target.value)}
      >
        <option>Kontrak</option>
        <option>Tetap</option>
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg
          className="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M17.293 6.707a1 1 0 00-1.414 0L10 12.586l-5.293-5.293a1 1 0 10-1.414 1.414l6 6a1 1 0 001.414 0l6-6a1 1 0 000-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  </label>
            
          <label className="text-lg">Jabatan :</label>
          <label className="text-slate-500 container flex hover:border-gray-500 py-1">
      <div className="inline-block relative w-full">
      <select
        className='appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-2 py-1  rounded shadow  focus:outline-none focus:shadow-outline  '
        value={selectedOption}
        onChange={(e) => setSelectedOption(e.target.value)}
      >
        <option>Direksi</option>Staff
        <option>Staff</option>
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg
          className="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M17.293 6.707a1 1 0 00-1.414 0L10 12.586l-5.293-5.293a1 1 0 10-1.414 1.414l6 6a1 1 0 001.414 0l6-6a1 1 0 000-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
   </label>
          <label className="text-lg">Group :</label>
          <label className="text-slate-500 container flex hover:border-gray-500 py-1">
      <div className="inline-block relative w-full">
      <select
        className='appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-2 py-1  rounded shadow  focus:outline-none focus:shadow-outline  '
        value={selectedOption}
        onChange={(e) => setSelectedOption(e.target.value)}
      >
        <option>HRD</option>
        <option>IT</option>
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg
          className="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M17.293 6.707a1 1 0 00-1.414 0L10 12.586l-5.293-5.293a1 1 0 10-1.414 1.414l6 6a1 1 0 001.414 0l6-6a1 1 0 000-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
   </label>
            
         
          {/* content end */}
          <button className=" bg-yellow-500 hover:bg-yellow-600 text-white px-7 first-letter: py-2 rounded mt-2" onClick={handleCloseModalEdit}>
            Simpan
          </button>
        </div>
         
            </ModalEdit>

            <ModalDelete isOpen={isOpenDelete}>
            <div className="border  text-red-700 px-4 py-3 rounded relative" role="alert">
      <strong className="font-bold">Are you sure you want to delete this?</strong>
      <span className="block sm:inline">Once you delete this, it cannot be undone.</span> <br></br>
      <button className="absolute top-0 right-0 px-4 py-3" onClick={(handleCloseModalDelete)}>
        <svg className="fill-current h-6 w-6 text-red-500" role="button" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <title>Close</title>
          <path d="M14.348 5.652c-.5-.5-1.32-.5-1.82 0L10 8.18 7.472 5.652c-.5-.5-1.32-.5-1.82 0-.5.5-.5 1.32 0 1.82L8.18 10l-2.528 2.528c-.5.5-.5 1.32 0 1.82.5.5 1.32.5 1.82 0L10 11.82l2.528 2.528c.5.5 1.32.5 1.82 0 .5-.5.5-1.32 0-1.82L11.82 10l2.528-2.528c.5-.5.5-1.32 0-1.82z" />
        </svg>
      </button>
      <button className="border bg-red-700 hover:bg-red-800 text-white p-2 mt-4 rounded-lg w-32" >
        Delete
      </button>

    </div>
            </ModalDelete>

            
         
        </div>
      </div>
    </div>
</div>


  );
};


export default MDKaryawan;