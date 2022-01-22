import React from 'react'
import styled from 'styled-components';

const TableColumns= styled.div`
display: flex;
background-color: white;
height: 50px;
align-items: center;
`;
const TableRows = styled.div`
flex:${props=>props.flex};
display:flex;
height:20px;
align-items: center;
justify-content:center;
`;
const TableItem = styled.p`
font-weight: "bold";
`;

const TableHeader = () => {
  return (
    <TableColumns >
      <TableRows flex="1">
        <TableItem>No</TableItem>
      </TableRows>
      <TableRows name="nik" flex="2">
        <TableItem>NIK</TableItem>
      </TableRows>
      <TableRows name="nama" flex="2">
        <TableItem>NAMA</TableItem>
      </TableRows>
      <TableRows name="foto" flex="3">
        <TableItem>FOTO</TableItem>
      </TableRows>
      <TableRows name="action" flex="1">
        <TableItem>Option</TableItem>
      </TableRows>
    </TableColumns>
  )
}

export default TableHeader