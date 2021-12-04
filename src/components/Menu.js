import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { 
    Button,
} from 'grommet';

const Menu = ({ align, center, justify, name, pad, path, children }) => (
  <div align="center">
    <Link to="/all" style={{ textDecoration: 'none' }}>
      <Button primary label="All" color="#30DE88" margin={{left:"xsmall", right:"xsmall", bottom:"small"}} style={{fontSize:"110%"}}/> </Link>
    <Link to="/rollups" style={{ textDecoration: 'none' }}>
      <Button primary label="Rollups" color="#30DE88" margin={{left:"xsmall", right:"xsmall", bottom:"small"}} style={{fontSize:"110%"}}/> </Link>
    <Link to="/wallets" style={{ textDecoration: 'none' }}>
      <Button primary label="Wallets" color="#30DE88" margin={{left:"xsmall", right:"xsmall", bottom:"small"}} style={{fontSize:"110%"}}/> </Link>
    <Link to="/infra" style={{ textDecoration: 'none' }}>
      <Button primary label="Infra" color="#30DE88" margin={{left:"xsmall", right:"xsmall", bottom:"small"}} style={{fontSize:"110%"}}/> </Link>
    <Link to="/dapps" style={{ textDecoration: 'none' }}>
      <Button primary label="dApps" color="#30DE88" margin={{left:"xsmall", right:"xsmall", bottom:"small"}} style={{fontSize:"110%"}}/> </Link>
    <Link to="/nfts" style={{ textDecoration: 'none' }}>
      <Button primary label="NFTs" color="#30DE88" margin={{left:"xsmall", right:"xsmall", bottom:"small"}} style={{fontSize:"110%"}}/> </Link>
  </div>
);

Menu.propTypes = {
    align: PropTypes.string,
    details: PropTypes.string,
    label: PropTypes.string.isRequired,
    level: PropTypes.number,
    size: PropTypes.oneOf(['xlarge', 'large']),
    summary: PropTypes.node,
  };
  
 Menu.defaultProps = {
    align: undefined,
    details: undefined,
    level: 1,
    size: 'large',
    summary: undefined,
  };

export default Menu;