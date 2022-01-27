import PaginationButtons from "./PaginationButtons"

const SearchResults = ({ results })=>{
  return (
   <div> 
     <div className="w-full mx-auto px-3 sm:px-[5%] md:px-[14%] lg:px-52">
        <p className="text-gray-600 text-md mb-5 mt-3">
            About {results.searchInformation?.formattedTotalResults} Results ({results.searchInformation?.formattedSearchTime} seconds)
        </p>

       {results.items?.map(result =>(
         <div key={result.link} className="font-roboto">
            <div className="max-w-xl mb-8">
              <div className="group">
                <div className="flex space-x-4 items-center">
                  <img alt="" src="/images/google-icon.svg" 
                  className="w-9 rounded-xl overflow-hidden"/>
                  <a href={result.link} className="text-sm line-clamp-1 max-w-sm sm:max-w-md">{result.formattedUrl}</a>
                </div>
                <a href={result.link}>
                  <h2 className="text-blue-700 py-4 text-xl font-medium group-hover:underline">
                  {result.title}
                  </h2>
                </a>
              </div>
              <p className="line-clamp-2">{result.snippet}</p>
            </div>
         </div>
       ))}

       <div className="max-w-xl flex justify-center">

        <PaginationButtons />
      </div>

     </div>

   </div> 
)}

export default SearchResults
