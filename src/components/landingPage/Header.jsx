import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { styled } from "@mui/material";
import { Icons } from "../../assets/icons";
import { Input } from "../UI/input/Input";
import { Button } from "../UI/button/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import { useSelector } from "react-redux";
import { Modal } from "../UI/modal/Modal";
import { SignIn } from "../auth/SignIn";
import { SignUp } from "../auth/SignUp";
import { ForgotPassword } from "../auth/ForgotPassword";
import { HeaderModal } from "../HeaderModal";

export const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const { userRole } = useSelector((state) => state.router);

  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setRegisterModalOpen] = useState(false);
  const [isForgotPasswordModalOpen, setForgotPasswordModalOpen] =
    useState(false);
  const [isCanelModAL, setIsCanelModal] = useState(false);
  const navigate = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleResultsClick = () => {
    if (userRole === "USER") {
      navigate("/user/results");
    } else {
      setLoginModalOpen(true);
    }
  };

  const handleOnlineClick = () => {
    if (userRole === "USER") {
      navigate("/user/online");
    } else {
      setLoginModalOpen(true);
    }
  };
  const canelModalHandler = () => {
    setIsCanelModal(true);
  };

  const navigateToSignIn = () => {
    setLoginModalOpen(true);
    setRegisterModalOpen(false);
    setForgotPasswordModalOpen(false);
  };

  const navigateToSignUp = () => {
    setLoginModalOpen(false);
    setRegisterModalOpen(true);
    setForgotPasswordModalOpen(false);
  };

  const navigateToForgotPassword = () => {
    setLoginModalOpen(false);
    setRegisterModalOpen(false);
    setForgotPasswordModalOpen(true);
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
                <StyledSpan>пн-сб </StyledSpan> 08:00 до 18:00
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
            <Menu
              anchorEl={anchorEl}
              id="fade-menu"
              open={open}
              onClose={handleClose}
              TransitionComponent={Fade}
            >
              {userRole === "USER" ? (
                <>
                  <StyledMenuItem onClick={handleClose}>
                    <StyledLink to="/user/register">Мои записи</StyledLink>
                  </StyledMenuItem>
                  <StyledMenuItem onClick={handleClose}>
                    <StyledLink to="/user/profile">Профиль</StyledLink>
                  </StyledMenuItem>
                  <StyledMenuItem>
                    <StyledLink onClick={canelModalHandler}>Выйти</StyledLink>
                  </StyledMenuItem>
                </>
              ) : (
                <>
                  <StyledMenuItem onClick={handleClose}>
                    <StyledLink onClick={navigateToSignIn}>Войти</StyledLink>
                  </StyledMenuItem>
                  <StyledMenuItem onClick={handleClose}>
                    <StyledLink onClick={navigateToSignUp}>
                      Регистрация
                    </StyledLink>
                  </StyledMenuItem>
                </>
              )}
            </Menu>
          </StyledIcons>
        </StyledHeader>
        <hr />
        <StyledNavigete>
          <Link to="/user/homepage">
            <Icons.LogohealthCheck />
          </Link>
          <nav>
            {userRole === "GUEST" && (
              <>
                <StyledLinks to="/guest/services">Услуги</StyledLinks>
                <StyledLinks to="/guest/about-clinic">О клинике</StyledLinks>
                <StyledLinks to="/guest/doctors">Врачи</StyledLinks>
                <StyledLinks to="/guest/price">Прайс</StyledLinks>
                <StyledLinks to="/guest/contacts">Контакты</StyledLinks>
              </>
            )}
            {userRole === "USER" && (
              <>
                <StyledLinks to="/user/services">Услуги</StyledLinks>
                <StyledLinks to="/user/about-clinic">О клинике</StyledLinks>
                <StyledLinks to="/user/doctors">Врачи</StyledLinks>
                <StyledLinks to="/user/price">Прайс</StyledLinks>
                <StyledLinks to="/user/contacts">Контакты</StyledLinks>
              </>
            )}
          </nav>
          <div>
            {userRole === "USER" ? (
              <>
                <StyledButtonOutlined
                  variant="outlined"
                  onClick={() => navigate("/user/results")}
                >
                  получить результаты
                </StyledButtonOutlined>
                <StyledButtonContained
                  variant="contained"
                  onClick={() => navigate("/user/online")}
                >
                  запись онлайн
                </StyledButtonContained>
              </>
            ) : (
              <>
                <StyledButtonOutlined
                  variant="outlined"
                  onClick={handleResultsClick}
                >
                  получить результаты
                </StyledButtonOutlined>
                <StyledButtonContained
                  variant="contained"
                  onClick={handleOnlineClick}
                >
                  запись онлайн
                </StyledButtonContained>
              </>
            )}
          </div>
        </StyledNavigete>

        <Modal
          isOpen={isLoginModalOpen}
          onClose={() => setLoginModalOpen(false)}
        >
          <SignIn
            navigateToForgotPassword={navigateToForgotPassword}
            navigateToSignUp={navigateToSignUp}
          />
        </Modal>

        <Modal
          isOpen={isRegisterModalOpen}
          onClose={() => setRegisterModalOpen(false)}
        >
          <SignUp navigateToSignIn={navigateToSignIn} />
        </Modal>

        <Modal
          isOpen={isForgotPasswordModalOpen}
          onClose={() => setForgotPasswordModalOpen(false)}
        >
          <ForgotPassword navigateToSignIn={navigateToSignIn} />
        </Modal>
        <Modal isOpen={isCanelModAL} onClose={() => setIsCanelModal(false)}>
          <HeaderModal canelModalHandler={canelModalHandler} />
        </Modal>
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

const StyledLink = styled(Link)({
  textDecoration: "none",
  color: "#292929",
  "&:hover": {
    color: "#048741",
  },
});

const StyledBox = styled("div")({
  maxWidth: "1300px",
  margin: "0 auto",
});

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
  "& div": {
    display: "flex",
    gap: "1rem",
  },
});

const StyledLinks = styled(Link)({
  textDecoration: "none",
  color: "inherit",
  fontSize: "1rem",
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
