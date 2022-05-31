import { configureStore, combineReducers } from "@reduxjs/toolkit";
import configureSaga, { runSaga } from "redux-saga";
import { useDispatch } from "react-redux";
import teamSlice from "./slices/teamSlice";
import teamSaga from "./sagas/teamSaga";
const reducer = combineReducers({
  teams: teamSlice,
});
const saga = configureSaga();
const store = configureStore({
  reducer,
  middleware: [saga],
});
saga.run(teamSaga);
export type RootState = ReturnType<typeof reducer>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export default store;
