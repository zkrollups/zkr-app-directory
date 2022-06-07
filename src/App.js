import React, { Component } from 'react';
import {
  Grommet,
  ResponsiveContext,
} from 'grommet';
import 'semantic-ui-css/semantic.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import All from './screens/All';
import Navbar from './components/NavBar/navbar';
import Foter from "./components/Footernew/footer"
import Stay from './components/stay_updated/index';
// import CardDetail from "./components/DetailCard/card"
const theme = {
  global: {
    colors: {
      brand: '#228BE6',
      background: '#1D1D26',
      // background: '#1D1D27',
    },
    font: {
      family: 'Roboto',
      size: '14px',
      height: '20px',
    },
  },
};

class App extends Component {
  state = { showSidebar: false, }
  render() {
    return (
      <Grommet theme={theme} full>
        <ResponsiveContext.Consumer>
          {size => (
            // <Box fill>
              <BrowserRouter>
                {/* <MenuBar/> */}
                <Navbar/>
                <All/>  
                <Stay/>                  
                <Foter/>
              </BrowserRouter>
            // </Box>
          )}
        </ResponsiveContext.Consumer>
      </Grommet>
    );
  }
}

export default App;
