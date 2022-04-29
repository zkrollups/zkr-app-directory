import React, { Component } from 'react';
import {
  Box,
  Grommet,
  ResponsiveContext,
} from 'grommet';
import 'semantic-ui-css/semantic.min.css'
import PageFooter from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import All from './screens/All';
import MenuBar from './components/MenuBar';
import Navbar from './components/NavBar/navbar';
import Baner from './components/Baner/baner';
import About from './components/About';
import Resources from './components/Resources';
import Twitter from './components/Twitter';
import Tokens from './components/Tokens';

const theme = {
  global: {
    colors: {
      brand: '#228BE6',
      background: '#ebf2ff',
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
            <Box fill>
              <BrowserRouter>
                <MenuBar/>
                {/* <Navbar/>
                <Baner/> */}
                    <Routes>
                      <Route path='/' element={<All/>} />
                      <Route path='/resources' element={<Resources/>} />
                      <Route path='/about' element={<About/>} />
                      <Route path='/feed' element={<Twitter/>} />
                      <Route path='/tokens' element={<Tokens/>} />
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
