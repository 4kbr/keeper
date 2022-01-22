import React, { useRef, useState } from 'react';
import styled from "styled-components";
import Webcam from "react-webcam";

const Container = styled.div``;
const Camera = () => {
  const webRef=useRef(null);
  const [fileImg,setFileImg]=useState("");
  const getFileImg = ()=>{
    setFileImg(webRef.current.getScreenshot());
  }

  return (
      <Container>
          React Web cam
          <Webcam ref={webRef}
          audio={false}
          height={720}
          screenshotFormat="image/jpeg"
          width={1280} />
          <button onClick={getFileImg}>Get image</button>
          <img src={fileImg}/>
      </Container>
  );
};

export default Camera;
