import { useState } from "react";
import { styled } from "@mui/material/styles";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker as MuiTimePicker } from "@mui/x-date-pickers";

export const TimePickerHourAndMinutes = ({
  value,
  onChange,
  onBlur,
  format,
  maxTime,
  minTime,
  error,
  ...rest
}) => {
  const [internalValue, setInternalValue] = useState(value);

  const handleChange = (time) => {
    setInternalValue(time);
    if (onChange) {
      onChange(time);
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StyledTimePicker
        value={internalValue}
        onChange={handleChange}
        onBlur={onBlur}
        maxTime={maxTime}
        minTime={minTime}
        error={error}
        ampm={false}
        {...rest}
      />
    </LocalizationProvider>
  );
};

const StyledTimePicker = styled(MuiTimePicker)(({ error }) => ({
  "& .MuiInputBase-root": {
    borderRadius: "6px",
    fontFamily: "Manrope",
    fontWeight: 400,
    fontSize: "14px",
    border: error ? "1px solid red" : "1px solid #D4D4D4",
  },

  "& input": {
    width: "3.7rem",
    padding: "3px 6px",
    height: "30px",
    fontSize: "17px",
  },

  "& .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },

  "& .MuiInputAdornment-root.MuiInputAdornment-positionEnd": {
    display: "none",
  },
}));
