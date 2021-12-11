import React from 'react';
import PropTypes from 'prop-types';
import {
  Avatar,
  Box,
  Button,
} from 'grommet';
import { NETWORKS } from '../helpers';

const NetworkFilter = ({ setNetworkFilter, networkFilter }) => {
  return (
    <React.Fragment>
      <Box margin={{horizontal: 'auto', bottom: 'medium', top: 'medium'}} direction="row" justify="between" gap="small" border={{ color: 'brand', size: 'small' }} round="medium">
        <Button label="All" onClick={() => setNetworkFilter('')} style={{border: 'none', margin:'2px'}} />
        {Object.keys(NETWORKS).map((network, idx) => (
            <Button onClick={() => setNetworkFilter(network)} key={idx} style={{borderRadius: '100%', margin:'2px', border: networkFilter === network ? '3px solid blue' : ''}}>
                <Avatar src={NETWORKS[network]} size="25px" />
            </Button>
        ))}
      </Box>
    </React.Fragment>
  )
};

NetworkFilter.propTypes = {
    setNetworkFilter: PropTypes.func.isRequired,
  networkFilter: PropTypes.string.isRequired,
};

export default NetworkFilter;
