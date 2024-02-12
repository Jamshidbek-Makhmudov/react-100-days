/**
 useState
 useRef
 useFormHook
 useEffect
 useQuery

 useReducer -markazlashitirsh
 React Conext-  sharing data across your aplication

 Custom context - sharing data across your aplication

 
1.React Query is library for managing data fetching and caching in react

2.most peaople use redux for caching, it's state management library for javascript applications
	it allow us to store state(data) in an sing global store(this is where it caches data it situated in clients browser)
	Store(javascript object) is a just a javascript object in user's browser
	instal query: npm i @tanstack/react-query@version
	
	
first:
	import {QueryClient,QueryClientProvider,} from '@tanstack/react-query';
		QueryClient is a query object, we use it managing and caching remote data in react query





																					react query dev tool
	mounted dispalyed in the screen
	onmounted mean removed from the screen
	react queryda component onmouned bolsa react query inactive boladi  va inavtive bolgan query garbage collected ga tushdadi cache dan ochirib yuboriladi

	devtoolda query explorer windowi bor unda hamm querylarni propertylari bor biz ularni boshqattan config qilsak boladi 
	default holatda  cacheTime 300_000 boladi ya'ni 5min bu degani query inavtive bolganda garbage collectorga 5mindan keyin ketadi degani ya'ni inactive bolsa 5min kutb turadi degani



																								Global state management
	reducer- state updatelarni componentda markazlashtirib beradigan hook, bu nma degani state hooklar kopagan sari componentni boshqarish qiyin boladi reducer bilan hamma statelarni boshqa filga chiqarib olib osha yerda function ichida jamlab qoyishimiz mumkin keragini shu reducerdan olib ishlatamiz. 
	yana statlar boshqa kopnonentda ham bor bolsa codelarni takror qayta qayta yozish kerak yoki, statelarni prop orqali boshqa komponentga yuborib ishlatish kerak. reducer bilan biz hoxlagan joyimizda shu stateni ishlata olamiz


	Prop drilling degani bu proplarni ichma ich kop kirgizdirib yuborishga aytiladi
																								React context
 bu proplarni ortadagi keraksiz componet orqali otqazmasdan togri kerakli componentga yuborishga aytilai
 qisqacha etganda  react conext yuka tashuvchi trackga oxsahb statelarimini 1nuqtadan 2-nuqtagacha tashib beradi 
 react contextni yana 1 tarafi bor conextdagi biror narsa ozgarsa shu conext orab turgan componentlar rerender boladi
 shuning uchun conextga birga render bolsa boladigan  va bir birga yaqin bolgan qiymatlarni qoyish kerak boshqa soz bilan aytganda contexda singel responsibility bolishi kerak yoki single purpose bolishi kerak

 contextni qachon ishlatiah kerak va qachon ishlatmaslik kerak
 server state- backendan keladigan statelarni bu holatda backendan keladigan statelar uchun contextni hslatmaslik kerak, sababi statelarni turlari juda kopayib ketadi va ozgarish ham render ham kopayib app ishlashi qiyinlashib ketadi, xosh unda nam ishlatish kerak server state uchun ? 
 react query juda yaxshi yechim va  react query ayana shu uchun ishlasb chiqilgan  
 client state- thme, current user. client statelar uchun esa react queryni ishlatilmaydi asosan local statelarni context orlqai ishlatib manage qilinadi
 lcoal statelardan useState yoki useReducerni ishlatsa boladi oddiy simple uchun useState leki agar agar statelar complex bolib ular componentlar ortasida kop bordi keldi qiladigan bolsa ularni useReducer yordamida markazlashtirib context orqali yuborish mumkin.

 lekin contextda single responsiblity bolishi kerak oshiqcha renderlarni oldini olish uchun, shuning uchun ularni qismlafrga bolib olib kerakli joyda orab ishlatsa boladi, lekin bazida contextni bolib ishlatish kerak bolaydigan holatlar bolib qoladi baribir oshiqcha render boldigan payt;
lar boladi shunaqa vaziyat bloib qoladi bu paytda state management librarylardan foydalansa boladi. ular statelarni qismlarni kuzatib turadi va shu qismlar ozgarganda render qiladi koplab state managemnt liblarylar bor:
Redux
mobX
recoil
xState
zustand
ularni vazifasi hammasini bir xil lekin ishlash yoli bilan frq qiladi


contexni reduxdan nam farqi bor: conext statelarni saqlamaydi faqat bir joydan boshqa joyga olib otish uchun ishlatamiz, statelarni boshqa joyda saqlaymiz , reduxda esa unisini ham bunisini ham qiolamiz. context box bolsa redux bu shu boxni tashib yuradigan truc deb qarasak boladiㅁ
	*/ 