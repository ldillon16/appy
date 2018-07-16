import axios from "axios";

const setAuthToken = token => {
  if (token) {
    // if token exists, apply to every request
    axios.defaults.headers.common["Authorization"] = token;
  } else {
    // else delete auth header
    delete axios.defaults.headers.common["Authorization"];
  }
};

export default setAuthToken;
