import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import reducer from "./reducer";
import logger from "./middleware/logger";
import toast from "./middleware/toast";
import api from "./middleware/api";

export default function() {
  return configureStore({
    reducer,
    middleware: [
      ...getDefaultMiddleware(),
      // logger({ destination: "console" }),
      toast,
      api
    ]
  });
}
/**redux tool kitda reduxni devtoolga manula ulashni keragi ozi qilib beadi undan tashqari tookit bizga asinxron functionlarnin dispatch  juda qulaylik yaratadi bomasa deruxninozida middleware lar yasab asinxron ishlatishimz mumkin boladir edi 
 * 
 * undan tashqari redux toolkitda 
 * configStore qilinadi
 * createAction  va createReducer qilinadi lekin shu ikalasni jablab turuvchi slice ham bor
   
   reduxda malumotlarni array korinishida saqlasa boladi va object korinishida saqlsa boladi, array korinishida saqlasa keyin uni topish uchun itterate qilish kerak bu esa malum darajada performancega tasir qiladi. 
   agar object korinishda saqlasa key:value korinishda saqlab key indexlar berib son topib olsa boladi lekin har safar ham object ishlatishb yaxshimas sababi user orderlarni ozgartirsa biz objecytni larni orederini togirlay olmay qolamiz shuning uchun holatga qarash kerak 
 */
