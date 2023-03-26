import { useEffect, useState } from "react";
import axios from "axios";

export const useFetch = (url) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    setLoading(true);
    axios
      .get(url)
      .then((response) => {
        setLoading(false);
        setData(response.data);
      })
      .catch((e) => {
        setLoading(false);
        setError(e);
      });
  }, [url]);

  return {
    data,
    loading,
    error,
  };
};
