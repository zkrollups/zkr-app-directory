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
import { Twitter, Language } from 'grommet-icons';
import ReactTooltip from 'react-tooltip';

const NFT = ({ align, center, justify, name, pad, path, children }) => (
    <React.Fragment>
    <Card  height={{min:"small",max:"medium"}} width={{min:"small",max:"medium"}} background="light-1" margin="medium">
        <CardHeader pad="large" background="url('zkNFT.jpg')"></CardHeader>
        <CardBody pad="medium" align="center">
            <Heading margin="none" size="small">zkNFT</Heading>
            <Text margin="small" size="medium">NFT</Text>
            <Paragraph margin="small" size="small">Mint, explore, and swap NFTs for a fraction of Ethereum mainnet costs. zkSync makes transactions fast, cheap, and secure.</Paragraph>
        </CardBody>
        <CardFooter pad={{horizontal: "small"}} background="light-2">
            <div style={{zoom:"0.85"}}>
                <Button primary label="LIVE" color="#30DE88" data-tip data-for="zknft"/>
                <ReactTooltip id="zknft" place="right" type="dark" effect="solid">
                    <Text>
                        zkSync <br/> 
                    </Text>
                </ReactTooltip>
            </div>
            <div>
                <Button icon={<Twitter color="black" />} hoverIndicator href="https://twitter.com/0xmons" target="_blank"/>
                <Button icon={<Language color="black" />} hoverIndicator href="https://zknft.xyz/" target="_blank"/>
            </div>
        </CardFooter>
    </Card>
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
