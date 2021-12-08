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
        <Heading level="2" style={{paddingTop:"15px"}}>
          zkRollup Resources
        </Heading>
        <Paragraph style={{minWidth:"100%"}}>
          I'm a big paragraph, look at me. I'm a big paragraph, look at me.I'm a big paragraph, look at me.I'm a big paragraph, look at me.
          I'm a big paragraph, look <Link to="/">at me.</Link> <br/><br/>
          I'm a big paragraph, look at me.
          I'm a big paragraph, look at me.
        </Paragraph>
      </div>
      </Box>
    )
  }
}
export default Resources;