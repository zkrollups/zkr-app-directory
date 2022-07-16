import React from 'react'
import "./style.css"
import SearchBar from '../Searchbar/SearchBar'
function Baner({setFilter,condition_clause,setcondition_clause, setSearch, search,setSearch_category, search_category,search_in,setSearch_in }) {
  return (
   <>
   
   <div className='container-fluied'>
       
       <div className='bner_wrap'>

<h1 className='text-center text_heading'>Discover the <span className='span_text'>future </span>of <span className='span_text'>Ethereum </span>on Layer 2</h1>


<SearchBar setFilter={setFilter} condition_clause={condition_clause} setcondition_clause={setcondition_clause}  setSearch={setSearch} search={search} search_category={search_category} setSearch_category={setSearch_category}  search_in={search_in} setSearch_in={setSearch_in}/>
       </div>

   </div>
   
   </>
  )
}

export default Baner