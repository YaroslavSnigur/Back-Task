const axios = require("axios");

const axiosInstance = axios.default.create({
  baseURL: "https://jsonplaceholder.typicode.com/todos",
});

module.exports = axiosInstance;
