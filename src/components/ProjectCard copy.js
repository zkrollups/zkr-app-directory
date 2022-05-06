import React from 'react';
import PropTypes from 'prop-types';
import {
    Heading,
    Box,
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
import Cardpic from  "../actets/card logos/starknet-logo1.svg"
import "./style.css"
import { Twitter, Language, Money } from 'grommet-icons';
import ReactTooltip from 'react-tooltip';
import { NETWORKS } from '../helpers';

const ProjectCard = ({ item }) => (
    <React.Fragment>
        <Card height={{ min: "small", max: "medium" }} width={{ min: "375px", max: "medium" }}  margin="medium" >
            <a href={item.websiteLink} target="_blank" rel="noopener noreferrer">
            {/*  */}
            </a>
        

            <CardBody pad="medium" align="center" className='card_body' background="#FE5400">
                <div className='top_categry'>
                <Button   primary label={item.status} color="white" data-tip data-for={item.name} />
                </div>
          
                <div className='card_imge my-2 p-2' style={{backgroundImage:item.imageLink} }></div>

<div className='body_text'>
    {
        item.search_on.map((value)=>
            <Text margin="small" size="medium" className='body_text_'>{value.toUpperCase()}</Text>
        )
    }


</div>
          
        
        

            </CardBody>
            {/* <CardFooter background="light-2"> */}
           <div className='d-flex foter_wrap'>
                <Text margin="small" size="medium " className='fist_h'>{item.name}</Text>
                <div>
                    <Button icon={<Twitter color="white" />} hoverIndicator href={item.twitterLink} target="_blank" />
                    <Button icon={<Language color="white" />} hoverIndicator href={item.websiteLink} target="_blank" />
                </div>
                </div>
                <div>
                <Text margin="small" size="medium"  color="#7E7E98">Network: {item.category.join(", ")}</Text>
           
                </div>
                <div>
                <Text margin="small" size="medium" color="#7E7E98">Token: {item.tokenStatus ?item.tokenStatus === "Has" ?item.tokenTicker:"Token Expected":"N/A"}</Text>
           
                </div>
    
         
        </Card>
       
    </React.Fragment>
);

ProjectCard.propTypes = {
    item: PropTypes.shape({
        name: PropTypes.string,
        imageLink: PropTypes.string,
        networks: PropTypes.array,
        category: PropTypes.string,
        description: PropTypes.string,
        statusColor: PropTypes.string,
        tooltip: PropTypes.string,
        twitterLink: PropTypes.string,
        websiteLink: PropTypes.string,
    }).isRequired,
};

export default ProjectCard;
