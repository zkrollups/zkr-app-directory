import React from 'react';
import PropTypes from 'prop-types';
import { 
    Heading,
    Box,
    Button,
    Card, 
    CardHeader, 
    CardBody, 
    CardFooter, 
    Text,
    Paragraph,
} from 'grommet';
import { Twitter, Language } from 'grommet-icons';
import ReactTooltip from 'react-tooltip';

var arr = [
    {
    "name":"zkSync",
    "category":"zkRollup",
    "description":"zkSync is a user-centric zkRollup platform from Matter Labs. It is a scaling solution for Ethereum, already live on Ethereum mainnet.",
    "imageLink":"url('project-logos/zksync.jpg')",
    "tooltip":"zkSync",
    "twitterLink":"https://twitter.com/zksync",
    "websiteLink":"https://zksync.io/",
    "status":"LIVE",
    "statusColor":"#30DE88",
    }, 

    {
    "name":"StarkWare",
    "category":"zkRollup",
    "description":"The StarkWare StarkNet network is a permissionless decentralized ZK-Rollup.",
    "imageLink":"url('project-logos/starkware.jpg')",
    "tooltip":"StarkNet",
    "twitterLink":"https://twitter.com/StarkWareLtd",
    "websiteLink":"https://starkware.co/",
    "status":"SOON",
    "statusColor":"#F4E532",
    }, 

    {
    "name":"Loopring",
    "category":"zkRollup",
    "description":"Loopring is a zkRollup layer2. It allows for high-throughput, low-cost trading and payment on Ethereum.",
    "imageLink":"url('project-logos/loopring.jpg')",
    "tooltip":"Loopring",
    "twitterLink":"https://twitter.com/loopringorg",
    "websiteLink":"http://loopring.io/",
    "status":"LIVE",
    "statusColor":"#30DE88",
    }, 

    {
    "name":"ZKSwap",
    "category":"zkRollup",
    "description":"ZK-Rollups based Layer-2 DEX with the AMM model.",
    "imageLink":"url('project-logos/zkswap.jpg')",
    "tooltip":"ZKSwap",
    "twitterLink":"https://twitter.com/ZKSwapOfficial",
    "websiteLink":"https://zks.org",
    "status":"LIVE",
    "statusColor":"#30DE88",
    }, 

    {
    "name":"Polygon Hermez",
    "category":"zkRollup",
    "description":"Polygon Hermez is an open-source ZK-Rollup optimised for secure, low-cost and usable token transfers on the wings of Ethereum.",
    "imageLink":"url('project-logos/hermez.jpg')",
    "tooltip":"Polygon Hermez",
    "twitterLink":"https://twitter.com/0xPolygonHermez",
    "websiteLink":"https://hermez.io/",
    "status":"LIVE",
    "statusColor":"#30DE88",
    }, 

    {
    "name":"Aztec",
    "category":"zkRollup",
    "description":"Aztec is an open source Layer 2 network bringing scalability and privacy too Ethereum. Aztec uses zkSNARK proofs to provide privacy and scaling.",
    "imageLink":"url('project-logos/aztec.jpg')",
    "tooltip":"Aztec",
    "twitterLink":"https://twitter.com/aztecnetwork",
    "websiteLink":"https://aztec.network/",
    "status":"LIVE",
    "statusColor":"#30DE88",
    }, 

    {
    "name":"Polygon Miden",
    "category":"zkRollup",
    "description":"Polygon Miden, is an upcoming STARK-based, EVM-compatible rollup.",
    "imageLink":"url('project-logos/miden.jpg')",
    "tooltip":"Polygon Miden",
    "twitterLink":"https://twitter.com/0xPolygon",
    "websiteLink":"https://github.com/maticnetwork/miden",
    "status":"SOON",
    "statusColor":"#F4E532",
    }, 

    {
    "name":"zkTube",
    "category":"zkRollup",
    "description":"zktube is a protocol with ZK Rollup solutions of zero knowledge proof building for users and developers.",
    "imageLink":"url('project-logos/zktube.jpg')",
    "tooltip":"zkTube",
    "twitterLink":"https://twitter.com/zktubeofficial/",
    "websiteLink":"https://zktube.io/",
    "status":"SOON",
    "statusColor":"#F4E532",
    }, 

    {
    "name":"Scroll",
    "category":"zkRollup",
    "description":"Scroll Tech aims to build an EVM-compatible zk-Rollup with a strong proving network.",
    "imageLink":"url('project-logos/scroll.png')",
    "tooltip":"Scroll",
    "twitterLink":"https://twitter.com/Scroll_ZKP",
    "websiteLink":"https://scroll.tech/",
    "status":"SOON",
    "statusColor":"#F4E532",
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

const Rollups = ({ align, center, justify, name, pad, path, children }) => (
    <React.Fragment>
    {renderedOutput}
    </React.Fragment>
);

Rollups.propTypes = {
    align: PropTypes.string,
    details: PropTypes.string,
    label: PropTypes.string.isRequired,
    level: PropTypes.number,
    size: PropTypes.oneOf(['xlarge', 'large']),
    summary: PropTypes.node,
  };
  
  Rollups.defaultProps = {
    align: undefined,
    details: undefined,
    level: 1,
    size: 'large',
    summary: undefined,
  };

export default Rollups;