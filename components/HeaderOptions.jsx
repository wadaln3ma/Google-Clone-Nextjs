import {DotsVerticalIcon, MapIcon, NewspaperIcon, PhotographIcon, PlayIcon, SearchIcon} from "@heroicons/react/outline"
import HeaderOption from "./HeaderOption"

const HeaderOptions = ()=>{
  return (
    <div className="flex justify-evenly w-full lg:justify-start text-sm text-gray-700 lg:text-base lg:pl-52 lg:space-x-36 border-b">
     {/*left*/}
    <div className="flex space-x-4"> 
      <HeaderOption title="All" Icon={SearchIcon} selected />
      <HeaderOption title="Images" Icon={PhotographIcon}  />
      <HeaderOption title="Videos" Icon={PlayIcon}  />
      <HeaderOption title="New" Icon={NewspaperIcon}  />
      <HeaderOption title="Maps" Icon={MapIcon}  />
      <HeaderOption title="More" Icon={DotsVerticalIcon}  />
    </div>

     {/*right*/}
    <div className="flex space-x-4">
      <p className="nav-links">Settings</p>  
      <p className="nav-links">Tools</p>  
    </div>
   </div> 
)}

export default HeaderOptions
