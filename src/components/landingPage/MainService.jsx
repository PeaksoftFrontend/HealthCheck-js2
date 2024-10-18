import { styled } from "@mui/material";
import { services } from "../../utils/constants/service";
import { Button } from "../UI/button/Button";

export const MainServices = () => {
  return (
    <StyledDiv>
      <div>
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
      </div>
      <StyledButton variant={"outlined"}>
        С <span>мотреть все</span>
      </StyledButton>
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
  width: "100%",
  margin: "0",
  top: "63.56rem",
  left: "7.5rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  paddingBottom: "120px",
  gap: "48px",
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
  width: "102px",
  gap: "20px",
});

const IconWrapper = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  border: "1px solid #DEDEDE",
  borderRadius: "18px",
  padding: "20px",
  width: "102px",
  height: "106px",
  "&:hover": {
    border: "none",
    background:
      "linear-gradient(to bottom,rgba(12, 187, 107, 1),rgba(2, 123, 68, 1)) 100%",

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

const StyledButton = styled(Button)({
  width: "147px",
  height: "42px",
  textTransform: "uppercase",
  "& span": {
    textTransform: "lowercase",
  },
});
