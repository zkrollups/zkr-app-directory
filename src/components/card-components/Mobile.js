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
import { Twitter, Language, GooglePlay, Apple } from 'grommet-icons';
import ReactTooltip from 'react-tooltip';

var arr = [
    {
    "name":"Numio",
    "category":"MOBILE",
    "description":"Numio is a non-custodial Ethereum L2 wallet that lets you send, store, buy & swap tokens, interact with dApps and more.",
    "imageLink":"url('project-logos/numio.jpg')",
    "tooltip":"zkSync",
    "twitterLink":"https://twitter.com/getnumio",
    "websiteLink":"https://numio.one",
    "googlePlay":"https://play.google.com/store/apps/details?id=com.numio.pay",
    "appleStore":"https://apps.apple.com/us/app/numio/id1538072952",
    "status":"LIVE",
    "statusColor":"#30DE88",
    }, 

    {
    "name":"Argent",
    "category":"MOBILE",
    "description":"Argent is the most simple and secure smart wallet for crypto. Store and send; earn interest and invest.",
    "imageLink":"url('project-logos/argent.jpg')",
    "tooltip":"zkSync, StarkWare",
    "twitterLink":"https://twitter.com/argentHQ",
    "websiteLink":"https://www.argent.xyz/",
    "status":"BETA",
    "statusColor":"#F4E532",
    }, 

    {
    "name":"Loopring",
    "category":"MOBILE",
    "description":"Loopring Wallet integrates Loopring's zkRollup, a layer-2 scaling protocol to increase speeds and lower fees.",
    "imageLink":"url('project-logos/loopring.jpg')",
    "tooltip":"Loopring",
    "twitterLink":"https://twitter.com/loopringorg",
    "websiteLink":"http://loopring.io/",
    "status":"LIVE",
    "statusColor":"#30DE88",
    }, 

    {
    "name":"imToken",
    "category":"MOBILE",
    "description":"imToken is an easy and secure digital wallet trusted by millions.",
    "imageLink":"url('project-logos/imtoken.jpg')",
    "tooltip":"zkSync",
    "twitterLink":"https://twitter.com/imTokenOfficial",
    "websiteLink":"https://token.im/",
    "status":"LIVE",
    "statusColor":"#30DE88",
    }, 

    {
    "name":"ZKSwap",
    "category":"MOBILE",
    "description":"ZK-Rollups based Layer-2 DEX with the AMM model.",
    "imageLink":"url('project-logos/zkswap.jpg')",
    "tooltip":"ZKSwap",
    "twitterLink":"https://twitter.com/ZKSwapOfficial",
    "websiteLink":"https://zks.org",
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
                {item.googlePlay ? 
                    <Button icon={<GooglePlay color="black" />} hoverIndicator href={item.googlePlay} target="_blank"/>
                    : null}
                {item.appleStore ? 
                    <Button icon={<Apple color />} hoverIndicator href={item.appleStore} target="_blank"/>
                    : null}
                <Button icon={<Twitter color="black" />} hoverIndicator href={item.twitterLink} target="_blank"/>
                <Button icon={<Language color="black" />} hoverIndicator href={item.websiteLink} target="_blank"/>
            </div>
        </CardFooter>
    </Card>
    </React.Fragment>
);

const Wallets = ({ align, center, justify, name, pad, path, children }) => (
    <React.Fragment>
    {renderedOutput}
    </React.Fragment>
);

Wallets.propTypes = {
    align: PropTypes.string,
    details: PropTypes.string,
    label: PropTypes.string.isRequired,
    level: PropTypes.number,
    size: PropTypes.oneOf(['xlarge', 'large']),
    summary: PropTypes.node,
  };
  
  Wallets.defaultProps = {
    align: undefined,
    details: undefined,
    level: 1,
    size: 'large',
    summary: undefined,
  };

export default Wallets;
