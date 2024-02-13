import React from 'react'
import { Link } from 'react-router-dom';

const HomePage = () => {
	// throw new Error("bug")
	return (
		<>HomePage
			{/* link orqali push qilish a hrefdan ancha yaxshi componentni toliq fetch qilib olib kelmaydi  */}
		<Link to="/users" >Users</Link>
		<Link to="/contacts" >Contacts</Link>
		<Link to="/userlist" >userlist</Link>
		</>
	)
}

export default HomePage