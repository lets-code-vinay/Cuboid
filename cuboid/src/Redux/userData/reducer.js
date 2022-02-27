import { fromJS } from "immutable";
import { SET_USER_IMAGES } from "./constants";

/**
 * Initial States
 */
const INITIAL_STATES = fromJS({
  userImages: {},
});

const userDataReducer = (state = INITIAL_STATES, action) => {
  switch (action.type) {
    case SET_USER_IMAGES:
      return {
        ...state,
        userImages: action.data,
      };

    default:
      return state;
  }
};

export default userDataReducer;
