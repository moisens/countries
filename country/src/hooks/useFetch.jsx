import { useState, useEffect } from "react"



const useFetch = (url) => {
  const [countries, setCountries] = useState([]);
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
        setCountries(country);
      } catch (error) {
        setError(error);
        setStatus('rejected');
        
      }
    }
    getCountries();
  }, [url]);

  return {
    countries,
    setCountries,
    error,
    status
  }
}

export default useFetch;
