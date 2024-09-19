import { styled } from "@mui/material";

export const HeaderModal = ({ handleIcon }) => {
  return (
    <StyledHeaderModal onClick={handleIcon}>
      <p>Войти</p>
      <p>Регистрация</p>
    </StyledHeaderModal>
  );
};

const StyledHeaderModal = styled("div")({
  position: "absolute",
  top: "60px",
  right: "4px",
  width: "135px",
  height: "94px",
  display: "flex",
  flexDirection: "column",
  gap: "15px",
  padding: "18px",
  borderRadius: "4px",
  color: "#4d4c4c",
  cursor: "pointer",
  border: "1px solid #048741",
  zIndex: "1",
  backgroundColor: "#fff",

  "& p": {
    margin: 0,
    cursor: "pointer",
    transition: "color 0.3s ease",
  },

  "& p:hover": {
    color: "#05ab52",
    fontWeight: "500",
  },
});
