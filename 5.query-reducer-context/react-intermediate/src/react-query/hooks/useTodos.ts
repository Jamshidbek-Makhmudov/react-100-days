import { useQuery } from '@tanstack/react-query';
import { CACHE_KEY_TODOS } from '../config/constants';
import todoService from '../services/todoService';
import { Todo } from '../interfaces';

const useTodos = () => {
	return useQuery<Todo[], Error>({
		queryKey: CACHE_KEY_TODOS,
		queryFn: todoService.getAll
	})
}

export default useTodos;

/**useQuery hooki ozini ochida object qabul qiladi bu ebject esa 2ta property qabul qiladi 
  queryKey: unique identifier for query it used for internaly for caching. qachi biz serverdan datalarni fetch qiganimizda u cache ga tushadi va  biz shu key arqali unga access qila olamiz
	querFn: this is is used for fetch the data from backend, this function should return a promise resolve or reject

	//useQuery objectidan data, erro, isLoading lari bilan birga keladi
 
*/