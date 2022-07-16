import React, { Component,} from 'react';
import './token.css';
import {
Box,
Heading,
Table,
TableBody,
TableCell,
TableHeader,
TableRow,
} from 'grommet';
import axios from "axios";
// import { grommet } from 'grommet/themes';
// import { projects } from '../data/data';

class TokenTable extends Component {
  // allProjects = projects;
  // const [results, setResults] = useState([]);
  state = {

    results: []

  };
  componentDidMount(){
    this.getdata_tokens().then((data)=>{
      this.setState({ results: data.data.data.projectCollection.items });
    })
    
  }
  async getdata_tokens() {
// console.log("condditon ===>> ",condition_clause)

  var graphql = {
    query: `query ($where:${process.env.REACT_APP_CONTENTFUL_PROJECT}Filter){\r\n  ${process.env.REACT_APP_CONTENTFUL_PROJECT.toLowerCase()}Collection(where:$where,) {\r\n    total\r\n    skip \r\n    limit\r\n    \r\n    items {\r\n      sys{id,publishedAt,}\r\n      \r\n      name\r\n      backgroundColor\r\n      category\r\n      description\r\n      websiteLink\r\n      getStartedLink1\r\n      getStartedLink2\r\n      imageLink\r\n      linkText1\r\n      linkText2\r\n      networks\r\n      searchOn\r\n      status\r\n      statusColor\r\n      getStartedText2\r\n      getStartedText3\r\n      tooltip\r\n      twitterLink\r\n      walletAddress\r\n      featured\r\n      tokenLink\r\n      tokenStatus\r\n      tokenImageUrl\r\n      tokenTicker\r\n      googlePlay\r\n      appleStore\r\n      getStartedText1\r\n      githubLink\r\n      docsLink\r\n      explorerLink\r\n      discordLink\r\n}\r\n  }\r\n}\r\n`,
    variables: {
      where:{
        tokenStatus_exists:true  
      }
    }
  }
  // var data_n =[];
  const data = await axios({
    url: `https://graphql.contentful.com/content/v1/spaces/${process.env.REACT_APP_CONTENTFUL_SPACE}/`,
    method: 'post',
    headers: {
      "Authorization":`Bearer ${process.env.REACT_APP_CONTENTFUL_API}`
  },
    data: graphql
  });
  
  
  // axios.post(`https://graphql.contentful.com/content/v1/spaces/daabvgh6kr39/`,graphql,{
  //     headers:{
  //         "Authorization":"Bearer lsyCtIMQzYCyw6c6Apn2SH52v8OAk8kJfFcVEAlQpL8"
  //     }
  // });
  // for(var i=0;i<data.data.items.length;i++){
  //     const d = data.data.items[i].fields
  //     const key =Object.keys(d)
  //     var project_single={}
  //     for(var j =0;j<key.length;j++){
  //         project_single[key[j]]=d[key[j]]['en-US']
  //     }
  //     data_n.push(project_single)
  //     // console.log("keys===>> ",)
  // }
  // console.log("Proojects========>> ",data_n)
  // setprojects(data_n)
  // return data_n;
  // for
  // console.log("data ====>> ",data);
  
  // .then((Response)=>
  // setpost(Response.data))

 
  // .catch(error)

  // console.log(" callapi=================>>>>> ", response.data);
  return data;
}
  render() {
    return (
 
      <Box align="center" pad="large" overflow="auto"> 
        <Heading size="small">zkRollup Projects with Tokens</Heading>
        <Table size="medium" className="tbltokens">
          <TableHeader className='scop-1'>
            <TableRow >
            <TableCell scope="col" border="bottom ">
                <strong>Name</strong>
              </TableCell>
              <TableCell scope="col" border="bottom ">
                <strong>Token Status</strong>
              </TableCell>
              <TableCell scope="col" border="bottom ">
                <strong>Ticker</strong>
              </TableCell>
              <TableCell className='linkk' scope="col" border="bottom ">
              <strong>Link</strong>
              </TableCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            {this.state.results.map((projects) => {
              return (
                <React.Fragment >
                  {/* {projects.tokenStatus ? */}
                    <TableRow   key={projects.name} name={projects.category}>
                      <TableCell  scope="row" border="bottom " style={{fontWeight:"bold"}}>
                        {projects.name}
                      </TableCell>
                      <TableCell scope="row" border="bottom ">
                        {projects.tokenStatus}
                      </TableCell>
                      <TableCell scope="row" border="bottom ">
                        {projects.tokenTicker}
                      </TableCell>
                      <TableCell scope="row" border="bottom ">  <a href={projects.tokenLink} rel="noreferrer"> Link </a>
                      </TableCell>
                    </TableRow>
                  {/* : null} */}
                </React.Fragment>
              )
            })}
          </TableBody>
        </Table>
      </Box>
    )
  };
};

export default TokenTable;
