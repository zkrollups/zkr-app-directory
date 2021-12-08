import React from 'react';
import PropTypes from 'prop-types';
import Misc from '../components/card-components/Misc';

const MiscView = ({ align, center, justify, name, pad, path, children }) => (
    <React.Fragment>
        <Misc/>
    </React.Fragment>
);

MiscView.propTypes = {
    align: PropTypes.string,
    details: PropTypes.string,
    label: PropTypes.string.isRequired,
    level: PropTypes.number,
    size: PropTypes.oneOf(['xlarge', 'large']),
    summary: PropTypes.node,
  };
  
  MiscView.defaultProps = {
    align: undefined,
    details: undefined,
    level: 1,
    size: 'large',
    summary: undefined,
  };

export default MiscView;
