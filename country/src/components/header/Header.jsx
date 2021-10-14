import './header.scss';
import Getcountries from './Getcountries';
import useFetch from "../../hooks/useFetch";
import Searchcountry from './Searchcountry';
import Searchbyregion from './Getbyregion';
import { ErrorBoundary } from 'react-error-boundary';
import { useState } from 'react'






const ErrorBoundaryFallBack = ({ error, resetErrorBoundary }) => {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button 
      style={{
        backgroundColor: "red",
        color: "white",
        padding: "15px 38px",
        fontSize: "20px",
        margin: "20px",
        border: "none",
      }}
        title='Try again'
        onClick={resetErrorBoundary} 
      />
    </div>
  )
}

const Countries = () => {
  const { error, status, countries, setCountries } = useFetch(
    "https://restcountries.com/v3.1/all"
  );
  const [searchInput, setSearchInput] = useState('');
  const [filterCountry, setFilterCountry] = useState([]);


  const handleSearch = (e) => {
    const searchCountry = e.target.value;
    setSearchInput(searchCountry);

    if (searchInput) {
      const newCountry = countries.filter(country => {
        return Object.values(country.name).join('').toLowerCase().includes(searchInput.toLowerCase());

      });
      setFilterCountry(newCountry);
    } else {
      setFilterCountry(countries);
    }
    
  }

  return (
    <>
      <header className='header-container'>
        <div className='input-container'>
        <Searchcountry handleSearch={handleSearch} searchInput={searchInput}  />
        <Searchbyregion />
        </div>
        <ErrorBoundary FallbackComponent={ErrorBoundaryFallBack}>
          <Getcountries error={error} status={status} countries={countries} filterCountry={filterCountry} searchInput={searchInput} />
        </ErrorBoundary>
      </header>
    </>
  )
}

export default Countries;
