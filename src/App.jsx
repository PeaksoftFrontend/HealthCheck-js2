import { styled } from "@mui/material";
import { Icons } from "./assets/icons";
import { Input } from "./components/UI/input/Input";
import { useRef } from "react";

export const App = () => {
  const inputRef = useRef(null);

  const handleInputChange = () => {
    if (inputRef.current) {
      console.log(inputRef.current.value);
    }
  };

  return (
    <StyledContainer>
      <h1>Healthcheck</h1>
      <Input placeholder="enter" />
      <Input ref={inputRef} placeholder="useRef" onChange={handleInputChange} />

      <Input placeholder="пароль" type="password" />

      <StyledInput2 placeholder="Введите код" />
      <StyledInput1 placeholder="Поиск по сайту " iconEnd={<Icons.Search />} />
      <StyledInput3 placeholder="Введите имя" iconStart={<Icons.Users2 />} />
      <StyledInput3
        placeholder="+996 (___) __-__-__"
        iconStart={<Icons.Phone />}
      />
      <StyledInput4 placeholder="Поиск" iconEnd={<Icons.Search />} />
      <StyledDate
        placeholder="дд.мм.гг"
        iconEnd={<Icons.CalendarTodayIcon />}
      />
      <Input placeholder="disabled" disabled />
    </StyledContainer>
  );
};
const StyledContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
});
const StyledInput1 = styled(Input)({
  "& .MuiOutlinedInput-root": {
    backgroundColor: "#F3F1F1",
    width: "367px",
    height: "40px",
    borderRadius: "24px",
    border: "none",
    padding: "12px",
  },
  "& .MuiInputAdornment-root": {
    marginTop: "4px",
  },
});
const StyledInput2 = styled(Input)({
  "& .MuiOutlinedInput-root": {
    width: "134px",
    borderRadius: "5px",
  },
  "& .MuiInputBase-input": {
    padding: "10px",
  },
});
const StyledInput3 = styled(Input)({
  "& .MuiOutlinedInput-root": {
    width: "263px",
    height: "42px",
    borderRadius: "5px",
    border: " 1px solid #04874180",
  },
});

const StyledInput4 = styled(Input)({
  "& .MuiOutlinedInput-root": {
    backgroundColor: "#FFFFFF",
    width: "600px",
    height: "40px",
    borderRadius: "24px",
    padding: "12px",
    border: "none",
  },
  "& .MuiInputAdornment-root": {
    marginTop: "4px",
  },
});

const StyledDate = styled(Input)({
  "& .MuiOutlinedInput-root": {
    width: "150px",
    height: "38px",
    borderRadius: "6px",
    padding: "8px, 18px, 8px, 18px",
  },
  "& .MuiInputAdornment-root": {
    marginTop: "5px",
  },
});
