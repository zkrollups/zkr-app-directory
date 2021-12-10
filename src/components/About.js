import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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

          <Link to="https://twitter.com/jaazinn">Jason Garland</Link> and <Link to="https://twitter.com/joelkite">Joel Kite</Link> are Co-Founders of <Link to="https://numio.one/">Numio</Link> and have been building on zkRollup technology since 2020. 
                  
        </Paragraph>
      </div>
      </Box>
    )
  }
  
}
export default Resources;
