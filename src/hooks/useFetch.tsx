import React from 'react';

export default function useFetch<T>(
  url: string,
  options?: RequestInit,
  onChange?: any
) {
  const [data, setData] = React.useState<T>((null as any) as T);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res: Response = await fetch(url, options);
        const json: T = await res.json();
        setData(json);
        setIsLoading(false);
      } catch (e) {
        setError(e);
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onChange]);
  return { data, error, isLoading };
}
