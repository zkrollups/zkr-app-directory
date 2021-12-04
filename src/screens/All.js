import React from 'react';
import PropTypes from 'prop-types';
import Rollups from '../components/card-components/Rollups';
import Wallets from '../components/card-components/Wallets';
import Infra from '../components/card-components/Infra';
import Dapps from '../components/card-components/Dapps';
import NFTs from '../components/card-components/NFTs';

const All = ({ align, center, justify, name, pad, path, children }) => (
    <React.Fragment>
        <Rollups/>
        <Wallets/>
        <Infra/>
        <Dapps/>
        <NFTs/>
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