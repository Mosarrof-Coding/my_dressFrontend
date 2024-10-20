import { useEffect, useState } from "react";
import { axios } from "axios";

export default function useFetch(url) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url, {
          headers: {
            Authorisation: `bearer ${import.meta.env.VITE_APP_API_TOKEN}`,
          },
        });
        const data = response.data;
        console.log("data", data);
        setData(data);
      } catch (error) {
        console.log("error", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  });
  return { data, loading, error };
}
