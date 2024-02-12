import React, { useState } from 'react';
import usePosts from './infiniteQueryUsePosts';


const PostList = () => {

const pageSize=10
	const [page, setPage] = useState<number>(1)
	const { data, error, isLoading, fetchNextPage, isFetchingNextPage } = usePosts({pageSize})
	
	if(isLoading) return <p>loading...</p>
	if (error) return <p>{error.message}</p>

	return (
		<>	
		<ul className="list-group">{data.pages?.map((page, index) => (
				<React.Fragment key={ index}>
				{page.map(post => (
					<li className="list-group-item" key={post.id}>
						{ post.title}
			</li>
					))
				}
				</React.Fragment>
		))}</ul>
			
			<button className="btn btn-primary my-3 ms-1" disabled={isFetchingNextPage} onClick={() => fetchNextPage()} >{ isFetchingNextPage ? 'Loading...': "Load more"}</button>
			</>
	)
}

export default PostList