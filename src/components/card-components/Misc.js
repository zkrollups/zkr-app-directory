import React from 'react';
import PropTypes from 'prop-types';
import { 
    Heading,
    Button,
    Box,
    Card, 
    CardHeader, 
    CardBody, 
    CardFooter, 
    Text,
    Paragraph,
} from 'grommet';
import { Twitter, Language, Github } from 'grommet-icons';
import ReactTooltip from 'react-tooltip';

var arr = [
    {
    "name":"Physics puzzle on StarkNet",
    "category":"Misc",
    "description":"A physics puzzle on StarkNet by guiltygyoza.",
    "imageLink":"url('project-logos/github.jpg')",
    "tooltip":"StarkNet",
    "GithubLink":"https://github.com/guiltygyoza/physics-puzzle-starknet",
    "status":"Development",
    "statusColor":"##",
    }, 
    
    {
    "name":"Qasr",
    "category":"Misc",
    "description":"Qasr is a simple NFT bridge for Starknet by mortimr.",
    "imageLink":"url('project-logos/github.jpg')",
    "tooltip":"StarkNet",
    "GithubLink":"https://github.com/mortimr/qasr",
    "status":"Development",
    "statusColor":"##",
    },
     
    {
    "name":"Starknet DAI Bridge",
    "category":"Misc",
    "description":"StarkNet interpretation of DAI token and basic DAI bridge.",
    "imageLink":"url('project-logos/github.jpg')",
    "tooltip":"StarkNet",
    "GithubLink":"https://github.com/makerdao/starknet-dai-bridge",
    "status":"Development",
    "statusColor":"##",
    }, 
    
    {
    "name":"rk4-starknet",
    "category":"Misc",
    "description":"Running Runge-Kutta 4th Order Method on StarkNet - a precurosr to on-chain physics engine.",
    "imageLink":"url('project-logos/github.jpg')",
    "tooltip":"StarkNet",
    "GithubLink":"https://github.com/guiltygyoza/rk4-starknet",
    "status":"Development",
    "statusColor":"##",
    },
    
    {
    "name":"StarDrop - anonymous rewards on StarkNet",
    "category":"Misc",
    "description":"An experimental project to distribute rewards in a privacy-preserving manner running on StarkNet.",
    "imageLink":"url('project-logos/github.jpg')",
    "tooltip":"StarkNet",
    "GithubLink":"https://github.com/kobigurk/stardrop",
    "status":"Development",
    "statusColor":"##",
    },
    
    {
    "name":"tictactoe-on-starknet",
    "category":"Misc",
    "description":"RL-driven agent playing tic-tac-toe on starknet against challengers.",
    "imageLink":"url('project-logos/github.jpg')",
    "tooltip":"StarkNet",
    "GithubLink":"https://github.com/guiltygyoza/tictactoe-on-starknet",
    "status":"Development",
    "statusColor":"##",
    },
    
    {
    "name":"Basic Sample Hardhat Project",
    "category":"Misc",
    "description":"This project demonstrates a basic Hardhat project, but with Starknet plugin.",
    "imageLink":"url('project-logos/github.jpg')",
    "tooltip":"StarkNet",
    "GithubLink":"https://github.com/Shard-Labs/starknet-hardhat-example",
    "status":"Development",
    "statusColor":"##",
    },
    
        {
    "name":"Starkops",
    "category":"Misc",
    "description":" StarkNet Toolchain CLI written in TypeScript by seanjameshan.",
    "imageLink":"url('project-logos/github.jpg')",
    "tooltip":"StarkNet",
    "GithubLink":"https://github.com/seanjameshan/starkops",
    "status":"Development",
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
                <Button icon={<Github color="black" />} hoverIndicator href={item.GithubLink} target="_blank"/>
            </div>
        </CardFooter>
    </Card>
    </React.Fragment>
);

const Misc = ({ align, center, justify, name, pad, path, children }) => (
    <React.Fragment>
    {renderedOutput}
    </React.Fragment>
);

Misc.propTypes = {
    align: PropTypes.string,
    details: PropTypes.string,
    label: PropTypes.string.isRequired,
    level: PropTypes.number,
    size: PropTypes.oneOf(['xlarge', 'large']),
    summary: PropTypes.node,
  };
  
  Misc.defaultProps = {
    align: undefined,
    details: undefined,
    level: 1,
    size: 'large',
    summary: undefined,
  };

export default Misc;
