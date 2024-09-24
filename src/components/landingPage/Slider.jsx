import { styled } from "@mui/material";
import { useState, useRef } from "react";
import { reviews } from "../../utils/constants/constants";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { SliderItem } from "./SliderItem";

export const SliderReview = () => {
  const [activeStep, setActiveStep] = useState(0);
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    infinity: true,
    centerMode: true,
    slidesToShow: 1.67,
    slidesToScroll: 1,
    speed: 800,
    arrows: true,
    prevArrow: <Arrow direction="left" stepsCount={reviews.length} />,
    nextArrow: <Arrow direction="right" stepsCount={reviews.length} />,
    beforeChange: (_, next) => setActiveStep(next),
    customPaging: (i) => <CustomDot isActive={i === activeStep} />,
  };

  return (
    <StyledContainer>
      <StyledBox>
        <h1>
          Отзывы наших <span>пациентов</span>
        </h1>
        <Slider ref={sliderRef} {...settings}>
          {reviews.map((review, index) => (
            <SliderItem
              key={review.id}
              {...review}
              isActive={index === activeStep}
              isNext={index === (activeStep + 1) % reviews.length}
            />
          ))}
        </Slider>
      </StyledBox>
    </StyledContainer>
  );
};

const CustomDot = styled("div")(({ isActive }) => ({
  width: "0.625rem",
  height: "0.625rem",
  borderRadius: "50%",
  backgroundColor: isActive ? "#28a745" : "#ccc",
  transition: "background-color 0.3s ease",
}));

const StyledContainer = styled("div")({
  width: "100%",
  margin: "0 auto",
  paddingBottom: "120px",
  display: "flex",
  flexDirection: "column",
  gap: "3.75rem",
  "& h1": {
    fontFamily: "Manrope",
    width: "80%",
    margin: "0 auto",
    fontSize: "2.25rem",
    "& > span": {
      color: "#28a745",
    },
  },

  "& .slick-initialized .slick-slide": {
    margin: "0 10px",
  },
});
const StyledBox = styled("div")(() => ({
  maxWidth: "1300px",
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  gap: "60px",
}));
const ArrowButton = styled("div")(({ direction, stepsCount }) => ({
  position: "absolute",
  top: "95%",
  zIndex: 1,
  backgroundColor: "#fff",
  color: "#048741",
  width: "2.5rem",
  height: "2.5rem",
  border: "1px solid #048741",
  borderRadius: "50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
  fontWeight: "700",
  left: direction === "left" ? `${Math.max(10, 50 - stepsCount * 2)}%` : "auto",
  right:
    direction === "right" ? `${Math.max(10, 50 - stepsCount * 2)}%` : "auto",
  transition: "all 0.3s ease",

  "&:hover": {
    background: "linear-gradient(#0CBB6B, #027B44)",
    color: "#fff",
    border: "none",
  },
}));

const Arrow = ({ direction, stepsCount, onClick }) => (
  <ArrowButton onClick={onClick} direction={direction} stepsCount={stepsCount}>
    {direction === "left" ? (
      <KeyboardArrowLeftIcon />
    ) : (
      <KeyboardArrowRightIcon />
    )}
  </ArrowButton>
);
