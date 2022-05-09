import '../style.css';
import React, { useState } from 'react';
import Menu from '../components/Menu';
// import Menu from '../components/menu2';
import ProjectsList from '../components/ProjectsList';
import SearchBar from '../components/SearchBar';
import NetworkFilter from '../components/NetworkFilter';
import Navbar from '../components/NavBar/navbar';
import Baner from '../components/Baner/baner';
// import SearchBar from '../Searchbar/SearchBar'
const All = () => {
  const [filter, setFilter] = useState('');
  const [search, setSearch] = useState('');
  const [search_category, setSearch_category] = useState("all");
  const [networkFilter, setNetworkFilter] = useState('');
  const [results, setResults] = useState([]);



  const [sidemenu, setsidemenu] = useState(false);

const show_menu=()=>{
  setsidemenu(true)
}
const close_menu=()=>{
  setsidemenu(false)
}

  return (
    <React.Fragment>
       <Baner  setSearch={setSearch} search={search} search_category={search_category} setSearch_category={setSearch_category}  /> 
       {/* < SearchBar/> */}

       <div className='row space_cat'>
       {
             sidemenu?
            //  <button className='togle_btn w-25' onClick={close_menu}>Close</button>
             
<i className= "fa fa-times togle_btn"  onClick={close_menu}></i>
             :
             <i className= "fa fa-bars togle_btn" onClick={show_menu}></i>  

            //  <button className='togle_btn' onClick={show_menu}>Menu</button>
           }

{/* <i className={sidemenu ? "fa fa-times" : "fa fa-bars"}></i> */}
{/* <div className='col-1'></div> */}
       <div className= {
           sidemenu?
           'col-12 dive_show  '
:
' col-lg-2 col-md-4 col-sm-6 dive_hide  '
         }>
         <Menu setFilter={setFilter} filter={filter}  results={results} setResults={setResults} />
         </div>
         
        {
          sidemenu?
          null:
          <div className=' col-lg-10 col-md-8   col-sm-12 '>
         
          
          
          <ProjectsList filter={filter} search={search} networkFilter={networkFilter} results={results} setResults={setResults} search_category={search_category} setSearch_category={setSearch_category} />
          </div>
 
        }
       
       </div>
      {/* <SearchBar setSearch={setSearch} search={search} /> */}
     
      {/* <NetworkFilter setNetworkFilter={setNetworkFilter} networkFilter={networkFilter} /> */}
    
    </React.Fragment>
  )
};

export default All;
