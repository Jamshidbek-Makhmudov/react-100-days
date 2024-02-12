import axios from 'axios';
import { API_KEY, API_URL } from './api-config';
export default axios.create({
	baseURL: API_URL,
	params: {
		key:API_KEY
	}
})