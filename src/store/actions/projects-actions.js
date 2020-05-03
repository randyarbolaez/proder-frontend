import ENV from "../../env";

export const CREATE_PROJECT = "CREATE_PROJECT";
export const READ_PROJECT = "READ_PROJECT";
export const SEARCH_PROJECTS = "SEARCH_PROJECTS";

export const fetchProjects = () => {
  return async (dispatch) => {
    try {
      const res = await fetch(`${ENV.apiUrl}/project/projects`);

      if (!res.ok) {
        throw new Error("Something went wrong!");
      }

      const resData = await res.json();
      let loadedProjects = [...resData.allProjects];

      dispatch({
        type: READ_PROJECT,
        projects: loadedProjects,
      });
    } catch (err) {
      throw err;
    }
  };
};

export const searchProjects = (value, projects) => {
  return async (dispatch) => {
    let projectsThatWereSearchedFor = projects.allProjects.filter((project) => {
      return (
        project.title.toLowerCase().includes(value.toLowerCase()) ||
        project.description.toLowerCase().includes(value.toLowerCase())
      );
    });

    dispatch({
      type: SEARCH_PROJECTS,
      projects: projectsThatWereSearchedFor,
    });
  };
};

export const createProject = (title, description) => {
  return async (dispatch) => {
    const res = await fetch(`${ENV.apiUrl}/project/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        description,
      }),
    });

    const resData = await res.json();
    console.log(resData, "RESDATA");
    if (!res.ok) {
      throw new Error("Couldn't create a new project, try again later.");
    }

    dispatch({
      type: CREATE_PROJECT,
      projectData: {
        _id: resData._id,
        title,
        description,
        totalDifference: 0,
      },
    });
  };
};
