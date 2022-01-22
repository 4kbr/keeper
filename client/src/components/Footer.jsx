import { FacebookOutlined, Instagram, MailOutline, Phone, Room, Twitter } from '@mui/icons-material';
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
display:flex;
`;
const Left = styled.div`
flex:1;
display:flex;
flex-direction:column;
padding:20px;
`;
const Logo = styled.h1`
`;
const Desc = styled.p`
margin:20px 0px;
`;
const SocialContainer = styled.div`
display:flex;
`;
const SocialIcon = styled.div`
width:40px;
height:40px;
border-radius:50%;
color:white;
background-color:${props=>props.color};
display:flex;
align-items:center;
justify-content:center;
margin-right:20px;
`;

const Center = styled.div`
flex:1;
padding:20px;
`;
const Title = styled.h3`
margin-bottom:30px;
`;
const List = styled.ul`
margin:0;
padding:0;
list-style:none;
display:flex;
flex-wrap:wrap;
`;
const ListItem = styled.li`
width:50%;
margin-bottom:10px;
`;

const Right = styled.div`
flex:1;
padding:20px;
`;
const ContactItem = styled.div`
margin-bottom:20px;
display:flex;
align-items:center
`;
const Payment = styled.img`
width:50%;
`;

const Footer = () => {
    return (
    <Container>
        <Left>
            <Logo>Kantong</Logo>
            <Desc>
                Berdiri sejak tahun 2018 kami selalu siap
                untuk menyediakan kebutuhan anda.
            </Desc>
            <SocialContainer>
                <SocialIcon color="blue">
                    <FacebookOutlined/>
                </SocialIcon>
                <SocialIcon color="salmon">
                    <Instagram/>
                </SocialIcon>
                <SocialIcon color="aqua">
                    <Twitter/>
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Link Belanja</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Fasion Pria</ListItem>
                <ListItem>Fasion Wanita</ListItem>
                <ListItem>Aksesoris</ListItem>
                <ListItem>Akun Profil</ListItem>
                <ListItem>Keranjang</ListItem>
                <ListItem>Daftar Favorit</ListItem>
                <ListItem>Ketentuan</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem><Room style={{marginRight:"10px"}} /> jl.KH. Ahmad Dahlan, no 29, 17510</ContactItem>
            <ContactItem><Phone style={{marginRight:"10px"}} /> +628821272</ContactItem>
            <ContactItem><MailOutline style={{marginRight:"10px"}} /> contact@kantong.id</ContactItem>
            <Payment src="https://www-cdn.pawoon.com/wp-content/uploads/2019/11/18124647/banner-logo.png"/>
        </Right>
    </Container>
    )
}

export default Footer
