import { useState } from 'react';
import usePosts from './hooks/usePosts';

const PostList = () => {
// const [userId, setUserId] = useState<number>()
	// const { data: posts, error, isLoading } = usePosts(userId)
const pageSize=10
	const [page, setPage] = useState<number>(1)
	const { data: posts, error, isLoading } = usePosts({page,pageSize})
	

	if(isLoading) return <p>loading...</p>
	if (error) return <p>{error.message}</p>
	return (
		<>
			
			{/* <select name="" id="" onChange={(event => setUserId(Number(event.target.value)))}
			value={userId}>
				<option value="">user</option>
				<option value="2">user2</option>
				<option value="3">user3</option>
				<option value="4">use4</option>
		</select> */}
		<ul className="list-group">{posts?.map(post => (
			<li className="list-group-item" key={post.id}> { post.title}</li>
		))}</ul>
			
			<button disabled={ page===1} onClick={()=>setPage(page-1)} >Previous</button>
			<button disabled={ page===10} onClick={()=>setPage(page+1)} >Next</button>
			</>
	)
}

export default PostList