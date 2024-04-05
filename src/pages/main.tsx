import { useState } from "react";
import IconLogo from "../assets/logo";
import SearchIcon from "../assets/search";
import IconShuffle from "../assets/shuffle";

type navMainType = {
  mainLink: string;
}


const navMain: navMainType[] = [

{mainLink:"Feature"},
{mainLink:"Discover"},
{mainLink:"Shows"},
{mainLink:"Fans"},
{mainLink:"Pricing"},
{mainLink:"Boiler room"},
{mainLink:"Videos"},
{mainLink:"Help center"},

]

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
  albumName:string;
}


const albumData: albumDataType[] = [

{albumImg: "https://source.unsplash.com/random/?music-album1", albumName:"Eternal Echoes"},
{albumImg: "https://source.unsplash.com/random/?music-album2", albumName:"Midnight Melodies"},
{albumImg: "https://source.unsplash.com/random/?music-album3", albumName:"Whispers in the Wind"},
{albumImg: "https://source.unsplash.com/random/?music-album4", albumName:"Luminescent Dreams"},
{albumImg: "https://source.unsplash.com/random/?music-album5", albumName:"Infinite Horizons"},
{albumImg: "https://source.unsplash.com/random/?music-album6", albumName:"Sonic Reverie"}


]

type loginDataType = {
  input1:string;
placeholder1:string;
input2:string;
placheolder2:string;}



const loginData:loginDataType = {

input1:"text",
placeholder1:"username",
input2:"password",
placheolder2:"password",

}


const Main = () => {

const [login, setLogin] = useState<loginDataType | null>(null)

const showLogin = () => {
setLogin(loginData)
}


  return (
    <>

      <div className="wrap">
      {login && (

<div className="loginbox">
<h2 className="loginbox__h2">Login info</h2>
<div className="loginbox__close">
<div onClick={()=> setLogin(null)} className="loginbox__close--2">X</div>
</div>
<input className="loginbox__inp1" type={loginData.input1} placeholder={loginData.placeholder1} />
<input className="loginbox__inp2" type={loginData.input2} placeholder={loginData.placheolder2} />
</div>

)}
        <div className="profiletop">
        
          <div className="profiletop__navtop">
            <div className="profiletop__navtop--flex1">
          <IconLogo/>
        <input className="profiletop__input" placeholder="Search" type="text" /> 
        <SearchIcon/> 
        <nav className="profiletop__navtop--nav">  
        {navMain.map((a)=> {
return <a href={a.mainLink}>{a.mainLink}</a>
})} 
</nav>
</div>

<div className="profiletop__navtop--flex2">
<button onClick={showLogin} className="profiletop__ghost">LOGIN</button>
<button className="profiletop__active">SIGN UP FOR FREE</button>

</div>

          </div>
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
            <div className="profileinfo__flex">
          <h2 className="profileinfo__h2">Featured songs</h2>
          <div className="profileinfo__shuffle">
          <p className="profileinfo__shuffle--p">SHUFFLE </p>
          <IconShuffle/>
          </div>
          
          
          </div>
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
          <div className="album">
{albumData.map((album)=> {
return (
  <div className="album__div">
<img className="album__img" src={album.albumImg} alt={album.albumName}/>
<p className="album__p">{album.albumName}</p>
</div>
)
})}

          </div>
        </main>
       
      </div>
    </>
  );
};

export default Main;
