import React from 'react';
import PropTypes from 'prop-types';
import Dapps from '../components/card-components/Dapps';

const DappsView = ({ align, center, justify, name, pad, path, children }) => (
    <React.Fragment>
        <Dapps/>
    </React.Fragment>
);

DappsView.propTypes = {
    align: PropTypes.string,
    details: PropTypes.string,
    label: PropTypes.string.isRequired,
    level: PropTypes.number,
    size: PropTypes.oneOf(['xlarge', 'large']),
    summary: PropTypes.node,
  };
  
  DappsView.defaultProps = {
    align: undefined,
    details: undefined,
    level: 1,
    size: 'large',
    summary: undefined,
  };

export default DappsView;