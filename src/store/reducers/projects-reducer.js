import {
  CREATE_PROJECT,
  READ_PROJECT,
  SEARCH_PROJECTS,
} from "../actions/projects-actions";

const initialState = {
  allProjects: [],
  searchProjects: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_PROJECT:
      const newProject = {
        _id: action.projectData._id,
        title: action.projectData.title,
        description: action.projectData.description,
        likes: 0,
        dislikes: 0,
        totalDifference: 0,
      };
      return {
        ...state,
        searchProjects: state.searchProjects.concat(newProject),
      };

    case READ_PROJECT:
      return {
        allProjects: action.projects,
        searchProjects: action.projects,
      };
    case SEARCH_PROJECTS:
      return {
        ...state,
        searchProjects: action.projects,
      };
    default:
      return state;
  }
};
