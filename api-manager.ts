import { injectable, inject } from "inversify";
import "reflect-metadata";
import { TodoClient } from "./interfaces";
import container from "./container";

@injectable()
class ApiManager {
    protected toDos
    constructor(
        @inject(TodoClient) todoClient: TodoClient
        ) {
            this.toDos = todoClient;
    }
    public fetchData(): any[] {
        return [this.toDos.fetchToDos()];
    }
    }

const showToDos = container.resolve(ApiManager);

console.log(showToDos.fetchData());

