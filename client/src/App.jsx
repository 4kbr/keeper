import React from 'react';
import styled from 'styled-components';
import Home from './pages/Home';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import AddItem from './components/AddItem';
import EditItem from './components/EditItem';
import Camera from './components/Camera';
import Login from './pages/Login';

const Container = styled.div`
`;

const App = () => {
  return (
    <Router>
      <Container>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/add" element={<AddItem/> }/>
          <Route exact path="/edit/:id" element={<EditItem/> }/>
          <Route exact path="/cam" element={<Camera/> }/>
          <Route exact path="/login" element={<Login/> }/>
        </Routes>
      </Container>
    </Router>
  )
}

export default App;