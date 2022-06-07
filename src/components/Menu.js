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
import "./style.css"

const Menu = ({ setFilter, filter,results, setResults,set_search,search_in,setSearch_in  }) => {

  const navigate = useNavigate();
  //console.log(results. length,"resultsresults")

  const [click, setClick] = useState(false);
  //console.log("width========>> ",window.innerWidth)
  const [active, setactive] = useState(false);
 
  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);

var allCounts=[];
var search_category = 'asasd';
var  localfilter='';
const getAllCounts=() =>{
 
  Array.isArray(filter) ? localfilter = filter.toString() : localfilter = filter;
  allCounts=[];
  allCounts.push(localfilter.toLowerCase()=="all" || localfilter.toLowerCase()==""?results.length:0);

 var rollupsCount =0;
 if( localfilter.includes("rollups")){
  rollupsCount= results
  .filter((result) => {
    return (
      
      search_category != "all"
                ? result.search_on.indexOf('rollups') >= 0
                : true
    )
 })
 }
 

 allCounts.push( localfilter.includes("rollups") ? rollupsCount.length : 0);
 
 var walletsCount =0;
 if( localfilter.includes("wallets")){
  walletsCount= results
  .filter((result) => {
    return (
      
      search_category != "all"
                ? result.search_on.indexOf('wallets') >= 0
                : true
    )
 })
 }
 allCounts.push( localfilter.includes("wallets") ? walletsCount.length : 0)

 var infraCount =0;
 if( localfilter.includes("infra")){
  infraCount= results
  .filter((result) => {
    return (
      
      search_category != "all"
                ? result.search_on.indexOf('infra') >= 0
                : true
    )
 })
 }
 allCounts.push( localfilter.includes("infra") ? infraCount.length : 0)

 
 
 var dAppsCount =0;
 if( localfilter.includes("dApps")){
 dAppsCount= results
  .filter((result) => {
    return (
      
      search_category != "all"
                ? result.search_on.indexOf('dApps') >= 0
                : true
    )
 })
 }
 allCounts.push( localfilter.includes("dApps") ? dAppsCount.length : 0)


 var nftsCount =0;
 if( localfilter.includes("nfts")){
  nftsCount= results
  .filter((result) => {
    return (
      
      search_category != "all"
                ? result.search_on.indexOf('nfts') >= 0
                : true
    )
 })
 }
 allCounts.push( localfilter.includes("nfts") ? nftsCount.length : 0)

 var gamesCount =0;
 if( localfilter.includes("games")){
  gamesCount= results
  .filter((result) => {
    return (
      
      search_category != "all"
                ? result.search_on.indexOf('games') >= 0
                : true
    )
 })
 }
 allCounts.push( localfilter.includes("games") ? gamesCount.length : 0)

 var socialCount =0;
 if( localfilter.includes("social")){
  socialCount= results
  .filter((result) => {
    return (
      
      search_category != "all"
                ? result.search_on.indexOf('social') >= 0
                : true
    )
 })
 }
 allCounts.push( localfilter.includes("social") ? socialCount.length : 0)

 var daosCount =0;
 if( localfilter.includes("daos")){
  daosCount= results
  .filter((result) => {
    return (
      
      search_category != "all"
                ? result.search_on.indexOf('daos') >= 0
                : true
    )
 })
 }
 allCounts.push( localfilter.includes("daos") ? daosCount.length : 0)


 var miscCount =0;
 if( localfilter.includes("misc")){
  miscCount= results
  .filter((result) => {
    return (
      
      search_category != "all"
                ? result.search_on.indexOf('misc') >= 0
                : true
    )
 })
 }
allCounts.push( localfilter.includes("misc") ? miscCount.length : 0)





//  allCounts.push(rollupsCountwallets.length);
 

 //allcounts.push(results.filter(results.).length);
 //console.log("kuch day doonnnnn",allCounts);

}

getAllCounts();
  const filter_fun=(e)=>{
   
    navigate("/")
    setFilter(e)
    setactive(e)
    set_search("")
    setSearch_in("")

    //console.log("chk filter_fun",e)
  }
  return (
    <React.Fragment>


      {/* <Box margin={'auto'} direction="column" justify="between" gap="small" style={{    overflowX: "auto", whiteSpace: "nowrap"}}> */}
     
     
     
      <div className='btn_wrap mt-4'>
      <h1 className='text-cente'>Categories</h1>
      </div>
      
        <div className={allCounts[0] > 0  ?'btn_wrap active active2 px-3':'btn_wrap px-3 '} onClick={(e) => filter_fun((''))  }  > 
        <img className='menu_logo cat_image' src={icon1} width={'22px'} height={"22px"}></img>
          <span className='mx-3 categry cat_title'> All</span>
          {
            allCounts[0] > 0 ? 
            
             <span className='mr-3'> {allCounts[0]}</span>
             :
             null
          }
          
         
        </div>

        <div className={ allCounts[1] > 0 ||  localfilter.includes ("rollups")  ? 'btn_wrap active px-3': 'btn_wrap px-3 ' }  onClick={() => filter_fun(('rollups')) }  > 
          <div><img className='cat_image' src={icon2} width={'22px'} height={"22px"}></img></div>
          <span className='mx-3 cat_title'> Rollups</span>
          {
            allCounts[1] > 0 ? 
            
             <span className='mr-'> {allCounts[1]}</span>
             :
             null
        
             
          }
         
             
        
          
        </div>
        

        {/* <button label="All" setFilter('rollups')} active={filter === 'rollups'}  /> */}
        <div className= { allCounts[2] > 0 ||  localfilter.includes ("wallets") ? 'btn_wrap active px-3':'btn_wrap px-3 '}   onClick={() => filter_fun(('wallets')) } > 
          <div><img className='cat_image' src={icon3} width={'22px'} height={"22px"}></img></div>
          <span className='mx-3 cat_title'> Wallets</span>
          {
            allCounts[2] > 0 ?
             <span className='mr-5'> {allCounts[2]}</span>
             :
             null
          }
          {/* <button label="All" onClick={() => setFilter('')}  /> */}
        </div>
        <div className={ allCounts[3] > 0 ||  localfilter.includes ("infra") ? 'btn_wrap active px-3':'btn_wrap px-3 '}  onClick={() => filter_fun(('infra')) }> 
          <div><img className='cat_image' src={icon4} width={'22px'} height={"22px"}></img></div>
          <span className='mx-3 cat_title'> Infra</span>
          {
            allCounts[3] > 0 ?
             <span className='mr-5'> {allCounts[3]}</span>
             :
             null
          }
          {/* <button label="All" onClick={() => setFilter('')}  /> */}
        </div>
        <div className={ allCounts[4] > 0 ||  localfilter.includes ("dApps") ? 'btn_wrap active px-3':'btn_wrap px-3 '}  onClick={() => filter_fun(('dApps')) }> 
          <div><img  className='cat_image' src={icon5} width={'22px'} height={"22px"}></img></div>
          <span className='mx-3 cat_title'> dApps</span>
          {
            allCounts[4] > 0 ?
             <span className='mr-5'> {allCounts[4]}</span>
             :
             null
          }
          {/* <button label="All" onClick={() => setFilter('')}  /> */}
        </div>
        <div className={ allCounts[5] > 0 ||  localfilter.includes ("nfts") ? 'btn_wrap active px-3':'btn_wrap px-3 '}  onClick={() => filter_fun(('nfts')) }> 
          <div><img className='cat_image' src={icon6} width={'22px'} height={"22px"}></img></div>
          <span className='mx-3 cat_title'> NFTs</span>
          {
          allCounts[5] > 0 ?
             <span className='mr-5'> {allCounts[5]}</span>
             :
             null
          }
          {/* <button label="All" onClick={() => setFilter('')}  /> */}
        </div>
        <div className={ allCounts[6] > 0 ||  localfilter.includes ("games") ? 'btn_wrap active px-3':'btn_wrap px-3 '}  onClick={() => filter_fun(('games')) }> 
          <div><img className='cat_image' src={icon7} width={'22px'} height={"22px"}></img></div>
          <span className='mx-3 cat_title'> Games</span>
          {
          allCounts[6] > 0 ?
             <span className='mr-5'> {allCounts[6]}</span>
             :
             null
          }
          {/* <button label="All" onClick={() => setFilter('')}  /> */}
        </div>
        <div className={ allCounts[7] > 0 ||  localfilter.includes ("social")  ? 'btn_wrap active px-3':'btn_wrap px-3 '}  onClick={() =>filter_fun (('social')) }> 
          <div><img className='cat_image' src={icon8} width={'22px'} height={"22px"}></img></div>
          <span className='mx-3 cat_title'> Social</span>
          {
           allCounts[7] > 0 ?
             <span className='mr-5'> {allCounts[7]}</span>
             :
             null
          }
          {/* <button label="All" onClick={() => setFilter('')}  /> */}
        </div>
        <div className={ allCounts[8] > 0 ||  localfilter.includes ("daos") ? 'btn_wrap active px-3':'btn_wrap px-3 '}  onClick={() => filter_fun(('daos')) }> 
          <div><img src={icon9} width={'22px'} height={"22px"}></img></div>
          <span className='mx-3 cat_title'> DAOs</span>
          {
           allCounts[8] > 0 ?
             <span className='mr-5'> {allCounts[8]}</span>
             :
             null
          }
          {/* <button label="All" onClick={() => setFilter('')}  /> */}
        </div>
        <div className={ allCounts[9] > 0 ||  localfilter.includes ("misc") ? 'btn_wrap active px-3':'btn_wrap px-3 '}  onClick={() => filter_fun(('misc')) }> 
          <div><img className='cat_image' src={icon10} width={'22px'} height={"22px"}></img></div>
          <span className='mx-3 cat_title'> Misc</span>
          {
            allCounts[9] > 0 ?
             <span className='mr-5'> {allCounts[9]}</span>
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
