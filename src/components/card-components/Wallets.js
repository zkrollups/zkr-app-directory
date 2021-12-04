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
} from 'grommet';
import { Twitter, Language, GooglePlay, Apple } from 'grommet-icons';
import ReactTooltip from 'react-tooltip';

const Wallets = ({ align, center, justify, name, pad, path, children }) => (
    <React.Fragment>
    <Card  height={{min:"small",max:"medium"}} width={{min:"small",max:"medium"}} background="light-1" margin="medium">
        <CardHeader pad="large" background="url('project-logos/numio.jpg')"></CardHeader>
        <CardBody pad="medium" align="center">
            <Heading margin="none" size="small">Numio</Heading>
            <Text margin="small" size="medium">Wallet</Text>
            <Paragraph margin="small" size="small">Numio is a non-custodial Ethereum L2 wallet that lets you send, store, buy & swap tokens, interact with dApps and more.</Paragraph>
        </CardBody>
        <CardFooter pad={{horizontal: "small"}} background="light-2">
            <div style={{zoom:"0.85"}}>
                <Button primary label="LIVE" color="#30DE88" data-tip data-for="numio"/>
                <ReactTooltip id="numio" place="right" type="dark" effect="solid">
                    <Text>
                        zkSync <br/> 
                    </Text>
                </ReactTooltip>
            </div>
            <div>
            <Button icon={<GooglePlay color="black" />} hoverIndicator href="https://twitter.com/getnumio" target="_blank"/>
                <Button icon={<Apple color />} hoverIndicator href="https://numio.one" target="_blank"/>
                <Button icon={<Twitter color="black" />} hoverIndicator href="https://twitter.com/getnumio" target="_blank"/>
                <Button icon={<Language color="black" />} hoverIndicator href="https://numio.one" target="_blank"/>
            </div>
        </CardFooter>
    </Card>
    <Card  height={{min:"small",max:"medium"}} width={{min:"small",max:"medium"}} background="light-1" margin="medium">
        <CardHeader pad="large" background="url('project-logos/argent.jpg')"></CardHeader>
        <CardBody pad="medium" align="center">
            <Heading margin="none" size="small">Argent</Heading>
            <Text margin="small" size="medium">Wallet</Text>
            <Paragraph margin="small" size="small">Argent is the most simple and secure smart wallet for crypto. Store and send; earn interest and invest.</Paragraph>
        </CardBody>
        <CardFooter pad={{horizontal: "small"}} background="light-2">
            <div style={{zoom:"0.85"}}>
                <Button primary label="SOON" color="#F4E532" data-tip data-for="argent"/>
                <ReactTooltip id="argent" place="right" type="dark" effect="solid">
                    <Text>
                        zkSync <br/> 
                        StarkWare
                    </Text>
                </ReactTooltip>
            </div>
            <div>
                <Button icon={<Twitter color="black" />} hoverIndicator href="https://twitter.com/getnumio" target="_blank"/>
                <Button icon={<Language color="black" />} hoverIndicator href="https://www.argent.xyz/" target="_blank"/>
            </div>
        </CardFooter>
    </Card>
    <Card  height={{min:"small",max:"medium"}} width={{min:"small",max:"medium"}} background="light-1" margin="medium">
        <CardHeader pad="large" background="url('project-logos/loopring.jpg')"></CardHeader>
        <CardBody pad="medium" align="center">
            <Heading margin="none" size="small">Loopring</Heading>
            <Text margin="small" size="medium">zkRollup</Text>
            <Paragraph margin="small" size="small">Loopring is a zkRollup layer2. It allows for high-throughput, low-cost trading and payment on Ethereum.</Paragraph>
        </CardBody>
        <CardFooter pad={{horizontal: "small"}} background="light-2">
            <div style={{zoom:"0.85"}}>
                <Button primary label="LIVE" color="#30DE88" data-tip data-for="loopringapp"/>
                <ReactTooltip id="loopringapp" place="right" type="dark" effect="solid">
                    <Text>
                        Loopring <br/> 
                    </Text>
                </ReactTooltip>
            </div>
            <div>
                <Button icon={<Twitter color="black" />} hoverIndicator href="https://twitter.com/loopringorg" target="_blank"/>
                <Button icon={<Language color="black" />} hoverIndicator href="http://loopring.io/" target="_blank"/>
            </div>
        </CardFooter>
        </Card>
     <Card  height={{min:"small",max:"medium"}} width={{min:"small",max:"medium"}} background="light-1" margin="medium">
        <CardHeader pad="large" background="url('project-logos/imtoken.jpg')"></CardHeader>
        <CardBody pad="medium" align="center">
            <Heading margin="none" size="small">imToken</Heading>
            <Text margin="small" size="medium">Wallet</Text>
            <Paragraph margin="small" size="small">imToken is an easy and secure digital wallet trusted by millions.</Paragraph>
        </CardBody>
        <CardFooter pad={{horizontal: "small"}} background="light-2">
            <div style={{zoom:"0.85"}}>
                <Button primary label="LIVE" color="#30DE88" data-tip data-for="imtoken"/>
                <ReactTooltip id="imtoken" place="right" type="dark" effect="solid">
                    <Text>
                        zkSync <br/> 
                    </Text>
                </ReactTooltip>
            </div>
            <div>
                <Button icon={<Twitter color="black" />} hoverIndicator href="https://twitter.com/imTokenOfficial" target="_blank"/>
                <Button icon={<Language color="black" />} hoverIndicator href="https://token.im/" target="_blank"/>
            </div>
        </CardFooter>
    </Card>
    <Card  height={{min:"small",max:"medium"}} width={{min:"small",max:"medium"}} background="light-1" margin="medium">
        <CardHeader pad="large" background="url('project-logos/zkswap.jpg')"></CardHeader>
        <CardBody pad="medium" align="center">
            <Heading margin="none" size="small">ZKSwap</Heading>
            <Text margin="small" size="medium">zkRollup</Text>
            <Paragraph margin="small" size="small">ZK-Rollups based Layer-2 DEX with the AMM model.</Paragraph>
        </CardBody>
        <CardFooter pad={{horizontal: "small"}} background="light-2">
            <div style={{zoom:"0.85"}}>
                <Button primary label="LIVE" color="#30DE88" data-tip data-for="zkswap"/>
                <ReactTooltip id="zkswap" place="right" type="dark" effect="solid">
                    <Text>
                        ZKSwap <br/> 
                    </Text>
                </ReactTooltip>
            </div>
            <div>
                <Button icon={<Twitter color="black" />} hoverIndicator href="https://twitter.com/ZKSwapOfficial" target="_blank"/>
                <Button icon={<Language color="black" />} hoverIndicator href="https://zks.org" target="_blank"/>
            </div>
        </CardFooter>
        </Card>
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

