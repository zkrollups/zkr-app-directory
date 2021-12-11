import '../style.css';
import React, { useState } from 'react';
import Menu from '../components/Menu';
import ProjectsList from '../components/ProjectsList';
import SearchBar from '../components/SearchBar';
import NetworkFilter from '../components/NetworkFilter';

const All = () => {
  const [filter, setFilter] = useState('');
  const [search, setSearch] = useState('');
  const [networkFilter, setNetworkFilter] = useState('');
  return (
    <React.Fragment>
      <Menu setFilter={setFilter} filter={filter} />
      <SearchBar setSearch={setSearch} search={search} />
      <NetworkFilter setNetworkFilter={setNetworkFilter} networkFilter={networkFilter} />
      <ProjectsList filter={filter} search={search} networkFilter={networkFilter} />
    </React.Fragment>
  )
};

export default All;
