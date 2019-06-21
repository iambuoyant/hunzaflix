import { MOVIES, UPDATE_DASHBOARD } from "../actions/Types";

const INITIAL_STATE = {
    dashboardStateUpdated: 1
  };
export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case MOVIES: {
      return Object.assign({}, state, {
        movies: action.payload
      });
    }
     case UPDATE_DASHBOARD: {
        return Object.assign({}, state, {
          movies: action.payload,
          dashboardStateUpdated: state.dashboardStateUpdated + 1
        });
      }
    default:
      return state;
  }
}
