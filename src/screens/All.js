import React from 'react';
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

const All = ({ align, center, justify, name, pad, path, children }) => (
    <React.Fragment>
        <Menu/>
        <Box direction='row' flex overflow={{ horizontal: 'hidden' }} align='top' justify='center' wrap="true" margin={{left:"xlarge", right:"xlarge"}}  style={{zoom:"0.92"}}>
          <Rollups/>
          <Wallets/>
          <Infra/>
          <Dapps/>
          <NFTs/>
          <Misc/>
        </Box>
    </React.Fragment>
);

All.propTypes = {
    align: PropTypes.string,
    details: PropTypes.string,
    label: PropTypes.string.isRequired,
    level: PropTypes.number,
    size: PropTypes.oneOf(['xlarge', 'large']),
    summary: PropTypes.node,
  };
  
  All.defaultProps = {
    align: undefined,
    details: undefined,
    level: 1,
    size: 'large',
    summary: undefined,
  };

export default All;
