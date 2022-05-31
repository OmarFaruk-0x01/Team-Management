import { configureStore, combineReducers } from "@reduxjs/toolkit";
import configureSaga, { runSaga } from "redux-saga";
import { useDispatch } from "react-redux";
const reducer = combineReducers({});
const saga = configureSaga();
const store = configureStore({
  reducer,
  middleware: [saga],
});

export type RootState = ReturnType<typeof reducer>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>(); // Export a hook that can be reused to resolve types
export default store;
