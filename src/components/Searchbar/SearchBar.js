import * as React from 'react';
import { Dropdown, Menu } from 'semantic-ui-react'

import PropTypes from 'prop-types';
import "./style.css"
import {
  Box,
  TextInput,
} from 'grommet';

const SearchBar = ({ setSearch, search }) => {
  

  const options = [
    { key: 1, text: 'Choice 1', value: 1 },
    { key: 2, text: 'Choice 2', value: 2 },
    { key: 3, text: 'Choice 3', value: 3 },
  ]



  return (
    <React.Fragment>

   
    
      <Box   className='serach_bar'  margin={{horizontal: 'auto', bottom: 'medium', top: 'large'}} direction="row" justify="between" gap="small" width={"40%"} style={{minWidth:"200px"}}>
    
      <TextInput placeholder="Search projects by title" value={search} onChange={event => setSearch(event.target.value)} />
          <div className='d-flex'>
          <Menu compact>
    <Dropdown text='Dropdown' options={options} simple item />
  </Menu>
<button>Search</button>

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
