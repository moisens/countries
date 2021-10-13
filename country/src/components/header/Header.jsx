import './header.scss';
import Getcountries from './Getcountries';
import useFetch from "../../hooks/useFetch";
import Searchcountry from './Searchcountry';
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
    console.log(searchInput);

    const newCountry = countries.filter(country => {
      if (searchInput) {
        Object.values(country).includes(searchInput.toLowerCase());
        setFilterCountry(newCountry)
      } else {
        setFilterCountry(countries);
      }
    })

  }

  return (
    <>
      <header className='header-container'>
        <div className='input-container'>
        <Searchcountry handleSearch={handleSearch} searchInput={searchInput}  />
          <div>
            <label htmlFor="countries"></label>
            <select>
              <option >Filter by region</option>
              <option value='africa'>Africa</option>
              <option value='america'>America</option>
              <option value='asia'>Asia</option>
              <option value='europe'>Europe</option>
              <option value='oceania'>Oceania</option>
            </select>
          </div>
        </div>
        <ErrorBoundary FallbackComponent={ErrorBoundaryFallBack}>
          <Getcountries error={error} status={status} countries={countries} filterCountry={filterCountry} />
        </ErrorBoundary>
        
      </header>
    </>
  )
}

export default Countries;
