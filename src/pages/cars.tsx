type carsDataType = {
  label: string;
  imgSrc: string;
  text: string;
  header: string;
  btnTxt: string;
  bgColor: string;
  btnColor: string;
};

const carsData: carsDataType[] = [
  {
    label: "sedan",
    header: "SEDANS",
    bgColor: "#e28525",
    btnColor: "#e28525",
    btnTxt: "Learn more",
    imgSrc: "./assets/car-svgrepo-com.svg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam vitae temporibus non necessitatibus nesciunt delectus at omnis cum totam aliquam quibusdam praesentium, vero sequi nam accusamus doloremque excepturi quisquam repellat.",
  },
  {
    label: "suv",
    header: "SUVS",
    bgColor: "#016972",
    btnColor: "#016972",
    btnTxt: "Learn more",
    imgSrc: "./assets/car-svgrepo-com.svg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam vitae temporibus non necessitatibus nesciunt delectus at omnis cum totam aliquam quibusdam praesentium, vero sequi nam accusamus doloremque excepturi quisquam repellat.",
  },
  {
    label: "luxury",
    bgColor: "#00403f",
    btnColor: "#00403f",
    header: "LUXURY",
    btnTxt: "Learn more",
    imgSrc: "./assets/car-svgrepo-com.svg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam vitae temporibus non necessitatibus nesciunt delectus at omnis cum totam aliquam quibusdam praesentium, vero sequi nam accusamus doloremque excepturi quisquam repellat.",
  },
];

const Cars = () => {
  return (
    <>
      <div className="flex">
        <div className="cars">
          {carsData.map((car) => {
            return (
              <div
                style={{ backgroundColor: car.bgColor }}
                key={car.label}
                className="cars__div"
              >
                <img className="cars__img" src={car.imgSrc} alt={car.label} />
                <h1>{car.header}</h1>
                <p>{car.text}</p>
                <button style={{ color: car.btnColor }} className="cars__btn">
                  {car.btnTxt}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Cars;
