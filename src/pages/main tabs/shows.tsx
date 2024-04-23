type showsDataType = {

    img:string;
    header:string;
    text:string;
}


const showsData : showsDataType[]= [

{img:"https://source.unsplash.com/random/?live-dj-show1",header:"Underground Rhythms Unleashed",text:"Get ready to journey into the heart of underground electronic music with our live Boiler Room session."},
{img:"https://source.unsplash.com/random/?live-dj-show2",header:"Rooftop Revelations",text:"Elevate your nightlife experience with our exclusive Boiler Room rooftop session. Set against a breathtaking city skyline."},
{img:"https://source.unsplash.com/random/?live-dj-show3",header:"Basement Bangers Bash",text:"Dive deep into the underground scene with our Boiler Room basement party. Descend into the depths of sound as boundary-pushing DJs unleash a torrent of bass-heavy beats and experimental sounds."},
{img:"https://source.unsplash.com/random/?live-dj-show4",header:"Global Groove Gathering",text:"Join us for a transcendent musical experience as Boiler Room goes global. From bustling metropolises to remote locales, we bring together DJs from diverse cultures and backgrounds for a truly eclectic showcase of sounds."}

]



const Shows = () => {

return(
<>
<div className="shows">
{showsData.map((shows)=> {
return <>
<div className="shows__div">
<h2 className="shows__header">{shows.header}</h2>
<img className="shows__img" src={shows.img} alt={shows.header} />
<p className="shows__paragraph">{shows.text}</p>
</div>
</>
})}
</div>
</>)


}

export default Shows;