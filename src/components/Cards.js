import React from 'react';
import PropTypes from 'prop-types';
import Infra from './card-components/Infra';
import Wallets from './card-components/Wallets';
import Rollups from './card-components/Rollups';
import NFTs from './card-components/NFTs';

const Cards = ({ align, center, justify, name, pad, path, children }) => (
    <React.Fragment>
        <Rollups/>
        <Infra/>
        <Wallets/>
    </React.Fragment>
);

Cards.propTypes = {
    align: PropTypes.string,
    details: PropTypes.string,
    label: PropTypes.string.isRequired,
    level: PropTypes.number,
    size: PropTypes.oneOf(['xlarge', 'large']),
    summary: PropTypes.node,
  };
  
  Cards.defaultProps = {
    align: undefined,
    details: undefined,
    level: 1,
    size: 'large',
    summary: undefined,
  };

export default Cards;
