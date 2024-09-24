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
  width: "13.9375rem",
  height: "17.375rem",
  display: "flex",
  flexDirection: "column",
  gap: "0.875rem",
  textAlign: "center",

  "& div": {
    display: "flex",
    flexDirection: "column",
    gap: "0.125rem",
  },

  "& p": {
    fontWeight: "500",
    color: "#2C2D2E",
  },
  "& span": {
    fontSize: "0.875rem",
    color: "#959595",
  },
}));

const StyledContainerImg = styled("div")(() => ({
  width: "12.6875rem",
  height: "12.6875rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "50%",
  background: "linear-gradient(180deg, #FDFDFD 0%, #E4E7EE 0%)",
  overflow: "hidden",

  "& img": {
    width: "12.6875rem",
    height: "12.6875rem",
    objectFit: "cover",
    borderRadius: "50%",
  },
}));
