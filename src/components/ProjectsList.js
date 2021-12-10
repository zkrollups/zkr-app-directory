import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Box } from 'grommet';
import { projects } from '../data/data';
import ProjectCard from './ProjectCard';

const ProjectsList = ({ filter, search, networkFilter }) => {
    const defaultState = Object.keys(projects).map(key => projects[key]).flat();
    const [results, setResults] = useState(defaultState);

    useEffect(() => {
        if (filter.length) {
            setResults(projects[filter]);
        } else {
            setResults(defaultState);
        }
    }, [filter]);

    return (
        <React.Fragment>
            <Box className="custom-scrollbar" direction='row' flex overflow={{ horizontal: 'hidden' }} align='top' justify='center' wrap="true" margin={{ left: "xlarge", right: "xlarge" }} style={{ zoom: "0.92" }}>
                {results
                    .filter(project => project.name.toLowerCase().includes(search.toLowerCase()))
                    .filter(project => project.networks.includes(networkFilter) || !networkFilter.length)
                    .map((project, idx) => (
                        <ProjectCard item={project} key={idx} />
                    ))
                }
            </Box>
        </React.Fragment>
    )
}
    ;

ProjectsList.propTypes = {
    filter: PropTypes.string.isRequired,
    search: PropTypes.string.isRequired,
    networkFilter: PropTypes.string.isRequired,
};

export default ProjectsList;
