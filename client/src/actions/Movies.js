import { MOVIES, UPDATE_DASHBOARD } from "../actions/Types";
import axios from "axios";

const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, GET, OPTIONS, PATCH, DELETE"
};

export const Movies = callback => {
  return dispatch => {
    //Redux Thunk always return function with dispatch argument
    axios
      .get(`/getmovies`, {
        headers: headers
      })
      .then(res => {
        dispatch({ type: MOVIES, payload: res });
        console.log("Movies List",res);
        callback(res);
      })
      .catch(e => {
        callback(e);
      });
  };
};

export const UpdateDashboard = (state) => {
  return { type: UPDATE_DASHBOARD };
};
