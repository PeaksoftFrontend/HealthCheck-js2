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
  height: "30.875rem",
  background: "#212529",
}));

const StyledFooter = styled("footer")(() => ({
  paddingTop: "4.25rem",
  paddingBottom: "3rem",
  display: "flex",
  justifyContent: "space-around",
}));

const StyledFooterText = styled("section")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "1.875rem",
  fontFamily: "Manrope",

  "& img": {
    width: "17.5rem",
    height: "4.9375rem",
  },

  "& div": {
    width: "28.9375rem",
    height: "7.875rem",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    "& p": {
      fontWeight: "500",
      color: "#FFFFFF",
    },
    "& a": {
      color: "#CCCCCC",
      lineHeight: "1.4375rem",
    },
  },
}));

const StyledNavigate = styled("nav")(() => ({
  display: "flex",
  justifyContent: "center",
  gap: "1.5rem",
  fontFamily: "Manrope",

  "& a": {
    textDecoration: "none",
    color: "#CCCCCC",
  },
}));

const StyledNavigateHr = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "2.875rem",
  paddingLeft: "7.4375rem",
  paddingRight: "7.4375rem",
}));

const StyledText = styled("p")(() => ({
  fontSize: "0.875rem",
  color: "#959595",
  textAlign: "center",
}));
