import React, { Component } from 'react';
import {
  Box,
} from 'grommet';
import { TwitterTimelineEmbed } from 'react-twitter-embed';


class Resources extends Component {
  render() {
    return (
      <Box background='white' direction='row'flex overflow={{ horizontal: 'hidden' }} align='top' justify='center' wrap="true" margin={{left:"none", right:"none"}}  style={{zoom:"0.92"}}>
      <div style={{minWidth:"25%", paddingTop:"30px"}}>
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
