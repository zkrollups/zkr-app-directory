import React from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Heading,
  TextInput,
} from 'grommet';

const SearchBar = ({ setSearch, search }) => {
  return (
    <React.Fragment>
      <Heading level="4" margin={{top: "medium", bottom: "xsmall"}} alignSelf="center">Search for a project</Heading>
      <Box margin={{horizontal: 'auto', bottom: 'medium'}} direction="row" justify="between" gap="small" width={"30%"}>
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
