import '../style.css';
import React, { useState } from 'react';
import Menu from '../components/Menu';
import ContactUs from '../components/Contact Us/contactus';
import About from '../components/About/about';
import Terms from "../components/Terms/terms"
import ProjectsList from '../components/ProjectsList';
import Baner from '../components/Baner/baner';
import Resources from '../components/Resources/resources';
import Twitter from '../components/Twitter';
import Tokens from '../components/Tokens';
import CardDetail from "../components/CardDetail/CardDetail"

import {
  Route,
  Routes,
} from "react-router-dom";
import { useLocation } from 'react-router';

const All = () => {
  const [filter, setFilter] = useState('');
  const [search, setSearch] = useState('');
  const [search_in, setSearch_in] = useState('');
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
const location = useLocation();

// //console.log("locationlocationlocation",location)

  return (
    <React.Fragment>

{
  location.pathname==="/about" || location.pathname==="/contact" || location.pathname==="/carddetail" || location.pathname==="/resources" || location.pathname==="/tokens" ?
  null
  :
  <Baner  setSearch={setSearch} search={search} search_category={search_category} setSearch_category={setSearch_category} search_in={search_in} setSearch_in={setSearch_in} /> 

}


       {/* < SearchBar/> */}

       <div className='row mt-5 space_cat'>
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
         <Menu  setFilter={setFilter} filter={filter}  results={results} setResults={setResults} set_search={setSearch}  search_in={search_in} setSearch_in={setSearch_in} />
         </div>
         
        {
          sidemenu?
          null:
          <div className=' col-lg-10 col-md-8   col-sm-12 products_section'>

            <Routes>
                  <Route path='/' element={<ProjectsList  filter={filter}  setNetworkFilter={setNetworkFilter} setFilter={setFilter} search={search} networkFilter={networkFilter} results={results} setResults={setResults} search_category={search_category} setSearch_category={setSearch_category} />} />
                  <Route path='/resources' element={<Resources/>} />
                  <Route path='/about' element={<About/>} />
                  <Route path='/contact' element={<ContactUs/>} />
                  <Route path='/terms' element={<Terms/>} />
                  <Route path='/feed' element={<Twitter/>} />
                  <Route path='/tokens' element={<Tokens/>} />
                  <Route path='/:name' element={<CardDetail setFilter={setFilter} />} />
            </Routes>
          
          </div>
 
        }
       
       </div>

      {/* <SearchBar setSearch={setSearch} search={search} /> */}
      {/* <NetworkFilter setNetworkFilter={setNetworkFilter} networkFilter={networkFilter} /> */}
    
    </React.Fragment>
  )
};

export default All;
