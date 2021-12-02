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
import { Favorite, ShareOption, Twitter, Language } from 'grommet-icons';
import ReactTooltip from 'react-tooltip';

const Rollups = ({ align, center, justify, name, pad, path, children }) => (
    <React.Fragment>
    <Card  height={{min:"small",max:"medium"}} width={{min:"small",max:"medium"}} background="light-1" margin="medium">
        <CardHeader pad="large" background="url('zksync.jpg')"></CardHeader>
        <CardBody pad="medium" align="center">
            <Heading margin="none" size="small">zkSync</Heading>
            <Text margin="small" size="medium">zkRollup</Text>
            <Paragraph margin="small" size="small">zkSync is a user-centric zkRollup platform from Matter Labs. It is a scaling solution for Ethereum, already live on Ethereum mainnet.</Paragraph>
        </CardBody>
        <CardFooter pad={{horizontal: "small"}} background="light-2">
            <div style={{zoom:"0.85"}}>
                <Button primary label="LIVE" color="#30DE88" data-tip data-for="zksync"/>
                <ReactTooltip id="zksync" place="right" type="dark" effect="solid">
                    <Text>
                        zkSync <br/> 
                    </Text>
                </ReactTooltip>
            </div>
            <div>
                <Button icon={<Twitter color="black" />} hoverIndicator href="https://twitter.com/zksync" target="_blank"/>
                <Button icon={<Language color="black" />} hoverIndicator href="https://zksync.io/" target="_blank"/>
            </div>
        </CardFooter>
    </Card>
    <Card  height={{min:"small",max:"medium"}} width={{min:"small",max:"medium"}} background="light-1" margin="medium">
        <CardHeader pad="large" background="url('starkware.jpg')"></CardHeader>
        <CardBody pad="medium" align="center">
            <Heading margin="none" size="small">StarkWare</Heading>
            <Text margin="small" size="medium">zkRollup</Text>
            <Paragraph margin="small" size="small">The StarkWare StarkNet network is a permissionless decentralized ZK-Rollup.</Paragraph>
        </CardBody>
        <CardFooter pad={{horizontal: "small"}} background="light-2">
            <div style={{zoom:"0.85"}}>
                <Button primary label="SOON" color="#F4E532" data-tip data-for="starknet"/>
                <ReactTooltip id="starknet" place="right" type="dark" effect="solid">
                    <Text>
                        StarkNet <br/> 
                    </Text>
                </ReactTooltip>
            </div>
            <div>
                <Button icon={<Twitter color="black" />} hoverIndicator href="https://twitter.com/StarkWareLtd" target="_blank"/>
                <Button icon={<Language color="black" />} hoverIndicator href="https://starkware.co/" target="_blank"/>
            </div>
        </CardFooter>
    </Card>
    <Card  height={{min:"small",max:"medium"}} width={{min:"small",max:"medium"}} background="light-1" margin="medium">
        <CardHeader pad="large" background="url('loopring.jpg')"></CardHeader>
        <CardBody pad="medium" align="center">
            <Heading margin="none" size="small">Loopring</Heading>
            <Text margin="small" size="medium">zkRollup</Text>
            <Paragraph margin="small" size="small">Loopring is a zkRollup layer2. It allows for high-throughput, low-cost trading and payment on Ethereum.</Paragraph>
        </CardBody>
        <CardFooter pad={{horizontal: "small"}} background="light-2">
            <div style={{zoom:"0.85"}}>
                <Button primary label="LIVE" color="#30DE88" data-tip data-for="loopring"/>
                <ReactTooltip id="loopring" place="right" type="dark" effect="solid">
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
        <CardHeader pad="large" background="url('zkswap.jpg')"></CardHeader>
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
              <Card  height={{min:"small",max:"medium"}} width={{min:"small",max:"medium"}} background="light-1" margin="medium">
        <CardHeader pad="large" background="url('hermez.jpg')"></CardHeader>
        <CardBody pad="medium" align="center">
            <Heading margin="none" size="small">Polygon Hermez</Heading>
            <Text margin="small" size="medium">zkRollup</Text>
            <Paragraph margin="small" size="small">Polygon Hermez is an open-source ZK-Rollup optimised for secure, low-cost and usable token transfers on the wings of Ethereum.</Paragraph>
        </CardBody>
        <CardFooter pad={{horizontal: "small"}} background="light-2">
            <div style={{zoom:"0.85"}}>
                <Button primary label="LIVE" color="#30DE88" data-tip data-for="hermez"/>
                <ReactTooltip id="hermez" place="right" type="dark" effect="solid">
                    <Text>
                        Polygon Hermez <br/> 
                    </Text>
                </ReactTooltip>
            </div>
            <div>
                <Button icon={<Twitter color="black" />} hoverIndicator href="https://twitter.com/0xPolygonHermez" target="_blank"/>
                <Button icon={<Language color="black" />} hoverIndicator href="https://hermez.io/" target="_blank"/>
            </div>
        </CardFooter>
        </Card>
        <Card  height={{min:"small",max:"medium"}} width={{min:"small",max:"medium"}} background="light-1" margin="medium">
        <CardHeader pad="large" background="url('aztec.jpg')"></CardHeader>
        <CardBody pad="medium" align="center">
            <Heading margin="none" size="small">Aztec</Heading>
            <Text margin="small" size="medium">zkRollup</Text>
            <Paragraph margin="small" size="small">Aztec is an open source Layer 2 network bringing scalability and privacy too Ethereum. Aztec uses zkSNARK proofs to provide privacy and scaling.</Paragraph>
        </CardBody>
        <CardFooter pad={{horizontal: "small"}} background="light-2">
            <div style={{zoom:"0.85"}}>
                <Button primary label="SOON" color="#F4E532" data-tip data-for="aztec"/>
                <ReactTooltip id="aztec" place="right" type="dark" effect="solid">
                    <Text>
                        Aztec <br/> 
                    </Text>
                </ReactTooltip>
            </div>
            <div>
                <Button icon={<Twitter color="black" />} hoverIndicator href="https://twitter.com/aztecnetwork" target="_blank"/>
                <Button icon={<Language color="black" />} hoverIndicator href="https://aztec.network/" target="_blank"/>
            </div>
        </CardFooter>
        </Card>
<Card  height={{min:"small",max:"medium"}} width={{min:"small",max:"medium"}} background="light-1" margin="medium">
        <CardHeader pad="large" background="url('miden.jpg')"></CardHeader>
        <CardBody pad="medium" align="center">
            <Heading margin="none" size="small">Polygon Miden</Heading>
            <Text margin="small" size="medium">zkRollup</Text>
            <Paragraph margin="small" size="small">Polygon Miden, is an upcoming STARK-based, EVM-compatible rollup.</Paragraph>
        </CardBody>
        <CardFooter pad={{horizontal: "small"}} background="light-2">
            <div style={{zoom:"0.85"}}>
                <Button primary label="SOON" color="#F4E532" data-tip data-for="miden"/>
                <ReactTooltip id="miden" place="right" type="dark" effect="solid">
                    <Text>
                        Polygon Miden <br/> 
                    </Text>
                </ReactTooltip>
            </div>
            <div>
                <Button icon={<Twitter color="black" />} hoverIndicator href="https://twitter.com/0xPolygon" target="_blank"/>
                <Button icon={<Language color="black" />} hoverIndicator href="https://github.com/maticnetwork/miden" target="_blank"/>
            </div>
        </CardFooter>
        </Card>
             <Card  height={{min:"small",max:"medium"}} width={{min:"small",max:"medium"}} background="light-1" margin="medium">
        <CardHeader pad="large" background="url('zktube.jpg')"></CardHeader>
        <CardBody pad="medium" align="center">
            <Heading margin="none" size="small">zkTube</Heading>
            <Text margin="small" size="medium">zkRollup</Text>
            <Paragraph margin="small" size="small">zktube is a protocol with ZK Rollup solutions of zero knowledge proof building for users and developers.</Paragraph>
        </CardBody>
        <CardFooter pad={{horizontal: "small"}} background="light-2">
            <div style={{zoom:"0.85"}}>
                <Button primary label="SOON" color="#F4E532" data-tip data-for="zktube"/>
                <ReactTooltip id="zktube" place="right" type="dark" effect="solid">
                    <Text>
                        zkTube <br/> 
                    </Text>
                </ReactTooltip>
            </div>
            <div>
                <Button icon={<Twitter color="black" />} hoverIndicator href="https://zktube.io/" target="_blank"/>
                <Button icon={<Language color="black" />} hoverIndicator href="https://twitter.com/zktubeofficial/" target="_blank"/>
            </div>
        </CardFooter>
        </Card>
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
