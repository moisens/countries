import useFetch from '../../hooks/useFetch';
import loadcountries from "../../assets/loadcountries.gif";



const Searchbyregion = () => {
  //const { error, status, countries } = useFetch(`https://restcountries.com/v3.1/region/${region}`);

  if (status === "pending") {
    return (
      <div className="loading">
        <img src={loadcountries} alt="load-countries" />
      </div>
    );
  } 
  if (status === 'rejected') throw error;

  return (
    <>
      {status === 'resolved' && (<div>
        
        <label htmlFor="select"></label>
        <select id='select' className='select-region'>
          <option value=''>Filter by region</option>
          <option value='africa'>Africa</option>
          <option value='america'>America</option>
          <option value='asia'>Asia</option>
          <option value='europe'>Europe</option>
          <option value='oceania'>Oceania</option>
        </select>
      </div>)}
    </>
  )
}

export default Searchbyregion;