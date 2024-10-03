import { styled } from "@mui/material";
import { TimePicker } from "../UI/timePicker/TimePicker";
import { Icons } from "../../assets/icons";
import { Button } from "../UI/button/Button";

export const SampleModal = () => {
  return (
    <StyledModal>
      <a>Установить шаблон</a>
      <StyledContainer>
        <StyledTime>
          <StyledText>График:</StyledText>
          <StyledTimePicker>
            <TimePicker />
            <span>-</span>
            <TimePicker />
          </StyledTimePicker>
        </StyledTime>
        <StyledInterval>
          <Icons.Plus1 />
          <p>Добавить интервал</p>
        </StyledInterval>
      </StyledContainer>
      <StyledContainerButton>
        <StyledButton variant={"outlined"}>Отменить</StyledButton>
        <StyledBtn>Сохранить</StyledBtn>
      </StyledContainerButton>
    </StyledModal>
  );
};

const StyledModal = styled("div")(() => ({
  width: "521px",
  height: "240px",
  fontFamily: "Manrope",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  gap: "32px",
  "& a": {
    fontWeight: 500,
    fontSize: "24px",
  },
}));
const StyledTime = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  gap: "25px",
  paddingLeft: "30px",
}));

const StyledTimePicker = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
}));

const StyledText = styled("p")(() => ({
  fontWeight: 500,
  fontSize: "14px",
  color: "#464444",
}));

const StyledInterval = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  gap: "6px",
  paddingLeft: "120px",
  cursor: "pointer",
  "& p": {
    color: "#048741",
    fontWeight: 500,
    fontSize: "14px",
  },
}));
const StyledContainerButton = styled("section")(() => ({
  display: "flex",
  justifyContent: "center",
  gap: "18px",
  padding: "5px",
}));
const StyledButton = styled(Button)(() => ({
  width: "211px",
  height: "39px",
  borderRadius: "8px",
  border: "1px solid #959595",
  color: "#959595",
}));

const StyledBtn = styled(Button)(() => ({
  width: "211px",
  height: "39px",
  borderRadius: "10px",
}));
const StyledContainer = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "14px",
}));
