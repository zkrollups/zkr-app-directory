import React from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  TextInput,
} from 'grommet';

const SearchBar = ({ setSearch, search }) => {
  return (
    <React.Fragment>
      <Box margin={{horizontal: 'auto', bottom: 'medium', top: 'large'}} direction="row" justify="between" gap="small" width={"40%"} style={{minWidth:"200px"}}>
          <TextInput placeholder="Search projects by title" value={search} onChange={event => setSearch(event.target.value)} />
      </Box>
    </React.Fragment>
  )
};

SearchBar.propTypes = {
  setKey: PropTypes.func.isRequired,
  key: PropTypes.string.isRequired,
};

export default SearchBar;
