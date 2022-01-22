import { Delete, Edit } from '@mui/icons-material';
import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const TableColumns= styled.div`
display: flex;
background-color: white;
min-height: 50px;
align-items: center;
`;
const TableRows = styled.div`
flex:${props=>props.flex};
display:flex;
min-height:20px;
align-items: center;
justify-content:center;
/* border:1px solid black; */
`;
const TableItem = styled.p`
font-size: 1.5rem;
`;
const Button = styled.button`
background-color: ${prop=>prop.color};
width: 60px;
height: 30px;
display: flex;
align-items: center;
justify-content: center;
border: none;
border-radius: 10px;
cursor:pointer;
`;
const ImageContainer = styled.div`
margin:5px;
height:150px;
display:flex;
justify-content:center;
align-items:center;
background-color:#f5fbfd;
`;

const Image = styled.img`
height:75%;
`;

const Table = (item) => {
  return (
    <TableColumns color={item.index}>
      <TableRows name="no" flex="1">
        <TableItem>{item.no}</TableItem>
      </TableRows>
      <TableRows name="nik" flex="2">
        <TableItem>{item.nik}</TableItem>
      </TableRows>
      <TableRows name="nama" flex="2">
        <TableItem>{item.nama}</TableItem>
      </TableRows>
      <TableRows name="foto" flex="3">
        <ImageContainer>
          <Image src={item.foto} />
        </ImageContainer>
        
      </TableRows>
      <TableRows name="action" flex="1">
        <Link to={"/edit/"+item.id}><Button color="blue"><Edit/> </Button></Link>
        <Button color="red" onClick={()=>item.onClick(item.id)}><Delete/></Button>
      </TableRows>
    </TableColumns>
  )
}

export default Table