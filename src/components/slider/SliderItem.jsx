import { Avatar, styled } from "@mui/material";

export const SliderItem = ({ img, rating, name, title }) => {
  return (
    <StyledSlider>
      <section>
        <Avatar alt={`${name}'s profile`} src={img} />
        <div>
          <h3>{name}</h3>
          <StyledStars src={rating} alt="star rating" />
        </div>
      </section>
      <p>{title}</p>
    </StyledSlider>
  );
};

const StyledSlider = styled("div")(() => ({
  width: "782px",
  height: "282px",
  backgroundColor: "#00934424",
  borderRadius: "20px",
  padding: "40px",
  display: "flex",
  flexDirection: "column",
  gap: "22px",
  "& section": {
    display: "flex",
    gap: "14px",
  },
  "& div": {
    display: "flex",
    flexDirection: "column",
  },
}));

const StyledStars = styled("img")(() => ({
  width: "74px",
  height: "14px",
}));
