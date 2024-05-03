import { useState } from "react";
import SongList from "../components/list components/songlist";
import FavSongs from "../components/list components/favsongs";

export const data: SongType[] = [
  {
    name: "Fuel",
    artist: "Metallica",
  },
  {
    name: "Enter Sandman",
    artist: "Metallica",
  },
  {
    name: "Master of Puppets",
    artist: "Metallica",
  },
  {
    name: "Smells like teen spirit",
    artist: "Nirvana",
  },
  {
    name: "Lithium",
    artist: "Nirvana",
  },
  {
    name: "Can't stop",
    artist: "RHCP",
  },
  {
    name: "Suck my kiss",
    artist: "RHCP",
  },
];

export type SongType = {
  name: string;
  artist: string;
};

const Spotify = () => {
  const [list, setList] = useState<SongType[]>(data);
  const [favList, setFavList] = useState<SongType[]>([]);

  const onFavorite = (song: SongType) => {
    setList((prev) => {
      return prev.filter((currentSong) => currentSong.name !== song.name);
    });
    setFavList((prev) => {
      return [...prev, song];
    });
  };

  const onRemove = (song: SongType) => {
    setList((prev) => {
      return [...prev, song];
    });
    setFavList((prev) => {
      return prev.filter((currentSong) => currentSong.name !== song.name);
    });
  };

  return (
    <>
      <div className="spotify">
        <SongList songs={list} onFavorite={onFavorite} />
        <div className="spotify__favorites">
          <FavSongs favoriteSongs={favList} onRemove={onRemove} />
        </div>
      </div>
    </>
  );
};

export default Spotify;
