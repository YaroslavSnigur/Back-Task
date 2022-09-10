const axios = require("./axiosConfig");

const axiosInstance = axios.default.create({
  baseURL: "https://jsonplaceholder.typicode.com/todos",
});

module.exports = axiosInstance;
