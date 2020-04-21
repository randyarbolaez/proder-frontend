import React from "react";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import { Scrollbars } from "react-custom-scrollbars";

import projectsReducer from "./store/reducers/projects-reducer";
import Home from "./components/Home";

const rootReducer = combineReducers({
  project: projectsReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

const App = () => (
  <Scrollbars style={{ width: "100vw", height: "100vh" }}>
    <Provider store={store}>
      <Home />
    </Provider>
  </Scrollbars>
);

export default App;
