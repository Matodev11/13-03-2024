import { useState } from "react";
import DatePicker from "react-date-picker";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const Form = () => {
  const [selectedDate, setSelectedDate] = useState<Value>(new Date());

  const handleDateChange = (date: Value) => {
    setSelectedDate(date);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Selected date:", selectedDate);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="date">Select date</label> <br />
        <DatePicker value={selectedDate} onChange={handleDateChange} />
      </div>
      <button className="formbtn" style={{ width: "10rem" }} type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
