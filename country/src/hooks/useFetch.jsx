import { useState, useEffect } from "react"



const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [status, setStatus] = useState([]);

  useEffect(() => {
    const getCountries = async () => {
      try {
        setStatus('pending');
        const response = await fetch(url);
        if (!response.ok) throw new Error(`Sorry, unable to fetch data from ${url}`);
        const country = await response.json();
        setStatus('resolved');
        setData(country);
      } catch (error) {
        setError(error);
        setStatus('rejected');
        
      }
    }
    getCountries();
  }, [url]);

  return {
    data,
    error,
    status
  }
}

export default useFetch;
