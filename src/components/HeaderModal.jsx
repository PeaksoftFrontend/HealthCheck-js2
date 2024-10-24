import { styled } from "@mui/material";
import { Button } from "./UI/button/Button";

export const HeaderModal = ({ closeModal }) => {
  return (
    <StyledModalka>
      <p>Вы уверены, что хотите выйти?</p>
      <StyledContainerModal>
        <StyledCanel variant={"outlined"}>Отменить</StyledCanel>
        <StyledGetOut onClick={closeModal}>Выйти</StyledGetOut>
      </StyledContainerModal>
    </StyledModalka>
  );
};
const StyledModalka = styled("div")(() => ({
  width: "458px",
  height: "135px",
  padding: "20px",
  display: "flex",
  flexDirection: "column",
  gap: "20px",

  "& p": {
    textAlign: "center",
    fontSize: "18px",
    color: "#222222",
  },
}));
const StyledContainerModal = styled("div")(() => ({
  display: "flex",
  justifyContent: "center",
  gap: "20px",
}));
const StyledCanel = styled(Button)(() => ({
  width: "116px",
  height: "42px",
  borderRadius: "10px",
  border: "1px solid #959595",
  color: "#959595",
}));
const StyledGetOut = styled(Button)(() => ({
  width: "88px",
  height: "42px",
}));
