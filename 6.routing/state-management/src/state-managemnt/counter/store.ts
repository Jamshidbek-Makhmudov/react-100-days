import { create } from "zustand";
import {mountStoreDevtool }from "simple-zustand-devtools"//bu zustand dev tool bolib quydagicha ishlatilinadi

interface CounterStore {
	counter: number;
	max: number;//bu componentni keraksiz value ozgarganda rener qilmasliki tekshirish uchun test holatda yozildi
	increment: () => void
	reset:()=> void
}
const useCounterStrore=create<CounterStore>(set => ({
	counter: 0, //curent sate
	max:0,
	increment: () => set(store /**current state yoki current stroe faqri bir xil ikalsasi */ => ({counter:store.counter+1})),
	reset: () => set(()=>({max:10}))
}))
/**process ni shundayligicha ishlatib bolmaydi unda typescript errro beradi -D ga react/node ni tyeni ornatihs kerak */
if(process.env.NODE_ENV === 'development') mountStoreDevtool("counter strore", useCounterStrore)
export default useCounterStrore
 /**
	 1.zustandan create degan functionni chaqrib olamiz
   2.bu funcion ichida set degan arrow function qabul qiladi
   3.arrow function esa ozida set parametrini qabul qiladi
   4.bu set prametri storedagi stateni update qiladigan parametr boladi va pu parametr ham function boladi
	 5. arrow function object qaytaradi bu object storedagi initial state boladi, lekin objectni shunchakli {} qilib emas balki ({}) qilib qaytaramiz sabai shunchaki {}qilib qaytarsak nimanidir define qilib qoyayotganga oxshaymiz
	 6.
	 set functiion bilan stateni update qilayotgan vaqtimizda u ham ozini ichida arrow function qabul qiladi, arrow function  parametr qabul qiladi, 1- current stateni va next stateni return qiladi, shu joyida reducerga oxshab ketadi 
  */