export interface IWeatherHourly {
  time: string[];
  temperature_2m: number[];
  relativehumidity_2m: number[];
  windspeed_10m: number[];
}
export interface IWeatherUnits {
  time: string;
  temperature: string;
  windspeed: string;
  winddirection: string;
  is_day: string;
  weathercode: string;
}
export interface IWeatherCurrent {
  time: string;
  temperature: number;
  windspeed: number;
  winddirection: number;
  is_day: number;
  weathercode: number;
}
export interface IWeatherHourlyUnits {
  time: string;
  temperature_2m: string;
  relativehumidity_2m: string;
  windspeed_10m: string;
}
export interface IGetWeatherResponse {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  current_weather_interval_seconds: number;
  current_weather_units: IWeatherUnits;
  current_weather: IWeatherCurrent;
  hourly_units: IWeatherHourlyUnits;
  hourly: IWeatherHourly;
}
