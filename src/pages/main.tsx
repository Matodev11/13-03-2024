type artistDataType = {
  Artistname: string;
  Artistfollowers: number;
  Artistlikes: number;
  Artistplays: number;
  Artistimg: string;
};

type artstNavType = {
  link: string;
};

type songDataType = {
  artistImg: string;
  artistSongName: string;
  artistAlbumName: string;
  artistTime: number;
  artistPlays: number;
};

const artistData: artistDataType = {
  Artistname: "Neko ime",
  Artistfollowers: 500,
  Artistlikes: 210,
  Artistplays: 509,
  Artistimg: "https://source.unsplash.com/random/?music-artist",
};

const artistNav: artstNavType[] = [
  { link: "Overview" },
  { link: "Music" },
  { link: "Videos" },
  { link: "Shows" },
];

const songData: songDataType[] = [
  {
    artistImg: "https://source.unsplash.com/random/?music-artist1",
    artistSongName: "Beirut",
    artistAlbumName: "wqjrfia",
    artistTime: 11,
    artistPlays: 500.431,
  },
  {
    artistImg: "https://source.unsplash.com/random/?music-artist2",
    artistSongName: "Minerta",
    artistAlbumName: "qwgagae",
    artistTime: 6,
    artistPlays: 200.332,
  },
  {
    artistImg: "https://source.unsplash.com/random/?music-artist3",
    artistSongName: "Huhueh",
    artistAlbumName: "lawjgfoiqawhj",
    artistTime: 2,
    artistPlays: 200.031,
  },
  {
    artistImg: "https://source.unsplash.com/random/?music-artist4",
    artistSongName: "hwhehe",
    artistAlbumName: "qwgagae",
    artistTime: 13,
    artistPlays: 120.431,
  },
  {
    artistImg: "https://source.unsplash.com/random/?music-artist5",
    artistSongName: "qwasvgrfsn",
    artistAlbumName: "qwgagae",
    artistTime: 7,
    artistPlays: 600.152,
  },
  {
    artistImg: "https://source.unsplash.com/random/?music-artist6",
    artistSongName: "gqwtg43z43",
    artistAlbumName: "qwgagae",
    artistTime: 10,
    artistPlays: 100.022,
  },
];

const Main = () => {
  return (
    <>
      <div className="wrap">
        <div className="profiletop">
          <img
            className="profiletop__img"
            src={artistData.Artistimg}
            alt={artistData.Artistname}
          />
          <h1 className="profiletop__h1">{artistData.Artistname}</h1>
          <div className="profiletop__info">
            {artistData.Artistfollowers}
            {"K FOLLOWERS"}
            {artistData.Artistlikes} {"K LIKE"}
            {artistData.Artistplays} {"K PLAYS"}
          </div>
          <nav className="profiletop__nav">
            {artistNav.map((link) => {
              return <a href={link.link}>{link.link}</a>;
            })}
          </nav>
        </div>
        <main className="profileinfo">
          <div className="profileinfo__music">
            {songData.map((song) => {
              return (
                <div className="profileinfo__songtab">
                  <img src={song.artistImg} alt={song.artistAlbumName} />
                  <p>{song.artistSongName}</p>
                  <p>{song.artistAlbumName}</p>
                  <p>{song.artistTime}:00</p>
                  <p>{song.artistPlays} Plays</p>
                </div>
              );
            })}
          </div>
        </main>
      </div>
    </>
  );
};

export default Main;
