import React, { Component } from 'react';
import {
  Box,
} from 'grommet';
import { TwitterTimelineEmbed } from 'react-twitter-embed';


class Resources extends Component {
  render() {
    return (
      <Box direction='row'flex overflow={{ horizontal: 'hidden' }} align='top' justify='center' wrap="true" margin={{left:"medium", right:"medium"}}  style={{zoom:"0.92"}}>
      <div style={{minWidth:"25%"}}>
        <TwitterTimelineEmbed
  sourceType="list"
    ownerScreenName="joelkite"
    slug="1470758011866128394"
  options={{height: 1000}} 
/>
      </div>
      </Box>
    )
  }
}
export default Resources;
