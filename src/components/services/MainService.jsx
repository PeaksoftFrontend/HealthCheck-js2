import { styled } from "@mui/material";
import { services } from "../../utils/constants/service";

export const MainServices = () => {
  return (
    <StyledDiv>
      <StyledText>
        <StyledH2>
          Наши <GreenText>услуги</GreenText>
        </StyledH2>
        <StyledParagraph>
          За все время работы клиника приняла более 1 млн. пациентов.
        </StyledParagraph>
      </StyledText>

      <IconContainer>
        {services.map((service, index) => (
          <ServiceCard key={index}>
            <IconWrapper isFirst={index === 0}>
              <service.icon />
            </IconWrapper>
            <IconText>{service.text}</IconText>
          </ServiceCard>
        ))}
      </IconContainer>
      <StyledButton>Смотреть все</StyledButton>
    </StyledDiv>
  );
};

const StyledText = styled("div")({
  width: "83.125rem",
  margin: "0 auto",
  top: "63.56rem",
  left: "7.5rem",
});
const StyledDiv = styled("div")({
  width: "95%",
  margin: "0",
  top: "63.56rem",
  left: "7.5rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  paddingBottom: "120px",
});

const StyledH2 = styled("h2")({
  width: "95%",
  margin: "0 auto",
  fontFamily: "Manrope",
  fontWeight: 600,
  fontSize: "2.25rem",
  lineHeight: "3.07rem",
  marginTop: "2rem",
  marginLeft: "auto",
  marginRight: "auto",
});

const StyledParagraph = styled("p")({
  width: "95%",
  margin: "0 auto",
  fontFamily: "Manrope",
  lineHeight: "1.5rem",
  marginTop: "1rem",
});

const GreenText = styled("span")({
  color: "#048741",
});

const IconContainer = styled("div")({
  display: "flex",
  gap: "1rem",
  justifyContent: "center",
  marginTop: "2rem",
  overflowX: "auto",
  whiteSpace: "nowrap",
});

const ServiceCard = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  margin: "1rem",
});

const IconWrapper = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  border: "2px solid #ccc",
  borderRadius: "0.5rem",
  padding: "1rem",
  "&:hover": {
    backgroundColor: "#048741",
    "&:hover svg": {
      path: {
        fill: "#ffff",
      },
    },
  },
}));

const IconText = styled("span")({
  marginTop: "0.75rem",
  fontFamily: "Manrope",
});

const StyledButton = styled("button")({
  width: "10rem",
  height: "2.625rem",
  borderRadius: "0.625rem",
  border: "0.0625rem solid green",
  padding: "0.625rem 1.25rem",
  gap: "0.625rem",
  fontFamily: "Manrope",
  fontSize: "1rem",
  backgroundColor: "white",
  color: "#048741",
  cursor: "pointer",
  marginTop: "1rem",
  display: "block",
  marginLeft: "auto",
  marginRight: "auto",
  "&:hover": {
    backgroundColor: "#048741",
    color: "white",
  },
});
