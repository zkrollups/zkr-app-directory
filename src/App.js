import React, { Component } from 'react';
import {
  Box,
  Button,
  Collapsible,
  Heading,
  Grommet,
  Layer,
  ResponsiveContext,
  Text,
  Paragraph,
} from 'grommet';
import PageFooter from './components/Footer';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { Reddit } from 'grommet-icons';
import All from './screens/All';
import Rollups from './screens/RollupsView';
import InfraView from './screens/InfraView';
import WalletView from './screens/WalletView';
import DappsView from './screens/DappsView';
import NFTsView from './screens/NFTsView';

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

const AppBar = (props) => (
  <Box
    tag='header'
    direction='row'
    align='center'
    justify='between'
    background='brand'
    pad={{ left: 'medium', right: 'small', vertical: 'small' }}
    elevation='medium'
    style={{ zIndex: '1' }}
    {...props}
  />
);

class App extends Component {
  state = {
    showSidebar: false,
  }
  render() {
    const { showSidebar } = this.state;
    return (
      <Grommet theme={theme} full>
        <ResponsiveContext.Consumer>
          {size => (
            <Box fill>
              <AppBar background="linear-gradient(102.77deg, #865ED6 -9.18%, #18BAB9 209.09%)">
                <Heading level='3' margin='small' color='white' margin={{left:"medium", top:"none", bottom:"none"}}>zkRollup Directory</Heading>
                {/* <Button
                  icon={<Notification />}
                  onClick={() => this.setState({ showSidebar: !this.state.showSidebar })}
                /> */}
                <div >
                  <Button icon={<Reddit color="#ffffff" />} hoverIndicator href="https://www.reddit.com/r/zkRollups/" target="_blank" margin={{right:"medium"}}/>
                </div>
              </AppBar>

              {/* <Box
                justify="center"
                align="center"
                pad="small"
                background="linear-gradient(102.77deg, #865ED6 -9.18%, #18BAB9 209.09%)"
                >
                <Heading level="2" margin="medium" alignSelf="center">Apps on zkRollups</Heading>
              </Box> */}

              <Heading level="2" margin="medium" alignSelf="center">zkRollup Ecosystem</Heading>

              <BrowserRouter>
                <div align="center">
                  <Link to="/all" style={{ textDecoration: 'none' }}>
                    <Button primary label="All" color="#30DE88" margin={{left:"xsmall", right:"xsmall", bottom:"small"}} style={{fontSize:"110%"}}/> </Link>
                  <Link to="/rollups" style={{ textDecoration: 'none' }}>
                    <Button primary label="Rollups" color="#30DE88" margin={{left:"xsmall", right:"xsmall", bottom:"small"}} style={{fontSize:"110%"}}/> </Link>
                  <Link to="/wallets" style={{ textDecoration: 'none' }}>
                    <Button primary label="Wallets" color="#30DE88" margin={{left:"xsmall", right:"xsmall", bottom:"small"}} style={{fontSize:"110%"}}/> </Link>
                  <Link to="/infra" style={{ textDecoration: 'none' }}>
                    <Button primary label="Infra" color="#30DE88" margin={{left:"xsmall", right:"xsmall", bottom:"small"}} style={{fontSize:"110%"}}/> </Link>
                  <Link to="/dapps" style={{ textDecoration: 'none' }}>
                    <Button primary label="dApps" color="#30DE88" margin={{left:"xsmall", right:"xsmall", bottom:"small"}} style={{fontSize:"110%"}}/> </Link>
                  <Link to="/nfts" style={{ textDecoration: 'none' }}>
                    <Button primary label="NFTs" color="#30DE88" margin={{left:"xsmall", right:"xsmall", bottom:"small"}} style={{fontSize:"110%"}}/> </Link>
                </div>

                <Box direction='row' flex overflow={{ horizontal: 'hidden' }} align='top' justify='center' wrap="true" margin={{left:"xlarge", right:"xlarge"}}  style={{zoom:"0.92"}}>
                  {/* <Box flex align='center' justify='center'>
                    app body
                  </Box> */}
                  
                  {/* <BrowserRouter> */}
                    <Routes>
                      <Route path='/' element={<All/>} />
                      <Route path='/all' element={<All/>} />
                      <Route path='/rollups' element={<Rollups/>} />
                      <Route path='/wallets' element={<WalletView/>} />
                      <Route path='/infra' element={<InfraView/>} />
                      <Route path='/dapps' element={<DappsView/>} />
                      <Route path='/nfts' element={<NFTsView/>} />
                    </Routes>
                  {/* </BrowserRouter> */}
                  
                  {/* {(!showSidebar || size !== 'small') ? (
                    <Collapsible direction="horizontal" open={showSidebar}>
                      <Box
                        flex
                        width='medium'
                        background='light-2'
                        elevation='small'
                        align='center'
                        justify='center'
                      >
                        sidebar
                      </Box>
                    </Collapsible>
                  ): (
                    <Layer>
                      <Box
                        background='light-2'
                        tag='header'
                        justify='end'
                        align='center'
                        direction='row'
                      >
                        <Button
                          icon={<FormClose />}
                          onClick={() => this.setState({ showSidebar: false })}
                        />
                      </Box>
                      <Box
                        fill
                        background='light-2'
                        align='center'
                        justify='center'
                      >
                        sidebar
                      </Box>
                    </Layer>
                  )} */}
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
