import { Weather } from "./../../../types";
import { useFetch } from "./../../../hooks";

type FetchWeatherResult = {
  current: Weather;
  daily: [];
  hourly: {};
};

function formatCurrent(response: any) {
  return {
    timestamp: response.current.dt,
    temp: response.current.temp,
    timezone: response.timezone,
    description: response.current.weather[0].description,
    wind: response.current.wind_speed,
    humidity: response.current.humidity,
    feeling: response.current.feels_like,
  };
}

function formatResponse(response: any) {
  return {
    current: formatCurrent(response),
    hourly: [],
    daily: [],
  };
}

export function useWheather(url: string) {
  const { data, loading, error } = useFetch<FetchWeatherResult>(url);

  return {
    weather: data ? formatResponse(data) : data,
    loading,
    error,
  };
}
