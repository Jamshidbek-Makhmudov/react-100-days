import React from 'react'
import UserList from './UserList';
import { Navigate, Outlet } from 'react-router-dom';
import useAuth from './hooks/useAuth';

const UsersPage = () => {
	//private routelarni ishlatishda shu yerdan foydalanamiz:
/**tassavur qiling protected qilingan pagelar bor ya'ni u page ga kirish uchun user royhatdan otgan bolishi kerak agar rohatdan otmasdan turib bu page kirmoqchi bolsa biz uni bosha pagega 
 * jonatib yuborishimiz kerak, bu navigate orlqai qila olmaymiz sababi navigate ni side effecti bor : //it updates the url on the browser , shu saba uni render bolayotgan paytda chaqira olmaymiz bomsa bizni componentimiz pure component bolmayd qoaldi 
 * biz navigate functionimzini faqat event handler lar ichida yoki useEffectni ichida ishlatishimiz kerak
 */
	
	
	// const { user } = useAuth()
	// if (!user) return <Navigate to="/login"/>
		
	return (
		<div className="row">
			<div className="col">
				<UserList />
			</div>
			<div className="col">
				<Outlet />
			</div>
		</div>
	);
	
}

export default UsersPage