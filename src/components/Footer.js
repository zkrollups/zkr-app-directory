import React from 'react';
import { 
    Button,
    Text,
    Footer,
} from 'grommet';
import { Github, Twitter, Reddit } from 'grommet-icons';

const PageFooter = () => (
  <Footer background="white" pad="xsmall" border={{ color: '#d3d3d3', size: 'xsmall' }}>
    <Text pad={{left:"medium"}} size="medium" style={{zoom:"90%", marginLeft:"15px"}}>
      Made w/&hearts; by&nbsp; 
        <a href='https://twitter.com/joelkite' target="_blank" rel="noopener noreferrer" style={{ color: 'black' }}>Joel</a>
        &nbsp;&#38;&nbsp; 
        <a href='https://twitter.com/jaazinn' target="_blank" rel="noopener noreferrer" style={{ color: 'black' }}>Jason</a>
    </Text>
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

export default PageFooter;
