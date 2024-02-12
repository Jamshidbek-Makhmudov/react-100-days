import { useQuery } from '@tanstack/react-query';
import { CACHE_KEY_POSTS } from '../config/constants';
import { Post } from '../interfaces';
import postService from '../services/postService';
import axios from 'axios';

interface PostQuery { 
	page: number
 pageSize: number
}
const usePosts = (query: PostQuery) => {
	
	return useQuery<Post[], Error>({
		queryKey: ["posts", query],
		queryFn: () => axios.get("https://jsonplaceholder.typicode.com/posts", {
			params: {
				_start: (query.page - 1) * query.pageSize,
				_limit:query.pageSize
			}
		}).then((res) => res.data),
		staleTime: 1 * 60 * 1000, //1min
		keepPreviousData: true // bu data yangilanga shu oageda qolshini taminlaydi, bu degani agar user pageni pasida bolsa ekar tepaga chiqb qolavermaydi
	})



// const usePosts = (userId:number | undefined) => {
// 	return useQuery<Post[], Error>({
// 		queryKey: userId ? ["users", userId, "posts"] : ["posts"],
// 		queryFn: () => axios.get("https://jsonplaceholder.typicode.com/posts", {
// 			params: {
// 				userId
// 			}
// 		}).then((res) => res.data),
// 		staleTime:1*60*1000 //1min
	// 	})
	


	// return useQuery<Post[], Error>({
	// 	queryKey: CACHE_KEY_POSTS,
	// 	queryFn: postService.getPosts(userId),
	// 	staleTime:1*60*1000 //1min
	// })
}

export default usePosts;
