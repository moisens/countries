import './header.scss';




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
        <section>
          <article>
            <div className='flag-country'>
              <img src="" alt="" />
            </div>
            <div className='country-description'>
              <h2>Germany</h2>
              <p><span className='country-title'>Population: </span>ddd </p>
              <p><span className='country-title'>Region: </span> </p>
              <p><span className='country-title'>Capital: </span> </p>
            </div>
          </article>
          
        </section>
      </header>
    </>
  )
}

export default Countries;
