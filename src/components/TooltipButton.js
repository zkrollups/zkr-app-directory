import React, { useRef, useState } from 'react';

import { Box, Button, Drop,Image } from 'grommet';
import { Analytics, Calculator, Stakeholder } from 'grommet-icons';

export const TooltipButton = ({ iconName, index }) => {
  const [over, setOver] = useState();
  const iconsMap = color => [
    <Analytics color={color} />,
    <Stakeholder color={color} />,
    <Calculator color={color} />,
  ];
  const tooltipColor = { color: 'accent-1', opacity: 0.9 };
  const ref = useRef();
  return (
    <Box width="100%">
      {/* eslint-disable-next-line jsx-a11y/mouse-events-have-key-events */}
      <Button
        ref={ref}
        onMouseOver={() => setOver(true)}
        onMouseLeave={() => setOver(false)}
        fill="horizontal"
        path="/"
        hoverIndicator={tooltipColor}
        plain
      >
        {({ hover }) => (
          <Box pad={{ vertical: 'small' }} align="center">
            <Image src={iconName}></Image>
            {/* {iconsMap(hover ? 'black' : 'white')[index]} */}
          </Box>
        )}
      </Button>
      {ref.current && over && (
        <Drop align={{ left: 'right' }} target={ref.current} plain>
          <Box
            animation="slideRight"
            margin="xsmall"
            pad="small"
            background={tooltipColor}
            round={{ size: 'medium', corner: 'right' }}
          >
            {iconName}
          </Box>
        </Drop>
      )}
    </Box>
  );
};
