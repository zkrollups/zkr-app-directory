import React from 'react';
import PropTypes from 'prop-types';
import {
  Box,
} from 'grommet';
import Menu from '../components/Menu';
import Mobile from '../components/card-components/Mobile';

const MobileView = ({ align, center, justify, name, pad, path, children }) => (
    <React.Fragment>
      <Menu/>
      <Box direction='row' flex overflow={{ horizontal: 'hidden' }} align='top' justify='center' wrap="true" margin={{left:"xlarge", right:"xlarge"}}  style={{zoom:"0.92"}}>
        <Mobile/>
      </Box>
    </React.Fragment>
);

MobileView.propTypes = {
    align: PropTypes.string,
    details: PropTypes.string,
    label: PropTypes.string.isRequired,
    level: PropTypes.number,
    size: PropTypes.oneOf(['xlarge', 'large']),
    summary: PropTypes.node,
  };
  
  MobileView.defaultProps = {
    align: undefined,
    details: undefined,
    level: 1,
    size: 'large',
    summary: undefined,
  };

export default MobileView;
