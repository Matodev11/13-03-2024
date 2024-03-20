import { useState, useEffect } from "react";

type CurrencyDictionary = {
  [curr: string]: {
    name: string;
    symbol: string;
  };
};

type CountryType = {
  name: { common: string; official: string };
  region: string;
  currencies: CurrencyDictionary;
  flags: { png: string };
};

const Countries = () => {
  const [data, setData] = useState<CountryType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const getCroatia = async () => {
    await fetch(`https://restcountries.com/v3.1/croatia`)
      .then((data) => {
        return data.json();
      })
      .then((res) => {
        setData(res.results);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`http Error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setData(data);

        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h1>Countries!</h1>
      <div className="Grid">
        {data.slice(0, 6).map((country) => (
          <div className="Grid__container">
            <img
              className="Grid__container__img"
              src={country.flags.png}
              alt={country.name.common}
            />
            <p>Country name: {country.name.common}</p>
            <p>
              Country currency:{"  "}
              {Object.keys(country.currencies).map((key) => {
                const currentCurrency = country.currencies[key];
                return currentCurrency.name;
              })}
            </p>
            <p>Country region: {country.region}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Countries;
