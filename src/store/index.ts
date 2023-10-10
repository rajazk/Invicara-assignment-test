import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { ipLocationAPI, weatherAPI, newsAPI } from "./api/api";
import { stocksApi } from "./api/stocksApi";
import ipLocationReducer from "./slice/ipLocation";
import stockPriceReducer from "./slice/stockPrice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

const rootReducer = combineReducers({
  [weatherAPI.reducerPath]: weatherAPI.reducer,
  [ipLocationAPI.reducerPath]: ipLocationAPI.reducer,
  [stocksApi.reducerPath]: stocksApi.reducer,
  [newsAPI.reducerPath]: newsAPI.reducer,
  ipLocation: ipLocationReducer,
  stock: stockPriceReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV === "development",

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat([
      weatherAPI.middleware,
      ipLocationAPI.middleware,
      stocksApi.middleware,
      newsAPI.middleware,
    ]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
