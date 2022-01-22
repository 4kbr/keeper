import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Tables from '../components/Tables';

const Container = styled.div`
  background-color: #eef;
  min-height:100vh;
`;

const Home = () => {
  return (
    <Container>
      <Navbar/>
      <Tables/>
    </Container>
  );
};

export default Home;
