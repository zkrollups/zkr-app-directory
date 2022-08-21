import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import icon1 from "../actets/Vector.png";
import icon2 from "../actets/Vector2.png";
import icon3 from "../actets/category/wallet.svg";
import icon4 from "../actets/Vector (2).png";
import icon5 from "../actets/dapps.png";
import icon6 from "../actets/nfts.png";
import icon7 from "../actets/Vector (6).png";
import icon8 from "../actets/social.png";
import icon9 from "../actets/daos.png";
import icon10 from "../actets/metaverse.png";
import icon11 from "../actets/privacy.png";
import icon12 from "../actets/explorer.png";
import icon13 from "../actets/education.png";
import icon14 from "../actets/payments.png";
import icon15 from "../actets/onramp.png";
import icon16 from "../actets/dex.png";
import icon17 from "../actets/misc.png";
import { useNavigate } from "react-router-dom";
import "./style.css"

const Menu = ({ setloading, loading, total, setcondition_clause, condition_clause, setFilter, filter, results, setResults, set_search, search_in, setSearch_in }) => {
  const scroll = () => {
    // window.scroll(0,findPos(document.getElementById("scrol")));
    document.querySelector("#scrol").scrollIntoView({
      behavior: "smooth",
    });
  };
  const navigate = useNavigate();
  //console.log(results. length,"resultsresults")

  const [click, setClick] = useState(false);
  //console.log("width========>> ",window.innerWidth)
  const [active, setactive] = useState(false);

  // const handleClick = () => setClick(!click);
  // const Close = () => setClick(false);

  var allCounts = [];
  var search_category = 'asasd';
  var localfilter = '';


  // getAllCounts();
  const filter_fun = (e) => {

    navigate("/")
    setFilter(e)
    setactive(e)
    set_search("")
    setSearch_in("")
    if (e !== "") {
      setloading(true)
      setcondition_clause(
        {
          ...condition_clause,
          where: {
            "searchOn_contains_all": [e]
          },
          skip: 0,

        }
      )
    }
    else {
      // const where_pre=condition_clause['where']
      // console.log("where in all===>> ",where_pre)
      // if(where_pre.hasOwnProperty('searchOn_contains_all')){
      // delete where_pre['searchOn_contains_all']
      setloading(true)
      setcondition_clause(
        {
          ...condition_clause,
          where: {},
          skip: 0,

        }
      )
      // }

    }
    try{
    scroll()
    }
    catch(e){

    }
    //console.log("chk filter_fun",e)
  }

  return (
    <React.Fragment>


      {/* <Box margin={'auto'} direction="column" justify="between" gap="small" style={{    overflowX: "auto", whiteSpace: "nowrap"}}> */}



      <div className='btn_wrap mt-4'>
        <h1 className='text-cente'>Categories</h1>
      </div>

      <div className={!condition_clause['where']['searchOn_contains_all'] ? 'btn_wrap active active2 px-3' : 'btn_wrap px-3 '} onClick={(e) => filter_fun((''))}  >
        <img className='menu_logo cat_image' src={icon1} width={'22px'} height={"22px"} alt=""></img>
        <span className='mx-3 categry cat_title'>All</span>
        {
          loading === false ?
            !condition_clause['where']['searchOn_contains_all'] ?

              <span className='mr-3'>{total}</span>
              :
              null : null
        }
      </div>

      <div className={condition_clause['where']['searchOn_contains_all'] ? condition_clause['where']['searchOn_contains_all'].includes("rollups") ? 'btn_wrap active px-3' : 'btn_wrap px-3 ' : 'btn_wrap px-3 '} onClick={() => filter_fun(('rollups'))}  >
        <div>
          <img className='cat_image' src={icon2} width={'22px'} height={"22px"} alt=""></img>
        </div>
        <span className='mx-3 cat_title'>Rollups</span>
        {
          loading === false ?
            condition_clause['where']['searchOn_contains_all'] ? condition_clause['where']['searchOn_contains_all'].includes("rollups") ?

              <span className='mr-'> {total}</span>
              :
              null : null : null
        }
      </div>

      {/* <button label="All" setFilter('rollups')} active={filter === 'rollups'}  /> */}
      <div className={condition_clause['where']['searchOn_contains_all'] ? condition_clause['where']['searchOn_contains_all'].includes("wallets") ? 'btn_wrap active px-3' : 'btn_wrap px-3 ' : 'btn_wrap px-3 '} onClick={() => filter_fun(('wallets'))} >
        <div>
          <img className='cat_image' src={icon3} width={'22px'} height={"22px"} alt="rollups"></img>
        </div>
        <span className='mx-3 cat_title'> Wallets</span>
        {
          loading === false ?
            condition_clause['where']['searchOn_contains_all'] ? condition_clause['where']['searchOn_contains_all'].includes("wallets") ?
              <span className='mr-5'> {total}</span>
              :
              null : null : null
        }
        {/* <button label="All" onClick={() => setFilter('')}  /> */}
      </div>

      <div className={condition_clause['where']['searchOn_contains_all'] ? condition_clause['where']['searchOn_contains_all'].includes("infra") ? 'btn_wrap active px-3' : 'btn_wrap px-3 ' : 'btn_wrap px-3 '} onClick={() => filter_fun(('infra'))}>
        <div>
          <img className='cat_image' src={icon4} width={'22px'} height={"22px"} alt="infra"></img>
        </div>
        <span className='mx-3 cat_title'> Infra</span>
        {
          loading === false ?
            condition_clause['where']['searchOn_contains_all'] ? condition_clause['where']['searchOn_contains_all'].includes("infra") ?
              <span className='mr-5'> {total}</span>
              :
              null : null : null
        }
        {/* <button label="All" onClick={() => setFilter('')}  /> */}
      </div>
      
      <div className={condition_clause['where']['searchOn_contains_all'] ? condition_clause['where']['searchOn_contains_all'].includes("dApps") ? 'btn_wrap active px-3' : 'btn_wrap px-3 ' : 'btn_wrap px-3 '} onClick={() => filter_fun(('dApps'))}>
        <div>
          <img className='cat_image' src={icon5} width={'22px'} height={"22px"} alt="dapps"></img>
        </div>
        <span className='mx-3 cat_title'> dApps</span>
        {
          loading === false ?
            condition_clause['where']['searchOn_contains_all'] ? condition_clause['where']['searchOn_contains_all'].includes("dApps") ?
              <span className='mr-5'> {total}</span>
              :
              null : null : null
        }
        {/* <button label="All" onClick={() => setFilter('')}  /> */}
      </div>

      <div className={condition_clause['where']['searchOn_contains_all'] ? condition_clause['where']['searchOn_contains_all'].includes("nfts") ? 'btn_wrap active px-3' : 'btn_wrap px-3 ' : 'btn_wrap px-3 '} onClick={() => filter_fun(('nfts'))}>
        <div>
          <img className='cat_image' src={icon6} width={'22px'} height={"22px"} alt="nfts"></img>
        </div>
        <span className='mx-3 cat_title'> NFTs</span>
        {
          loading === false ?
            condition_clause['where']['searchOn_contains_all'] ? condition_clause['where']['searchOn_contains_all'].includes("nfts") ?
              <span className='mr-5'> {total}</span>
              :
              null : null : null
        }
        {/* <button label="All" onClick={() => setFilter('')}  /> */}
      </div>

      <div className={condition_clause['where']['searchOn_contains_all'] ? condition_clause['where']['searchOn_contains_all'].includes("games") ? 'btn_wrap active px-3' : 'btn_wrap px-3 ' : 'btn_wrap px-3 '} onClick={() => filter_fun(('games'))}>
        <div>
          <img className='cat_image' src={icon7} width={'22px'} height={"22px"} alt="games"></img>
        </div>
        <span className='mx-3 cat_title'> Games</span>
        {
          loading === false ?
            condition_clause['where']['searchOn_contains_all'] ? condition_clause['where']['searchOn_contains_all'].includes("games") ?
              <span className='mr-5'> {total}</span>
              :
              null : null : null
        }
        {/* <button label="All" onClick={() => setFilter('')}  /> */}
      </div>

      <div className={condition_clause['where']['searchOn_contains_all'] ? condition_clause['where']['searchOn_contains_all'].includes("social") ? 'btn_wrap active px-3' : 'btn_wrap px-3 ' : 'btn_wrap px-3 '} onClick={() => filter_fun(('social'))}>
        <div>
          <img className='cat_image' src={icon8} width={'22px'} height={"22px"} alt="social"></img>
        </div>
        <span className='mx-3 cat_title'> Social</span>
        {
          loading === false ?
            condition_clause['where']['searchOn_contains_all'] ? condition_clause['where']['searchOn_contains_all'].includes("social") ?
              <span className='mr-5'> {total}</span>
              :
              null : null : null
        }
        {/* <button label="All" onClick={() => setFilter('')}  /> */}
      </div>

      <div className={condition_clause['where']['searchOn_contains_all'] ? condition_clause['where']['searchOn_contains_all'].includes("daos") ? 'btn_wrap active px-3' : 'btn_wrap px-3 ' : 'btn_wrap px-3 '} onClick={() => filter_fun(('daos'))}>
        <div>
          <img src={icon9} width={'22px'} height={"22px"} alt="daos"></img>
        </div>
        <span className='mx-3 cat_title'> DAOs</span>
        {
          loading === false ?
            condition_clause['where']['searchOn_contains_all'] ? condition_clause['where']['searchOn_contains_all'].includes("daos") ?
              <span className='mr-5'> {total}</span>
              :
              null : null : null
        }
        {/* <button label="All" onClick={() => setFilter('')}  /> */}
      </div>

      <div className={condition_clause['where']['searchOn_contains_all'] ? condition_clause['where']['searchOn_contains_all'].includes("metaverse") ? 'btn_wrap active px-3' : 'btn_wrap px-3 ' : 'btn_wrap px-3 '} onClick={() => filter_fun(('metaverse'))}>
        <div>
          <img src={icon10} width={'22px'} height={"22px"} alt="metaverse"></img>
        </div>
        <span className='mx-3 cat_title'>Metaverse</span>
        {
          loading === false ?
            condition_clause['where']['searchOn_contains_all'] ? condition_clause['where']['searchOn_contains_all'].includes("metaverse") ?
              <span className='mr-5'> {total}</span>
              :
              null : null : null
        }
        {/* <button label="All" onClick={() => setFilter('')}  /> */}
      </div>

      <div className={condition_clause['where']['searchOn_contains_all'] ? condition_clause['where']['searchOn_contains_all'].includes("privacy") ? 'btn_wrap active px-3' : 'btn_wrap px-3 ' : 'btn_wrap px-3 '} onClick={() => filter_fun(('privacy'))}>
        <div>
          <img src={icon11} width={'22px'} height={"22px"} alt="privacy"></img>
        </div>
        <span className='mx-3 cat_title'>Privacy</span>
        {
          loading === false ?
            condition_clause['where']['searchOn_contains_all'] ? condition_clause['where']['searchOn_contains_all'].includes("privacy") ?
              <span className='mr-5'> {total}</span>
              :
              null : null : null
        }
        {/* <button label="All" onClick={() => setFilter('')}  /> */}
      </div>

      <div className={condition_clause['where']['searchOn_contains_all'] ? condition_clause['where']['searchOn_contains_all'].includes("explorer") ? 'btn_wrap active px-3' : 'btn_wrap px-3 ' : 'btn_wrap px-3 '} onClick={() => filter_fun(('explorer'))}>
        <div>
          <img src={icon12} width={'22px'} height={"22px"} alt="explorer"></img>
        </div>
        <span className='mx-3 cat_title'>Explorer</span>
        {
          loading === false ?
            condition_clause['where']['searchOn_contains_all'] ? condition_clause['where']['searchOn_contains_all'].includes("explorer") ?
              <span className='mr-5'> {total}</span>
              :
              null : null : null
        }
        {/* <button label="All" onClick={() => setFilter('')}  /> */}
      </div>

      <div className={condition_clause['where']['searchOn_contains_all'] ? condition_clause['where']['searchOn_contains_all'].includes("education") ? 'btn_wrap active px-3' : 'btn_wrap px-3 ' : 'btn_wrap px-3 '} onClick={() => filter_fun(('education'))}>
        <div>
          <img src={icon13} width={'22px'} height={"22px"} alt="education"></img>
        </div>
        <span className='mx-3 cat_title'>Education</span>
        {
          loading === false ?
            condition_clause['where']['searchOn_contains_all'] ? condition_clause['where']['searchOn_contains_all'].includes("education") ?
              <span className='mr-5'> {total}</span>
              :
              null : null : null
        }
        {/* <button label="All" onClick={() => setFilter('')}  /> */}
      </div>

      <div className={condition_clause['where']['searchOn_contains_all'] ? condition_clause['where']['searchOn_contains_all'].includes("payments") ? 'btn_wrap active px-3' : 'btn_wrap px-3 ' : 'btn_wrap px-3 '} onClick={() => filter_fun(('payments'))}>
        <div>
          <img src={icon14} width={'22px'} height={"22px"} alt="payments"></img>
        </div>
        <span className='mx-3 cat_title'>Payments</span>
        {
          loading === false ?
            condition_clause['where']['searchOn_contains_all'] ? condition_clause['where']['searchOn_contains_all'].includes("payments") ?
              <span className='mr-5'> {total}</span>
              :
              null : null : null
        }
        {/* <button label="All" onClick={() => setFilter('')}  /> */}
      </div>

      <div className={condition_clause['where']['searchOn_contains_all'] ? condition_clause['where']['searchOn_contains_all'].includes("onramp") ? 'btn_wrap active px-3' : 'btn_wrap px-3 ' : 'btn_wrap px-3 '} onClick={() => filter_fun(('onramp'))}>
        <div>
          <img src={icon15} width={'22px'} height={"22px"} alt="onramp"></img>
        </div>
        <span className='mx-3 cat_title'>Onramp</span>
        {
          loading === false ?
            condition_clause['where']['searchOn_contains_all'] ? condition_clause['where']['searchOn_contains_all'].includes("onramp") ?
              <span className='mr-5'> {total}</span>
              :
              null : null : null
        }
        {/* <button label="All" onClick={() => setFilter('')}  /> */}
      </div>

      <div className={condition_clause['where']['searchOn_contains_all'] ? condition_clause['where']['searchOn_contains_all'].includes("dex") ? 'btn_wrap active px-3' : 'btn_wrap px-3 ' : 'btn_wrap px-3 '} onClick={() => filter_fun(('dex'))}>
        <div>
          <img src={icon16} width={'22px'} height={"22px"} alt="dex"></img>
        </div>
        <span className='mx-3 cat_title'>Dex</span>
        {
          loading === false ?
            condition_clause['where']['searchOn_contains_all'] ? condition_clause['where']['searchOn_contains_all'].includes("dex") ?
              <span className='mr-5'> {total}</span>
              :
              null : null : null
        }
        {/* <button label="All" onClick={() => setFilter('')}  /> */}
      </div>

      <div className={condition_clause['where']['searchOn_contains_all'] ? condition_clause['where']['searchOn_contains_all'].includes("misc") ? 'btn_wrap active px-3' : 'btn_wrap px-3 ' : 'btn_wrap px-3 '} onClick={() => filter_fun(('misc'))}>
        <div>
          <img className='cat_image' src={icon17} width={'22px'} height={"22px"} alt="misc"></img>
        </div>
        <span className='mx-3 cat_title'>Misc</span>
        {
          loading === false ?
            condition_clause['where']['searchOn_contains_all'] ? condition_clause['where']['searchOn_contains_all'].includes("misc") ?
              <span className='mr-5'> {total}</span>
              :
              null : null : null
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
