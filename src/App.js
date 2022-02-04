import React, { Component } from 'react';
import {
  Box,
  Grommet,
  ResponsiveContext,
} from 'grommet';
import PageFooter from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import All from './screens/All';
import MenuBar from './components/MenuBar';
import About from './components/About';
import Resources from './components/Resources';
import Twitter from './components/Twitter';
import Table from './components/Table';

const theme = {
  global: {
    colors: {
      brand: '#228BE6',
      background: '#ebf2ff',
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
            <Box fill>
              <BrowserRouter>
                <MenuBar/>
                    <Routes>
                      <Route path='/' element={<All/>} />
                      <Route path='/resources' element={<Resources/>} />
                      <Route path='/about' element={<About/>} />
                      <Route path='/feed' element={<Twitter/>} />
                      <Route path='/feed' element={<Table/>} />
                    </Routes>
                <PageFooter/>
              </BrowserRouter>
            </Box>
          )}
        </ResponsiveContext.Consumer>
      </Grommet>
    );
  }
}

export default App;
