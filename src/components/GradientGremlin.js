import React from 'react';
import { Gremlin } from 'grommet-icons';

import { Box } from 'grommet';

export const GradientGremlin = () => (
  <Box
    background="linear-gradient(#6FFFB0 0%, #7D4CDB 100%)"
    border={{ color: 'white', size: 'small' }}
    margin={{ bottom: 'medium' }}
    pad="xsmall"
    round="small"
  >
    <Gremlin color="white" />
  </Box>
);
