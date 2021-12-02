import React from 'react';
import PropTypes from 'prop-types';
import { 
    Heading,
    Button,
    Card, 
    CardHeader, 
    CardBody, 
    CardFooter, 
    Tip,
    Text,
    Paragraph,
    Box,
} from 'grommet';
import { Favorite, ShareOption, Twitter, Language, RadialSelected } from 'grommet-icons';  
import ReactTooltip from 'react-tooltip';
  

const Dapps = ({ align, center, justify, name, pad, path, children }) => (
    <React.Fragment>
    <Card height={{min:"small",max:"medium"}} width={{min:"small",max:"medium"}} background="light-1" margin="medium">
        <CardHeader pad="large" background="url('curvefi.jpg')"></CardHeader>
        <CardBody pad="medium" align="center">
            <Heading margin="none" size="small">Curve</Heading>
            <Text margin="small" size="medium">Dapp</Text>
            <Paragraph margin="small" size="small">Creating deep on-chain liquidity using advanced bonding curves.</Paragraph>
        </CardBody>
        <CardFooter pad={{horizontal: "small"}} background="light-2">
            <div style={{zoom:"0.85"}}>
                <Box direction="row-responsive" align="center" alignContent="center" justify="center">
                    <Button primary label="LIVE" color="#30DE88" data-tip data-for="curve"/>
                    <ReactTooltip id="curve" place="right" type="dark" effect="solid">
                    <Text>
                        zkSync <br/> 
                    </Text>
                </ReactTooltip>
                    {/* <Text style={{marginTop:"5px", marginLeft:"10px"}}><RadialSelected size="medium"/></Text> */}
                </Box>
            </div>
            <div>
                <Button icon={<Twitter color="black" />} hoverIndicator href="https://twitter.com/getnumio" target="_blank"/>
                <Button icon={<Language color="black" />} hoverIndicator href="https://numio.one" target="_blank"/>
            </div>
        </CardFooter>
    </Card>
    <Card  height={{min:"small",max:"medium"}} width={{min:"small",max:"medium"}} background="light-1" margin="medium">
        <CardHeader pad="large" background="url('zigzag.jpg')"></CardHeader>
        <CardBody pad="medium" align="center">
            <Heading margin="none" size="small">ZigZag</Heading>
            <Text margin="small" size="medium">Dapp</Text>
            <Paragraph margin="small" size="small">ZigZag is a native, easy-to-use, reliable, fully secure and low fee Decentralized Exchange built on ZK Rollups.</Paragraph>
        </CardBody>
        <CardFooter pad={{horizontal: "small"}} background="light-2">
            <div style={{zoom:"0.85"}}>
                <Button primary label="LIVE" color="#30DE88" data-tip data-for="zigzag"/>
                <ReactTooltip id="zigzag" place="right" type="dark" effect="solid">
                    <Text>
                        zkSync <br/> 
                    </Text>
                </ReactTooltip>
            </div>            <div>
                <Button icon={<Twitter color="black" />} hoverIndicator href="https://mobile.twitter.com/zigzagexchange" target="_blank"/>
                <Button icon={<Language color="black" />} hoverIndicator href="https://info.zigzag.exchange/" target="_blank"/>
            </div>
        </CardFooter>
    </Card>
    <Card  height={{min:"small",max:"medium"}} width={{min:"small",max:"medium"}} background="light-1" margin="medium">
        <CardHeader pad="large" background="url('paraswap.jpg')"></CardHeader>
        <CardBody pad="medium" align="center">
            <Heading margin="none" size="small">Paraswap</Heading>
            <Text margin="small" size="medium">Dapp</Text>
            <Paragraph margin="small" size="small">ParaSwap aggregates decentralized exchanges and other DeFi services in one comprehensive interface to streamline and facilitate users' interactions with Ethereum's decentralized finance..</Paragraph>
        </CardBody>
        <CardFooter pad={{horizontal: "small"}} background="light-2">
            <div style={{zoom:"0.85"}}>
                <Button primary label="SOON" color="#F4E532" data-tip data-for="paraswap"/>
                <ReactTooltip id="paraswap" place="right" type="dark" effect="solid">
                    <Text>
                        zkSync <br/> 
                    </Text>
                </ReactTooltip>
            </div>            <div>
                <Button icon={<Twitter color="black" />} hoverIndicator href="https://twitter.com/paraswap" target="_blank"/>
                <Button icon={<Language color="black" />} hoverIndicator href="https://paraswap.io" target="_blank"/>
            </div>
        </CardFooter>
    </Card>
    <Card  height={{min:"small",max:"medium"}} width={{min:"small",max:"medium"}} background="light-1" margin="medium">
        <CardHeader pad="large" background="url('gitcoin.jpg')"></CardHeader>
        <CardBody pad="medium" align="center">
            <Heading margin="none" size="small">Gitcoin</Heading>
            <Text margin="small" size="medium">Infra</Text>
            <Paragraph margin="small" size="small">Gitcoin grant contibutors can save on gas fees by paying using the zkSync or Loopring networks.</Paragraph>
        </CardBody>
        <CardFooter pad={{horizontal: "small"}} background="light-2">
            <div style={{zoom:"0.85"}}>
                <Button primary label="LIVE" color="#30DE88" data-tip data-for="gitcoin"/>
                    <ReactTooltip id="gitcoin" place="right" type="dark" effect="solid">
                    <Text>
                        zkSync <br/>
                        Loopring
                    </Text>
                </ReactTooltip>
            </div>            <div>
                <Button icon={<Twitter color="black" />} hoverIndicator href="https://twitter.com/gitcoin" target="_blank"/>
                <Button icon={<Language color="black" />} hoverIndicator href="https://gitcoin.co/" target="_blank"/>
            </div>
        </CardFooter>
    </Card>
    <Card  height={{min:"small",max:"medium"}} width={{min:"small",max:"medium"}} background="light-1" margin="medium">
        <CardHeader pad="large" background="url('mute.jpg')"></CardHeader>
        <CardBody pad="medium" align="center">
            <Heading margin="none" size="small">Mute</Heading>
            <Text margin="small" size="medium">Dapp</Text>
            <Paragraph margin="small" size="small">Mute is an easy-to-use L2 swap platform that runs on Ethereum..</Paragraph>
        </CardBody>
        <CardFooter pad={{horizontal: "small"}} background="light-2">
            <div style={{zoom:"0.85"}}>
                <Button primary label="LIVE" color="#30DE88" data-tip data-for="mute"/>
                    <ReactTooltip id="mute" place="right" type="dark" effect="solid">
                    <Text>
                        zkSync <br/> 
                    </Text>
                </ReactTooltip>
            </div>            <div>
                <Button icon={<Twitter color="black" />} hoverIndicator href="https://twitter.com/mute_io" target="_blank"/>
                <Button icon={<Language color="black" />} hoverIndicator href="https://mute.io/" target="_blank"/>
            </div>
        </CardFooter>
    </Card>
    <Card  height={{min:"small",max:"medium"}} width={{min:"small",max:"medium"}} background="light-1" margin="medium">
        <CardHeader pad="large" background="url('rails.jpg')"></CardHeader>
        <CardBody pad="medium" align="center">
            <Heading margin="none" size="small">Rails</Heading>
            <Text margin="small" size="medium">Dapp</Text>
            <Paragraph margin="small" size="small">Rails is a Layer 2 payment dApp powered by Loopring. </Paragraph>
        </CardBody>
        <CardFooter pad={{horizontal: "small"}} background="light-2">
            <div style={{zoom:"0.85"}}>
                <Button primary label="LIVE" color="#30DE88" data-tip data-for="rails"/>
                    <ReactTooltip id="rails" place="right" type="dark" effect="solid">
                    <Text>
                        Loopring <br/> 
                    </Text>
                </ReactTooltip>
            </div>            <div>
                <Button icon={<Twitter color="black" />} hoverIndicator href="https://twitter.com/Rails_eth" target="_blank"/>
                <Button icon={<Language color="black" />} hoverIndicator href="https://rails.eth.link/" target="_blank"/>
            </div>
        </CardFooter>
    </Card>
     <Card  height={{min:"small",max:"medium"}} width={{min:"small",max:"medium"}} background="light-1" margin="medium">
        <CardHeader pad="large" background="url('pnetwork.jpg')"></CardHeader>
        <CardBody pad="medium" align="center">
            <Heading margin="none" size="small">pNetwork</Heading>
            <Text margin="small" size="medium">Dapp</Text>
            <Paragraph margin="small" size="small">pTokens aims to be a decentralized
open-source system facilitating cross-chain movement of assets.</Paragraph>
        </CardBody>
        <CardFooter pad={{horizontal: "small"}} background="light-2">
            <div style={{zoom:"0.85"}}>
                <Button primary label="LIVE" color="#30DE88" data-tip data-for="pnetwork"/>
                    <ReactTooltip id="pnetwork" place="right" type="dark" effect="solid">
                    <Text>
                        Loopring <br/> 
                    </Text>
                </ReactTooltip>
            </div>            <div>
                <Button icon={<Twitter color="black" />} hoverIndicator href="https://twitter.com/pNetworkDeFi" target="_blank"/>
                <Button icon={<Language color="black" />} hoverIndicator href="https://p.network/" target="_blank"/>
            </div>
        </CardFooter>
    </Card>
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

