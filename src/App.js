import React, { Component } from 'react';
import {
  Box,
  Button,
  Heading,
  Grommet,
  ResponsiveContext,
} from 'grommet';
import Menu from './components/Menu'
import PageFooter from './components/Footer';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { Github, Reddit } from 'grommet-icons';
import All from './screens/All';
import Rollups from './screens/RollupsView';
import MobileView from './screens/MobileView';
import InfraView from './screens/InfraView';
import WalletView from './screens/WalletView';
import DappsView from './screens/DappsView';
import NFTsView from './screens/NFTsView';
import Resources from './components/Resources';
import TopBar from './components/AppBar';
import MiscView from './screens/MiscView';

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
              <AppBar background="linear-gradient(102.77deg, #865ED6 -9.18%, #18BAB9 209.09%)">
                <Heading level='3' color='white' margin={{left:"medium", top:"none", bottom:"none"}}>zkRollup Directory</Heading>
                <div >
                  <Button icon={<Github color="black" />} hoverIndicator href="https://github.com/jaazinn/zkr-app-directory" target="_blank"/>
                </div>
              </AppBar>
              <Heading level="2" margin="medium" alignSelf="center">zkRollup Ecosystem</Heading>
              <BrowserRouter>
                <TopBar/>
                <Heading level="2" margin="medium" alignSelf="center">zkRollup Ecosystem</Heading>
                <Menu/>
                <Box direction='row' flex overflow={{ horizontal: 'hidden' }} align='top' justify='center' wrap="true" margin={{left:"xlarge", right:"xlarge"}}  style={{zoom:"0.92"}}>
                    <Routes>
                      <Route path='/' element={<All/>} />
                      <Route path='/all' element={<All/>} />
                      <Route path='/rollups' element={<Rollups/>} />
                      <Route path='/mobile' element={<MobileView/>} />
                      <Route path='/wallets' element={<WalletView/>} />
                      <Route path='/infra' element={<InfraView/>} />
                      <Route path='/dapps' element={<DappsView/>} />
                      <Route path='/nfts' element={<NFTsView/>} />
                      <Route path='/resources' element={<Resources/>} />
                      <Route path='/misc' element={<MiscView/>} />
                    </Routes>
                </Box>
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
