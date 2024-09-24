import { styled } from "@mui/material";
import { Icons } from "../../assets/icons";

export const FooterContact = () => {
  return (
    <StyledWrapper>
      <StyledContact>
        <StyledTextContact>Контактная информация</StyledTextContact>
        <StyledContainer>
          <p>
            <Icons.Gps />
            <span>106452, г. Бишкек, Гражданская 119</span>
          </p>
          <p>
            <Icons.andDesginPhoneOutlined />
            <span>
              <span>пн-сб </span> 08:00 до 18:00{" "}
            </span>
          </p>
        </StyledContainer>
        <StyledArticle>
          <Icons.PhoneMob />
          <div>
            <p>+996(505) 000 000</p>
            <p>+996(800) 000 000</p>
          </div>
        </StyledArticle>
        <StyledIcon>
          <Icons.Masseger />
          <span>healthchek.kg</span>
        </StyledIcon>
      </StyledContact>
    </StyledWrapper>
  );
};

const StyledWrapper = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
}));

const StyledIcon = styled("div")(() => ({
  display: "flex",
  gap: "0.5rem",
  textAlign: "center",
  color: "#CCCCCC",
}));

const StyledContact = styled("section")(() => ({
  width: "18.75rem",
  height: "11.875rem",
  display: "flex",
  flexDirection: "column",
  gap: "1.25rem",
  "& p": {
    color: "#CCCCCC",
  },
}));

const StyledContainer = styled("footer")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
  "& p": {
    display: "flex",
    gap: "0.5rem",
  },
}));

const StyledTextContact = styled("p")(() => ({
  color: "#FFFFFF",
  fontWeight: "600",
}));

const StyledArticle = styled("article")(() => ({
  display: "flex",

  "& div": {
    display: "flex",
    flexDirection: "column",
    gap: "0.3125rem",
  },
  "& p": {
    paddingLeft: "0.3125rem",
  },
  "& span": {
    color: "#CCCCCC",
  },
}));
