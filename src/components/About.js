import React, { Component } from 'react';
import {
  Box,
  Heading,
  Paragraph,
} from 'grommet';

class Resources extends Component {
  render() {
    return (
      <Box direction='row'flex overflow={{ horizontal: 'hidden' }} align='top' justify='center' wrap="true" margin={{left:"medium", right:"medium"}}  style={{zoom:"0.92"}}>
      <div style={{minWidth:"50%"}}>
        <Paragraph style={{minWidth:"100%"}}>
        <Heading level="2" style={{paddingTop:"15px"}}>
          Our Goal
        </Heading>
          Our goal is simple: to aggregate any and every project building zkRollups, building on zkRollups, and building for zkRollups. <br/><br/> 
          By making these projects easy to find via an intuitive directory, we will promote adoption of this world-changing tech.
        <Heading level="2" style={{paddingTop:"15px"}}>
          About Us
        </Heading>

          <a href="https://twitter.com/jaazinn" target='_blank'>Jason Garland</a> and <a href="https://twitter.com/joelkite" target='_blank'>Joel Kite</a> are Co-Founders of <a href="https://numio.one/" target='_blank'>Numio</a> and have been building on zkRollup technology since 2020. 
                  
        </Paragraph>
      </div>
      </Box>
    )
  }
  
}
export default Resources;
