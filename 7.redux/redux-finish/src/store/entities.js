import { combineReducers } from "redux";
import bugsReducer from "./bugs";
import projectsReducer from "./projects";
import usersReducer from "./users";

export default combineReducers({
  bugs: bugsReducer,
  projects: projectsReducer,
  users: usersReducer
});
/** bu bir nechta slicelarni combine qilib ishlatish uchun kerak  qancha ichma ich kirb ketsa ham boladi
  reduxda normalization degan tushuncha bor bu  
  takrorlanadigan datalarni identifiers lar bilan orab qoyish yani ularga id berib qoyish bu takrorlanish oldini oladi
*/