import { styled } from "@mui/material";

export const MainItem = ({ number, title, text }) => {
  return (
    <StyledContainer>
      <span>{number}</span>
      <b>{title}</b>
      <p>{text}</p>
    </StyledContainer>
  );
};
const StyledContainer = styled("div")(() => ({
  width: "410px",
  height: "290px",
  borderRadius: "4px",
  background: "#DBEBFF",
  display: "flex",
  flexDirection: "column",
  gap: "18px",
  padding: "40px",
  "& span": {
    fontSize: "48px",
    fontWeight: "600",
    color: "#048741",
  },
  "& b": {
    fontSize: "20px",
    fontWeight: "500",
    color: "#222222",
    lineHeight: "26px",
  },
  "& p": {
    fontFamily: "Manrope",
    lineHeight: "20.8px",
    color: "#222222",
  },
}));
