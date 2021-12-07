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
    "name":"zkSync",
    "category":"Wallet",
    "description":"The native web wallet for the zkRollup network from zkSync.",
    "imageLink":"url('project-logos/zksync.jpg')",
    "tooltip":"zkSync",
    "twitterLink":"https://twitter.com/zksync",
    "websiteLink":"https://wallet.zksync.io/",
    "status":"LIVE",
    "statusColor":"#30DE88",
    }, 
    
    {
    "name":"Loopring",
    "category":"Wallet",
    "description":"The native web wallet for the zkRollup network from Loopring.",
    "imageLink":"url('project-logos/loopring.jpg')",
    "tooltip":"Loopring",
    "twitterLink":"https://twitter.com/loopringorg",
    "websiteLink":"https://loopring.io/#/layer2",
    "status":"LIVE",
    "statusColor":"#30DE88",
    }, 

    {
    "name":"ZKSwap",
    "category":"Wallet",
    "description":"The native web wallet for the zkRollup network from ZKSwap.",
    "imageLink":"url('project-logos/zkswap.jpg')",
    "tooltip":"ZKSwap",
    "twitterLink":"https://twitter.com/ZKSwapOfficial",
    "websiteLink":"https://zks.app/en/wallet",
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
