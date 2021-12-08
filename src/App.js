import React, { Component } from 'react';
import {
  Box,
  Grommet,
  ResponsiveContext,
} from 'grommet';
import PageFooter from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import All from './screens/All';
import Rollups from './screens/RollupsView';
import MobileView from './screens/MobileView';
import InfraView from './screens/InfraView';
import WalletView from './screens/WalletView';
import DappsView from './screens/DappsView';
import NFTsView from './screens/NFTsView';
import Resources from './components/Resources';
import MenuBar from './components/MenuBar';
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
              <BrowserRouter>
                <MenuBar/>
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
