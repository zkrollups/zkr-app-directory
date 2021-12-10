import React from 'react';
import PropTypes from 'prop-types';
import { 
    Button,
    Text,
    Footer,
} from 'grommet';
import { Github, Twitter, Reddit } from 'grommet-icons';

const PageFooter = ({ align, center, justify, name, pad, path, children }) => (
  <Footer background="white" pad="xsmall" border={{ color: '#d3d3d3', size: 'xsmall' }}>
    <div>
    <Button icon={<Github color="black" />} hoverIndicator href="https://github.com/jaazinn/zkr-app-directory" target="_blank"/>
      <Button icon={<Reddit color="#FF4500" />} hoverIndicator href="https://www.reddit.com/r/zkRollups/" target="_blank"/>
      <Button icon={<Twitter color="#1DA1F2" />} hoverIndicator href="https://twitter.com/joelkite" target="_blank"/>
    </div>
    <div style={{marginRight:"10px"}}>
      <a href="https://github.com/jaazinn/zkr-app-directory" target="_blank" rel="noopener noreferrer" style={{color:"blue", fontSize:"medium", marginRight:"10px"}}>Add Project</a>
    </div>
  </Footer>
);

PageFooter.propTypes = {
    align: PropTypes.string,
    details: PropTypes.string,
    label: PropTypes.string.isRequired,
    level: PropTypes.number,
    size: PropTypes.oneOf(['xlarge', 'large']),
    summary: PropTypes.node,
  };
  
 PageFooter.defaultProps = {
    align: undefined,
    details: undefined,
    level: 1,
    size: 'large',
    summary: undefined,
  };

export default PageFooter;
