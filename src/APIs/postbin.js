import axios from "axios";

const apiEndpoint = "https://cors-anywhere.herokuapp.com/https://postb.in";

export default axios.create({
  baseURL: apiEndpoint
});
