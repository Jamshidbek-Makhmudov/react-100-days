import { useInfiniteQuery } from '@tanstack/react-query';
import { Post } from '../interfaces';
import axios from 'axios';

interface PostQuery { 
 pageSize: number
}
const usePosts = (query: PostQuery) => {
	/** useInfinite query ni ishlatganda state hookini  pagination uchun ishlatib bolmaydi sababi bu cache and with data consistancy yomon ta'sir qilishi mumkin  */
	return useInfiniteQuery<Post[], Error>({
		queryKey: ["posts", query],
		queryFn: ({ pageParam=1}) => axios.get("https://jsonplaceholder.typicode.com/posts", {
			params: {
				_start: (pageParam - 1) * query.pageSize,
				_limit:query.pageSize
			}
		}).then((res) => res.data),
		staleTime: 1 * 60 * 1000, //1min
		keepPreviousData: true, // bu data yangilanga shu oageda qolshini taminlaydi, bu degani agar user pageni pasida bolsa ekar tepaga chiqb qolavermaydi
		getNextPageParam: (lastPage, allPages) => { //react query page larni shu parameter orqali bilib oladi
			return lastPage.length>0 ? allPages.length+1 : undefined
		 }
	})

}

export default usePosts;
