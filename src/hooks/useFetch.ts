import { useEffect, useState } from "react";
import { Error } from "./../types";

type UseFetch<T> = {
  error: Error | null;
  loading: boolean;
  data?: T;
};

export function useFetch<T>(url: string): UseFetch<T> {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<T | undefined>(undefined);
  const [error, setError] = useState<Error | null>(null);

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
      .then((data) => setData(data))
      .catch((err) => {
        setLoading(false);
        catchError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);

  return {
    loading,
    error,
    data,
  };
}
