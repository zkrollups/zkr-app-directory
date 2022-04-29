import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Box } from 'grommet';
import { projects } from '../data/data';
import ProjectCard from './ProjectCard';
import { User } from 'grommet-icons';
import "./style.css"

const ProjectsList = ({ filter, search, networkFilter, setFilter }) => {
    // const defaultState = Object.keys(projects).map(key => {console.log(projects[key]); return projects[key]}).flat();
    // console.log("default state===>> ",defaultState)
    const [results, setResults] = useState(projects);
    const [filter_search, setFilterSearch] = useState(true);


//   var  data = results.filter((obj, pos, arr) => {
//         return arr
//           .map(mapObj => mapObj.name)
//           .indexOf(obj.name) == pos;
//       });
     
    //  console.log("datadatadata",results);

  
    useEffect(() => {
        if(search.length && networkFilter.length ){
            if(search.length){
               setFilterSearch(false)
               setFilter("")
            }
           setResults(projects.filter(project => project.name.toLowerCase().includes(search.toLowerCase())).filter(project => project.networks.includes(networkFilter) || !networkFilter.length)); 
           setFilterSearch(true)
       }
       else if (search.length) {
           setFilterSearch(false)
           setFilter("")
           setResults(projects.filter(project => project.name.toLowerCase().includes(search.toLowerCase())));
           setFilterSearch(true)
       } else if(networkFilter.length){
           setResults(projects.filter(project => project.networks.includes(networkFilter) || !networkFilter.length));
       
       }else {
           setResults(projects);
       }
   }, [search,networkFilter]);


   useEffect(() => {
       if(filter_search){
           if(search.length){
               
               !filter.length?setResults(projects.filter(project => project.name.toLowerCase().includes(search.toLowerCase()))):setResults(projects.filter(project => project.name.toLowerCase().includes(search.toLowerCase())).filter(project => project.search_on.indexOf(filter)>=0));
           }
           else{
               if (filter.length) {
                   setResults(projects.filter(project => project.search_on.indexOf(filter)>=0));
               } else {
                   setResults(projects);
               }
           }
           
       }
   }, [filter]);


    const show_more_data=()=>{
        // numberOfItems=numberOfItems+6
        setnum(num+6)
        // console.log("number=========>>>>>>>>>>OfItems",num,results.length )
    }

    const [showmore, setshowmore] = useState(false)

    const [num, setnum] = useState(6)
    // console.log("numberOfInumnum ==========numtems",num,"dddd",results.length )
    // var numberOfItems =showmore ? results.length : 6
    // console.log("chk arry showmore",showmore,"results",results.length,"numberOfItemsfilter",num)

    return (
        <React.Fragment>
            <Box className="custom-scrollbar" direction='row' flex overflow={{ horizontal: 'hidden' }} align='top' justify='center' wrap="true" margin={{ left: "xlarge", right: "xlarge" }} style={{ zoom: "0.92" }}>
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
