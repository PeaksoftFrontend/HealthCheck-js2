import { styled } from "@mui/material";
import { Icons } from "../../assets/icons";

export const AdminHeader = () => {
  return (
    <StyledHeader>
      <nav>
        <StyledNavContainer>
          <StyledLogoContainer>
            <Icons.LogohealthCheck />
          </StyledLogoContainer>
          <StyledNavLinks>
            <a href="#" className="active">
              Онлайн-запись
            </a>
            <a href="#">Заявки</a>
            <a href="#">Специалисты</a>
            <a href="#">Пациенты</a>
          </StyledNavLinks>
          <StyledSelect>
            <select>
              <option>Администратор</option>
              <option>Профиль</option>
              <option>Войти</option>
            </select>
          </StyledSelect>
        </StyledNavContainer>
      </nav>
    </StyledHeader>
  );
};

const StyledHeader = styled("header")(() => ({
  display: "contents",
  justifyContent: "normal",

  width: "100%",
  height: "5rem",
  padding: "5rem",
  alignItems: "center",
  backgroundColor: "#ffffff",
}));

const StyledNavContainer = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  padding: "5rem",
}));

const StyledLogoContainer = styled("div")(() => ({
  width: "14rem",
  height: "4rem",
  display: "block",
  alignItems: "flex-start",
  justifyContent: "center",
}));

const StyledNavLinks = styled("div")(() => ({
  display: "flex",
  gap: "3rem",
  fontSize: "1rem",
  fontWeight: "500",
  color: "#333",
  alignItems: "flex-end",
  justifyContent: "center",
  "& a": {
    textDecoration: "none",
    color: "#333",
    paddingBottom: "0.5rem",
    borderBottom: "2px solid transparent",
    "&:hover": {
      color: "#0b0c0b",
      borderBottom: "2px solid #299b51",
      fontWeight: "bold",
    },
  },
}));

const StyledSelect = styled("div")(() => ({
  padding: "2rem",
  position: "relative",
  "& select": {
    padding: "0.5rem 1rem",
    fontSize: "1rem",
    backgroundColor: "#f4f4f4",
    borderRadius: "0.375rem",
    border: "1px solid #ccc",
    color: "#333",
    cursor: "pointer",
    transition: "border-color 0.3s",
    "&:focus": {
      borderColor: "#1976d2",
      outline: "none",
    },
  },
}));
