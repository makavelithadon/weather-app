export type Weather = {
  timestamp: number;
  temp: number;
  city?: string;
  picture?: string;
  description: string;
  timezone?: string;
  wind?: number;
  humidity?: number;
  feeling?: number;
};

export type Error = {
  message: string;
  errCode: number;
};

export type WeathersProps = {
  weather: Weather;
  error: null | Error;
};

export type WeathersPropsWithLoading = WeathersProps & { loading?: boolean };
