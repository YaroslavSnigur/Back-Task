import { injectable, inject } from "inversify";
import axios from "axios";

@injectable()
export class TodoClient {
  //   public toDos: {
  //     userId: number;
  //     id: number;
  //     title: string;
  //     completed: boolean;
  //   }[];

  constructor() {
    // this.toDos = [];
  }

  fetchToDos(): void {
    const urlTodo: string = "https://jsonplaceholder.typicode.com/todos";
    axios
      .get(urlTodo)
      .then((response) => {
        return response;
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
