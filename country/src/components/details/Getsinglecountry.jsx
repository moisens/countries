import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import loadcountries from "../../assets/loadcountries.gif";

const Getsinglecountry = () => {
  const { name } = useParams();
  const { error, status, countries } = useFetch(
    `https://restcountries.com/v3.1/name/${name}`
  );

  

  if (status === "pending")
    return (
      <div className="loading">
        <img src={loadcountries} alt="load-countries" />
      </div>
    );
  if (status === "rejected") throw error;

  return (
    <>
      {status === "resolved" && (
        <div className="detail-country">
          {countries.map((country) => {
            const {
              name: { common },
              population,
              region,
              subregion,
              capital,
              languages,
              tld,
              currencies,
              flags: { png },
              borders,
            } = country;
            return (
              <div key={common}>
                <div className="flag-desciption">
                  <img src={png} alt={common} title={common} />
                </div>
                <div>
                  <div className="country-container">
                    <div className="country-description">
                      <h2>{common}</h2>
                      <p>
                        <span className="country-title">Native Name: </span>
                        {common}
                      </p>
                      <p>
                        <span className="country-title">Population: </span>
                        {population}
                      </p>
                      <p>
                        <span className="country-title">Region: </span>
                        {region}
                      </p>
                      <p>
                        <span className="country-title">Sub Region: </span>
                        {subregion}
                      </p>
                      <p>
                        <span className="country-title">Capital: </span>
                        {capital}
                      </p>
                    </div>
                    <div className="country-description litle-space">
                      <p>
                        <span className="country-title">
                          Top Level Domain:{" "}
                        </span>
                        {tld}
                      </p>
                      <div className="langandcurrency">
                        <span className="country-title">Currencies: </span>
                        {Object.entries(currencies).map(([key, currency]) => {
                          return <p key={key}>{currency.name}</p>;
                        })}
                      </div>
                      <div className="langandcurrency">
                        <span className="country-title">Languages: </span>
                        {Object.entries(languages).map(([key, language]) => {
                          return <p key={key}>{language}</p>;
                        })}
                      </div>
                    </div>
                  </div>
                  <div className="border-countries">
                    <p>
                      <span className="country-title">Border Countries: </span>
                      {borders.map((border, index) => {
                        return (
                          <span className="countries-around" key={index}>
                            {border}
                          </span>
                        );
                      })}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Getsinglecountry;