import { ActorType } from "../pages/glumci";

type Props = {
  actor: ActorType | undefined;
};

const ActorsRender = ({ actor }: Props) => {
  return (
    <>
      {actor ? (
        <>
          <h2>{actor.name}</h2>
          <div>
            <b>{actor.movie}</b>
          </div>
          <img src={actor.imgUrl} alt={actor.imgUrl} />
          {actor.yearBorn}
        </>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default ActorsRender;
