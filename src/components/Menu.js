import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { 
    Button,
} from 'grommet';
import { useLocation } from 'react-router-dom';


const Menu = ({ align, center, justify, name, pad, path, children }) => {
  const location = useLocation();
  return (
  <div align="center">
    <Link to="/all" style={{ textDecoration: 'none' }}>
      <Button primary label="All" color={location.pathname === "/all" ? "#30DE88" : "null"} 
        margin={{left:"xsmall", right:"xsmall", bottom:"small"}} 
        style={{fontSize:"110%", fontWeight: location.pathname === "/all" ? "bold" : "normal" }} /> 
    </Link>
    <Link to="/rollups" style={{ textDecoration: 'none' }}>
      <Button primary label="Rollups" color={location.pathname === "/rollups" ? "#30DE88" : "null"} 
        margin={{left:"xsmall", right:"xsmall", bottom:"small"}} 
        style={{fontSize:"110%", fontWeight: location.pathname === "/rollups" ? "bold" : "normal" }} /> 
    </Link>
    <Link to="/wallets" style={{ textDecoration: 'none' }}>
      <Button primary label="Wallets" color={location.pathname === "/wallets" ? "#30DE88" : "null"} 
        margin={{left:"xsmall", right:"xsmall", bottom:"small"}} 
        style={{fontSize:"110%", fontWeight: location.pathname === "/wallets" ? "bold" : "normal" }} /> 
    </Link>
    <Link to="/infra" style={{ textDecoration: 'none' }}>
      <Button primary label="Infra" color={location.pathname === "/infra" ? "#30DE88" : "null"} 
        margin={{left:"xsmall", right:"xsmall", bottom:"small"}} 
        style={{fontSize:"110%", fontWeight: location.pathname === "/infra" ? "bold" : "normal" }} /> 
    </Link>
    <Link to="/dapps" style={{ textDecoration: 'none' }}>
      <Button primary label="dApps" color={location.pathname === "/dapps" ? "#30DE88" : "null"} 
        margin={{left:"xsmall", right:"xsmall", bottom:"small"}} 
        style={{fontSize:"110%", fontWeight: location.pathname === "/dapps" ? "bold" : "normal" }} /> 
    </Link>
    <Link to="/nfts" style={{ textDecoration: 'none' }}>
      <Button primary label="NFTs" color={location.pathname === "/nfts" ? "#30DE88" : "null"} 
        margin={{left:"xsmall", right:"xsmall", bottom:"small"}} 
        style={{fontSize:"110%", fontWeight: location.pathname === "/nfts" ? "bold" : "normal" }} /> 
    </Link>
  </div>
)};

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