import { connectRouter } from "connected-react-router";
import { combineReducers } from "redux";
import { createBrowserHistory } from "history";
import peopleReducer from "./people";
import personeReducer from "./persone";
import loadReducer from "./load";

export const history = createBrowserHistory({basename: process.env.PUBLIC_URL})

const initial = {
 
};

export  function appReducer(state = initial, action) {
  
  return state 
}

export const rootReducer = combineReducers ({
  app: appReducer,
  people: peopleReducer,
  persone: personeReducer,
  load: loadReducer,
  router: connectRouter(history)
})

export default rootReducer