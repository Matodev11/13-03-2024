import React, { useState } from "react";
import MovieRender from "../components/movierender";

type TabType = {
  id: string;
  label: string;
};

const tabData: TabType[] = [
  {
    id: "1",
    label: "Home Alone",
  },
  {
    id: "2",
    label: "Dumb and Dumber",
  },
  {
    id: "3",
    label: "Interstellar",
  },
  {
    id: "4",
    label: "Blade Runner 2049",
  },
];

export type MovieType = {
  id: string;
  name: string;
  year: string;
  genre: string[];
};

const movieData: MovieType[] = [
  {
    id: "1",
    name: "Home Alone",
    year: "1990",
    genre: ["Comedy", "Action"],
  },
  {
    id: "2",
    name: "Dumb and Dumber",
    year: "1994",
    genre: ["Comedy"],
  },
  {
    id: "3",
    name: "Interstellar",
    year: "2014",
    genre: ["Adventure", "Drama", "Sci-Fi"],
  },
  {
    id: "4",
    name: "Blade Runner 2049",
    year: "2017",
    genre: ["Action", "Drama", "Mystery"],
  },
];

type ActorType = {
  id: string;
  name: string;
  movie: string;
  yearBorn: string;
  imgUrl: string;
};

const actorData: ActorType[] = [
  {
    id: "1",
    name: "Macaulay Culkin",
    movie: "Home Alone",
    yearBorn: "1980",
    imgUrl:
      "https://cdn.britannica.com/86/223086-050-A0B57A81/Macaulay-Culkin-2018.jpg",
  },
  {
    id: "2",
    name: "Jim Carrey",
    movie: "Dumb and Dumber",
    yearBorn: "1962",
    imgUrl:
      "https://m.media-amazon.com/images/M/MV5BMTQwMjAwNzI0M15BMl5BanBnXkFtZTcwOTY1MTMyOQ@@._V1_.jpg",
  },
];

const Glumci = () => {
  const [activeTab, setActiveTab] = useState<TabType>(tabData[0]);
  const [showActors, setShowActors] = useState<ActorType[]>(actorData);

  const toggleActors = () => {
    setShowActors(actorData);
  };

  return (
    <>
      <div className="tab">
        {tabData.map((tab) => (
          <div
            key={tab.id}
            className={`tab__item ${tab.id === activeTab.id ? "active" : ""}`}
            onClick={() => {
              setActiveTab(tab);
            }}
          >
            {tab.label}
          </div>
        ))}
      </div>
      <div className="tab__content">
        <MovieRender
          movie={movieData.find((movie) => activeTab.id === movie.id)}
        />
        <div onClick={toggleActors}>X</div>

        {showActors && (
          <div className="actors">
            {actorData.map((actor) => {
              return (
                <div>
                  <img
                    className="actors__img"
                    src={actor.imgUrl}
                    alt={actor.imgUrl}
                  />
                  <p>
                    {actor.name} {actor.yearBorn}
                  </p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default Glumci;
