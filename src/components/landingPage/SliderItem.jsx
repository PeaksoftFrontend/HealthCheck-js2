import { Avatar, Rating, styled } from "@mui/material";

export const SliderItem = ({ img, rating, name, title, isActive, isNext }) => {
  return (
    <>
      <StyledSlider isActive={isActive} isNext={isNext}>
        <StyledSection>
          <StyledAvatar alt={`${name}'s profile`} src={img} />
          <div>
            <h3>{name}</h3>
            <Rating name="read-only" value={rating} readOnly />
          </div>
        </StyledSection>
        <p>{title}</p>
      </StyledSlider>
    </>
  );
};

const StyledAvatar = styled(Avatar)({
  width: "50px",
  height: "50px",
});

const StyledSlider = styled("div")(({ isActive, isNext }) => ({
  width: "100%",
  maxWidth: "782px",
  height: "fit-content",
  backgroundColor: isActive ? "#f0f0f0" : isNext ? "#00934424" : "#f0f0f0",
  borderRadius: "1.25rem",
  padding: "2.5rem",
  display: "flex",
  flexDirection: "column",
  gap: "1.25rem",
  transition: "background-color 0.3s ease, box-shadow 0.3s ease",
  marginBottom: "2.5rem",

  "& h3": {
    fontFamily: "Manrope",
    margin: "0",
    fontSize: "1.125rem",
    fontWeight: "600",
    marginBottom: "0.125rem",
  },
  "& p": {
    marginTop: "0.625rem",
    fontSize: "1rem",
    color: "#222222",
    lineHeight: "1.5",
  },
}));

const StyledSection = styled("section")(() => ({
  display: "flex",
  alignItems: "center",
  gap: "0.625rem",
}));
