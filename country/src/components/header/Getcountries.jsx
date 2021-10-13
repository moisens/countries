import "./header.scss";
import loadcountries from "../../assets/loadcountries.gif";
import { Link } from "react-router-dom";
import { FilterThiscountry, MapThiscountry } from './Iteratecountry';



const Getcountries = ({ error, status, countries, filterCountry, searchInput }) => {
  

  if (status === "pending") {
    return (
      <div className="loading">
        <img src={loadcountries} alt="load-countries" />
      </div>
    );
  }

  if (status === "rejected") throw error;

  return (
    <>
      {status === "resolved" && (
        <section>
          <>
            {searchInput.length > 0 ? (
              <FilterThiscountry filterCountry={filterCountry} />
            ) : (
              <MapThiscountry countries={countries} />
            )}
          </>
        </section>
      )}
    </>
  );
};

export default Getcountries;
