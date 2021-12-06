import React from 'react';
import PropTypes from 'prop-types';
import { 
    Heading,
    Button,
    Card, 
    CardHeader, 
    CardBody, 
    CardFooter, 
    Text,
    Paragraph,
    Box,
} from 'grommet';
import { Twitter, Language } from 'grommet-icons';  
import ReactTooltip from 'react-tooltip';
  
var arr = [
    // use #30DE88 for LIVE, #F4E532 for SOON, #F4B832 for TESTNET
    {
    "name":"dydx",
    "category":"Dapp & Rollup",
    "description":"Trade Perpetual Contracts with low fees, deep liquidity, and up to 25× leverage.",
    "imageLink":"url('project-logos/dydx.png')",
    "tooltip":"Starkware (Custom)",
    "twitterLink":"https://twitter.com/dydxprotocol",
    "websiteLink":"https://dydx.exchange/",
    "status":"LIVE",
    "statusColor":"#30DE88",
    },

    {
    "name":"Sorare",
    "category":"Dapp & Rollup",
    "description":"Experience true football connection in The Global Fantasy Football Game! Trade & collect digital cards.",
    "imageLink":"url('project-logos/sorare.png')",
    "tooltip":"Starkware (Custom)",
    "twitterLink":"https://twitter.com/Sorare",
    "websiteLink":"https://sorare.com/",
    "status":"LIVE",
    "statusColor":"#30DE88",
    },

    {
    "name":"Immutable",
    "category":"Dapp & Rollup",
    "description":"Ethereum NFT scaling platform. Zero gas fees, 9K TPS & 100% carbon neutral.",
    "imageLink":"url('project-logos/immutable.png')",
    "tooltip":"Starkware (Custom)",
    "twitterLink":"https://twitter.com/Immutable",
    "websiteLink":"https://www.immutable.com/",
    "status":"LIVE",
    "statusColor":"#30DE88",
    },

    {
    "name":"Curve",
    "category":"Dapp",
    "description":"Creating deep on-chain liquidity using advanced bonding curves.",
    "imageLink":"url('project-logos/curvefi.jpg')",
    "tooltip":"zkSync",
    "twitterLink":"https://twitter.com/CurveFinance",
    "websiteLink":"https://zksync.curve.fi/",
    "status":"TESTNET",
    "statusColor":"#F4B832",
    }, 
    
    {
    "name":"ZigZag",
    "category":"Dapp",
    "description":"ZigZag is a native, easy-to-use, reliable, fully secure and low fee Decentralized Exchange built on ZK Rollups.",
    "imageLink":"url('project-logos/zigzag.jpg')",
    "tooltip":"zkSync, StarkWare",
    "twitterLink":"https://mobile.twitter.com/zigzagexchange",
    "websiteLink":"https://info.zigzag.exchange/",
    "status":"LIVE",
    "statusColor":"#30DE88",
    }, 
        
    {
    "name":"Paraswap",
    "category":"Dapp",
    "description":"ParaSwap aggregates decentralized exchanges and other DeFi services in one comprehensive interface to streamline and facilitate users' interactions with Ethereum's decentralized finance.",
    "imageLink":"url('project-logos/paraswap.jpg')",
    "tooltip":"zkSync",
    "twitterLink":"https://twitter.com/paraswap",
    "websiteLink":"https://paraswap.io",
    "status":"SOON",
    "statusColor":"#F4E532",
    }, 

    {
    "name":"Gitcoin",
    "category":"Dapp",
    "description":"Gitcoin grant contibutors can save on gas fees by paying using the zkSync or Loopring networks.",
    "imageLink":"url('project-logos/gitcoin.jpg')",
    "tooltip":"zkSync, Loopring",
    "twitterLink":"https://twitter.com/gitcoin",
    "websiteLink":"https://gitcoin.co/",
    "status":"LIVE",
    "statusColor":"#30DE88",
    },

    {
    "name":"Mute",
    "category":"Dapp",
    "description":"Mute is an easy-to-use L2 swap platform that runs on Ethereum.",
    "imageLink":"url('project-logos/mute.jpg')",
    "tooltip":"zkSync",
    "twitterLink":"https://twitter.com/mute_io",
    "websiteLink":"https://mute.io/",
    "status":"LIVE",
    "statusColor":"#30DE88",
    },

    {
    "name":"Storj",
    "category":"Dapp",
    "description":"Storj Hosts (Storage Node Operators) can elect to receive their payments via zkSync.",
    "imageLink":"url('project-logos/storj.jpg')",
    "tooltip":"zkSync",
    "twitterLink":"https://twitter.com/storj",
    "websiteLink":"https://www.storj.io/",
    "status":"LIVE",
    "statusColor":"#30DE88",
    },

    {
    "name":"Golem",
    "category":"Dapp",
    "description":"Golem Node Operators can choose to receive their payments via zkSync.",
    "imageLink":"url('project-logos/golem.jpg')",
    "tooltip":"zkSync",
    "twitterLink":"https://twitter.com/golemproject",
    "websiteLink":"https://www.golem.network/",
    "status":"LIVE",
    "statusColor":"#30DE88",
    },

    {
    "name":"Rails",
    "category":"Dapp",
    "description":"Rails is a Layer 2 payment dApp powered by Loopring.",
    "imageLink":"url('project-logos/rails.jpg')",
    "tooltip":"Loopring",
    "twitterLink":"https://twitter.com/Rails_eth",
    "websiteLink":"https://rails.eth.link/",
    "status":"LIVE",
    "statusColor":"#30DE88",
    },

    {
    "name":"pNetwork",
    "category":"Dapp",
    "description":"pTokens aims to be a decentralized open-source system facilitating cross-chain movement of assets.",
    "imageLink":"url('project-logos/pnetwork.jpg')",
    "tooltip":"Loopring",
    "twitterLink":"https://twitter.com/pNetworkDeFi",
    "websiteLink":"https://p.network/",
    "status":"LIVE",
    "statusColor":"#30DE88",
    },
];

var renderedOutput = arr.map(item => 
    <React.Fragment>
    <Card height={{min:"small",max:"medium"}} width={{min:"small",max:"medium"}} background="light-1" margin="medium">
        <CardHeader pad="large" background={item.imageLink}></CardHeader>
        <CardBody pad="medium" align="center">
            <Heading margin="none" size="small">{item.name}</Heading>
            <Text margin="small" size="medium">{item.category}</Text>
            <Paragraph margin="small" size="small">{item.description}</Paragraph>
        </CardBody>
        <CardFooter pad={{horizontal: "small"}} background="light-2">
            <div style={{zoom:"0.85"}}>
                <Box direction="row-responsive" align="center" alignContent="center" justify="center">
                    <Button primary label={item.status} color={item.statusColor} data-tip data-for={item.name}/>
                    <ReactTooltip id={item.name} place="right" type="dark" effect="solid">
                        <Text>
                            {item.tooltip} 
                        </Text>
                    </ReactTooltip>
                </Box>
            </div>
            <div>
                <Button icon={<Twitter color="black" />} hoverIndicator href={item.twitterLink} target="_blank"/>
                <Button icon={<Language color="black" />} hoverIndicator href={item.websiteLink} target="_blank"/>
            </div>
        </CardFooter>
    </Card>
    </React.Fragment>
);

const Dapps = ({ align, center, justify, name, pad, path, children }) => (
    <React.Fragment>
    {renderedOutput}
    </React.Fragment>
);

Dapps.propTypes = {
    align: PropTypes.string,
    details: PropTypes.string,
    label: PropTypes.string.isRequired,
    level: PropTypes.number,
    size: PropTypes.oneOf(['xlarge', 'large']),
    summary: PropTypes.node,
  };
  
  Dapps.defaultProps = {
    align: undefined,
    details: undefined,
    level: 1,
    size: 'large',
    summary: undefined,
  };

export default Dapps;
