import React from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Button,
  Heading,
} from 'grommet';

const Menu = ({ setFilter, filter }) => {
  return (
    <React.Fragment>
      <Heading level="2" margin="medium" alignSelf="center">zkRollup Ecosystem</Heading>
      <Box margin={'auto'} direction="row" justify="between" gap="small">
        <Button label="All" onClick={() => setFilter('')} active={filter === ''} />
        <Button label="Rollups" onClick={() => setFilter('rollups')} active={filter === 'rollups'} />
        <Button label="Wallets" onClick={() => setFilter('wallets')} active={filter === 'wallets'} />
        <Button label="Infra" onClick={() => setFilter('infra')} active={filter === 'infra'} />
        <Button label="dApps" onClick={() => setFilter('dApps')} active={filter === 'dApps'} />
        <Button label="NFTs" onClick={() => setFilter('nfts')} active={filter === 'nfts'} />
        <Button label="Misc" onClick={() => setFilter('misc')} active={filter === 'misc'} />
      </Box>
    </React.Fragment>
  )
};

Menu.propTypes = {
  setFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

export default Menu;
