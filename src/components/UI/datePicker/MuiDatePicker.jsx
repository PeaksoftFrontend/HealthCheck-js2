import { styled, TextField, InputAdornment } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useState } from "react";
import dayjs from "dayjs";

export const MuiDatePicker = ({ placeholder, labelText }) => {
  const [selectedDate, setSelectedDate] = useState(null);

  const shouldDisableDate = (date) => {
    return date.isBefore(dayjs(), "day");
  };

  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <StyledDatePicker
          value={selectedDate}
          onChange={(newValue) => setSelectedDate(newValue)}
          shouldDisableDate={shouldDisableDate}
          inputFormat="DD.MM.YY"
          renderInput={(params) => (
            <TextField
              {...params}
              placeholder={placeholder}
              InputProps={{
                startAdornment: labelText && (
                  <InputAdornment position="start">{labelText}</InputAdornment>
                ),
              }}
            />
          )}
        />
      </LocalizationProvider>
    </div>
  );
};

const StyledDatePicker = styled(DatePicker)(() => ({
  width: "159px",
  height: "38px",
  border: "1px solid #D9D9D9",
  borderRadius: "6px",

  "& input:-webkit-autofill, & input:-webkit-autofill:hover, & input:-webkit-autofill:focus, & input:-webkit-autofill:active":
    {
      WebkitTransition: "color 9999s ease-out, background-color 9999s ease-out",
      WebkitTransitionDelay: "9999s",
    },
  "& .MuiInputBase-input": {
    border: "none",
    padding: "8px 2px",
  },
  "& fieldset": { border: "none" },
  "& ::-webkit-input-placeholder": {
    color: "#959595",
  },
}));
