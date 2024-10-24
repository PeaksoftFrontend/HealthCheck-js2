import { styled, FormControl, MenuItem, Fade } from "@mui/material";
import { Icons } from "../../assets/icons";
import Menu from "@mui/material/Menu";
import { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Link } from "react-router-dom";

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
      <StyledContainerNav>
        <Icons.LogohealthCheck />
        <StyledNavLinks>
          <StyledLink to="/admin/schedule">Онлайн-запись</StyledLink>
          <StyledLink to="/admin/applications">Заявки</StyledLink>
          <StyledLink to="/admin/specialists">Специалисты</StyledLink>
          <StyledLink to="/admin/patients">Пациенты</StyledLink>
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
    </StyledHeader>
  );
};

const StyledHeader = styled("header")(() => ({
  width: "100%",
  height: "80px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0 50px",
}));

const StyledNavLinks = styled("nav")(() => ({
  display: "flex",
  gap: "20px",
  alignItems: "center",
  justifyContent: "center",
  position: "absolute",
  left: "50%",
  transform: "translateX(-50%)",
  top: "30px",
}));
const StyledLink = styled(Link)(() => ({
  textDecoration: "none",
  color: "#333",
  transition: "color 0.3s",
}));

const FormControlStyled = styled(FormControl)(() => ({
  display: "flex",
  alignItems: "center",
  gap: "8px",
}));

const StyledContainerNav = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  gap: "20px",
}));

const StyledText = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
  gap: "8px",
  paddingTop: "0",
}));

const StyledMenuItem = styled(MenuItem)(() => ({
  padding: "6px 30px",
  "&:hover": {
    color: "#048741",
  },
}));
