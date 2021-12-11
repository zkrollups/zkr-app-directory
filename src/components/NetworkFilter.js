import React from 'react';
import PropTypes from 'prop-types';
import {
    Avatar,
  Box,
  Button,
  Heading,
} from 'grommet';
import { NETWORKS } from '../helpers';

const NetworkFilter = ({ setNetworkFilter, networkFilter }) => {
  return (
    <React.Fragment>
      <Heading level="4" margin={{top: "small", bottom: "xsmall"}} alignSelf="center">Filter by network</Heading>
      <Box margin={{horizontal: 'auto', bottom: 'medium'}} direction="row" justify="between" gap="small">
        <Button label="All" onClick={() => setNetworkFilter('')} style={{border: networkFilter === '' ? '3px solid blue' : ''}} />
        {Object.keys(NETWORKS).map((network, idx) => (
            <Button onClick={() => setNetworkFilter(network)} key={idx} style={{borderRadius: '100%', border: networkFilter === network ? '3px solid blue' : ''}}>
                <Avatar src={NETWORKS[network]} size="35px" />
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
