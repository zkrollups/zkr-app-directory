import '../style.css';
import React, { useState } from 'react';
import Menu from '../components/Menu';
import ProjectsList from '../components/ProjectsList';

const All = () => {
  const [filter, setFilter] = useState('');
  return (
    <React.Fragment>
      <Menu setFilter={setFilter} filter={filter} />
      <ProjectsList filter={filter} />
    </React.Fragment>
  )
};

export default All;
