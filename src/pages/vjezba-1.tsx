import { useEffect, useState } from "react";

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type ObjectType = {
  maxNumber: number;
  minNumber: number;
};

const Object: ObjectType = {
  maxNumber: 0,
  minNumber: 0,
};

const Vjezba1 = () => {
  const [number, getNumber] = useState<ObjectType>(Object);

  const Counter = (count = 7) => {
    if (count < 0) {
      return console.log("Broj ne može biti negativan!");
    }

    let result = " ";
    for (let i = 1; i <= count; i++) {
      result += i + "";
    }
    console.log(result);
  };
  Counter();

  useEffect(() => {
    const newObject: ObjectType = {
      maxNumber: Math.max(...array),
      minNumber: Math.min(...array),
    };
    getNumber(newObject);
  }, []);

  return (
    <>
      <div>
        Max number is: {number.maxNumber}
        <br />
        Min number is: {number.minNumber}
      </div>
    </>
  );
};

export default Vjezba1;
