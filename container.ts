import { Container } from './node_modules/inversify';
import { TodoClient } from "./interfaces";

const container = new Container(); 
container.bind<TodoClient>(TodoClient).toSelf();

export default container;



