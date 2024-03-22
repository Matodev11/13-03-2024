import { useState, useEffect } from "react";

type AbilityType = {
ability:{name:string;
    }; 
}


type Charizard = {
name:string,
abilities:AbilityType[];
order:string;
sprites:{front_default:string}

}


const Charizard = () => {

const [data, setData] = useState<Charizard | null>(null);

const getData = async () => {
    await fetch("https://pokeapi.co/api/v2/pokemon/charizard")
    .then((res)=>{
        return res.json()
    })
    .then((data)=>{
        setData(data);
        
    })
    .catch((err)=> {
    console.log(err)
    });
}

useEffect(() => {
    getData();
}, []);


    return (
        <>
       {data ? (
<>
<div className="charizard">
    <h1>#{data.order}</h1>
    <img src={data.sprites.front_default} alt="" />
    <p>Name: {data.name}</p>
</div>
{data.abilities.map((ability)=>{
    return <p key={ability.ability.name}>Ability: {ability.ability.name}</p>
})}

</>
) : ("Nismo dohvatili")}
</>
        
    )
}


export default Charizard;