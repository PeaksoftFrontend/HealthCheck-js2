import { styled } from "@mui/material";

export const DoctorsItem = ({ img, name, title }) => {
  return (
    <StyledContainer>
      <img src={img} alt={name} />
      <StyledContainer>
        <h2>{name}</h2>
        <p>{title}</p>
      </StyledContainer>
    </StyledContainer>
  );
};
const StyledContainer = styled("div")(() => ({
  " & img": {
    width: "185px",
    height: "184px",
  },
}));
