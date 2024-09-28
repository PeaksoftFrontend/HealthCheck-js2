import { styled } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import "dayjs/locale/ru";
import { Icons } from "../../../assets/icons";
import { TextField, InputAdornment } from "@mui/material";

export const MuiDatePicker = ({ selectedDate, onDateChange }) => {
  const shouldDisableDate = (date) => {
    return date.isBefore(dayjs(), "day");
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ru">
      <StyledDatePicker
        value={selectedDate}
        onChange={(newValue) => onDateChange(newValue)}
        shouldDisableDate={shouldDisableDate}
        inputFormat="DD.MM.YY"
        renderInput={(params) => (
          <StyledTextField
            {...params}
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <InputAdornment position="end">
                  <Icons.CalendarTodayIcon />
                </InputAdornment>
              ),
            }}
          />
        )}
      />
    </LocalizationProvider>
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
    padding: "8px 4px",
  },

  "& fieldset": {
    border: "none",
  },
  "& ::-webkit-input-placeholder": {
    color: "#959595",
  },
}));

const StyledTextField = styled(TextField)(() => ({}));
