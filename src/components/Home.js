import React from "react";
import styled from "styled-components";

import Nav from "./Nav";
import Project from "./Project";

const Svg = styled.svg`
  /* width: 100vw;
  height: 5vh; */
`;

const Container = styled.div`
  background: #ffafbd; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #ffc3a0,
    #ffafbd
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #ffc3a0,
    #ffafbd
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  height: 100vh;
`;

const Span = styled.div`
  background-color: #fbe7b5;
  text-align: center;
  padding-top: 10rem;
  border-bottom-left-radius: 50rem;
  border-bottom-right-radius: 40rem;
  margin-top: 0;
`;

const Home = () => {
  return (
    <Container>
      <Nav />
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 200 260 10"
        preserveAspectRatio="none"
      >
        <g transform="translate(30,140)">
          <path
            d="M50.8,-73.7C89.3,-54.2,160.2,-79.9,193.6,-69.9C226.9,-59.9,222.8,-14.2,200.1,17C177.3,48.3,135.9,65.1,101,65.1C66.1,65.1,37.7,48.4,19.6,42.7C1.5,37.1,-6.3,42.5,-14.4,42.9C-22.5,43.3,-30.9,38.7,-33,31.3C-35.1,24,-30.9,13.9,-40.6,0.8C-50.3,-12.3,-73.8,-28.4,-85.8,-54.7C-97.9,-80.9,-98.4,-117.4,-82.2,-147C-66,-176.6,-33,-199.3,-13.4,-178.4C6.1,-157.5,12.3,-93.1,50.8,-73.7Z"
            fill="#F2F8FD"
          />
        </g>
      </Svg>
      <Project />
    </Container>
  );
};

export default Home;
