// import ENV from "../env"; WEBSOCKET

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Scrollbars } from "react-custom-scrollbars";
// import socketIOClient from "socket.io-client";  WEBSOCKET

import * as messageActions from "../store/actions/messages-actions";
import Message from "./Message";

// const ENDPOINT = ENV.apiUrl; WEBSOCKET

const Container = styled.div`
  margin: 2% 2%;
  background-color: #f5a08c;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 2vh;
  overflow: hidden;
  /* overflow-x: hidden; */
  height: 40vmax;
  display: flex;
  flex-direction: column;
`;

const FormWrapper = styled.div`
  display: flex;
  margin-top: auto;
  .message-input {
    background-color: none;
    border: none;
    width: 90%;
    height: 3vmax;
    text-align: center;
    font-size: 1.3vmax;
    color: #ff5e62;
  }
  .button {
    background-color: #d3cce3;
    border: none;
    width: 10%;
    color: #ff5e62;
    font-size: 1vmax;
  }
`;

const MessageRoom = () => {
  // const [response, setResponse] = useState([]);  WEBSOCKET
  const [body, setBody] = useState("");
  const [user, setUser] = useState("");
  const dispatch = useDispatch();
  const messages = useSelector((state) => state.message.allMessages);

  useEffect(() => {
    // const socket = socketIOClient(ENDPOINT);
    // socket.on("FromAPI", (data) => {
    //   console.log(data, "RESPONSE");
    //   setResponse(data);
    // });
    async function fetchData() {
      await dispatch(messageActions.fetchMessages());
    }
    setInterval(() => fetchData(), 1000);
  }, [dispatch]);

  const addMessageHandler = async () => {
    let action = messageActions.createMessage(body);
    try {
      await dispatch(action);
    } catch (err) {
      console.log(err);
    }
  };

  const addUser = async () => {
    try {
      localStorage.setItem("user", user);
      setUser("");
    } catch (err) {
      console.log(err);
    }
  };

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    if (name === "message") {
      setBody(value);
    }
    if (name === "user") {
      setUser(value);
    }
  };

  return (
    <Container>
      <Scrollbars>
        <>
          {messages.map((message) => {
            return <Message message={message} key={message._id} />;
          })}
          <FormWrapper>
            {localStorage.getItem("user") ? (
              <>
                <input
                  name="message"
                  value={body}
                  className="message-input"
                  type="text"
                  placeholder="Write a message!"
                  onChange={inputChangeHandler}
                />
                <input
                  className="button"
                  type="button"
                  value="Submit"
                  onClick={addMessageHandler}
                />
              </>
            ) : (
              <>
                <input
                  className="message-input"
                  type="text"
                  name="user"
                  value={user}
                  placeholder="Enter a username to start talking!"
                  onChange={inputChangeHandler}
                />
                <input
                  className="button"
                  type="button"
                  value="Submit"
                  onClick={addUser}
                />
              </>
            )}
          </FormWrapper>
        </>
      </Scrollbars>
    </Container>
  );
};

export default MessageRoom;
