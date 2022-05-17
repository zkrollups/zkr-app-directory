import React, { useContext } from 'react';

import { Box, ResponsiveContext,Text } from 'grommet';
import icon1 from "../actets/Vector.png"
import icon2 from "../actets/Vector2.png"
import icon3 from "../actets/Vector3.png"
import icon4 from "../actets/Vector (2).png"
import icon5 from "../actets/Vector (3).png"
import icon6 from "../actets/Vector (4).png"
import icon7 from "../actets/Vector (5).png"
import icon8 from "../actets/Vector (6).png"
import icon9 from "../actets/Vector (7).png"
import icon10 from "../actets/Vector (8).png"
import { TooltipButton } from './TooltipButton';
// import { UserMenu, NotificationAlert } from './index';
import { GradientGremlin } from './GradientGremlin';

const Menu = () => {
  const size = useContext(ResponsiveContext);

  return (
    <Box overflow="auto" >
      <Box align="center" pad={{ vertical: 'small' }}>
        {/* <GradientGremlin /> */}
        <Text>
                            Categeries
                        </Text>
      </Box>
      <Box align="center" gap={size === 'small' ? 'medium' : 'small'}>
      <div className='btn_wrap active px-2'> 
          <div><img src={icon3}></img></div>
          <span className='mx-3'> Wallets</span>
          <span className='mx-5'> 15</span>
          {/* <button label="All" onClick={() => setFilter('')}  /> */}
        </div>
        {['Analytics', 'Stakeholder', 'Calculator'].map((iconName, index) => (
          <TooltipButton key={iconName} iconName={icon3} index={index} />
        ))}
      </Box>
      <Box flex />
      
    </Box>
  );
};
export default Menu;
