import { useState } from "react";
import DatePicker from "react-date-picker";
import TimePicker from "react-time-picker";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const Form = () => {
  const [selectedDate, setSelectedDate] = useState<Value>(new Date());
  const [selectedTime, setSelectedTime] = useState<string | null>("10:00");

  const handleTimeChange = (time: string | null) => {
    setSelectedTime(time);
  };

  const handleDateChange = (date: Value) => {
    setSelectedDate(date);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Selected date:", selectedDate);
    console.log("Selected time:", selectedTime);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="field">
        <DatePicker value={selectedDate} onChange={handleDateChange} />
      </div>
      <div className="field">
        <TimePicker onChange={handleTimeChange} value={selectedTime} />
      </div>
      <button className="formbtn" style={{ width: "10rem" }} type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
