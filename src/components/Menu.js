import React from 'react';
import{ useState} from 'react';
import PropTypes from 'prop-types';
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
// import icon3 from "../actets/Vector (1).png"
// import icon3 from "../actets/Vector (1).png"

import {
  Box,
  Button,
} from 'grommet';
import "./style.css"

const Menu = ({ setFilter, filter,results, setResults  }) => {


  console.log(results. length,"resultsresults")

  const [click, setClick] = useState(false);
  const [active, setactive] = useState(false);
 
  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);


  const filter_fun=(e)=>{
    setFilter(e)
    setactive(e)
    console.log("chk filter_fun",e)
  }
  return (
    <React.Fragment>


      <Box margin={'auto'} direction="column" justify="between" gap="small" style={{    overflowX: "auto", whiteSpace: "nowrap"}}>
     
     
     
      <div className='btn_wrap mt-4'>
      <h1 className='text-cente'>Categories</h1>
      </div>
      
        <div className={active=="" ?'btn_wrap active px-2':'btn_wrap  px-2'} onClick={(e) => filter_fun((''))  }  > 
        <img className='menu_logo ' src={icon1}></img>
          <span className='mx-3 categry'> All</span>
          {
            active=="" ?
             <span className='mx-5'> {results.length}</span>
             :
             null
          }
         
        </div>
        <div className={active=="rollups" ?'btn_wrap active px-2':'btn_wrap  px-2'}   onClick={() => filter_fun(('rollups')) }  > 
          <div><img src={icon2}></img></div>
          <span className='mx-3'> Rollups</span>
          {
            active=="rollups" ?
             <span className='mx-5'> {results.length}</span>
             :
             null
          }
          {/* <button label="All" setFilter('rollups')} active={filter === 'rollups'}  /> */}
        </div>
        <div className={active=="wallets" ?'btn_wrap active px-2':'btn_wrap  px-2'}  onClick={() => filter_fun(('wallets')) } > 
          <div><img src={icon3}></img></div>
          <span className='mx-3'> Wallets</span>
          {
            active=="wallets" ?
             <span className='mx-5'> {results.length}</span>
             :
             null
          }
          {/* <button label="All" onClick={() => setFilter('')}  /> */}
        </div>
        <div className={active=="infra" ?'btn_wrap active px-2':'btn_wrap  px-2'}   onClick={() => filter_fun(('infra')) }> 
          <div><img src={icon4}></img></div>
          <span className='mx-3'> Infra</span>
          {
            active=="infra" ?
             <span className='mx-5'> {results.length}</span>
             :
             null
          }
          {/* <button label="All" onClick={() => setFilter('')}  /> */}
        </div>
        <div className={active=="dApps" ?'btn_wrap active px-2':'btn_wrap  px-2'}  onClick={() => filter_fun(('dApps')) }> 
          <div><img src={icon5}></img></div>
          <span className='mx-3'> dApps</span>
          {
            active=="dApps" ?
             <span className='mx-5'> {results.length}</span>
             :
             null
          }
          {/* <button label="All" onClick={() => setFilter('')}  /> */}
        </div>
        <div className={active=="nfts" ?'btn_wrap active px-2':'btn_wrap  px-2'}   onClick={() => filter_fun(('nfts')) }> 
          <div><img src={icon6}></img></div>
          <span className='mx-3'> NFTs</span>
          {
            active=="nfts" ?
             <span className='mx-5'> {results.length}</span>
             :
             null
          }
          {/* <button label="All" onClick={() => setFilter('')}  /> */}
        </div>
        <div className={active=="games" ?'btn_wrap active px-2':'btn_wrap  px-2'}  onClick={() => filter_fun(('games')) }> 
          <div><img src={icon7}></img></div>
          <span className='mx-3'> Games</span>
          {
            active=="games" ?
             <span className='mx-5'> {results.length}</span>
             :
             null
          }
          {/* <button label="All" onClick={() => setFilter('')}  /> */}
        </div>
        <div className={active=="social" ?'btn_wrap active px-2':'btn_wrap  px-2'}  onClick={() =>filter_fun (('social')) }> 
          <div><img src={icon8}></img></div>
          <span className='mx-3'> Social</span>
          {
            active=="social" ?
             <span className='mx-5'> {results.length}</span>
             :
             null
          }
          {/* <button label="All" onClick={() => setFilter('')}  /> */}
        </div>
        <div className={active=="daos" ?'btn_wrap active px-2':'btn_wrap  px-2'}  onClick={() => filter_fun(('daos')) }> 
          <div><img src={icon9}></img></div>
          <span className='mx-3'> DAOs</span>
          {
            active=="daos" ?
             <span className='mx-5'> {results.length}</span>
             :
             null
          }
          {/* <button label="All" onClick={() => setFilter('')}  /> */}
        </div>
        <div className={active=="misc" ?'btn_wrap active px-2':'btn_wrap  px-2'}  onClick={() => filter_fun(('misc')) }> 
          <div><img src={icon10}></img></div>
          <span className='mx-3'> Misc</span>
          {
            active=="misc" ?
             <span className='mx-5'> {results.length}</span>
             :
             null
          }
          {/* <button label="All" onClick={() => setFilter('')}  /> */}
        </div>

        {/* <Button label="Rollups" onClick={() => setFilter('rollups')} active={filter === 'rollups'} size='small'  style={{borderRadius:"0.8em"}}/>
        <Button label="Wallets" onClick={() => setFilter('wallets')} active={filter === 'wallets'} size='small'  style={{borderRadius:"0.8em"}}/>
        <Button label="Infra" onClick={() => setFilter('infra')} active={filter === 'infra'} size='small'  style={{borderRadius:"0.8em"}}/>
        <Button label="dApps" onClick={() => setFilter('dApps')} active={filter === 'dApps'} size='small'  style={{borderRadius:"0.8em"}}/>
        <Button label="NFTs" onClick={() => setFilter('nfts')} active={filter === 'nfts'} size='small'  style={{borderRadius:"0.8em"}}/>
        <Button label="Games" onClick={() => setFilter('games')} active={filter === 'games'} size='small'  style={{borderRadius:"0.8em"}}/>
        <Button label="Social" onClick={() => setFilter('social')} active={filter === 'social'} size='small'  style={{borderRadius:"0.8em"}}/>
        <Button label="DAOs" onClick={() => setFilter('daos')} active={filter === 'daos'} size='small'  style={{borderRadius:"0.8em"}}/>
        <Button label="Misc" onClick={() => setFilter('misc')} active={filter === 'misc'} size='small'  style={{borderRadius:"0.8em"}}/> */}

      </Box>
    </React.Fragment>
  )
};

Menu.propTypes = {
  setFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

export default Menu;
