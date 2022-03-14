import React from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Button,
} from 'grommet';

const Menu = ({ setFilter, filter }) => {
  return (
    <React.Fragment>
      <Box margin={'auto'} direction="row" justify="between" gap="small" style={{    overflowX: "auto", whiteSpace: "nowrap"}}>
        <Button label="All" onClick={() => setFilter('')} active={filter === ''} size='small' style={{borderRadius:"0.8em"}}/>
        <Button label="Rollups" onClick={() => setFilter('rollups')} active={filter === 'rollups'} size='small'  style={{borderRadius:"0.8em"}}/>
        <Button label="Wallets" onClick={() => setFilter('wallets')} active={filter === 'wallets'} size='small'  style={{borderRadius:"0.8em"}}/>
        <Button label="Infra" onClick={() => setFilter('infra')} active={filter === 'infra'} size='small'  style={{borderRadius:"0.8em"}}/>
        <Button label="dApps" onClick={() => setFilter('dApps')} active={filter === 'dApps'} size='small'  style={{borderRadius:"0.8em"}}/>
        <Button label="NFTs" onClick={() => setFilter('nfts')} active={filter === 'nfts'} size='small'  style={{borderRadius:"0.8em"}}/>
        <Button label="Games" onClick={() => setFilter('games')} active={filter === 'games'} size='small'  style={{borderRadius:"0.8em"}}/>
        <Button label="Social" onClick={() => setFilter('social')} active={filter === 'social'} size='small'  style={{borderRadius:"0.8em"}}/>
        <Button label="DAOs" onClick={() => setFilter('daos')} active={filter === 'daos'} size='small'  style={{borderRadius:"0.8em"}}/>
        <Button label="Misc" onClick={() => setFilter('misc')} active={filter === 'misc'} size='small'  style={{borderRadius:"0.8em"}}/>

      </Box>
    </React.Fragment>
  )
};

Menu.propTypes = {
  setFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

export default Menu;
