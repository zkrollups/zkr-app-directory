import React from 'react'
import "./style.css"
import SearchBar from '../Searchbar/SearchBar'
function Baner({ setSearch, search,setSearch_category, search_category }) {
  return (
   <>
   
   <div className='container-fluied'>
       
       <div className='bner_wrap'>

<h1 className='text-center text_heading'>Discover the <span className='span_text'>future </span>of <span className='span_text'>Ethereum </span>on Layer 2</h1>


<SearchBar setSearch={setSearch} search={search} search_category={search_category} setSearch_category={setSearch_category}/>
       </div>

   </div>
   
   </>
  )
}

export default Baner