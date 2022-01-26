import { SearchIcon } from "@heroicons/react/outline"
import {MicrophoneIcon, XIcon} from "@heroicons/react/solid"
import Image from "next/image"
import {useRouter} from "next/router"
import {useRef} from "react"
import Avatar from "./Avatar"
import HeaderOptions from "./HeaderOptions"

const avatar = "/images/profile-img.jpg"

const Header  = ()=>{
  const searchInputRef = useRef(null)
  const router = useRouter()

  const search = e =>{
    e.preventDefault()
    const term = searchInputRef.current.value
    if (!term) return
    router.push(`/search?term=${term}`)
  }

  return (
    <header className="sticky top-0 bg-white flex flex-col">
      <div className="flex items-cente p-6 w-fullr">
        <Image alt="google"
          className="cursor-pointer"
          onClick={()=> router.push('/')}
          src={"/images/google.png"}
          width={130}
          height={30} />

        <form className="border border-gray-200 shadow-lg rounded-full max-w-3xl flex items-center flex-grow ml-10 mr-5 px-6 py-3">
          <input type="text" 
                 className="focus:outline-none flex-grow w-full"
                 ref={searchInputRef}/>
          <XIcon 
            className="h-7 transition duration-100 transform hover:scale-120 sm:mr-3 text-gray-500 cursor-pointef"
            onClick={()=> searchInputRef.current.value=""}/>
          <MicrophoneIcon className="h-6 hidden sm:inline-flex mr-3 text-blue-500 border-l-2 border-gray-300 pl-4 "/>
          <SearchIcon className="h-6 hidden sm:inline-flex" />
        </form>
        
        <Avatar className="lg:ml-auto" url={avatar} />


      </div>

      <HeaderOptions />

    </header>
)}

export default Header 
