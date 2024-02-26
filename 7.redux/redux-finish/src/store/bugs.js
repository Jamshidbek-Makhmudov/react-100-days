/**slice of our store
  redux toolkitdagio createSlice function ni bizga 2ta narsani createAction va createReducer ni yasab beradi
 */
import { createSlice } from "@reduxjs/toolkit"; 
import { createSelector } from "reselect";
import axios from "axios";
import { apiCallBegan } from "./api";
import moment from "moment";
/** console logda korsak slice is an object with a 4 properties:
    1.name bor, 
    2.reducer bor u function va state va action ni qabul qiladi bu biz reduxda manula create qilgan reduserimizga teng uni ozi generate qilib beradi
    3. actions bu function redcuerni ichiga yozgan propertylarimiz actionga teng bolib boladi
    4. casereducer bu actionga oxshah fucntion
  shulardan biz reduceri ni default object export qilishimiz kerak  actionlarni esa named export qilib export qilish kerak.
 */
const slice = createSlice({
  name: "bugs",
  initialState: {
    list: [],
    loading: false,
    lastFetch: null
  },
  reducers: { //shu reducerni ichida yozadigan barcha propertylrimizdan createSlice 2ta createActiom va createReducer yasab beradi, shunda bizda alohda ozimiz action va reducer yasab otirmiz
    bugsRequested: (bugs, action) => {
      bugs.loading = true;
    },

    bugsReceived: (bugs, action) => {
      bugs.list = action.payload;
      bugs.loading = false;
      bugs.lastFetch = Date.now();
      /**bu agar birinchi datani 10minut oldin fetch qilgan bolsak qaytda fetch qimasdan cachedan olib berish uchun yozdik */
    },

    bugsRequestFailed: (bugs, action) => {
      bugs.loading = false;
    },

    bugAssignedToUser: (bugs, action) => {
      const { id: bugId, userId } = action.payload;
      const index = bugs.list.findIndex(bug => bug.id === bugId);
      bugs.list[index].userId = userId;
    },

    // command - event
    // addBug - bugAdded
    bugAdded: (bugs, action) => {
      bugs.list.push(action.payload);
    },

    // resolveBug (command) - bugResolved (event)
    bugResolved: (bugs, action) => {
      const index = bugs.list.findIndex(bug => bug.id === action.payload.id);
      bugs.list[index].resolved = true;
    }
  }
});

export const {
  bugAdded,
  bugResolved,
  bugAssignedToUser,
  bugsReceived,
  bugsRequested,
  bugsRequestFailed
} = slice.actions;
export default slice.reducer;

// Action Creators
const url = "/bugs";

export const loadBugs = () => (dispatch, getState) => {
  /**bu agar birinchi datani 10minut oldin fetch qilgan bolsak qaytda fetch qimasdan cachedan olib berish uchun yozdik */
  const { lastFetch } = getState().entities.bugs;

  /**bu date ni compare qilish uchun 2- argumentda minut yozilda sabab  farni minutda korstadi */
  const diffInMinutes = moment().diff(moment(lastFetch), "minutes");
  if (diffInMinutes < 10) return;

  return dispatch(
    apiCallBegan({
      url,
      onStart: bugsRequested.type,
      onSuccess: bugsReceived.type,
      onError: bugsRequestFailed.type
    })
  );
};

export const addBug = bug =>
  apiCallBegan({
    url,
    method: "post",
    data: bug,
    onSuccess: bugAdded.type
  });

export const resolveBug = id =>
  apiCallBegan({
    // /bugs
    // PATCH /bugs/1
    url: url + "/" + id,
    method: "patch",
    data: { resolved: true },
    onSuccess: bugResolved.type
  });

export const assignBugToUser = (bugId, userId) =>
  apiCallBegan({
    url: url + "/" + bugId,
    method: "patch",
    data: { userId },
    onSuccess: bugAssignedToUser.type
  });

// Selector

// Memoization - is optimizing expencive function (har safar stateni chaqirganda filter qilib chaqirganda qanchadir vaqt ketadi shuni oldini olish uchun)
// bugs => get unresolved bugs from the cache

export const getBugsByUser = userId =>
  createSelector(
    state => state.entities.bugs,
    bugs => bugs.filter(bug => bug.userId === userId)
  );
  /**createSelector orqlai biz memoize yasashimiz mumkin cachelash uchun createSelecor ichida function qabul qiladi
    
   */

export const getUnresolvedBugs = createSelector(
  state => state.entities.bugs, //bug qaytadi
  state => state.entities.projects, //project qayatdi
  /**bu yerda agar  qaytagn bug save bolgan bolsa filter qismi excecute bolmaydi bizga cachedan olib beradi*/
  (bugs, projects) => bugs.list.filter(bug => !bug.resolved)
);
