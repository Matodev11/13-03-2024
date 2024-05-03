type SongType = {
  name: string;
  artist: string;
};

interface SongListProps {
  songs: SongType[];
  onFavorite: (song: SongType) => void;
}

const SongList = ({ songs, onFavorite }: SongListProps) => {
  return (
    <div className="spotify__list">
      {songs.length > 0
        ? songs.map((song) => (
            <div key={song.name} className="spotify__list__item">
              <div>
                <div>{song.name}</div>
                <div>{song.artist}</div>
              </div>
              <button onClick={() => onFavorite(song)}>{"-->"}</button>
            </div>
          ))
        : "Nema više pjesama"}
    </div>
  );
};

export default SongList;
