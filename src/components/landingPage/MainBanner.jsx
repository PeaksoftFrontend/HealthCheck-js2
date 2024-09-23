import { styled } from "@mui/material";
import Mask from "../../assets/images/MainBannerImage.png";

export const MainBanner = () => {
  return (
    <StyledContainer>
      <StyledDiv>
        <GradientText>Добро пожаловать в клинику HealthCheck</GradientText>
        <StyledP>
          Международная медицинская клиника «HealthCheck» — это клиника, в
          которой применяются новейшие диагностические и лечебные технологии и
          ведут прием лучшие специалисты.
        </StyledP>
        <StyledModal>Оставьте заявку</StyledModal>
      </StyledDiv>
      <StyledImg src={Mask} alt="Mask" />
    </StyledContainer>
  );
};

const StyledContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 7.5rem",
  position: "relative",
});

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
  marginTop: "1.25rem",
});

const StyledDiv = styled("div")({
  display: "flex",
  flexDirection: "column",
  maxWidth: "36.56rem",
});

const StyledModal = styled("div")({
  width: "11.06rem",
  height: "2.69rem",
  marginTop: "1.25rem",
  borderRadius: "1.5rem",
  border: "1px solid #048741",
  padding: "0.5rem 1.5rem",
  color: "#048741",
  display: "inline-block",
  textAlign: "center",
  cursor: "pointer",
});

const StyledImg = styled("img")({
  width: "36.27rem",
  height: "37.20rem",
  objectFit: "cover",
  marginLeft: "auto",
});
