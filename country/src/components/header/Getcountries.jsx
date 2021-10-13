import "./header.scss";
import loadcountries from "../../assets/loadcountries.gif";
import { Link } from "react-router-dom";

const Getcountries = ({ error, status, countries }) => {
  

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
          {countries.map((country) => {
            const {
              latlng,
              capital,
              name: { common },
              population,
              region,
              flags: { png },
            } = country;
            return (
              <Link key={latlng} to={`/${common}`}>
                <article>
                  <div className="flag-country">
                    <img src={png} alt={common} title={common} />
                  </div>
                  <div className="country-description">
                    <h2>{common}</h2>
                    <p>
                      <span className="country-title">Population: </span>
                      {population}{" "}
                    </p>
                    <p>
                      <span className="country-title">Region: </span>
                      {region}
                    </p>
                    <p>
                      <span className="country-title">Capital: </span>
                      {capital}
                    </p>
                  </div>
                </article>
              </Link>
            );
          })}
        </section>
      )}
    </>
  );
};

export default Getcountries;
