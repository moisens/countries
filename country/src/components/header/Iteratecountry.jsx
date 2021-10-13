import { Link } from "react-router-dom";

export const FilterThiscountry = ({ filterCountry }) => {
  return (
    <>
      {filterCountry.map((country) => {
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
    </>
  )
}


export const MapThiscountry = ({ countries }) => {
  return (
    <>
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
    </>
  )
}
