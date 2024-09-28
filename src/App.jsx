import { MuiDatePicker } from "./components/UI/datePicker/MuiDatePicker";
import { useState } from "react";

export const App = () => {
  const [selectedDate, setSelectedDate] = useState();
  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
  };

  return (
    <div>
      <h3>{selectedDate ? selectedDate.format("DD.MM.YYYY") : ""}</h3>
      <MuiDatePicker
        selectedDate={selectedDate}
        onDateChange={handleDateChange}
      />
    </div>
  );
};
