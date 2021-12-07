import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { 
    Button,
} from 'grommet';
import { useLocation } from 'react-router-dom';


const Menu = ({ align, center, justify, name, pad, path, children }) => {
  const location = useLocation();
  const customButtonProps = (url) => {
    const color = () => {
      if (location.pathname === url) {
        return "#30DE88"
      } else {
        return null
      }
    }
    const buttonProps =
      {
      margin:{left:"xsmall", right:"xsmall", bottom:"small"},
      primary: true,
      color: {color},
      style: {fontSize: "110%", borderWidth: "thin"},
      }
    return buttonProps
  }

  return (
  <div align="center">
    <Link to="/all" style={{ textDecoration: 'none' }}>
      <Button label="All" {...customButtonProps("/all")} /> 
    </Link>
    <Link to="/rollups" style={{ textDecoration: 'none' }}>
      <Button label="Rollups" {...customButtonProps("/rollups")} /> 
      </Link>
    <Link to="/mobile" style={{ textDecoration: 'none' }}>
      <Button label="Mobile" {...customButtonProps("/mobile")} /> 
    </Link>
    <Link to="/wallets" style={{ textDecoration: 'none' }}>
      <Button label="Web Wallets" {...customButtonProps("/wallets")} /> 
    </Link>
    <Link to="/infra" style={{ textDecoration: 'none' }}>
      <Button label="Infra" {...customButtonProps("/infra")} /> 
    </Link>
    <Link to="/dapps" style={{ textDecoration: 'none' }}>
      <Button label="dApps" {...customButtonProps("/dapps")} /> 
    </Link>
    <Link to="/nfts" style={{ textDecoration: 'none' }}>
      <Button label="NFTs" {...customButtonProps("/nfts")} /> 
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
