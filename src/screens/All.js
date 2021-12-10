import '../style.css';
import React, { useState } from 'react';
import Menu from '../components/Menu';
import ProjectsList from '../components/ProjectsList';
import SearchBar from '../components/SearchBar';

const All = () => {
  const [filter, setFilter] = useState('');
  const [search, setSearch] = useState('');
  return (
    <React.Fragment>
      <Menu setFilter={setFilter} filter={filter} />
      <SearchBar setSearch={setSearch} search={search} />
      <ProjectsList filter={filter} search={search} />
    </React.Fragment>
  )
};

export default All;
