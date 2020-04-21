import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import ProjectCard from "./ProjectCard";
import * as projectActions from "../store/actions/projects-actions";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  word-wrap: break-word;
`;

const Project = () => {
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.project.searchProjects);
  useEffect(() => {
    async function fetchData() {
      await dispatch(projectActions.fetchProjects());
    }
    fetchData();
  }, [dispatch]);

  return (
    <Wrapper>
      {projects.map((project) => {
        return <ProjectCard key={project._id} project={project} />;
      })}
    </Wrapper>
  );
};

export default Project;
