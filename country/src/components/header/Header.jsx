import './header.scss';
import Getcountries from './Getcountries';



const Countries = () => {
  return (
    <>
      <header className='header-container'>
        <div className='input-container'>
          <div>
            <label htmlFor="search"></label>
            <input type="search" name='search' placeholder='Search for a country...' />
          </div>
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
        <Getcountries />
      </header>
    </>
  )
}

export default Countries;
