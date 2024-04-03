import { useState } from "react";

type natureDataType = {
id:number;
name: string;

};


const natureData: natureDataType[] = [

    {id:1,
    name: "nature1",},
    {id:2,
    name: "nature2",},
    {id:3,
     name: "nature3",}, 
    {id:4,
    name: "nature4",},
     {id:5,
    name: "nature5",},
    {id:6,
     name: "nature6",}

];





const Gallery = () => {

const [gallery, setGallery] = useState<natureDataType[]>(natureData)
const [activeItem, setActiveItem] = useState<natureDataType | null>(null);

const handleActiveItem = (nature : natureDataType) => {
setActiveItem(nature)
}

return (
    <> 
<div className="gallery">
    {gallery.map((picture)=> {
return (<img onClick={() => handleActiveItem(picture)} 
className="gallery__img" 
src={`https://source.unsplash.com/random/${picture.name}`} 
alt={picture.name} />
);
    })}
</div>
{activeItem && (
       <div className="gallery__close" onClick={() => setActiveItem(null)}>X</div>
    )}

    </>
)
}

export default Gallery;