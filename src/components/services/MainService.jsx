import "@fontsource/manrope";

import icon1 from "../../assets/icons/service-icons/Gematologicheskoe_testirovanie.png";
import icon2 from "../../assets/icons/service-icons/heart.svg";
import icon3 from "../../assets/icons/service-icons/brain.svg";
import icon4 from "../../assets/icons/service-icons/hair-roots.svg";
import icon5 from "../../assets/icons/service-icons/eye.svg";
import icon6 from "../../assets/icons/service-icons/Terapiya.svg";
import icon7 from "../../assets/icons//service-icons/Fizioterapiya.svg";
import icon8 from "../../assets/icons/service-icons/Onkologiya.svg";
import icon9 from "../../assets/icons/service-icons/Urologiya.svg";
import { styled } from "@mui/material";

const services = [
  { icon: icon1, text: "Вакцинация" },
  { icon: icon2, text: "Кардиология" },
  { icon: icon3, text: "Неврология" },
  { icon: icon4, text: "Дерматология" },
  { icon: icon5, text: "Офтальмология" },
  { icon: icon6, text: "Терапия" },
  { icon: icon7, text: "Физиотерапия" },
  { icon: icon8, text: "Онкология" },
  { icon: icon9, text: "Урология" },
];

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
              <Icon src={service.icon} alt={`Icon ${index + 1}`} />
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

const IconWrapper = styled("div")(({ isFirst }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  border: `2px solid ${isFirst ? "#048741" : "#ccc"}`,
  borderRadius: "0.5rem",
  padding: "1rem",
  backgroundColor: isFirst ? "#048741" : "transparent",
}));

const Icon = styled("img")({
  width: "3.125rem",
  height: "3.125rem",
});

const IconText = styled("span")({
  marginTop: "0.75rem",
  fontFamily: "Manrope",
});

const StyledButton = styled("button")({
  width: "9.1875rem",
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
