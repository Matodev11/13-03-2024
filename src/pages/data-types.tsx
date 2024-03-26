import { useState } from "react";

type profileType = {
  ime: string;
  prezime: string;
  age: number;
  gender: boolean;
  profilepic: string;
};

type bookType = {
  title: string;
  author: string;
  pages: number;
  hardCovers: boolean;
};
const defaultProfileValues: profileType = {
  ime: "Matijas",
  prezime: "nekoje",
  age: 27,
  gender: true,
  profilepic: "awgaw",
};

const DataTypes = () => {
  const [name, setName] = useState<string>("");
  const [names, setNames] = useState<string[]>(["Ignacije", "Hajrudin"]);
  const [homeNumber, setHomeNumber] = useState<number>(0);
  const [grades, setGrades] = useState<number[]>([
    5, 4, 3, 2, 1, 2, 3, 4, 5, 5, 1, 1, 2,
  ]);
  const [profile, setProfile] = useState<profileType>(defaultProfileValues);
  const [books, setBooks] = useState<bookType[]>([]);
  const [wc, setWc] = useState<boolean>(false);

  const addBook = () => {
    const newState: bookType[] = [
      {
        title: "petar pan",
        author: "neki lik",
        hardCovers: false,
        pages: 12541,
      },
    ];

    setBooks(newState);
  };

  const changeGender = () => {
    //const newState: profileType = {
    //age: profile.age,
    //gender: !profile.gender,
    //prezime: profile.prezime,
    //ime: profile.ime,
    //profilepic: profile.profilepic,
    // };

    const newState: profileType = {
      ...profile,
      gender: !profile.gender,
    };

    setProfile(newState);
  };

  return (
    <>
      <h1>String</h1>
      <div>{name}</div>
      <hr />
      <h1>Array stringova</h1>
      <div>
        {names.length > 0
          ? names.map((name, index) => {
              return <div key={index}>{name}</div>;
            })
          : "Nema imena u ovome nizu"}
      </div>
      <button
        onClick={() => {
          setNames([
            ...names,
            "Marko Marulic",
            "ivan",
            "Mario",
            "awgqawgaw",
            "adbhaeghaw",
          ]);
        }}
        className="btn"
      >
        Change name
      </button>
      <h1>Number</h1>
      <div>{homeNumber}</div>
      {grades.length > 0
        ? grades.map((grade, index) => {
            return <div key={index}>{grade > 0 && grade < 6 && grade}</div>;
          })
        : "Nema ocjena"}
      <button
        onClick={() => {
          let newState: number[] = [];

          grades.forEach((grade) => {
            if (grade > 1) {
              newState.push(grade);
            }
          });

          setGrades(newState);
        }}
      >
        Obriši sve jedinice
      </button>
      <h1>Objekt</h1>
      <hr />
      <div>
        {profile.profilepic ? (
          <img width={30} src={profile.profilepic} alt={profile.ime} />
        ) : undefined}
      </div>
      <hr />
      <div> {!profile.gender ? "♂" : "♀"}</div>
      <button className="btn" onClick={changeGender}>
        Promijeni spol
      </button>
      <div>
        {books.length > 0
          ? books.map((book) => {
              return (
                <div key={book.title}>
                  {book.title} , {book.author}
                  <div>Broj stranica: {book.pages}</div>
                  <div>Tvrde korice: {book.hardCovers ? "da" : "ne"}</div>
                </div>
              );
            })
          : "nema knjiga?"}
      </div>
      <button onClick={addBook}>Dodaj knjigu</button>
      <hr />
      <h1>Boolean</h1>
      {wc ? "Da" : "Ne"}
      <button
        onClick={() => {
          setWc(!wc);
        }}
      ></button>
    </>
  );
};

export default DataTypes;
