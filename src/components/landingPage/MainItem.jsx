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
  width: "25.625rem",
  height: "18.125rem",
  borderRadius: "0.25rem",
  background: "#DBEBFF",
  display: "flex",
  flexDirection: "column",
  gap: "1.125rem",
  padding: "2.5rem",
  "& span": {
    fontSize: "3rem",
    fontWeight: "600",
    color: "#048741",
  },
  "& b": {
    fontSize: "1.25rem",
    fontWeight: "500",
    color: "#222222",
    lineHeight: "1.625rem",
  },
  "& p": {
    fontFamily: "Manrope",
    lineHeight: "1.3rem",
    color: "#222222",
  },
}));
