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
import { projects } from '../../data/data';

var renderedOutput = projects.misc.map(item => 
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
