import { useState } from "react";
import IconLogo from "../assets/logo";
import SearchIcon from "../assets/search";
import IconShuffle from "../assets/shuffle";
import IconPlay from "../assets/play";
import IconShare from "../assets/iconshare";
import IconCancel from "../assets/cancel";

const djBio: string = `
In the pulsating heart of the electronic music scene,
 there exists a luminary whose sonic tapestries weave
  dreams into reality and ignite dancefloors with fervent
   energy. Enter DJ Nova, a maestro of beats and melodies,
    whose artistry transcends the boundaries of sound,
     captivating audiences worldwide with a blend of
      electrifying rhythms and soul-stirring harmonies.     
Born and raised amidst the vibrant streets of a metropolis,
 DJ Nova's journey into the realm of music began at an early age,
  fueled by a deep-seated passion for sonic exploration. Inspired
   by the diverse cultural tapestry surrounding him, he embarked
    on a quest to carve out his unique sonic identity, drawing
     upon a myriad of influences ranging from underground techno
      to melodic house, and everything in between.
`;

type navMainType = {
  mainLink: string;
};

const navMain: navMainType[] = [
  { mainLink: "Feature" },
  { mainLink: "Discover" },
  { mainLink: "Shows" },
  { mainLink: "Fans" },
  { mainLink: "Pricing" },
  { mainLink: "Boiler room" },
  { mainLink: "Videos" },
  { mainLink: "Help center" },
];

type artistDataType = {
  Artistname: string;
  Artistfollowers: string;
  Artistlikes: string;
  Artistplays: string;
  Artistimg: string;
};

type artstNavType = {
  link: string;
  id: number;
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
  Artistfollowers: "500K Followers",
  Artistlikes: "210K Likes",
  Artistplays: "509K Plays",
  Artistimg: "https://source.unsplash.com/random/?music-artist",
};

const artistNav: artstNavType[] = [
  { link: "Overview", id: 1 },
  { link: "Music", id: 2 },
  { link: "Videos", id: 3 },
  { link: "Shows", id: 4 },
];

const songData: songDataType[] = [
  {
    artistImg: "https://source.unsplash.com/random/?music-artist1",
    artistSongName: "Beirut",
    artistAlbumName: "Serenade of Shadows",
    artistTime: 11,
    artistPlays: 500.431,
  },
  {
    artistImg: "https://source.unsplash.com/random/?music-artist2",
    artistSongName: "Minerta",
    artistAlbumName: "Whispers in the Mist",
    artistTime: 6,
    artistPlays: 200.332,
  },
  {
    artistImg: "https://source.unsplash.com/random/?music-artist3",
    artistSongName: "Bloodlust Anthem",
    artistAlbumName: "Brutal Revelation",
    artistTime: 2,
    artistPlays: 200.031,
  },
  {
    artistImg: "https://source.unsplash.com/random/?music-artist4",
    artistSongName: "Hellfire Symphony",
    artistAlbumName: "Chaos Reigns",
    artistTime: 13,
    artistPlays: 120.431,
  },
  {
    artistImg: "https://source.unsplash.com/random/?music-artist5",
    artistSongName: "Sinister Slaps",
    artistAlbumName: "Graveyard Groove",
    artistTime: 7,
    artistPlays: 600.152,
  },
  {
    artistImg: "https://source.unsplash.com/random/?music-artist6",
    artistSongName: "Vibin' in the Void",
    artistAlbumName: "Murderous Melodies",
    artistTime: 10,
    artistPlays: 100.022,
  },
];

type albumDataType = {
  albumImg: string;
  albumName: string;
};

const albumData: albumDataType[] = [
  {
    albumImg: "https://source.unsplash.com/random/?music-album1",
    albumName: "Eternal Echoes",
  },
  {
    albumImg: "https://source.unsplash.com/random/?music-album2",
    albumName: "Midnight Melodies",
  },
  {
    albumImg: "https://source.unsplash.com/random/?music-album3",
    albumName: "Whispers in the Wind",
  },
  {
    albumImg: "https://source.unsplash.com/random/?music-album4",
    albumName: "Luminescent Dreams",
  },
  {
    albumImg: "https://source.unsplash.com/random/?music-album5",
    albumName: "Infinite Horizons",
  },
  {
    albumImg: "https://source.unsplash.com/random/?music-album6",
    albumName: "Sonic Reverie",
  },
];

type loginDataType = {
  input1: string;
  placeholder1: string;
  input2: string;
  placheolder2: string;
};

const loginData: loginDataType = {
  input1: "text",
  placeholder1: "username",
  input2: "password",
  placheolder2: "password",
};

type HTMLConstruct = JSX.Element | null;

const overviewHTML = (
  <div className="profileinfo__music">
    {songData.map((song) => (
      <div className="profileinfo__songtab" key={song.artistSongName}>
        <img
          key={song.artistAlbumName}
          src={song.artistImg}
          alt={song.artistAlbumName}
        />
        <p key={song.artistSongName}>{song.artistSongName}</p>
        <p>{song.artistAlbumName}</p>
        <p key={song.artistTime}>{song.artistTime}:00</p>
        <p key={song.artistPlays}>{song.artistPlays} Plays</p>
        <IconPlay />
        <IconShare />
      </div>
    ))}
  </div>
);

type videoDataType = {
  img:string;
}


const videoData:videoDataType[] = [

{img:"https://source.unsplash.com/random/?concert1"},
{img:"https://source.unsplash.com/random/?concert2"},
{img:"https://source.unsplash.com/random/?concert3"},
{img:"https://source.unsplash.com/random/?concert4"},
{img:"https://source.unsplash.com/random/?concert5"},
{img:"https://source.unsplash.com/random/?concert6"}
]




const Main = () => {
  const [login, setLogin] = useState<loginDataType | null>(null);
  const [activeTabHTML, setActiveTabHTML] = useState<HTMLConstruct>(overviewHTML);
  const [activeTab, setActiveTab] = useState<number>(1);

  const handleTabClick = (linkId: number) => {
    let newHTML: HTMLConstruct = null;
    if (linkId === 2) {
     
      newHTML = overviewHTML;
    } else if (linkId === 3) {
     
      newHTML = (
        <div className="profileinfo__video">
          {videoData.map((video, index) => (
            <div className="profileinfo__video--div" key={index}>
              <img
                className="profileinfo__video--img"
                src={video.img}
                alt={video.img}
              />
            </div>
          ))}
        </div>
      );
    }
    setActiveTabHTML(newHTML);
  };


  const showLogin = () => {
    setLogin(loginData);
  };

  return (
    <>
      <div className="wrap">
        <img
          className="artistimg"
          src="https://source.unsplash.com/random/?DJ"
          alt={artistData.Artistname}
        />
        <div className="artist">
          <h2 className="artist__h2">BIOGRAPHY</h2>
          <p className="artist__p">{djBio}</p>
        </div>

        {login && (
          <div className="loginbox">
            <h2 className="loginbox__h2">Login info</h2>
            <div className="loginbox__close">
              {[...Array(3)].map((_, index) => (
                <span
                  key={index}
                  style={{ ["--s" as string]: index + 1 }}
                ></span>
              ))}

              <IconCancel onClick={() => setLogin(null)} />
            </div>
            <p>Enter your username or email address</p>
            <input
              className="loginbox__inp1"
              type={loginData.input1}
              placeholder={loginData.placeholder1}
            />
            <p>Enter your password:</p>
            <input
              className="loginbox__inp2"
              type={loginData.input2}
              placeholder={loginData.placheolder2}
            />
          </div>
        )}
        <div className="profiletop">
          <div className="profiletop__navtop">
            <div className="profiletop__navtop--flex1">
              <IconLogo />
              <input
                className="profiletop__input"
                placeholder="Search"
                type="text"
              />
              <SearchIcon />
              <nav className="profiletop__navtop--nav">
                {navMain.map((a, index) => {
                  return (
                    <a key={index} href={a.mainLink}>
                      {a.mainLink}
                    </a>
                  );
                })}
              </nav>
            </div>

            <div className="profiletop__navtop--flex2">
              <button onClick={showLogin} className="profiletop__ghost">
                LOGIN
              </button>
              <button className="profiletop__active">SIGN UP FOR FREE</button>
            </div>
          </div>
          <img
            className="profiletop__img"
            src={artistData.Artistimg}
            alt={artistData.Artistname}
          />{" "}
          <h1 className="profiletop__h1">{artistData.Artistname}</h1>
          <div className="profiletop__info">
            <p>{artistData.Artistfollowers}</p>
            <p>{artistData.Artistlikes}</p>
            <p>{artistData.Artistplays}</p>
          </div>
          <div className="profiletop__tabdiv">
            {artistNav.map((link) => {
              return (
                <div
                  className={`profiletop__tabdiv--tab ${
                    link.id === activeTab ? "active" : ""
                  }`}
                  key={link.id}
                  onClick={() => {
                    setActiveTab(link.id)
                    handleTabClick(link.id);
                  }}
                >
                  {link.link}{" "}
                </div>
              );
            })}
          </div>
        </div>
        <main className="profileinfo">
        {activeTabHTML || overviewHTML}
          <div className="profileinfo__music">
            <div className="profileinfo__flex">
              <h2 className="profileinfo__h2">Featured songs</h2>
              <div className="profileinfo__shuffle">
                <p className="profileinfo__shuffle--p">SHUFFLE </p>
                <IconShuffle />
              </div>
            </div>
            
          </div>
          <div className="album">
            {albumData.map((album) => {
              return (
                <div className="album__div">
                  <img
                    className="album__img"
                    src={album.albumImg}
                    alt={album.albumName}
                  />
                  <p className="album__p">{album.albumName}</p>
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
