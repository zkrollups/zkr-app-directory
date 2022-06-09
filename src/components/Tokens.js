import React, { Component } from 'react';
import './token.css';
import {
Box,
Grommet,
Heading,
Tab,
Table,
TableBody,
TableCell,
TableFooter,
TableHeader,
TableRow,
Text,
} from 'grommet';

// import { grommet } from 'grommet/themes';
import { projects } from '../data/data';

class TokenTable extends Component {
  allProjects = projects;

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
            {this.allProjects.map((projects) => {
              return (
                <React.Fragment >
                  {projects.tokenStatus ?
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
                  : null}
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
