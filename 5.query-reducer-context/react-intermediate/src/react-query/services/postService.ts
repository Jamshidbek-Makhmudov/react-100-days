import { Post } from "../interfaces";
import APIClient from "./apiClient";



export default new APIClient<Post>('/posts');
