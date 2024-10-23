import { styled } from "@mui/material/styles";
import { services } from "../utils/constants/accordions";
import { useEffect } from "react";
import { Accordions } from "./UI/accordion/Accordions";

export const PricesServices = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <>
      <StyledContainer>
        <StyledService>
          <p>Наш</p>
          <span> прайс</span>
        </StyledService>
        <StyledText>
          Цены на услуги формируются в соответствии с действующими
          Прейскурантами. Общая стоимость зависит от объема услуг, оказываемых в
          рамках приёма. Объём оказываемых услуг определяется врачом, исходя из
          показаний для обследования и пожеланий клиента.
        </StyledText>

        <StyledAccordionContainer>
          <StyledAccordions>
            {services.map((el) => (
              <Accordions key={el.id} title={el.title}>
                <StyledPrice>
                  <StyledPricesDate>
                    <p>{el.data}</p> <span>{el.price} com</span>
                  </StyledPricesDate>
                  <StyledDescription>{el.description}</StyledDescription>
                  {el.prices.map((item, index) => (
                    <StyledPrices key={index}>
                      <p>{item.data}</p>
                      <span>{item.price} com</span>
                    </StyledPrices>
                  ))}
                </StyledPrice>
              </Accordions>
            ))}
          </StyledAccordions>
        </StyledAccordionContainer>
      </StyledContainer>
    </>
  );
};
const StyledDescription = styled("p")(() => ({
  color: "#4D4E51",
  fontSize: "16px",
  lineHeight: "22px",
}));
const StyledContainer = styled("section")(() => ({
  display: "flex",
  flexDirection: "column",

  gap: "40px",
  maxWidth: "1300px",
  margin: "0 auto",
}));
const StyledService = styled("div")(() => ({
  fontSize: "36px",
  fontWeight: 600,
  lineHeight: "49px",
  display: "flex",
  gap: "10px",
  "& span": {
    color: "#029847",
  },
}));

const StyledText = styled("p")(() => ({
  color: "#58595B",
  width: "691px",
  fontSize: "18px",
  lineHeight: "24px",
  display: "flex",
}));

const StyledAccordions = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  fontFamily: "Manrope",
  " .css-yw020d-MuiAccordionSummary-expandIconWrapper": {
    borderRadius: "50%",
    background: "#fff",
    border: "1px solid #048741",
    padding: "8px 10px",
    color: " #048741",
  },
}));

const StyledPrices = styled("div")(() => ({
  display: "flex",
  justifyContent: "space-between",
  borderTop: "1px solid #E0E2E7",
  padding: "10px 0",
  "& p": {
    fontWeight: 600,
    fontSize: "18px",
    color: "#4D4E51",
  },
  "& span": {
    fontSize: "18px",
    fontWeight: 500,
    color: "#4D4E51",
  },
}));
const StyledPricesDate = styled("div")(() => ({
  display: "flex",
  justifyContent: "space-between",
  "& p": {
    color: "#4D4E51",
    fontSize: "18px",
    fontWeight: 600,
  },
  "& span": {
    fontSize: "18px",
    fontWeight: 500,
    color: "#222222",
  },
}));

const StyledPrice = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
}));

const StyledAccordionContainer = styled("div")(() => ({
  width: "68%",
  marginBottom: "120px",
}));
