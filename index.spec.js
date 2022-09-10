const axios = require("./axiosConfig");
const fetchToDos = require("./api-manager");
const fetchToDos = require("./interfaces");
const ApiManager = require("./api-manager");
const TodoClient = require("./interfaces");

jest.mock("./axiosConfig", () => {
  return {
    baseURL: "https://jsonplaceholder.typicode.com/todos",
    data: jest.fn().mockResolvedValue({
      data: [
        {
          userId: 1,
          id: 1,
          title: "delectus aut autem",
          completed: false,
        },
        {
          userId: 1,
          id: 2,
          title: "quis ut nam facilis et officia qui",
          completed: false,
        },
        {
          userId: 1,
          id: 3,
          title: "fugiat veniam minus",
          completed: false,
        },
      ],
    }),
  };
});

describe("test showToDos", () => {
  afterEach(() => jest.resetAllMocks());
  it("fetches todos", async () => {
    const toDos = await fetchTodos();
    expect(axios.request).toHaveBeenCalled();
    expect(axios.request).toHaveBeenCalledWith({
      method: "get",
      url: "/",
    });
  });
});

describe("client integrated properly", () => {
  inject([TodoClient], (ApiManager) => {
    expect(fetchToDos).toBe(fetchToDos);
  });
});
