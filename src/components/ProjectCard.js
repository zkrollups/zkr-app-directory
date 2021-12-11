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
    Avatar,
} from 'grommet';
import { Twitter, Language } from 'grommet-icons';
import ReactTooltip from 'react-tooltip';
import { NETWORKS } from '../helpers';

const ProjectCard = ({ item }) => (
    <React.Fragment>
        <Card height={{ min: "small", max: "medium" }} width={{ min: "small", max: "medium" }} background="light-1" margin="medium">
            <CardHeader pad="large" background={item.imageLink}></CardHeader>
            <CardBody pad="medium" align="center">
                <Heading margin="none" size="small">{item.name}</Heading>
                <Text margin="small" size="medium">{item.category}</Text>
                <Paragraph margin="small" size="small">{item.description}</Paragraph>
            </CardBody>
            <CardFooter pad={{ horizontal: "small" }} background="light-2">
                <div style={{ zoom: "0.85" }}>
                    <Box direction="row" align="center" alignContent="center" justify="center">
                        <Button primary label={item.status} color={item.statusColor} data-tip data-for={item.name} />
                        <ReactTooltip id={item.name} place="right" type="dark" effect="solid">
                            <Text>
                                {item.tooltip}
                            </Text>
                        </ReactTooltip>
                        {item.networks && item.networks.length ? (
                            <Box margin={{left: '20px'}} direction="row" gap={'small'}>
                                {item.networks.map((network, idx) => (
                                    <Avatar src={NETWORKS[network]} size={'30px'} key={idx} />
                                ))}
                            </Box>
                        ) : null}
                    </Box>
                </div>
                <div>
                    <Button icon={<Twitter color="black" />} hoverIndicator href={item.twitterLink} target="_blank" />
                    <Button icon={<Language color="black" />} hoverIndicator href={item.websiteLink} target="_blank" />
                </div>
            </CardFooter>
        </Card>
    </React.Fragment>
);

ProjectCard.propTypes = {
    item: PropTypes.shape({
        name: PropTypes.string,
        imageLink: PropTypes.string,
        networks: PropTypes.array,
        category: PropTypes.string,
        description: PropTypes.string,
        statusColor: PropTypes.string,
        tooltip: PropTypes.string,
        twitterLink: PropTypes.string,
        websiteLink: PropTypes.string,
    }).isRequired,
};

export default ProjectCard;
