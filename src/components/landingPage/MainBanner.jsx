import { styled } from "@mui/material";
import Mask from "../../assets/images/MainBannerImage.png";
import { Button } from "../UI/button/Button";

export const MainBanner = () => {
  return (
    <>
      <StyledBox>
        <StyledDiv>
          <GradientText>Добро пожаловать в клинику HealthCheck</GradientText>
          <StyledP>
            Международная медицинская клиника «HealthCheck» — это клиника, в
            которой применяются новейшие диагностические и лечебные технологии и
            ведут прием лучшие специалисты.
          </StyledP>
          <StyledButton variant={"outlined"}>Оставьте заявку</StyledButton>
        </StyledDiv>
        <StyledImg src={Mask} alt="Mask" />
      </StyledBox>
    </>
  );
};

const StyledBox = styled("div")(() => ({
  maxWidth: "1300px",
  margin: "0 auto",
  display: "flex",
  gap: "40px",
  paddingBottom: "31px",
}));
const GradientText = styled("h1")({
  background: "linear-gradient(90deg, #30CFD0,#330867)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  fontSize: "3rem",
  fontWeight: "bold",
  width: "35.31rem",
  height: "8.375rem",
});

const StyledP = styled("p")({
  width: "36.56rem",
  height: "4.31rem",
  fontSize: "18px",
  lineHeight: "23px",
  fontFamily: "Manrope",
});

const StyledDiv = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "26px",
});
const StyledButton = styled(Button)(() => ({
  width: "180px",
  height: "43px",
  borderRadius: "24px",
}));

const StyledImg = styled("img")({
  width: "36.27rem",
  height: "37.20rem",
  objectFit: "cover",
  marginLeft: "auto",
});
