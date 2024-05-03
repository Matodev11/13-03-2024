type SongType = {
  name: string;
  artist: string;
};

type FavType = {
  favoriteSongs: SongType[];
  onRemove: (song: SongType) => void;
};

const FavSongs = ({ favoriteSongs, onRemove }: FavType) => {
  return (
    <div className="spotify__favorites">
      {favoriteSongs.length > 0
        ? favoriteSongs.map((song) => (
            <div key={song.name} className="spotify__list__item">
              <div>
                <div>{song.name}</div>
                <div>{song.artist}</div>
              </div>
              <button onClick={() => onRemove(song)}>{"<--"}</button>
            </div>
          ))
        : "Nema favorite pjesama"}
    </div>
  );
};

export default FavSongs;
