import axios from "axios";

export default axios.create({
  baseURL: "http://192.168.1.8:3001/api/v1",
});
