import { Todo } from "../interfaces";
import APIClient from "./apiClient";



export default new APIClient<Todo>('/todos');
