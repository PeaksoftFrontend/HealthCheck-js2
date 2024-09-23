import { styled } from "@mui/material";

export const DoctorsItem = ({ img, name, title }) => {
  return (
    <StyledContainer>
      <StyledContainerImg>
        <img src={img} alt={name} />
      </StyledContainerImg>
      <div>
        <p>{name}</p>
        <span>{title}</span>
      </div>
    </StyledContainer>
  );
};
const StyledContainer = styled("div")(() => ({
  width: "223px",
  height: "278px",
  display: "flex",
  flexDirection: "column",
  gap: "14px",
  textAlign: "center",

  "& div": {
    display: "flex",
    flexDirection: "column",
    gap: "2px",
  },

  "& p": {
    fontWeight: "500",
    color: "#2C2D2E",
  },
  "& span": {
    fontSize: "14px",
    color: "#959595",
  },
}));
const StyledContainerImg = styled("div")(() => ({
  width: "203px",
  height: "203px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "50%",
  background: "linear-gradient(180deg, #FDFDFD 0%, #E4E7EE 0%)",
  overflow: "hidden",
  " & img": {
    width: "203px",
    height: "203px",
    objectFit: "cover",
    borderRadius: "50%",
  },
}));
