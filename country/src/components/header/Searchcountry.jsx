import { useState } from "react";


const Searchcountry = ({ searchInput, handleSearch }) => {


  return (
    <div>
      <label htmlFor="search"></label>
      <input 
        onChange={handleSearch}
        type="search" 
        name='id' 
        value={searchInput}
        placeholder='Search for a country...' 

      />
    </div>
  )
}

export default Searchcountry;
