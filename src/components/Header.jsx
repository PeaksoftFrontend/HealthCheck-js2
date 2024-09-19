// Header.js
import { styled } from "@mui/material";
import { Icons } from "../assets/icons";
import { Input } from "./UI/input/Input";
import { Button } from "./UI/button/Button";
import { HeaderModal } from "./HeaderModal";
import { useState } from "react";

export const Header = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleIcon = () => {
    setOpenModal(!openModal);
  };

  return (
    <StyledWrapper>
      <StyledHeader>
        <section>
          <StyledContainer>
            <Icons.Gps />
            <span>106452, г. Бишкек, Гражданская 119</span>
          </StyledContainer>
          <StyledContainer>
            <Icons.andDesginPhoneOutlined />
            <p>
              <StyledSpan>пн-сб </StyledSpan> 08:00 до 18:00{" "}
            </p>
          </StyledContainer>
        </section>
        <StyledInput placeholder="Поиск по сайту " iconEnd={<Icons.Search />} />
        <StyledIcons>
          <StyledContainerMessenger>
            <Icons.GreenInstagram />
            <Icons.GreenTelegram />
            <Icons.GreenWatsapp />
          </StyledContainerMessenger>
          <StyledContainerNumber>
            <Icons.Phone />
            <section>
              <p>+996(505) 000 000</p>
              <p>+996(800) 000 000</p>
            </section>
          </StyledContainerNumber>
          <Icons.ProfileGreen onClick={handleIcon} />
          {openModal && <HeaderModal handleIcon={handleIcon} />}
        </StyledIcons>
      </StyledHeader>
      <hr />
      <StyledNavigete>
        <Icons.LogoHalthCeck />
        <nav>
          <a href="#">О клинике</a>
          <a href="#">Услуги</a>
          <a href="#">Врачи</a>
          <a href="#">Прайс</a>
          <a href="#">Контакты</a>
        </nav>
        <div>
          <StyledButtonOutlined variant={"outlined"}>
            получить результаты
          </StyledButtonOutlined>
          <StyledButtonContained variant={"contained"}>
            запись онлайн
          </StyledButtonContained>
        </div>
      </StyledNavigete>
    </StyledWrapper>
  );
};

const StyledWrapper = styled("header")({
  width: "100%",
  height: "182px",
  padding: "22px 130px 17px 120px",
  "& svg": {
    cursor: "pointer",
  },
});

const StyledHeader = styled("section")({
  display: "flex",
  justifyContent: "space-between",
  paddingBottom: "17px",
});

const StyledContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: "6px",
});

const StyledSpan = styled("span")({
  color: "#0CBB6B",
});

const StyledInput = styled(Input)({
  width: "370px",
  height: "40px",
  borderRadius: "24px",
  padding: "4px 20px",
  backgroundColor: "#F3F1F1",
  border: "none",
  "& svg ": {
    margin: "6px 0px 0px 10px",
  },
  "& ::placeholder": {
    color: "#716B6B",
  },
});

const StyledContainerMessenger = styled("div")({
  display: "flex",
  gap: "8px",
});

const StyledContainerNumber = styled("div")({
  display: "flex",
  gap: "6px",
  "& section": {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "4px",
  },
});

const StyledIcons = styled("div")({
  display: "flex",
  gap: "50px",
  alignItems: "center",
});

const StyledNavigete = styled("section")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  padding: "12px",
  "&  nav": {
    display: "flex",
    gap: "36px",
  },
  "& a": {
    textDecoration: "none",
    color: "inherit",
    fontSize: "16px",
  },
  "& div": {
    display: "flex",
    gap: "16px",
  },
});

const StyledButtonOutlined = styled(Button)({
  width: "209px",
  height: "43px",
  borderRadius: "24px",
});

const StyledButtonContained = styled(Button)({
  width: "158px",
  height: "43px",
  borderRadius: "24px",
});
