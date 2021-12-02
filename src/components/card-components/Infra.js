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

const Infra = ({ align, center, justify, name, pad, path, children }) => (
    <React.Fragment>
    <Card  height={{min:"small",max:"medium"}} width={{min:"small",max:"medium"}} background="light-1" margin="medium">
        <CardHeader pad="large" background="url('storj.jpg')"></CardHeader>
        <CardBody pad="medium" align="center">
            <Heading margin="none" size="small">Storj</Heading>
            <Text margin="small" size="medium">Infra</Text>
            <Paragraph margin="small" size="small">Storj Hosts (Storage Node Operators) can elect to receive their payments via zkSync.</Paragraph>
        </CardBody>
        <CardFooter pad={{horizontal: "small"}} background="light-2">
            <div style={{zoom:"0.85"}}>
                <Button primary label="LIVE" color="#30DE88" data-tip data-for="storj"/>
                    <ReactTooltip id="storj" place="right" type="dark" effect="solid">
                    <Text>
                        zkSync <br/> 
                    </Text>
                </ReactTooltip>
            </div>
            <div>
                <Button icon={<Twitter color="black" />} hoverIndicator href="https://twitter.com/storj" target="_blank"/>
                <Button icon={<Language color="black" />} hoverIndicator href="https://www.storj.io/" target="_blank"/>
            </div>
        </CardFooter>
    </Card>
    <Card  height={{min:"small",max:"medium"}} width={{min:"small",max:"medium"}} background="light-1" margin="medium">
        <CardHeader pad="large" background="url('golem.jpg')"></CardHeader>
        <CardBody pad="medium" align="center">
            <Heading margin="none" size="small">Golem</Heading>
            <Text margin="small" size="medium">Infra</Text>
            <Paragraph margin="small" size="small">Golem Node Operators can choose to receive their payments via zkSync.</Paragraph>
        </CardBody>
        <CardFooter pad={{horizontal: "small"}} background="light-2">
            <div style={{zoom:"0.85"}}>
                <Button primary label="LIVE" color="#30DE88" data-tip data-for="storj"/>
                    <ReactTooltip id="storj" place="right" type="dark" effect="solid">
                    <Text>
                        zkSync <br/> 
                    </Text>
                </ReactTooltip>
            </div>            <div>
                <Button icon={<Twitter color="black" />} hoverIndicator href="https://twitter.com/golemproject" target="_blank"/>
                <Button icon={<Language color="black" />} hoverIndicator href="https://www.golem.network/" target="_blank"/>
            </div>
        </CardFooter>
    </Card>
    <Card  height={{min:"small",max:"medium"}} width={{min:"small",max:"medium"}} background="light-1" margin="medium">
        <CardHeader pad="large" background="url('thegraph.jpg')"></CardHeader>
        <CardBody pad="medium" align="center">
            <Heading margin="none" size="small">The Graph</Heading>
            <Text margin="small" size="medium">Infra</Text>
            <Paragraph margin="small" size="small">The Graph is an indexing protocol for querying networks like Ethereum and IPFS. Anyone can build and publish open APIs, called subgraphs, making data easily accessible.</Paragraph>
        </CardBody>
        <CardFooter pad={{horizontal: "small"}} background="light-2">
            <div style={{zoom:"0.85"}}>
                <Button primary label="SOON" color="#F4E532" data-tip data-for="graph"/>
                    <ReactTooltip id="graph" place="right" type="dark" effect="solid">
                    <Text>
                        zkSync <br/> 
                    </Text>
                </ReactTooltip>
            </div>            <div>
                <Button icon={<Twitter color="black" />} hoverIndicator href="https://twitter.com/graphprotocol" target="_blank"/>
                <Button icon={<Language color="black" />} hoverIndicator href="https://thegraph.com/" target="_blank"/>
            </div>
        </CardFooter>
    </Card>
    </React.Fragment>

);


Infra.propTypes = {
    align: PropTypes.string,
    details: PropTypes.string,
    label: PropTypes.string.isRequired,
    level: PropTypes.number,
    size: PropTypes.oneOf(['xlarge', 'large']),
    summary: PropTypes.node,
  };
  
  Infra.defaultProps = {
    align: undefined,
    details: undefined,
    level: 1,
    size: 'large',
    summary: undefined,
  };

export default Infra;
