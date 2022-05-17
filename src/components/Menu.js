import React from 'react';
import{ useState} from 'react';
import PropTypes from 'prop-types';
import icon1 from "../actets/Vector.png";
import icon2 from "../actets/Vector2.png";
import icon3 from "../actets/category/wallet.svg";
import icon4 from "../actets/Vector (2).png";
import icon5 from "../actets/dapps.png";
import icon6 from "../actets/nfts.png";
import icon9 from "../actets/daos.png";
import icon7 from "../actets/Vector (6).png";
import icon10 from "../actets/misc.png";
import icon8 from "../actets/social.png";
import { useNavigate  } from "react-router-dom";
import {
  Box,
  Button,
} from 'grommet';
import "./style.css"

const Menu = ({ setFilter, filter,results, setResults  }) => {

  const navigate = useNavigate();
  console.log(results. length,"resultsresults")

  const [click, setClick] = useState(false);
  console.log("width========>> ",window.innerWidth)
  const [active, setactive] = useState(false);
 
  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);


  const filter_fun=(e)=>{
    
    navigate("/")
    setFilter(e)
    setactive(e)
    console.log("chk filter_fun",e)
  }
  return (
    <React.Fragment>


      {/* <Box margin={'auto'} direction="column" justify="between" gap="small" style={{    overflowX: "auto", whiteSpace: "nowrap"}}> */}
     
     
     
      <div className='btn_wrap mt-4'>
      <h1 className='text-cente'>Categories</h1>
      </div>
      
        <div className={filter=="" ?'btn_wrap active active2 px-3':'btn_wrap px-3 '} onClick={(e) => filter_fun((''))  }  > 
        <img className='menu_logo cat_image' src={icon1} width={'22px'} height={"22px"}></img>
          <span className='mx-3 categry cat_title'> All</span>
          {
            filter=="" ?
             <span className='mr-3'> {results.length}</span>
             :
             null
          }
         
        </div>
        <div className={filter=="rollups" ?'btn_wrap active px-3':'btn_wrap px-3 '}   onClick={() => filter_fun(('rollups')) }  > 
          <div><img className='cat_image' src={icon2} width={'22px'} height={"22px"}></img></div>
          <span className='mx-3 cat_title'> Rollups</span>
          {
            filter=="rollups" ?
             <span className='mr-'> {results.length}</span>
             :
             null
          }
          {/* <button label="All" setFilter('rollups')} active={filter === 'rollups'}  /> */}
        </div>
        <div className={filter=="wallets" ?'btn_wrap active px-3 ':'btn_wrap px-3 '}  onClick={() => filter_fun(('wallets')) } > 
          <div><img className='cat_image' src={icon3} width={'22px'} height={"22px"}></img></div>
          <span className='mx-3 cat_title'> Wallets</span>
          {
            filter=="wallets" ?
             <span className='mr-5'> {results.length}</span>
             :
             null
          }
          {/* <button label="All" onClick={() => setFilter('')}  /> */}
        </div>
        <div className={filter=="infra" ?'btn_wrap active px-3':'btn_wrap px-3 '}   onClick={() => filter_fun(('infra')) }> 
          <div><img className='cat_image' src={icon4} width={'22px'} height={"22px"}></img></div>
          <span className='mx-3 cat_title'> Infra</span>
          {
            filter=="infra" ?
             <span className='mr-5'> {results.length}</span>
             :
             null
          }
          {/* <button label="All" onClick={() => setFilter('')}  /> */}
        </div>
        <div className={filter=="dApps" ?'btn_wrap active px-3 ':'btn_wrap px-3 '}  onClick={() => filter_fun(('dApps')) }> 
          <div><img  className='cat_image' src={icon5} width={'22px'} height={"22px"}></img></div>
          <span className='mx-3 cat_title'> dApps</span>
          {
            filter=="dApps" ?
             <span className='mr-5'> {results.length}</span>
             :
             null
          }
          {/* <button label="All" onClick={() => setFilter('')}  /> */}
        </div>
        <div className={filter=="nfts" ?'btn_wrap active px-3':'btn_wrap px-3 '}   onClick={() => filter_fun(('nfts')) }> 
          <div><img className='cat_image' src={icon6} width={'22px'} height={"22px"}></img></div>
          <span className='mx-3 cat_title'> NFTs</span>
          {
            filter=="nfts" ?
             <span className='mr-5'> {results.length}</span>
             :
             null
          }
          {/* <button label="All" onClick={() => setFilter('')}  /> */}
        </div>
        <div className={filter=="games" ?'btn_wrap active px-3 ':'btn_wrap  px-3'}  onClick={() => filter_fun(('games')) }> 
          <div><img className='cat_image' src={icon7} width={'22px'} height={"22px"}></img></div>
          <span className='mx-3 cat_title'> Games</span>
          {
            filter=="games" ?
             <span className='mr-5'> {results.length}</span>
             :
             null
          }
          {/* <button label="All" onClick={() => setFilter('')}  /> */}
        </div>
        <div className={filter=="social" ?'btn_wrap active px-3':'btn_wrap  px-3'}  onClick={() =>filter_fun (('social')) }> 
          <div><img className='cat_image' src={icon8} width={'22px'} height={"22px"}></img></div>
          <span className='mx-3 cat_title'> Social</span>
          {
            filter=="social" ?
             <span className='mr-5'> {results.length}</span>
             :
             null
          }
          {/* <button label="All" onClick={() => setFilter('')}  /> */}
        </div>
        <div className={filter=="daos" ?'btn_wrap active px-3':'btn_wrap  px-3'}  onClick={() => filter_fun(('daos')) }> 
          <div><img src={icon9} width={'22px'} height={"22px"}></img></div>
          <span className='mx-3 cat_title'> DAOs</span>
          {
            filter=="daos" ?
             <span className='mr-5'> {results.length}</span>
             :
             null
          }
          {/* <button label="All" onClick={() => setFilter('')}  /> */}
        </div>
        <div className={filter=="misc" ?'btn_wrap active px-3':'btn_wrap  px-3'}  onClick={() => filter_fun(('misc')) }> 
          <div><img className='cat_image' src={icon10} width={'22px'} height={"22px"}></img></div>
          <span className='mx-3 cat_title'> Misc</span>
          {
            filter=="misc" ?
             <span className='mr-5'> {results.length}</span>
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

      {/* </Box> */}
    </React.Fragment>
  )
};

Menu.propTypes = {
  setFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

export default Menu;
