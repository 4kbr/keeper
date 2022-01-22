import React,{useEffect, useState} from 'react';
import Table from './Table';
import TableHeader from './TableHeader';
import styled from 'styled-components';
import {Add} from '@mui/icons-material';
import axios from "axios";
import {useNavigate} from "react-router-dom";

const Container = styled.div`
width:100%;
min-height: 50vh;
display:flex;
align-items:center;
justify-content: center;
/* background-color: aqua; */
/* padding: 50px; */
`;
const Wrapper = styled.div`
width:100%;
margin:50px;
padding: 50px;
background-color:white;
position: relative;
`;

const OptionContainer = styled.div`
  width:100%;
  display:flex;
  flex-direction: row-reverse;
  align-items:center;
  justify-content:space-between;
`;
// const SearchContainer=styled.div`
// border: 1px solid lightgray;
// padding: 5px;
// height: 30px;
// display: flex;
// align-items: center;
// justify-content: center;
// `;
// const FindItem = styled.input`
//   border: none;

//   &:focus{
//     border: none;
//     background:transparent;
//   }
// `;
const Button = styled.button`
  width: 50px;
  height: ${props=>props.height};
  border: none;
  border-radius: 10px;
  background-color: #d307d3;
  cursor:pointer;
  
`;

const TableSquare=styled.div`
display: flex;
flex-direction: column;
/* border: 1px solid black;
border-radius: 10px;
overflow: hidden; */
`;
const Hr = styled.hr`
  border: none;
  height: 2px;
  background-color: #eee;
`;

const Tables = () => {
  const [tableItem,setTableItem] = useState([]);
  const uri = "http://localhost:5000/api";
  const navigate = useNavigate();

  useEffect(() => {
    getListItem()
  }, []);
  const getListItem = async()=>{
    const res = await axios.get(uri+"/tables")
    setTableItem(res.data);
  }

  const deleteItem = async (id)=>{
    await axios.delete(uri+"/tables/"+id);
    getListItem();
  }

  const handleAdd= ()=>{
    navigate("/add");
  }

  return (
    <Container>
    	<Wrapper>
        <OptionContainer>
          <Button onClick={handleAdd} height="40px"><Add/> </Button>
        </OptionContainer>
        <TableSquare>
          <TableHeader/>
          <Hr/>
          {tableItem.map((item,index)=>(
            <div>
              <Table nik={item.nik} nama={item.nama} foto={item.foto} no={index+1} key={item._id} id={item._id} onClick={deleteItem}/>
              <Hr/>
            </div>
          ))}
          
        </TableSquare>
      </Wrapper>
    </Container>
  )
}

export default Tables;