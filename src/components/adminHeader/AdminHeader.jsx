import { styled, MenuItem, Select, FormControl } from "@mui/material";
import { Icons } from "../../assets/icons";

export const AdminHeader = () => {
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
          <Select defaultValue="Администратор">
            <MenuItem value="Администратор">Администратор</MenuItem>
            <MenuItem value="Профиль">Профиль</MenuItem>
            <MenuItem value="Выйти">Выйти</MenuItem>
          </Select>
        </FormControlStyled>
      </StyledNavContainer>
    </StyledHeader>
  );
};

const StyledHeader = styled("header")(() => ({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  boxShadow: "0 0 5px rgb(0 0 0 /0.1)",
  paddingBottom: "8px",
}));

const StyledNavContainer = styled("nav")(() => ({
  maxWidth: "1450px",
  height: "80px",
  display: "flex",
  gap: "227px",
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
  padding: "1rem",

  "& .MuiInputBase-root": {
    padding: " 1rem",
    fontSize: "1rem",
    borderRadius: "0.375rem",
    backgroundColor: "#fff",
    color: "#090808",
    border: "none",
    boxShadow: "none",
  },

  "& .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },

  "& .MuiSelect-root:hover": {
    backgroundColor: "#fff",
  },

  "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
}));

const StyledContainerNav = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  gap: "160px",
  paddingTop: "16px",
}));
