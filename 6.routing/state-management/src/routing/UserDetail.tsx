import {
	useLocation,
	useParams,
	useSearchParams,
} from 'react-router-dom';
//param haqida malumotlarni olish uchun page
const UserDetail = () => {

	const params = useParams(); // bu hook bilan  urldagi param objectlar  haqidagi malumotlarini olsa boladi, paramdagi numberlar ham string korinishsda boladi shunign uhun biz uni qayergadir yuborayotganda numberga ozgartirb yuborishimiz kerak /:id
	 console.log(params);
	
	const [searchParams, setSearchParams] = useSearchParams();
	/**  bu bilan query string parametrlarga accees qilolamiz, u 2ta qiymatdan iborat array qaytardi
	 * 1- query string parametr 2- uni update qiluvchi function ? dan keyingilari masalan /users/1?name=jamshid&age=30
	*/
	console.log(searchParams); //umumiuy korish uchun
	console.log(searchParams.toString());// query stringni qiymatini olish uchun
	console.log(searchParams.get("name"));// query stringni qiymatlarini ajratib olish

	/** setSearchParams bu query stringni update qilish uchun kere, lekin buni ishlatishda extoyit bolish kerak sababi bu side effecti bor.
	 * shuning  uchun bu functionni faqat event handlar ichida yoki useEffectni ichida ishlatiosh kerak
	 */
	const location = useLocation(); // bu bilan current locationga acces qilsa boladi
	console.log(location);

	return <p>User {params.id}</p>;
};

export default UserDetail;
