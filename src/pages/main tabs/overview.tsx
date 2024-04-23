type overviewDataType = {
    header:string; 
    text:string;
}



const overviewData : overviewDataType[]= [

{header:"Welcome to ArtisPageName!", text:"Whether you're a casual listener or a dedicated music enthusiast, [Your Music Page Name] offers an immersive experience that celebrates the artistry and creativity of musicians worldwide."},
{header:"Discover Artists", text:"Learn about their inspirations, musical journey, and upcoming projects. With a wide range of artists to explore, there's always something new to discover and appreciate."},
{header:"Live Shows", text:"Tune in to our live shows and witness electrifying performances by emerging and established artists alike. With a dynamic lineup of concerts and events, there's never a dull moment on [Your Music Page Name]."},
{header:"Video Music", text:"Whether you're seeking inspiration, entertainment, or simply a moment of relaxation, our platform has something for everyone. Let the music play and let your soul soar."}
]



const Overview = () => {

return (<>
<div className="overview">
{overviewData.map((overview)=> {
return <> <h2 className="overview__header">{overview.header}</h2>
<p className="overview__paragraph">{overview.text}</p> 
</>

})}
</div>

</>)

}

export default Overview;