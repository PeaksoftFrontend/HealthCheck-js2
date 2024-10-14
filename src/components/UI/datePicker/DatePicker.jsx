import { styled } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import "dayjs/locale/ru";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import { useState } from "react";

dayjs.locale("ru");

export const Datepicker = ({ selectedDate, onDateChange, error }) => {
  const [currentDate, setCurrentDate] = useState(selectedDate || dayjs());
  const [currentMonth, setCurrentMonth] = useState(
    dayjs(currentDate).startOf("month")
  );

  const shouldDisableDate = (date) => date.isBefore(dayjs(), "day");

  const handleDateChange = (newDate) => {
    setCurrentDate(newDate);
    setCurrentMonth(dayjs(newDate).startOf("month"));
    onDateChange(newDate);
  };

  const CustomCalendarHeader = ({ currentMonth }) => {
    return (
      <StyledCalendar>
        <NavigateBeforeIcon
          onClick={() => {
            const newMonth = currentMonth.subtract(1, "month");
            setCurrentMonth(newMonth);
            setCurrentDate(newMonth.date(currentDate.date()));
            onDateChange(newMonth.date(currentDate.date()));
          }}
        />

        <StyledMonthText>{currentMonth.format("MMMM YYYY")}</StyledMonthText>

        <NavigateNextIcon
          onClick={() => {
            const newMonth = currentMonth.add(1, "month");
            setCurrentMonth(newMonth);
            setCurrentDate(newMonth.date(currentDate.date()));
            onDateChange(newMonth.date(currentDate.date()));
          }}
        />
      </StyledCalendar>
    );
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ru">
      <StyledDatePicker
        value={currentDate}
        onChange={handleDateChange}
        shouldDisableDate={shouldDisableDate}
        inputFormat="DD.MM.YY"
        error={error}
        slots={{
          calendarHeader: (props) => (
            <CustomCalendarHeader {...props} currentMonth={currentMonth} />
          ),
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
const StyledCalendar = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "15px 16px",
}));
const StyledMonthText = styled("div")(() => ({
  textAlign: "center",
  fontWeight: "500",
  fontSize: "16px",
  textTransform: "capitalize",
}));
