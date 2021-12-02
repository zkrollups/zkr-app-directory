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

