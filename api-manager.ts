import { injectable, inject } from "inversify";
import "reflect-metadata";
import { TodoClient } from "./interfaces";
import container from "./container";

@injectable()
export class ApiManager {
  protected toDos;
  constructor(@inject(TodoClient) todoClient: TodoClient) {
    this.toDos = todoClient;
  }
  public fetchData() {
    return [this.toDos.fetchToDos()];
  }
}

const showToDos = container.resolve(ApiManager);
const fetchToDos = showToDos.fetchData();
