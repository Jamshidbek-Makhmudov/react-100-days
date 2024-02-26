import { combineReducers } from "redux";
import entitiesReducer from "./entities";

export default combineReducers({
  entities: entitiesReducer
});
/**
 * function reducer (store (or state), action){}
 * reducer is a store that takes current instance of the store and returs updated store
 * how does the reducer know what should excactly update? 
 * shuning uchun bizga yana 1ta argumentn kerek action degan
 * action is a plane javascrpt object that describes what just happened 
 * masalan user login qildi yoki logout qildi, yoki cartag item qoshi va hakazo
 * 
 * there 3 building block in redux aplications: Action, Store, Reducer
 * 1. store is a single javascript object that includes our aplication state
 * 2. Action a plane javascrpt objects that represent what just happend we can call it event
 * 3.  reducer is the updating theb slice of the store we call it event handlers or processers
 
user perform an action (create an item in cart ) we create an action object and dispatch
a store object has a dispatch method takes an action it will then forward action to reducer so we do not call the reducer directly we just work with store the store is in charge calling  the reducer. reducer computes the new state and 
returns it then store stes the state internally and notifies the ui about the update

hosh buncha ish nega kerak bunday ish qilish orqali biz harakatlarni toliq nazorat qilishimiz mumkin va log qlishimiz mumkin
undan tashqari  protsesni ortga qaytarsak boladi

payload  includes object  information about action
agar biz initial state qaytarmasak reducerda state kitilmagan bolsa undefined qaytaradi shuning biz doim initial state qoshib ketshimiz kerak. initial state ni bosh array berib ketsak boladi

reducer.js:
function reducer(state=[], action){
  switch(action.type)
    case "bugAdded":
      return [
      ...state,
      {
      id:++lasId,
      description: action.payload.description,
      resolved:false,
      }
      ];
      case "bugRemoved":
        return state.filter(item=>item.id!==action.payload.id)

        defualt:
         return state

}


store.js:
  export default const store = createStore(reducer)

index.js:

agar biz vanilla javascript yoki jQuery bilan ishlasak refresh qilamiz, react bilan ishlasak rerender qilamiz
strore ni subscribe methodi state ozaganini tekshirib tuadi 
biz state ozgarganda ui ni refresh qilib user ynagi malumotni korsatish uchun ishlatamiz
subscribe methodi unsubscribe functionni qaytardi buni user boshqa page otganda unsubscribe qilib qoyamzi

consst unsubscribe=store.subscribe(()=>{
  "store changed!",
  store.getState()
})

unsubscribe()


stroe.dispatch({
  type:"bugAdded",
  payload:{
  description:"Bug1"
  }
}) // bu storega malumot qoshadi yani ayana statega qoshib beradi action orqali

store.dispatch({
  type:"bugRemoved",
  payload:{
  id:1
  }
})
stroe.getState() //stateni chaqirish bosh bosa [] keladi ozgargan bosa shu ozgargani keladi



xosh bu codelar qanday sihlayabdi?
state=reducer(state, action)
notify the subscribers





*/