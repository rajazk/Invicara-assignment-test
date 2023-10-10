import { createApi } from "@reduxjs/toolkit/dist/query/react";
import {
  baseQueryWeather,
  baseQueryNews,
  baseQueryStocks,
  baseQueryIpLocation,
} from "./customFetchBase";

export const ipLocationAPI = createApi({
  reducerPath: "ipLocationAPI",
  baseQuery: baseQueryIpLocation,
  endpoints: () => ({}),
});

export const weatherAPI = createApi({
  reducerPath: "weatherAPI",
  baseQuery: baseQueryWeather,
  endpoints: () => ({}),
});

export const newsAPI = createApi({
  reducerPath: "newsAPI",
  baseQuery: baseQueryNews,
  endpoints: () => ({}),
});

export const stocksAPI = createApi({
  reducerPath: "stocksAPI",
  baseQuery: baseQueryStocks,
  endpoints: () => ({}),
});
