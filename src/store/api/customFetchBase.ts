import {
  BaseQueryFn,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query";

const stockBaseUrl = process.env.REACT_APP_STOCK_SERVER_ENDPOINT;
const weatherBaseUrl = process.env.REACT_APP_WEATHER_SERVER_ENDPOINT;
const newsBaseUrl = process.env.REACT_APP_NEWS_SERVER_ENDPOINT;
const ipLocationUrl = process.env.REACT_APP_IP_LOCATION_SERVER_ENDPOINT;

export const baseQueryIpLocation: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  const rawBaseQuery = fetchBaseQuery({ baseUrl: ipLocationUrl });
  return rawBaseQuery(args, api, extraOptions);
};

export const baseQueryWeather: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  const rawBaseQuery = fetchBaseQuery({ baseUrl: weatherBaseUrl });
  return rawBaseQuery(args, api, extraOptions);
};

export const baseQueryNews: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  const rawBaseQuery = fetchBaseQuery({ baseUrl: newsBaseUrl });
  return rawBaseQuery(args, api, extraOptions);
};

export const baseQueryStocks: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  const rawBaseQuery = fetchBaseQuery({ baseUrl: stockBaseUrl });
  return rawBaseQuery(args, api, extraOptions);
};
