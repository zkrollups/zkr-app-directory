import '../style.css';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Box,
} from 'grommet';
import Menu from '../components/Menu';
import Rollups from '../components/card-components/Rollups';
import Wallets from '../components/card-components/Wallets';
import Infra from '../components/card-components/Infra';
import Dapps from '../components/card-components/Dapps';
import NFTs from '../components/card-components/NFTs';
import Misc from '../components/card-components/Misc';
import { grommet } from 'grommet';
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
