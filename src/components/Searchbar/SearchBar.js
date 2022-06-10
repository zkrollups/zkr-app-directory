import React, { useState } from 'react';
import { Dropdown, Menu } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import magnifier from '../../actets/magnifier.png'
import "./style.css";
import dropdown_image from "../../actets/dropdown.svg";
import { AiOutlineCloseCircle } from "react-icons/ai";
import {
  Box,
  TextInput,
} from 'grommet';

const SearchBar = ({ setSearch, search,setSearch_category, search_category,search_in,setSearch_in }) => {

  const [search_category_in, setSearch_category_in] = useState("all");
  const handleChange = (e, result) => {
    const { value } = result;
    // //console.log("result===========<>> ",result)
    setSearch_category_in(value)
    // //console.log(search)
    // const s = search;
    // setSearch(s)
    // this.setState({
    //    [name]: value
    //   });
  };
  const options = [
    { key: 1, text: 'All Categories', value: "all" },
    { key: 2, text: 'Rollups', value: "rollups" },
    { key: 3, text: 'Wallets', value: "wallets" },
    { key: 4, text: 'Infra', value: "infra" },
    { key: 5, text: 'dApps', value: "dApps" },
    { key: 6, text: 'NFTs', value: "nfts" },
    { key: 7, text: 'Games', value: "games" },
    { key: 8, text: 'Social', value: "social" },

    { key: 9, text: 'DAOs', value: "daos" },
    { key: 10, text: 'Misc', value: "misc" },


  ]



  return (
    <React.Fragment>

    
      <Box   className='serach_bar'  margin={{horizontal: 'auto', bottom: 'medium', top: 'large'}} direction="row" justify="between" gap="small" width={"52.4rem"} style={{minWidth:"200px"}}>
    <div className='bar_inp d-flex'>
   {/* <AiOutlineSearch size={23} className="m-2"/> */}
   <img src={magnifier} alt="" width={'18px'} height={'18px'} className="m-3"/>

    <TextInput onKeyUp={(e)=>{if (e.key === 'Enter' || e.keyCode === 13){
       setSearch(search_in);
       setSearch_category(search_category_in);
    }}}  placeholder="Search projects by title" value={search_in} onChange={event => setSearch_in(event.target.value)} />

    {  
    search_in.length > 0 ?
    <AiOutlineCloseCircle className='appClose' size={30} color="red"  onClick={()=>{
      setSearch_in("");
      setSearch("all")
      //  setSearch_in("all");
    }}  /> 
    :null}

    </div>

          <div className='d-flex bar_drop'>
          <Menu compact>
    <Dropdown upward={false} className='drop_main'   options={options}  item onChange={(e, result) => handleChange(e,result)} value={search_category_in} icon={<img src={dropdown_image} width={'9px'} height={'6px'} alt=""  />}/>
  </Menu>
<button onClick={()=>{
  setSearch(search_in);
   setSearch_category(search_category_in);
}} className='ser_btn'>Search</button>

          </div>
    
       
      </Box>
    </React.Fragment>
  )
};

SearchBar.propTypes = {
  setKey: PropTypes.func.isRequired,
  key: PropTypes.string.isRequired,
};

export default SearchBar;
