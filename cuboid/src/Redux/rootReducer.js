import { combineReducers } from "redux-immutable";

/**
 *  Collection of All reducer of entire project
 */
import userDataReducer from "./userData/reducer";

/**
 * Combining all reducers here
 * @returns
 */
const rootReducer = combineReducers({
  userData: userDataReducer,
});

export default rootReducer;
