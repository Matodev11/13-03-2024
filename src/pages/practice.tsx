import { ChangeEvent, useState } from "react";

const Practice = () => {
  let Colors = ["red", "blue", "yellow", "white"];

  type RandomObjecttype = {
    value: string;
    number: number;
    boolean: boolean;
    array: string[];
  };

  const RandomObject = {
    value: "nekakav",
    number: 250,
    boolean: true,
    array: Colors,
  };

  const [input, setInput] = useState<string>("");
  const [count, setCount] = useState(0);
  const [array, setArray] = useState<string[]>(Colors);
  const [object, setObject] = useState<RandomObjecttype>(RandomObject);
  const [booleanArray, setBooleanArray] = useState<boolean[]>([]);

  const reverseValue = () => {
    setObject(RandomObject);
  };

  const updateValue = () => {
    let newArray = ["purple", "pink", "green", "cyan"];
    setObject((prevState) => ({
      ...prevState,
      value: "Nova vrijednost",
      number: 265,
      boolean: false,
      array: newArray,
    }));
  };

  const addRandomColor = () => {
    const randomColor = getRandomColor();
    Adder(randomColor);
  };

  // Funkcija koja generira slučajnu boju
  const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * Colors.length);
    return Colors[randomIndex];
  };

  const Adder = (NewColor: string) => {
    setArray((previous) => [...previous, NewColor]);
  };

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const addBoolean = () => {
    setBooleanArray((prevArray) => [...prevArray, true]);
  };

  const removeBoolean = () => {
    setBooleanArray((prevArray) => prevArray.slice(0, -1));
  };

  const checkInput = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    if (input === "Tekst") {
      return console.log("dobro je");
    } else {
      console.log("nije dobro");
    }

    setInput(inputValue);
  };
  const img1 =
    "https://posterandframe.com/cdn/shop/files/Tim-David_Red-eyed-tree-frog_40-x-50_PLD_7950_5713713580237_1024x1024.jpg?v=1698237068";
  const img2 =
    "https://images.wall-art.de/format:webp/q:92/rs:fit:1560:/_img/out/pictures/master/product/1/glasbild-rund-ga16161-gruener-frosch-30x30-final.jpg";
  return (
    <>
      <input value={input} onChange={checkInput} type="text" />
      <h1>Count :{count}</h1>
      <button className="btn" onClick={increment}>
        +1
      </button>
      <button className="btn" onClick={decrement}>
        -1
      </button>
      <button className="btn" onClick={addRandomColor}>
        Add color
      </button>
      {array.map((colors, index) => {
        return (
          <div
            key={index}
            className="colors__div"
            style={{ backgroundColor: colors }}
          >
            {colors}
          </div>
        );
      })}

      {object.array.map((data) => {
        return (
          <div
            className="object"
            style={{ backgroundColor: data, height: object.number + "px" }}
          >
            {object.value}
            <img
              className="object__img"
              src={object.boolean ? img1 : img2}
              alt="frog"
            />
            <p>Frog number: {object.number}</p>
            <p>Frog colors: {object.array.join(" ")}</p>
          </div>
        );
      })}
      <button className="object__btn" onClick={updateValue}>
        Click me!
      </button>
      <button className="object__btn" onClick={reverseValue}>
        Reverse!
      </button>
      <div>
        <button onClick={addBoolean}>Dodaj boolean</button>
        <button onClick={removeBoolean}>Ukloni boolean</button>
        <ul>
          {/* Prikazujemo svaku boolean vrijednost iz niza */}
          {booleanArray.map((value, index) => (
            <li key={index}>{value.toString()}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Practice;
