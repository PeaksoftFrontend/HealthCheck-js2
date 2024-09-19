import { styled } from "@mui/material";
import mask from "../../assets/images/Mask group.png";

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
      <StyledImg src={mask} alt="Mask" />
    </StyledContainer>
  );
};

const StyledContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 120px",
  position: "relative",
});

const GradientText = styled("h1")({
  background: "linear-gradient(90deg, #30CFD0,#330867)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  fontSize: "48px",
  fontWeight: "bold",
  width: "565px",
  height: "134px",
});

const StyledP = styled("p")({
  width: "585px",
  height: "69px",
  marginTop: "20px",
});

const StyledDiv = styled("div")({
  display: "flex",
  flexDirection: "column",
  maxWidth: "585px",
});

const StyledModal = styled("div")({
  width: "177px",
  height: "43px",
  marginTop: "20px",
  borderRadius: "24px",
  border: "1px solid #048741",
  padding: "8px 24px",
  color: "#048741",
  display: "inline-block",
  textAlign: "center",
  cursor: "pointer",
});

const StyledImg = styled("img")({
  width: "580.35px",
  height: "595.23px",
  objectFit: "cover",
  marginLeft: "auto",
});
