import React, { useState,useEffect,useRef } from 'react';
import styled from 'styled-components';
import {Add, Close} from "@mui/icons-material";
import axios from 'axios';
import {useNavigate,useParams} from "react-router-dom";
import FileBase64 from 'react-file-base64';
import Webcam from 'react-webcam';


const Container = styled.div`
height:100vh;
background-color:rgba(0,0,0,0.5);
display:flex;
align-items:center;
justify-content:center;
overflow: hidden;
padding:0 100px;
z-index: 99;
`;
const CamContainer = styled.div`
height:80vh;
width: 700px;
right:0;
top: 0;
left: 0;
background-color:rgba(0,0,0,0.5);
display:flex;
flex-direction: column;
align-items: center;
position: absolute;
z-index: 99;
margin:auto;
`;
const WebcamContainer = styled.div`
    object-fit: cover;
`;
const TableForm= styled.form`
display: flex;
border-radius: 10px;
width: 100vw;
background-color: white;
min-height: 300px;
max-height: 400px;
padding: 0 20px;
justify-content: space-between;
`;
const TableRows = styled.div`
display:flex;
flex-direction: ${props=>props.name!=="add"&&"column"};
align-items: center;
justify-content: space-evenly;
`;
const TableItem = styled.p`
font-weight: bold;
`;
const InputContainer = styled.div`
  border:1px solid lightgray;
  display:flex;
  align-items:center;
  justify-content:space-between;
  background-color:white;
  margin-left:25px;
  padding:5px;
`;
const InputItem= styled.input`
border: none;
  &:focus{
    outline:none;
  }
`;
const ImageContainer = styled.div`
margin:5px;
height:200px;
display:${prop=>prop.img===""?"none":"flex"};
justify-content:center;
align-items:center;
background-color:#f5fbfd;
`;

const Image = styled.img`
height:75%;
z-index:2;

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

const EditItem = () => {
    const [nama,setNama]=useState("");
    const [nik,setNik]=useState("");
    const [foto,setFoto]=useState("");
    const navigate = useNavigate();
    const {id} = useParams();

    const [onCam,setOnCam]=useState("off")
    const webRef=useRef(null);
    const onGetFile = (e)=>{
        e.preventDefault();
        setFoto(webRef.current.getScreenshot());
        setOnCam("off")
    }
    
    const onCamera=(e)=>{
        e.preventDefault();
        setOnCam("on");
    }

    const uri = "http://localhost:5000/api";

    const updateItem = async (e)=>{
        e.preventDefault();
        await axios.put(uri+"/tables/"+id,{
            nik:nik,
            nama:nama,
            foto:foto,
        });
        navigate("/");
    }
    useEffect(()=>{
        getItemById();
    },[]);

    const getItemById = async()=>{
        const res = await axios.get(uri+"/tables/"+id);
        setNik(res.data.nik);
        setNama(res.data.nama);
        setFoto(res.data.foto);
    }
    
    const handleClick=(e)=>{
        e.preventDefault()
        navigate("/");
    }
  return (
      <Container>
          <TableForm color="lightgray" >
            <TableRows name="nik">
                <TableItem >NIK</TableItem>
                <InputContainer><InputItem placeholder='Masukkan NIK' value={nik} onChange={(e)=>setNik(e.target.value)}/></InputContainer>
            </TableRows>
            <TableRows name="nama" >
                <TableItem >NAMA</TableItem>
                <InputContainer><InputItem placeholder='Masukkan NAMA' value={nama} onChange={(e)=>setNama(e.target.value)}/></InputContainer>
            </TableRows>
            <TableRows name="foto">
                <TableItem >FOTO</TableItem>
                <InputContainer><FileBase64 placeholder="pilih file" multiple={ false } onDone={ file=>setFoto(file.base64)} /></InputContainer>
                <InputContainer><Button onClick={onCamera}>With Camera</Button></InputContainer>
                <ImageContainer img={foto}>
                    <Image src={foto}/>
                </ImageContainer>
                {onCam==="on"&&
                <CamContainer>
                    <WebcamContainer><Webcam ref={webRef} audio={false} height={720} screenshotFormat="image/jpeg" width={1280} /></WebcamContainer>
                    <InputContainer><Button onClick={onGetFile}>With Camera</Button></InputContainer>
                </CamContainer>}
                
            </TableRows>
            <TableRows name="add">
                <Button color="#00b400" onClick={updateItem}><Add/></Button>
                <Button onClick={handleClick} color="salmon"><Close/></Button>
            </TableRows>
        </TableForm>
      </Container>
  );
};

export default EditItem;
