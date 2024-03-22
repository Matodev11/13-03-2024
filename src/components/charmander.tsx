import { useState, useEffect } from "react";

type AbilityType = {
  name: string;
};

type AbilitiesType = {
  ability: AbilityType;
};

type PokemonType = {
  abilities: AbilitiesType[];
  order: string;
  name: string;
  sprites: {
    front_default: string;
  };
};

const Charmander = () => {
  const [data, setData] = useState<PokemonType | null>(null);

  const getData = async () => {
    await fetch(`https://pokeapi.co/api/v2/pokemon/charmander`)
      .then((response) => response.json())
      .then((charmander: PokemonType) => {
        setData(charmander);
        console.log(charmander);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {data && (
        <div className="charmander">
          <h1>#{data.order}</h1>
          <p>{data.name}</p>
          <img src={data.sprites.front_default} alt="charmander" />
          <p>
            Abilities:
            {data.abilities.map((item) => {
              return <div>{item.ability.name}</div>;
            })}
          </p>
        </div>
      )}
    </>
  );
};

export default Charmander;
