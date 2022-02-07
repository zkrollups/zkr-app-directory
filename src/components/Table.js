import React, { Component } from 'react';
import {
Box,
Grommet,
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
  allProjects = projects.rollups.concat(projects.featured,projects.dApps,projects.daos,projects.infra,projects.misc,projects.nfts,projects.wallets);

  render() {
    return (
      <Box align="center" pad="large" overflow="auto">
        <Table caption="zkRollup Projects with Tokens" size="small">
          <TableHeader>
            <TableRow>
            <TableCell scope="col" border="bottom">
                <strong>Name</strong>
              </TableCell>
              <TableCell scope="col" border="bottom">
                <strong>Token Status</strong>
              </TableCell>
              <TableCell scope="col" border="bottom">
                <strong>Ticker</strong>
              </TableCell>
              <TableCell scope="col" border="bottom">
              <strong>Link</strong>
              </TableCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            {this.allProjects.map((projects) => {
              return (
                <React.Fragment>
                  {projects.tokenStatus ?
                    <TableRow key={projects.name} name={projects.category}>
                      <TableCell scope="row" border="bottom">
                        {projects.name}
                      </TableCell>
                      <TableCell scope="row" border="bottom">
                        {projects.tokenStatus}
                      </TableCell>
                      <TableCell scope="row" border="bottom">
                        {projects.tokenTicker}
                      </TableCell>
                      <TableCell scope="row" border="bottom">  <a href={projects.tokenLink} rel="noreferrer"> {projects.name} </a></TableCell>
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
