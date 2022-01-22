import React from 'react';
import styled from 'styled-components';

// Buat container
const Container = styled.div`
  height: 60px;
  background-color: lightgray;
`
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

`
const Left = styled.div`
  flex: 1;
  display:flex;
  align-items: center;
`;
const Language = styled.span`
  font-size:14px;
  cursor: pointer;
`;
const Center = styled.div`
  flex:1;
  text-align: center;
`;
const Logo = styled.h1`
  font-weight:bold;
`;

const Right = styled.div`
  flex:1;
  display:flex;
  align-items:center;
  justify-content:flex-end;
`;
const MenuItem = styled.div`
  font-size:14px;
  cursor:pointer;
  margin-left:25px;
`;

// Mengatur display Navbar
const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
        </Left>
        <Center>
          <Logo>Keeper</Logo>
        </Center>
        <Right>
        <MenuItem>WELCOME</MenuItem> 
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar;
