import { useState } from "react";
import { Link } from "react-router-dom";
import { styled } from "@mui/material";
import { Icons } from "../../assets/icons";
import { Input } from "../UI/input/Input";
import { Button } from "../UI/button/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";

export const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <StyledWrapper>
      <StyledBox>
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
          <StyledInput
            placeholder="Поиск по сайту"
            iconEnd={<Icons.Search />}
          />
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
            <Icons.ProfileGreen onClick={handleClick} />
            {anchorEl && (
              <Menu
                anchorEl={anchorEl}
                id="fade-menu"
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
              >
                <StyledMenuItem onClick={handleClose}>
                  <StyledLink to="/login">Войти </StyledLink>
                </StyledMenuItem>
                <StyledMenuItem onClick={handleClose}>
                  <StyledLink to="/register">Регистрация </StyledLink>
                </StyledMenuItem>
              </Menu>
            )}
          </StyledIcons>
        </StyledHeader>
        <hr />
        <StyledNavigete>
          <Icons.LogohealthCheck />
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
      </StyledBox>
    </StyledWrapper>
  );
};

const StyledWrapper = styled("header")({
  width: "100%",
  height: "11.375rem",
  "& svg": {
    cursor: "pointer",
  },
});

const StyledLink = styled(Link)(() => ({
  textDecoration: "none",
  color: "#292929",
  "&:hover": {
    color: "#048741",
  },
}));
const StyledBox = styled("div")(() => ({
  maxWidth: "1300px",
  margin: "0 auto",
}));

const StyledHeader = styled("section")({
  display: "flex",
  justifyContent: "space-between",
  paddingBottom: "1.0625rem",
});

const StyledContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: "0.375rem",
});

const StyledSpan = styled("span")({
  color: "#048741",
});

const StyledInput = styled(Input)({
  width: "23.125rem",
  borderRadius: "1.5rem",
  padding: "0.25rem 1.25rem",
  backgroundColor: "#F3F1F1",
  border: "none",
  "& svg": {
    margin: "0.375rem 0 0 0.625rem",
  },
  "& ::placeholder": {
    color: "#716B6B",
  },
});

const StyledContainerMessenger = styled("div")({
  display: "flex",
  gap: "0.5rem",
});

const StyledContainerNumber = styled("div")({
  display: "flex",
  gap: "0.375rem",
  "& section": {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "0.25rem",
  },
});

const StyledIcons = styled("div")({
  display: "flex",
  gap: "3.125rem",
  alignItems: "center",
});

const StyledNavigete = styled("section")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0.75rem",
  "& nav": {
    display: "flex",
    gap: "2.25rem",
  },
  "& a": {
    textDecoration: "none",
    color: "inherit",
    fontSize: "1rem",
  },
  "& div": {
    display: "flex",
    gap: "1rem",
  },
});

const StyledButtonOutlined = styled(Button)({
  width: "14rem",
  height: "2.6875rem",
  borderRadius: "1.5rem",
});

const StyledButtonContained = styled(Button)({
  width: "10rem",
  height: "2.6875rem",
  borderRadius: "1.5rem",
});

const StyledMenuItem = styled(MenuItem)({
  "&:hover": {
    color: "#048741",
  },
});
