import configureStore from "./store/configureStore";
import { loadBugs, assignBugToUser } from "./store/bugs";

const store = configureStore();

// UI Layer
store.dispatch(loadBugs());

/**bu agar birinchi datani 10minut oldin fetch qilgan bolsak qaytda fetch qimasdan cachedan olib berish uchun yozdik */
setTimeout(() => store.dispatch(assignBugToUser(1, 5)), 2000);
// setTimeout(() => store.dispatch(resolveBug(1)), 2000);
/**
   high order function degani ozida function argument qabul qiladi yoki returnda function qaytaradi.
	 high order functionga misol qilib arraydagi .map ni kelstirishimiz mumkin yani ozini ichida yana function qabul qilgani uchun
	 yana br misol qilib settimeout ni keltirishimiz mumkin

	 function composition in programming bu bir nechta mayda function orlqai kattaroq functionni ishini bitirsh deb chunsek boladi
   pure function deb same argument and same resultga aytiladi 
	 javascript is not pure functional programming

	 string is immutable however object is mutable
	  lekin objectni constga tenglab qoysak u immuatbel boladimi yoq const bersak bu objectni qayta bosahgqa objectga decalr qila olmaymiz lekin babribir ah objectni ichidagi qiymatlarni ozgartisak boladi bu esa yana mutablega misal bolib qoladi

		what is the react aplication is realy? - it's a store managemennt engine. we dispatch an action and the state changes. all the building blocks like action creators, reducers, middlewares are there to show the state changes properly.
 */