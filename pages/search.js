import Head from "next/head"
import Header from "../components/Header"
import axios   from "axios"
import Result from '../Results'
import SearchResults from "../components/SearchResults"
import {useRouter} from "next/router"
const API_KEY = process.env.API_KEY
const CONTEXT_KEY = process.env.CONTEXT_KEY

const Search = ({ results })=>{
  const router = useRouter()

  return (
    <div>
      <Head>
        <title>{router.query.term} - Google Search</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
         <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap" rel="stylesheet"/>
      </Head>

      <Header />

      <SearchResults results={results}/>


    </div>    
)}

export default Search

export const getServerSideProps = async (context)=>{
  const useDummyData = false
  const term = context.query.term
  const startIndex = context.query.start || '0'
  const BASE_URL = `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}&start=${startIndex}`
  console.log(BASE_URL)
  
  const results = useDummyData ? Result : await axios.get(BASE_URL)
                              .then(res => res.data)
                              .catch(err => console.log(err))

  return {
    props :{
      results
    }
  }

}
