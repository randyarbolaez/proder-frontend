import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 1.5vmax;
  text-align: center;
  color: #8c8c8c;
`;

const Description = styled.p`
  align-items: center;
  text-align: start;
  color: #535353;
  margin: 0 1rem;
  height: 12vmin;
  font-size: 1vw;
  align-items: center;
`;

const Wrapper = styled.div`
  flex: 0 1 calc(25% - 1em);
  margin: 2% 2%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 5%;
  transition: 0.3s;
  width: 20vw;
  height: auto;
  background: #ffe0bc;
  justify-content: space-between;
  flex-direction: column;
  word-wrap: break-word;
`;

let Container = styled.div`
  text-align: center;
  background-color: #ffc3a0;
  padding-bottom: 4%;
`;

let Hr = styled.hr`
  border: 1.5px solid #ffe0bc;
`;

let Svg = styled.svg`
  /* height: vh; */
`;

const ProjectCard = ({ project: { title, description, likes, dislikes } }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Svg viewBox="0 0 200 10" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(210,20)">
          <path
            d="M85.1,-104.2C124.1,-107.4,178.9,-107.1,196.4,-84.9C213.9,-62.8,194.1,-18.9,169.1,11C144.1,40.9,114,56.8,89.2,67.2C64.5,77.6,45.1,82.4,20.7,105.5C-3.6,128.6,-32.8,169.8,-69.5,183.4C-106.3,197,-150.6,183,-189,154.8C-227.3,126.6,-259.7,84.3,-237.3,51.5C-215,18.7,-138,-4.6,-98.1,-25.3C-58.3,-46,-55.6,-64.2,-45.5,-74.3C-35.3,-84.3,-17.7,-86.1,2.7,-90.4C23.1,-94.6,46.1,-101.1,85.1,-104.2Z"
            fill="#ffc3a0"
          />
        </g>
      </Svg>
      <Container>
        <span>&nbsp;</span>
        <Hr />
        <span></span>
      </Container>
    </Wrapper>
  );
};

export default ProjectCard;
