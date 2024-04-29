import { useEffect, useState } from "react";

type PhoneType = {
  id: string;
  brand: string;
  model: string;
  color: string;
  storage: string;
  price: number;
};

const Phones = () => {
  const [data, setData] = useState<PhoneType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const getData = () => {
    fetch("http://localhost:3000/phones")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`http Error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data: PhoneType[]) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  };

  const putData = (values: PhoneType) => {
    fetch("http://localhost:3000/phones", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((data) => {
        console.log(data);
        getData();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteData = (id: string) => {
    const toDelete = "5364";
    fetch(`http://localhost:3000/phones/${toDelete}`, {
      method: "DELETE",
    });
  };

  const editData = (id: string, values: PhoneType) => {
    const toEdit = "5364";
    const fakeData: PhoneType = {
      brand: "asd",
      color: "asd",
      id: "5364",
      model: "asdg",
      price: 325423,
      storage: "afjgnr",
    };
    fetch(`http://localhost:3000/phones/${toEdit}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(fakeData),
    });
  };

  useEffect(() => {
    getData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div>
        <button
          onClick={() => {
            const fakeData: PhoneType = {
              brand: "asd",
              color: "asd",
              id: "5364",
              model: "asdg",
              price: 325423,
              storage: "afjgnr",
            };
            putData(fakeData);
          }}
        >
          ADD
        </button>
        <button
          onClick={() => {
            deleteData("5364");
          }}
        >
          DELETE
        </button>
        <button
          onClick={() => {
            const data: PhoneType = {
              brand: "wqtqw3t3qwtgads",
              color: "aq3te5336374",
              id: "5364",
              model: "asdg",
              price: 325423,
              storage: "afjgnr",
            };
            editData("5364", data);
          }}
        >
          EDIT
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Brand</th>
            <th>Model</th>
            <th>Color</th>
            <th>Price</th>
            <th>Storage</th>
          </tr>
        </thead>
        <tbody>
          {data.map((phone) => {
            const { brand, color, id, model, price, storage } = phone;
            return (
              <>
                <tr key={id}>
                  <td>{brand}</td>
                  <td>{model}</td>
                  <td>{storage}</td>
                  <td>{color}</td>
                  <td>{price}</td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Phones;
