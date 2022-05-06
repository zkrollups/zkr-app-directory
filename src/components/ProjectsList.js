import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Box } from 'grommet';
import { projects } from '../data/data';
import ProjectCard from './ProjectCard';
import ProjectCardUp from './ProjectCard copy';
import { User } from 'grommet-icons';
import "./style.css"
import { Dropdown, Menu } from 'semantic-ui-react'
const ProjectsList = ({ filter, search, networkFilter ,results, setResults,setSearch_category, search_category }) => {
    // const defaultState = Object.keys(projects).map(key => {console.log(projects[key]); return projects[key]}).flat();
    // console.log("default state===>> ",defaultState)



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
     
     console.log("datadatadata",results);

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
        console.log("i am inside the search filter====>>>  ",results);
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
        console.log("number=========>>>>>>>>>>OfItems",num,results.length )
    }

    const [showmore, setshowmore] = useState(false)

    const [num, setnum] = useState(40)
    // console.log("numberOfInumnum ==========numtems",num,"dddd",results.length )
    // var numberOfItems =showmore ? results.length : 6
    // console.log("chk arry showmore",showmore,"results",results.length,"numberOfItemsfilter",num)

    return (
        <React.Fragment>
            <div className='row m_row my-3'>
                <div className='col-6 ffff'>
                    <h2 className='m-2'>Featured</h2>
                </div>
                <div className='col-6 bbbb'>
                <Menu compact className='drop_main'>
    <Dropdown  text='Token Status' options={options2}  item />
  </Menu>
  <Menu compact className='drop_main'>
    <Dropdown  text='Network' options={options}  item />
  </Menu>
                </div>
            </div>
          
            <Box className="custom-scrollbar " direction='row' flex overflow={{ horizontal: 'hidden' }} align='top' justify='center' wrap="true"  style={{ zoom: "0.92" }}>
               
               
               
                {results .slice(0, 3)
                   
                    
                    .map((project, idx) => (
                        
                        <ProjectCardUp item={project} key={idx} />
                    ))
                }
              
            </Box>

            <div className='row m_row '>
                <div className='col-6 ffff'>
                    <h2 className='m-2'>Showing : All</h2>
                </div>
                <div className='col-6 bbbb'>

                </div>
            </div>
          
            <Box className="custom-scrollbar  " direction='row' flex overflow={{ horizontal: 'hidden' }} align='top' justify='center' wrap="true"  style={{ zoom: "0.92" }}>
               
               
                {results .slice(0, num) 
                    .map((project, idx) => (
                        
                        <ProjectCard item={project} key={idx} />
                    ))
                }
              
            </Box>
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
