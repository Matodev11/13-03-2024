import { useState, useEffect } from "react";

type ActiveBerryType = {
    sprites: {
        default: string;
      };
}

type ResultsType = {
    name:string;
    url:string;
}

type Results = {
    results:ResultsType[];
}

const Berries = () => {

const [data, setData] = useState<ResultsType[]>([])

const [activeBerry, setActiveBerry] = useState<
ActiveBerryType | undefined
>(undefined);

const getData = async() => {

await fetch ("https://pokeapi.co/api/v2/item/?offset=125&limit=64") 
.then((res)=>{
return res.json()

})
.then ((res: Results)=>{
    setData(res.results);
    console.log(res.results)
    
    
})
.catch ((err)=>{
console.log(err)
});
}

const getBerryData = async (berry: string) => {
    await fetch(`https://pokeapi.co/api/v2/item/${berry}`)
      .then((data) => {
        return data.json();
        
      })
      .then((res: ActiveBerryType) => {
        setActiveBerry(res);
        console.log(res)
        
      })
      .catch((err) => {
        console.log(err);
      });
  };


useEffect(() => {
    getData();
}, []);

return(
    <>
    <h1>YUM! Berries</h1>
    {data.map((berries)=>{
        return <button onClick={(e) => {
            const test = e.target as HTMLButtonElement;
            getBerryData(test.innerHTML);
          }} key={berries.name}>{berries.name}</button>
    })}
    <div className="berry">
    <img className="berry__img" src={activeBerry?.sprites.default} alt={Berries.name} />
    </div>
    </>
    
)

}

export default Berries;