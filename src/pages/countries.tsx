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
const croatiaData = data.find((country)=> country.name.common === "Croatia")
  
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
      {croatiaData && (
            <div className="Croatia">
              <img className="Croatia__flag" src={croatiaData.flags.png} alt={croatiaData.name.common} />
              <p>{croatiaData.name.common}</p>
              <p>Regija:{croatiaData.region}</p>
              <p>Country currency:{Object.keys(croatiaData.currencies).map((key)=>{
                const croatiaCurrency = croatiaData.currencies[key];
                return croatiaCurrency.name;
              })}</p>
            </div>
           )}
    </>
  );
};

export default Countries;
