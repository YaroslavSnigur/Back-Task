const axios = require("./axiosConfig");

jest.mock("./axiosConfig", () => {
  return {
    baseURL: "https://jsonplaceholder.typicode.com/todos",
  };
});
