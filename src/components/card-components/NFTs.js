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
import {ReactComponent as Discord} from '../../img/discord.svg'

var arr = [
    {
    "name":"zkNFT",
    "category":"NFT",
    "description":"Mint, explore, and swap NFTs for a fraction of Ethereum mainnet costs. zkSync makes transactions fast, cheap, and secure.",
    "imageLink":"url('project-logos/zkNFT.jpg')",
    "tooltip":"zkSync",
    "twitterLink":"https://twitter.com/0xmons",
    "websiteLink":"https://zknft.xyz/",
    "status":"LIVE",
    "statusColor":"#30DE88",
    }, 

    {
    "name":"zkPunks",
    "category":"NFT",
    "description":"zkPunks are 10,000 OG punk NFTs on zkSync. 10% donated to Ethereum scaling solutions through Gitcoin. Not affiliated with Larva Labs.",
    "imageLink":"url('project-logos/zkpunks.jpg')",
    "tooltip":"zkSync",
    "twitterLink":"https://twitter.com/PunksZk",
    "websiteLink":"#",
    "status":"DEVELOPMENT",
    "statusColor":"##",
    }, 
    
    {
    "name":"Dope Wars",
    "category":"NFT",
    "description":"The pursuit of money, power & respect in these NFT streets. Join the community, we're producing a game on Ethereum+StarkNet, inspired by the TI-83 classic",
    "imageLink":"url('project-logos/dopewars.jpg')",
    "tooltip":"StarkNet",
    "twitterLink":"https://twitter.com/TheDopeWars",
    "websiteLink":"https://dopewars.gg/",
    "discordLink":"https://discord.gg/CeQjYk6FtU",
    "status":"LIVE",
    "statusColor":"#30DE88",
    },
    
   {
    "name":"Briq",
    "category":"NFT",
    "description":"A system where NFTs made out of building blocks, Briqs, that combine to create other NFTs.",
    "imageLink":"url('project-logos/briq.jpg')",
    "tooltip":"StarkNet",
    "twitterLink":"https://twitter.com/briqs_",
    "websiteLink":"https://briq.construction/",
    "status":"DEVELOPMENT",
    "statusColor":"##",
    },
    
    {
    "name":"Influence",
    "category":"NFT",
    "description":"A grand strategy space MMO, backed by NFTs, set in a distant asteroid belt, and built on Ethereum.",
    "imageLink":"url('project-logos/influence.jpg')",
    "tooltip":"StarkNet",
    "twitterLink":"https://twitter.com/influenceth",
    "websiteLink":"https://www.influenceth.io/",
    "status":"DEVELOPMENT",
    "statusColor":"##",
    },
    
     {
    "name":"Loot Realms",
    "category":"NFT",
    "description":"A MMOCCG (Massively Multiplayer on-chain composable game) of economics and Chivalry built on-top of ZK-STARKS. Earn resources, trade and conquer your enemies all on-chain.",
    "imageLink":"url('project-logos/loot.jpg')",
    "tooltip":"StarkNet",
    "twitterLink":"https://twitter.com/LootRealms",
    "websiteLink":"https://bibliothecaforloot.com/",
    "discordLink":"https://discord.gg/YusUjchJeN",
    "status":"DEVELOPMENT",
    "statusColor":"##",
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
                {item.discordLink ? <Button icon={<Discord />} hoverIndicator href={item.discordLink} target="_blank"/> : ''}
                
                <Button icon={<Twitter color="black" />} hoverIndicator href={item.twitterLink} target="_blank"/>
                <Button icon={<Language color="black" />} hoverIndicator href={item.websiteLink} target="_blank"/>
            </div>
        </CardFooter>
    </Card>
    </React.Fragment>
);

const NFT = ({ align, center, justify, name, pad, path, children }) => (
    <React.Fragment>
    {renderedOutput}
    </React.Fragment>
);

NFT.propTypes = {
    align: PropTypes.string,
    details: PropTypes.string,
    label: PropTypes.string.isRequired,
    level: PropTypes.number,
    size: PropTypes.oneOf(['xlarge', 'large']),
    summary: PropTypes.node,
  };
  
  NFT.defaultProps = {
    align: undefined,
    details: undefined,
    level: 1,
    size: 'large',
    summary: undefined,
  };

export default NFT;
