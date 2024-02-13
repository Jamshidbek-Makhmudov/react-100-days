// import { BrowserRouter } from "react-router-dom";

import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import UsersPage from "./UsersPage";
import ContactPage from "./ContactPage";
import UserList from "./UserList";
import UserDetail from "./UserDetail";
import Layout from "./Layout";
import ErrorPage from "./ErrorPage";
import LoginPage from "./LoginPage";
import PrivateRoutes from "./PrivateRoutes";
//nested route uchun 


/**bu  <BrowserRouter/>  hammasi featurelarni ozi ichiga olmaydi shunng uchun bu ihslatmagan ma'qul */
const router = createBrowserRouter([
	// umumiy 1- dars
	// {path:'/', element:<HomePage/>},
	// { path: '/users', element: <UsersPage />},
	// { path: '/users/:id', element: <UserDetail />},
	// { path: '/contacts', element: <ContactPage />},
	// { path: '/userlist', element: <UserList /> },
	//nested route uchun dars
	{
		path: '/',
		element: <Layout />,
		errorElement: <ErrorPage />,
		children: [
		//children ishlashi uchun element bolimda <Otlet/> bolishi kerak va children dagi barcha componentlar shu <Outlet/> ornida gavdalanadi
			{ index: true, element: <HomePage /> },
			// { path:'', element: <HomePage /> }, // bu yuqoridigi bilan bir xil
			{ path: '/login', element: <LoginPage/> },
			{
				path: 'users',
				// bu user UsersPage ozida 1ta componet saqlaydi va ong tarafda boshqa component sqlaydi va childrendagi componetlar shu ong tarfda gavdalanishi uchun  ong tomonga <Outlet/> yozildi
				element: <UsersPage />,
				children: [
				
					{ path: ':id', element: <UserDetail />},
			] },
			{ path: '/contacts', element: <ContactPage />},
			{ path: '/userlist', element: <UserList /> },

		],
	},
	{
		// bu layout route bolganligi uchun parth kerak mas bu ni vazifasini userni tekshirib user boslsa childrennda psdagi componentlarni render qilib user bomasa  login page jonatib yuborish uhun kerka childrenga himoya qilish kerka bolgan componentlarni kiritamiz
		element: <PrivateRoutes/>,
		children: [
			{
				path: 'users',
				element: <UsersPage />,
				children: [{ path: ':id', element: <UserDetail /> }],
			},
		]
	}
]);
export default router