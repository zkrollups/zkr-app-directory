import React from 'react';
import PropTypes from 'prop-types';
import { 
    Button,
    Text,
    Footer,
} from 'grommet';
import { Reddit } from 'grommet-icons';

const PageFooter = ({ align, center, justify, name, pad, path, children }) => (
  <Footer background="white" pad="xsmall" border={{ color: '#d3d3d3', size: 'xsmall' }}>
    <Text pad={{left:"medium"}} size="medium" style={{zoom:"90%", marginLeft:"15px"}}>
      Made w/&hearts; by <a href='https://twitter.com/joelkite' target="_blank" style={{ color: 'black' }}>Joel</a> &#38; <a href='https://twitter.com/jaazinn' target="_blank" style={{ color: 'black' }}>Jason</a>
    </Text>
    {/* <Anchor label="About" /> */}
    <div >
      <Button icon={<Reddit color="#ff4500" />} hoverIndicator href="https://www.reddit.com/r/zkRollups/" target="_blank"/>
    </div>
    <div style={{marginRight:"10px"}}>
      <a href="https://github.com/ethereum/ethereum-org-website/issues/new/choose" target="_blank" style={{color:"black", fontSize:"medium", marginRight:"10px"}}>Add Project</a>
      <a href="https://twitter.com/joelkite" target="_blank" style={{color:"black", fontSize:"medium"}}>Get in Touch</a>
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