import {ChevronLeftIcon, ChevronRightIcon} from "@heroicons/react/solid"
import Link from "next/link"
import {useRouter} from "next/router"

const PaginationButtons = ()=>{
    const router = useRouter()
    const startIndex = Number(router.query.start) || 0

    return (
        <div className=" flex justify-between space-x-16 my-5 max-w-sm items-center text-blue-500">
            {(startIndex >= 10) && (<Link href={`/search?term=${router.query.term}&start=${startIndex - 10}`}>
                <div className="flex flex-col items-center justify-center hover:underline cursor-pointer">
                    <ChevronLeftIcon className="h-6 text-red-500" />
                    <p>Previous</p>
                </div>
                    </Link>)}


            <Link href={`/search?term=${router.query.term}&start=${startIndex + 10}`}>
                <div className="flex flex-col items-center juatify-center hover:underline cursor-pointer">
                    <ChevronRightIcon className="h-6 text-green-500" />
                    <p>Next</p>
                </div>
            </Link>
        
        </div>
)}

export default PaginationButtons
