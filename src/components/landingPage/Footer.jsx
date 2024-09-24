import { styled } from "@mui/material";
import { FooterContact } from "./FooterContact";
import { FooterSocialNewtworks } from "./FooterSocialNewtworks";
import HealthCheck from "../../assets/images/Groups.png";

export const Footer = () => {
  return (
    <StyledFooterContainer>
      <StyledFooter>
        <StyledFooterText>
          <img src={HealthCheck} alt="HealthCheck" />
          <div>
            <p>Медицинская клиника «HealthCheck»</p>
            <a>
              Международная Медицинская клиника «HealthCheck» — это клиника, в
              которой применяются новейшие диагностические и лечебные технологии
              и ведут прием лучшие специалисты.
            </a>
          </div>
        </StyledFooterText>
        <FooterContact />
        <FooterSocialNewtworks />
      </StyledFooter>
      <StyledNavigateHr>
        <StyledNavigate>
          <a href="#">О клинике</a>
          <a href="#">Услуги</a>
          <a href="#">Врачи</a>
          <a href="#">Прайс</a>
          <a href="#">Отзывы</a>
          <a href="#">Контакты</a>
        </StyledNavigate>
        <hr />
        <StyledText>
          © Peaksoft House 2023 | MedCheck | Все права защищены
        </StyledText>
      </StyledNavigateHr>
    </StyledFooterContainer>
  );
};
const StyledFooterContainer = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  height: "494px",
  background: "#212529",
}));
const StyledFooter = styled("footer")(() => ({
  paddingTop: "68px ",
  paddingBottom: "48px",
  display: "flex",
  justifyContent: "space-around",
}));

const StyledFooterText = styled("section")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "30px",
  fontFamily: "Manrope",

  "& img": {
    width: "280px",
    height: "79px",
  },

  "& div": {
    width: "461px",
    height: "126px",
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    "& p": {
      fontWeight: "500",
      color: "#FFFFFF",
    },
    "& a": {
      color: "#CCCCCC",
      lineHeight: "23px",
    },
  },
}));
const StyledNavigate = styled("nav")(() => ({
  display: "flex",
  justifyContent: "center",
  gap: "24px",
  fontFamily: "Manrope",

  "& a": {
    textDecoration: "none",
    color: "#CCCCCC",
  },
}));
const StyledNavigateHr = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "46px",
  paddingLeft: "119px",
  paddingRight: "119px",
}));
const StyledText = styled("p")(() => ({
  fontSize: "14px",
  color: "#959595",
  textAlign: "center",
}));
