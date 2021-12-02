import React from 'react';
import PropTypes from 'prop-types';
import Wallets from '../components/card-components/Wallets';

const WalletView = ({ align, center, justify, name, pad, path, children }) => (
    <React.Fragment>
        <Wallets/>
    </React.Fragment>
);

WalletView.propTypes = {
    align: PropTypes.string,
    details: PropTypes.string,
    label: PropTypes.string.isRequired,
    level: PropTypes.number,
    size: PropTypes.oneOf(['xlarge', 'large']),
    summary: PropTypes.node,
  };
  
  WalletView.defaultProps = {
    align: undefined,
    details: undefined,
    level: 1,
    size: 'large',
    summary: undefined,
  };

export default WalletView;