import { useEffect, useState } from "react";

type Wheather = {
  temp: number;
  city: string;
};

type Error = {
  message: string;
  errCode: number;
};

type WheathersProps = {
  wheathers: Wheather[];
  error: null | Error;
};

type WheathersPropsWithLoading = WheathersProps & { loading?: boolean };

export function useWheather(url: string): WheathersPropsWithLoading {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [wheathers, setWheathers] = useState([]);

  function catchError({ statusText, status }: any) {
    setError({
      message: statusText,
      errCode: status,
    });
  }

  useEffect(() => {
    if (!url) {
      return;
    }
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw response;
        } else {
          return response.json();
        }
      })
      .then((data) => {
        console.log({ data });

        setWheathers(data);
      })
      .catch((err) => {
        setLoading(false);
        catchError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);

  return {
    wheathers,
    loading,
    error,
  };
}
