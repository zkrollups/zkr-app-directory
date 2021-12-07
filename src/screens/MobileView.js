import React from 'react';
import PropTypes from 'prop-types';
import Mobile from '../components/card-components/Mobile';

const MobileView = ({ align, center, justify, name, pad, path, children }) => (
    <React.Fragment>
        <Mobile/>
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
