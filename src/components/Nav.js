import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import * as projectActions from "../store/actions/projects-actions";

import Modal from "./ModalComponent";
import AddProject from "./AddProject";

const Container = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,900&display=swap");
  font-family: "Roboto", sans-serif;
  display: flex;
  justify-content: space-around;
  color: #fbceb5;
  background-color: #f2f8fd;
  margin: 0 25% 0 25%;
  text-align: center;
  border-bottom-left-radius: 50px;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
  padding: 0.5rem 0 0 0;
  align-items: baseline;
`;

const Svg = styled.svg`
  width: 2vw;
  height: 2.5vw;
  stroke: #fbceb5;
  margin-right: 1vw;
  ::hover {
    color: #dec0c1;
  }
`;

const Wrapper = styled.div`
  display: flex;
  .pro {
    color: #dec0c1;
  }
  .der {
    color: #fbceb5;
  }

  :hover {
    .pro {
      color: #fbceb5;
    }
    .der {
      color: #dec0c1;
    }
  }
`;

const Title = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 3.5vw;
`;

const Input = styled.input`
  /* margin-top: 1rem; */
  font-size: 1.5vw;
  padding-bottom: 1rem;
  margin-block-start: 0.35em;
  margin-block-end: 0.35em;
  border: none;
  color: #dec0c1;
  text-align: center;
  border-bottom: 1px solid #fbceb5;
  background: transparent;
`;

const Nav = () => {
  let projects = useSelector((state) => state.project);
  const dispatch = useDispatch();
  const [isSearch, setIsSearch] = useState(false);
  const [search, setSearch] = useState("");

  const onInputChangeHandler = async (e) => {
    let { value } = e.target;
    setSearch(value);
    let action = projectActions.searchProjects(value, projects);
    try {
      await dispatch(action);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <Svg
        onClick={() => {
          setIsSearch(!isSearch);
        }}
        className="svg-icon"
        viewBox="0 0 25 10"
      >
        {isSearch ? (
          <path
            fill="none"
            d="M12.71,7.291c-0.15-0.15-0.393-0.15-0.542,0L10,9.458L7.833,7.291c-0.15-0.15-0.392-0.15-0.542,0c-0.149,0.149-0.149,0.392,0,0.541L9.458,10l-2.168,2.167c-0.149,0.15-0.149,0.393,0,0.542c0.15,0.149,0.392,0.149,0.542,0L10,10.542l2.168,2.167c0.149,0.149,0.392,0.149,0.542,0c0.148-0.149,0.148-0.392,0-0.542L10.542,10l2.168-2.168C12.858,7.683,12.858,7.44,12.71,7.291z M10,1.188c-4.867,0-8.812,3.946-8.812,8.812c0,4.867,3.945,8.812,8.812,8.812s8.812-3.945,8.812-8.812C18.812,5.133,14.867,1.188,10,1.188z M10,18.046c-4.444,0-8.046-3.603-8.046-8.046c0-4.444,3.603-8.046,8.046-8.046c4.443,0,8.046,3.602,8.046,8.046C18.046,14.443,14.443,18.046,10,18.046z"
          ></path>
        ) : (
          <path
            fill="none"
            d="M18.109,17.776l-3.082-3.081c-0.059-0.059-0.135-0.077-0.211-0.087c1.373-1.38,2.221-3.28,2.221-5.379c0-4.212-3.414-7.626-7.625-7.626c-4.212,0-7.626,3.414-7.626,7.626s3.414,7.627,7.626,7.627c1.918,0,3.665-0.713,5.004-1.882c0.006,0.085,0.033,0.17,0.098,0.234l3.082,3.081c0.143,0.142,0.371,0.142,0.514,0C18.25,18.148,18.25,17.918,18.109,17.776zM9.412,16.13c-3.811,0-6.9-3.089-6.9-6.9c0-3.81,3.089-6.899,6.9-6.899c3.811,0,6.901,3.09,6.901,6.899C16.312,13.041,13.223,16.13,9.412,16.13z"
          ></path>
        )}
      </Svg>
      <Wrapper>
        {isSearch ? (
          <Input type="text" value={search} onChange={onInputChangeHandler} />
        ) : (
          <>
            <Title className="pro">PRO</Title>
            <Title className="der">DER</Title>
          </>
        )}
      </Wrapper>
      <Modal buttonName="+">
        <AddProject />
      </Modal>
    </Container>
  );
};

export default Nav;
