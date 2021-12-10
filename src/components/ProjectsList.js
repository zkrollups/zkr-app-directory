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
import { Twitter, Language } from 'grommet-icons';
import ReactTooltip from 'react-tooltip';
import { projects } from '../data/data';
import ProjectCard from './ProjectCard';

const ProjectsList = ({ filter }) => (
    <React.Fragment>
        <Box className="custom-scrollbar" direction='row' flex overflow={{ horizontal: 'hidden' }} align='top' justify='center' wrap="true" margin={{ left: "xlarge", right: "xlarge" }} style={{ zoom: "0.92" }}>
            {filter ?
                projects[filter].map((project, idx) => <ProjectCard item={project} key={idx} />) :
                Object.keys(projects).map(key => projects[key]).flat().map((project, idx) =>
                    <ProjectCard item={project} key={idx} />
                )}
        </Box>
    </React.Fragment>
);

ProjectsList.propTypes = {
    filter: PropTypes.string.isRequired
};

export default ProjectsList;
