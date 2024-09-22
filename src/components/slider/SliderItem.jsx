import { Avatar, styled } from "@mui/material";

export const SliderItem = ({ img, rating, name, title, isActive, isNext }) => {
  return (
    <StyledSlider isActive={isActive} isNext={isNext}>
      <section style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <Avatar alt={`${name}'s profile`} src={img} />
        <div>
          <h3>{name}</h3>
          {rating && <StyledStars src={rating} alt="star rating" />}
        </div>
      </section>
      <p>{title}</p>
    </StyledSlider>
  );
};

const StyledSlider = styled("div")(({ isActive, isNext }) => ({
  width: "100%",
  maxWidth: "782px",
  height: "fit-content",
  backgroundColor: isActive ? "#f0f0f0" : isNext ? "#00934424" : "#f0f0f0",
  borderRadius: "20px",
  padding: "40px",
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  transition: "background-color 0.3s ease, box-shadow 0.3s ease",
  marginBottom: "40px",

  "& section": {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  "& h3": {
    margin: "0",
    fontSize: "18px",
    fontWeight: "600",
  },
  "& p": {
    marginTop: "10px",
    fontSize: "16px",
    color: "#555",
  },
}));

const StyledStars = styled("img")(() => ({
  width: "74px",
  height: "14px",
}));
