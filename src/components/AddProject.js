import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import * as projectActions from "../store/actions/projects-actions";

let Container = styled.div`
  display: flex;
  flex-direction: column;
`;

let Title = styled.h1`
  padding: 2.5vw;
  color: #f85c50;
`;

let Input = styled.input`
  padding-bottom: 0.5vw;
  background: transparent;
  border: none;
  border-top: 1px solid purple;
  border-top-left-radius: 3vw;
  border-top-right-radius: 3vw;
  color: #460000;
  text-align: center;
`;

let TextArea = styled.textarea`
  padding-bottom: 0.5vw;
  background: transparent;
  border: transparent;
  border-left: 1px solid purple;
  border-right: 1px solid purple;
  color: #460000;
  text-align: center;
  resize: none;
`;

let Button = styled.button`
  background: none;
  border: none;
  border-bottom: 1px solid purple;
  border-bottom-left-radius: 3vw;
  border-bottom-right-radius: 3vw;
  color: #ff2970;
`;

const AddProject = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(false);

  const addProjectHandler = async () => {
    let action = projectActions.createProject(title, description);
    if (title.length < 3 || description.length < 15) {
      setError(true);
      console.log(error);
    }
    try {
      await dispatch(action);
    } catch (err) {
      console.log(err);
    }
  };

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    if (name === "title") {
      setTitle(value);
    } else if (name === "description") {
      setDescription(value);
    }
  };

  return (
    <Container>
      <Title>Add a Project</Title>
      <Input
        type="text"
        name="title"
        value={title}
        onChange={inputChangeHandler}
        placeholder="title"
        required
        maxLength="20"
        minLength="2"
      />
      <TextArea
        name="description"
        cols="30"
        rows="5"
        onChange={inputChangeHandler}
        placeholder="enter a description of the project with 240 characters or less"
        maxLength="240"
        minLength="15"
        required
      ></TextArea>
      <Button type="submit" onClick={addProjectHandler}>
        Add Tutoring Post
      </Button>
    </Container>
  );
};

export default AddProject;
