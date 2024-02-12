import { useReducer, useState } from 'react'
import counterReducer from '../reducers/counterReducer';

const Counter = () => {
	// const [value, setValue] = useState(0)

	/**useReducer hooki ozini 1- custom yozgan reducer functionimizi qabul qiladi, 2- initiAlstate ni qabul qiladi biz bu yerda number kiritamiz.
	 reducer hooki ham state hookiga oxshab arrayda 2ta element qaytaradi, 1- element bizni current state miz, 2- element function yoki  triggering changes qiladigan element boladi u dispatch deb ataladi. ozi dispatch ni lug'aviy manosi ham send ya'ni yuborish degani msalan send police to somewhere
	 bu yerda dispatch action qilamiz ya;
	 ni actionni qayergadir yuboramiz, masalan qaysidir buttonga
	 dispatch ozini ichida biz custom yozgan reducer functionni ichidagi aynan actioni qabul qila ya'ni action object qabul qilar edi biz ham bu yerda dispatchni ichida object yuboramiz faqat typescriptda yozilgan korinishda
	 */
	const [value, dispatch]=useReducer(counterReducer, 0)
	return (
		  <div>
			Counter ({ value})
      <button
				onClick={() => dispatch({type:"INCREMENT"})}
        className="btn btn-primary mx-1"
      >
        Increment
      </button>
      <button
				onClick={() => dispatch({type:"RESET"})}
        className="btn btn-primary mx-1"
      >
        Reset
      </button>
    </div>
	)
}

export default Counter