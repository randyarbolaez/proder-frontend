import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  .user-no {
    margin: 1%;
    background-color: #ffdfdc;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    border-radius: 5vh;
    overflow: hidden;
    padding: 2%;
    width: 15vw;
    border-bottom-left-radius: 0;
    font-size: 1vw;
  }
  .user-yes {
    margin: 1%;
    margin-left: auto;
    margin-right: 2.5%;
    background-color: #fed876;
    padding: 2%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    border-radius: 5vh;
    border-bottom-right-radius: 0;
    overflow: hidden;
    width: 15vw;
    font-size: 1vw;
  }
`;

const User = styled.span`
  font-size: 0.8em;
  color: #808285;
`;

const Message = ({ message }) => {
  let user = localStorage.getItem("user");

  return (
    <Container>
      <div className={user === message.user ? "user-yes" : "user-no"}>
        <p>{message.body}</p>
        <User>{message.user}</User>
      </div>
    </Container>
  );
};

export default Message;
