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
          Guides
        </Heading>
        <Paragraph style={{minWidth:"100%"}}>
         An Incomplete Guide to Rollups - <Link to="https://vitalik.ca/general/2021/01/05/rollup.html">https://vitalik.ca/general/2021/01/05/rollup.html</Link> <br/><br/>
        ZK-Rollups on EthHub - <Link to="https://docs.ethhub.io/ethereum-roadmap/layer-2-scaling/zk-rollups/">https://docs.ethhub.io/ethereum-roadmap/layer-2-scaling/zk-rollups/</Link> <br/><br/>
 What are zkRollups? - <Link to="https://www.numio.one/what-are-zkrollups/">https://www.numio.one/what-are-zkrollups/</Link> <br/><br/>
 The best comparison on zkRollups today - <Link to="https://newsletter.banklesshq.com/p/the-best-comparison-on-zkrollups">https://newsletter.banklesshq.com/p/the-best-comparison-on-zkrollups</Link> <br/><br/>
 
 <Heading level="2" style={{paddingTop:"15px"}}>
         zkRollup Docs
        </Heading>
        StarkNet and Cairo Documentation - <Link to="https://www.cairo-lang.org/docs/">https://www.cairo-lang.org/docs/</Link> <br/><br/>
         Hermez network docs - <Link to="https://docs.hermez.io/#/">https://docs.hermez.io/#/</Link> <br/><br/>
         Introduction to zkSync for Developers - <Link to="https://zksync.io/dev/">https://zksync.io/dev/</Link> <br/><br/>
          Aztec Developer Docs - <Link to="https://developers.aztec.network/">https://developers.aztec.network/</Link> <br/><br/>
          Loopring Developer Docs - <Link to="https://docs.loopring.io/en/">https://docs.loopring.io/en/</Link> <br/><br/>
          zkTube Docs - <Link to="https://github.com/zkTube-Labs/zkTube-docs/tree/main/docs">https://github.com/zkTube-Labs/zkTube-docs/tree/main/docs</Link> <br/><br/>
          ZKSwap Docs - <Link to="https://en.wiki.zks.org/">https://en.wiki.zks.org/</Link> <br/><br/>
        
 
<Heading level="2" style={{paddingTop:"15px"}}>
         GitHub Resources
        </Heading>
       
        </Paragraph>
      </div>
      </Box>
    )
  }
}
export default Resources;
