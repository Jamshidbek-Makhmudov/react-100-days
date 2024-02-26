import { createAction } from "@reduxjs/toolkit";

export const apiCallBegan = createAction("api/callBegan"); //createAction function qaytaradi u fucntion ichiga yozadigan parametrimiz payloadga kelib tushadi
export const apiCallSuccess = createAction("api/callSuccess");
export const apiCallFailed = createAction("api/callFailed");
/**bu biz reduxda manual action creat qilagnimiz toolkitda ozi bizga create qilib beradi 
 *  createAction("api/callBegan"); === const action=("api/callBegan")=>{type:"api/callBegan" payload:undefined}  
 * export const apiCallBegan = createAction("api/callBegan");
 * apiCallBegan.type()
 * apiCallBegan.toString()
 *
 * 
 * 
 const action={
 type:'apiCallBeagn,
  paylod:{
 		url:'bugs',
		method:'Get',
		data:{},
		onSuccess:"bugReceived",
		onError:'apiRequestFailed'
 }
 } 
*/