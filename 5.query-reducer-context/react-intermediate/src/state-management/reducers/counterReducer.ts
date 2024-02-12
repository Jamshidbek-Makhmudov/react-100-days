interface Action { 
	//type:string // bu yerda agar user type string holatda kiritsa lekin imlo hato qilsa ham reducer ishlamiydi shuning uchun biz buyerda type berayotgana enum bersak typescript tekshirib turadi
	type:'INCREMENT'| 'RESET'
}
const counterReducer = (state: number, action: Action): number => {
	/**bu degani action yani user qilmoqchi bolgan harakat ni  describe qiladigan varuable */
	if (action.type === "INCREMENT") return state+1
	if (action.type === "RESET") return 0
	/**agar action umuman user xoxlaganda bolmasadan boshqa bolsachi bunda bazi oamdal faqat stateni ozini qaytarish kerak desa */
	// return state
	/**bazi odamlar error qaytarish kerak deb hisoblashadi */
	// return new Error("Action is not supported")

	return state
};
 export default counterReducer 
/**reducer 2ta paramert qabul qiladi, 1- current state, 2- action. action bu object bolib user nma qilmoqchi ekanligini  describe qiladi (tasvirlaydi)
reducer shu 2ta paraterni qabul qilib yangi state ni qaytaradi
odatda actioni typeni object qiladi

 */