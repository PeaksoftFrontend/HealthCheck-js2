import { styled } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import "dayjs/locale/ru";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";

export const MuiDatePicker = ({ selectedDate, onDateChange }) => {
  const shouldDisableDate = (date) => date.isBefore(dayjs(), "day");

  const CustomCalendarHeader = ({ currentMonth, onMonthChange }) => {
    return (
      <div
        style={{
          height: "52px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "16px 23px",
        }}
      >
        <NavigateBeforeIcon
          onClick={() => onMonthChange(currentMonth.subtract(1, "month"))}
        />

        <div
          style={{
            textAlign: "center",
            fontWeight: "500",
            fontSize: "16px",
            textTransform: "capitalize",
          }}
        >
          {currentMonth.format("MMMM YYYY")}
        </div>

        <NavigateNextIcon
          onClick={() => onMonthChange(currentMonth.add(1, "month"))}
        />
      </div>
    );
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ru">
      <StyledDatePicker
        value={selectedDate}
        onChange={onDateChange}
        shouldDisableDate={shouldDisableDate}
        inputFormat="DD.MM.YY"
        slots={{
          calendarHeader: (props) => <CustomCalendarHeader {...props} />,
        }}
        slotProps={{
          desktopPaper: desktopPaperStyles,
        }}
      />
    </LocalizationProvider>
  );
};

const desktopPaperStyles = {
  sx: {
    "& .MuiPickersDay-root": {
      fontSize: "14px",
      fontWeight: "400",
      "&.Mui-selected": {
        backgroundColor: "#048741",
        color: "#fff",
      },
    },
  },
};

const StyledDatePicker = styled(DatePicker)(({ error }) => ({
  borderRadius: "4px",
  fontFamily: "Roboto",
  border: error ? "1px solid red" : "1px solid #D4D4D4",
  "& input": {
    width: "5.625rem",
    padding: "8px 15px",
    fontSize: "14px",
    color: "#4D4E51",
  },
  "& .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
}));
