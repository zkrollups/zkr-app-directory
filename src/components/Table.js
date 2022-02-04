import React from 'react';
import {
Box,
Grommet,
Table,
TableBody,
TableCell,
TableFooter,
TableHeader,
TableRow,
Text,
} from 'grommet';

import { grommet } from 'grommet/themes';
import { data, columns } from './data';
export const Default = () => (

<Table>
 <Grommet theme={grommet}>
    <Box align="center" pad="large">
<Table caption="Default Table">
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
    <TableRow>
      <TableCell scope="row" border="bottom">
        One
      </TableCell>
      <TableCell scope="row" border="bottom">Two</TableCell>
      <TableCell scope="row" border="bottom">Three</TableCell>
      <TableCell scope="row" border="bottom">  <a href="https://zksync.io/faq/tokenomics.html" rel="noreferrer"> zkSync </a></TableCell>
    </TableRow>
     <TableRow>
      <TableCell scope="row" border="bottom">
        One
      </TableCell >
      <TableCell scope="row" border="bottom">Two</TableCell> 
      <TableCell scope="row" border="bottom">Three</TableCell>
<TableCell scope="row" border="bottom">  <a href="https://zksync.io/faq/tokenomics.html" rel="noreferrer"> zkSync </a></TableCell>    </TableRow>
     <TableRow>
      <TableCell scope="row" border="bottom">
        One
      </TableCell>
      <TableCell scope="row" border="bottom">Two</TableCell>
      <TableCell scope="row" border="bottom">Three</TableCell>
<TableCell scope="row" border="bottom">  <a href="https://zksync.io/faq/tokenomics.html" rel="noreferrer"> zkSync </a></TableCell>    </TableRow>
  </TableBody>
</Table>
</Box>
</Grommet>;

);
export default;
