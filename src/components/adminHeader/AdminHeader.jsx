import { styled, FormControl, MenuItem, Fade } from "@mui/material";
import { Icons } from "../../assets/icons";
import Menu from "@mui/material/Menu";
import { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export const AdminHeader = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <StyledHeader>
      <StyledNavContainer>
        <StyledContainerNav>
          <Icons.LogohealthCheck />
          <StyledNavLinks>
            <a href="#" className="active">
              Онлайн-запись
            </a>
            <a href="#">Заявки</a>
            <a href="#">Специалисты</a>
            <a href="#">Пациенты</a>
          </StyledNavLinks>
        </StyledContainerNav>
        <FormControlStyled>
          <StyledText onClick={handleClick}>
            <span>Администратор</span>
            <KeyboardArrowDownIcon />
          </StyledText>
          <Menu
            anchorEl={anchorEl}
            id="fade-menu"
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade}
          >
            <StyledMenuItem onClick={handleClose}>Профиль</StyledMenuItem>
            <StyledMenuItem onClick={handleClose}>Выйти</StyledMenuItem>
          </Menu>
        </FormControlStyled>
      </StyledNavContainer>
    </StyledHeader>
  );
};
const StyledHeader = styled("header")(() => ({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  boxShadow: "0 0 5px rgb(0 0 0 / 0.1)",
  paddingBottom: "8px",
}));

const StyledNavContainer = styled("nav")(() => ({
  maxWidth: "1450px",
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0 1.5rem",
}));

const StyledNavLinks = styled("div")(() => ({
  display: "flex",
  gap: "30px",
  fontWeight: "500",
  color: "#333",
  justifyContent: "center",
  alignItems: "center",

  "& a": {
    textDecoration: "none",
    color: "#333",
  },
}));

const FormControlStyled = styled(FormControl)(() => ({
  minWidth: "160px",
  display: "flex",
  alignItems: "center",
  padding: "1rem",
}));

const StyledContainerNav = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  gap: "160px",
  paddingTop: "16px",
}));

const StyledMenuItem = styled(MenuItem)({
  padding: "6px 30px",
  "&:hover": {
    color: "#048741",
  },
});
const StyledText = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
  gap: "8px",
  border: "none",
  paddingTop: "15px",
}));
