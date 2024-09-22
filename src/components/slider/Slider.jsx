import { styled } from "@mui/material";
import { SliderItem } from "./SliderItem";
import { useEffect, useRef, useState } from "react";
import { reviews } from "../../utils/constants/constants";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const SliderComponent = () => {
  const [activeStep, setActiveStep] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        const nextStep = (activeStep + 1) % reviews.length;
        sliderRef.current.slickGoTo(nextStep);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [activeStep]);

  const settings = {
    dots: true,
    infinite: true,
    centerMode: true,
    centerPadding: "3.75rem",
    slidesToShow: 1.63,
    slidesToScroll: 1,
    speed: 800,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    beforeChange: (current, next) => {
      setActiveStep(next);
    },
    customPaging: (i) => <CustomDot isActive={i === activeStep} />,
  };

  return (
    <StyledContainer>
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

const StyledContainer = styled("div")(() => ({
  width: "100%",
  height: "30.0625rem",
  display: "flex",
  flexDirection: "column",
  gap: "3.75rem",
  "& h1": {
    fontFamily: "Manrope",
    width: "80%",
    margin: "0 auto",
    fontSize: "2.25rem",
  },
  "& span": {
    color: "#28a745",
  },
}));

const PrevArrow = ({ onClick }) => (
  <ArrowButton onClick={onClick} left>
    {"<"}
  </ArrowButton>
);
const NextArrow = ({ onClick }) => (
  <ArrowButton onClick={onClick} right>
    {">"}
  </ArrowButton>
);

const ArrowButton = styled("div")(({ left, right }) => ({
  position: "absolute",
  top: "95%",
  zIndex: 1,
  backgroundColor: "#fff",
  color: "#048741",
  width: "2.8125rem",
  height: "2.8125rem",
  border: "1px solid #048741",
  borderRadius: "50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
  fontWeight: "900",
  transform: "translateX(0%)",
  transition: "all 0.3s ease",
  ...(left && { left: "41%" }),
  ...(right && { right: "41%" }),
  "&:hover": {
    backgroundColor: "#0CBB6B",
    color: "#fff",
    border: "none",
  },
}));
