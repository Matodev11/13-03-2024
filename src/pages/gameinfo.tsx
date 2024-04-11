import { useParams } from "react-router";
import { gameData, gameDataType } from "./games";
import { useState, useEffect } from "react";

const GameInfo = () => {
  const { gameId } = useParams();
  const [data, setData] = useState<gameDataType>();
  const getGameInfo = () => {
    const game = gameData.find((game) => {
      return game.id === gameId;
    });
    setData(game);
  };

  useEffect(() => {
    getGameInfo();
  }, []);

  return (
    <>
      {data ? (
        <>
          <div className="games" key={data.id}>
            <h1>{data.title}</h1>

            <img
              className="games__img"
              width={200}
              src={data.imgUrl}
              alt={data.imgUrl}
            />
            <p>Developers: {data.developer}</p>
            <h2>Platforms:</h2>
            <div className="games__flex">
              {data.platforms.map((platform) => {
                return <p className="games__flex--p">{platform}</p>;
              })}
            </div>
            <hr className="games__line" />
            <p>Release date: {data.releaseDate}</p>
          </div>
        </>
      ) : (
        <div>Igrica sa {gameId} ne postoji u bazi podataka </div>
      )}
    </>
  );
};

export default GameInfo;
