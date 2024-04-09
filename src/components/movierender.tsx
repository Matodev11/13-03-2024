import { MovieType } from "../pages/glumci";

type Props = {
  movie: MovieType | undefined;
};

const MovieRender = ({ movie }: Props) => {
  return (
    <>
      {movie ? (
        <>
          <h2>{movie.name}</h2>
          <div>
            <b>{movie.year}</b>
          </div>
          <div className="tag__wrapper">
            {movie.genre.map((genre) => {
              return <div key={genre}>{genre}</div>;
            })}
          </div>
        </>
      ) : (
        <div>Za ovaj ID ne postoji niti jedan film u bazi</div>
      )}
    </>
  );
};

export default MovieRender;
