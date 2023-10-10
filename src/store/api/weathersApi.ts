import { IGetWeatherResponse } from "../types/weather";
import { weatherAPI } from "./api";

export const weathersApi = weatherAPI.injectEndpoints({
  endpoints: (builder) => ({
    getWeather: builder.query<IGetWeatherResponse, any>({
      query({ latitude = "51.50", longitude = "0.17" }) {
        return {
          url: `forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m`,
          method: "GET",
        };
      },
    }),
  }),
});

export const { useGetWeatherQuery } = weathersApi;
