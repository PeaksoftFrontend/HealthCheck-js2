import { useState } from "react";
import { styled } from "@mui/material/styles";
import { MenuItem, Select, Box } from "@mui/material";

export const TimePicker = ({
  hourValue = 0,
  minuteValue = 0,
  onHourChange,
  onMinuteChange,
  maxHour = 23,
  minHour = 0,
  maxMinute = 59,
  minMinute = 0,
  ...rest
}) => {
  const [selectedHour, setSelectedHour] = useState(hourValue);
  const [selectedMinute, setSelectedMinute] = useState(minuteValue);

  const handleChange = (setter, callback) => (event) => {
    const value = event.target.value;
    setter(value);
    if (callback) callback(value);
  };

  const renderMenuItems = (range, isHour) =>
    range.map((value) => (
      <MenuItem key={value} value={value}>
        {value < 10
          ? `0${value} ${isHour ? "ч" : "м"}`
          : `${value} ${isHour ? "ч" : "м"}`}
      </MenuItem>
    ));

  const hours = Array.from(
    { length: maxHour - minHour + 1 },
    (_, i) => i + minHour
  );
  const minutes = Array.from(
    { length: maxMinute - minMinute + 1 },
    (_, i) => i + minMinute
  );

  return (
    <StyledBox>
      <StyledSelect
        value={selectedHour}
        onChange={handleChange(setSelectedHour, onHourChange)}
        {...rest}
      >
        {renderMenuItems(hours, true)}
      </StyledSelect>

      <StyledSelect
        value={selectedMinute}
        onChange={handleChange(setSelectedMinute, onMinuteChange)}
        {...rest}
      >
        {renderMenuItems(minutes, false)}
      </StyledSelect>
    </StyledBox>
  );
};
const StyledSelect = styled(Select)(() => ({
  width: "80px",
  height: "38px",
  color: "#959595",
  borderRadius: "6px",
}));
const StyledBox = styled(Box)(() => ({
  display: "flex",
  gap: "12px",
}));
