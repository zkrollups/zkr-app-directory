import React, { Component } from 'react';
import {
  Box,
  Heading,
} from 'grommet';

class Resources extends Component {
  render() {
    return (
      <Box direction='row' flex overflow={{ horizontal: 'hidden' }} align='top' justify='center' wrap="true" margin={{left:"xlarge", right:"xlarge"}}  style={{zoom:"0.92"}}>
      <div>
        <Heading level="2" style={{paddingTop:"15px"}}>
          zkRollup Resources
        </Heading>
      </div>
      </Box>
    )
  }
}
export default Resources;