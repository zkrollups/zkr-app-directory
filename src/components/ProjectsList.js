import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Box } from 'grommet';
import { projects } from '../data/data';
import ProjectCard from './ProjectCard';
import ProjectCardUp from './ProjectCard copy';
import { User } from 'grommet-icons';
import "./style.css"
import { Dropdown, Menu } from 'semantic-ui-react'
import { Twitter, Language, Money } from 'grommet-icons';
import globe from '../actets/globe.png';
import twitter from '../actets/twitter.png';
import {
    Heading,
    Button,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Image,
    Text,
    Paragraph,
    Avatar,
} from 'grommet';
const ProjectsList = ({ filter, search, networkFilter ,results, setResults,setSearch_category, search_category }) => {
    // const defaultState = Object.keys(projects).map(key => {console.log(projects[key]); return projects[key]}).flat();
    // console.log("default state===>> ",defaultState)

var colors=["#36368F","#6C6DD6","#EB5600","#2D2F4B","#F1F1F0"]

    const options2 = [
        { key: 1, text: 'Choice 1', value: 1 },
        { key: 2, text: 'Choice 2', value: 2 },
        { key: 3, text: 'Choice 3', value: 3 },
      ]
    const options = [
        { key: 1, text: 'loopring', value: 1 },
        { key: 2, text: 'zkspace', value: 2 },
        { key: 3, text: 'aztec', value: 3 },
        { key: 1, text: 'loopring', value: 1 },
        { key: 2, text: 'zkspace', value: 2 },
        { key: 3, text: 'aztec', value: 3 },
      ]
    
//   var  data = results.filter((obj, pos, arr) => {
//         return arr
//           .map(mapObj => mapObj.name)
//           .indexOf(obj.name) == pos;
//       });
     
    //  console.log("datadatadata",results);

     useEffect(() => {
         console.log("i am inside the search filter==> ",search);
         if(search.length && networkFilter.length ){
            setResults(projects.filter(project => project.name.toLowerCase().includes(search.toLowerCase()) && search_category!="all"?project.search_on.indexOf(search_category)>=0:true   ).filter(project => project.networks.includes(networkFilter) || !networkFilter.length)); 
         }
        else if (search.length) {

            setResults(projects.filter(project => project.name.toLowerCase().includes(search.toLowerCase()) && search_category!="all"?project.search_on.indexOf(search_category)>=0:true    ));
        } else if(networkFilter.length){
            setResults(projects.filter(project => project.networks.includes(networkFilter) || !networkFilter.length));
        
        }else {
            setResults(projects);
        }
        // console.log("i am inside the search filter====>>>  ",results);
    }, [search,networkFilter]);


    useEffect(() => {
        if (filter.length) {
            setResults(projects.filter(project => project.search_on.indexOf(filter)>=0));
        } else {
            setResults(projects);
        }
    }, [filter]);


    const show_more_data=()=>{
        // numberOfItems=numberOfItems+6
        setnum(num+32)
        // console.log("number=========>>>>>>>>>>OfItems",num,results.length )
    }

    const [showmore, setshowmore] = useState(false)

    const [num, setnum] = useState(40)
    const [num2, setnum2] = useState(3)
    // console.log("numberOfInumnum ==========numtems",num,"dddd",results.length )
    // var numberOfItems =showmore ? results.length : 6
    // console.log("chk arry showmore",showmore,"results",results.length,"numberOfItemsfilter",num)

    return (
        <React.Fragment className="main_product">
            <div className='row  my-3 container'>
                <div className='col-6 ffff '>
                    <h2 className='m-2'>Featured</h2>
                </div>
                <div className='col-6  bbbb '>
                <Menu compact className='drop_main'>
    <Dropdown  text='Token Status' options={options2}  item />
  </Menu>
  <Menu compact className='drop_main'>
    <Dropdown  text='Network' options={options}  item />
  </Menu>
                </div>
            </div>
            <div className='row show_cards container'>
                {results .slice(0, num2) 
                    .map((item, idx) => (
                        
                        <div class="v40_4201_up  col-5 mt-5" >
                        <div class="v40_4202_up" style={{"background":colors[Math.floor(Math.random()*colors.length)]}}>
                        <div class="v40_4211"  ><span class="v40_4212 "  style={{"background-color":item.statusColor}}>{item.status} </span></div>
                        <div className='card_imge my-2 p-2' height={"15px"} style={{backgroundImage:item.imageLink} } ></div>
                        <div className='d-flex '>
                       {
                        item.search_on.map((value)=>
                        <div class="v40_4213_up "><span class="v40_4214">{value.toUpperCase()}</span></div>
                        )
                        }
                       </div>
                        <div class="v40_4215">
                            <div class="v40_4216"></div>
                            <div class="v40_4217"></div>
                        </div>
                        </div>
                        {/* <div className='row'>
                            <span class="v40_4218">{item.name}</span>
                   
                            <div>
                                <Button icon={<Twitter color="white" width={"18"} height={"18"} />} hoverIndicator href={item.twitterLink} target="_blank" />
                                <Button icon={<Language color="white"  width={"18"} height={"18"} />} hoverIndicator href={item.websiteLink} target="_blank" />
                            </div>
                        </div> */}
                        <div className='d-flex foter_wrap'>
                        <span class="v40_4218">{item.name}</span>
                        <div className='links_2'>
                                <Button icon={<Twitter color="white" width={"23px"} height={"23px"} />} hoverIndicator href={item.twitterLink} target="_blank" />
                                <Button icon={<img color="white"  src={globe} width={'23px'} height={"23px"} />} hoverIndicator href={item.websiteLink} target="_blank" />
                            </div>
                        </div>
                        <br></br>
                        <span class="v40_4220">Network: {item.category.join(", ")}</span><br/>
                        <span class="v40_4219">Token: {item.tokenStatus ?item.tokenStatus === "Has" ?item.tokenTicker:"Token Expected":"N/A"}</span>
                       
                    </div>
                    ))
                }
                </div>

            <div className='row  '>
                <div className='col-6 ffff'>
                    <h2 className=''>Showing : {filter==""?"All":filter.toUpperCase()}</h2>
                </div>
                <div className='col-6 bbbb'>

                </div>
            </div>
          
            {/* <Box className="custom-scrollbar  " direction='row' flex overflow={{ horizontal: 'hidden' }} align='top' justify='center' wrap="true"  style={{ zoom: "0.92" }}> */}
               
               {/* <div className='v40_4293'> */}
               <div className='row show_cards container'>
                {results .slice(0, num) 
                    .map((item, idx) => (
                        
                        <div class="v40_4201  mt-5" >
                        <div class="v40_4202" style={{"background":colors[Math.floor(Math.random()*colors.length)]}}>

                        {
                            item.status=="TESTNET"?
                            <div class="v40_4211_ten" ><span class="v40_4212"  style={{"background-color":item.statusColor}}>{item.status} </span></div>
                            :
                            <div class="v40_4211" ><span class="v40_4212"  style={{"background-color":item.statusColor}}>{item.status} </span></div>
                        }

                        {/* <div class="v40_4211" ><span class="v40_4212"  style={{"background-color":item.statusColor}}>{item.status} </span></div> */}
                        <div className='card_imge my-2 p-2' height={"15px"} style={{backgroundImage:item.imageLink} } ></div>
                       <div className='d-flex'>
                       {
                        item.search_on.map((value)=>
                        <div class="v40_4213"><span class="v40_4214">{value.toUpperCase()}</span></div>
                        )
                        }
                       </div>
                        
                        <div>
                            
                        </div>
                        <div class="v40_4215">
                            <div class="v40_4216"></div>
                            <div class="v40_4217"></div>
                        </div>
                        </div>
                        {/* <div className='row'>
                            <span class="v40_4218">{item.name}</span>
                   
                            <div>
                                <Button icon={<Twitter color="white" width={"18"} height={"18"} />} hoverIndicator href={item.twitterLink} target="_blank" />
                                <Button icon={<Language color="white"  width={"18"} height={"18"} />} hoverIndicator href={item.websiteLink} target="_blank" />
                            </div>
                        </div> */}
                        <div className='d-flex foter_wrap'>
                        <span class="v40_4218">{item.name}</span>
                        <div className='links_'>
                                <Button icon={<Twitter color="white" width={"23px"} height={"23px"} />} hoverIndicator href={item.twitterLink} target="_blank" />
                                <Button icon={<img color="white"  src={globe} width={'23px'} height={"23px"} />} hoverIndicator href={item.websiteLink} target="_blank" />
                            </div>
                        </div>
                        <br></br>
                        <span class="v40_4220">Network: {item.category.join(", ")}</span><br/>
                        <span class="v40_4219">Token: {item.tokenStatus ?item.tokenStatus === "Has" ?item.tokenTicker:"Token Expected":"N/A"}</span>
                       
                    </div>
                    ))
                }
                </div>
                {/* </div> */}
              
            {/* </Box> */}
{
  
     num > results.length -1 ?
    null
    :

<div className='more_wrap'>
<button 
className='btn_load'
onClick={show_more_data}>
Show More
</button>
   
</div>
}

           
        </React.Fragment>
    )
}
    ;

ProjectsList.propTypes = {
    filter: PropTypes.string.isRequired,
    search: PropTypes.string.isRequired,
    networkFilter: PropTypes.string.isRequired,
};

export default ProjectsList;
