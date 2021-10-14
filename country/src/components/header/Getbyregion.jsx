import useFetch from '../../hooks/useFetch';
import loadcountries from "../../assets/loadcountries.gif";



const Searchbyregion = ({ setCountries }) => {

 

  //const { countries: regions } = useFetch(
  //  `https://restcountries.com/v3.1/region/${region.name}`
  //);
//
  //const fetchRegion = (region) => {
  //  
  //  setCountries(regions);
  //}

  const handleChange = (e) => {
    const continent = e.target.value;
    if (continent === '') return;
    fetchRegion(continent);
    console.log(continent);
  }
  
  

  return (
    <>
      <label htmlFor="select"></label>
      <select 
        id='select' 
        className='select-region'
      >
        <option value=''>Filter by region</option>
        <option value='africa'>Africa</option>
        <option value='america'>America</option>
        <option value='asia'>Asia</option>
        <option value='europe'>Europe</option>
        <option value='oceania'>Oceania</option>
      </select>
    </>
  )
  
}

export default Searchbyregion;