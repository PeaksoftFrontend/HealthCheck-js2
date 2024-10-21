import { useFormik } from "formik";
import { styled } from "@mui/material";
import { Input } from "../UI/input/Input";
import { Button } from "../UI/button/Button";
import Google from "../../assets/images/google.png";
import { formikConfig } from "../../utils/constants/formikConfig";

export const SignIn = () => {
  const formik = useFormik(
    formikConfig((values) => {
      console.log("Форма отправлена", values);
    })
  );

  return (
    <StyledContainer>
      <h3>Войти</h3>
      <StyledForm onSubmit={formik.handleSubmit}>
        <ContainerDiv>
          <StyleInput
            type="email"
            name="email"
            placeholder="Логин"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && formik.errors.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <Error>{formik.errors.email}</Error>
          ) : null}
        </ContainerDiv>
        <ContainerDiv>
          <StyleInputPassowrd
            type="password"
            name="password"
            placeholder="Пароль"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && formik.errors.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <Error>{formik.errors.password}</Error>
          ) : null}
        </ContainerDiv>
        <StyledButton type="submit">Создать аккаунт</StyledButton>
      </StyledForm>
      <span>Забыли пароль?</span>
      <StyledDivider>ИЛИ</StyledDivider>
      <StyledDiv>
        <img src={Google} alt="Google icon" />
        <b>Зарегистрироваться с Google</b>
      </StyledDiv>
      <Container>
        <p>У вас уже есть аккаунт?</p>
        <a href="#">Войти</a>
      </Container>
    </StyledContainer>
  );
};

const StyledContainer = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "24px",
  maxWidth: "414px",
  "& h3": {
    width: "61px",
    height: "25px",
    fontWeight: "500",
    fontSize: "18px",
  },
  "& span": {
    color: "blue",
  },
}));

const StyledDivider = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  width: "443px",
  color: "#666",
  fontWeight: "bold",
  fontSize: "14px",
  "&::before, &::after": {
    content: '""',
    flexGrow: 1,
    borderBottom: `1px solid #ccc`,
    margin: "0 16px",
  },
}));

const StyledForm = styled("form")(() => ({
  width: "414px",
  display: "flex",
  flexDirection: "column",
  gap: "14px",
}));

const StyledButton = styled(Button)(() => ({
  width: "100%",
}));

const StyledDiv = styled("div")(() => ({
  width: "100%",
  height: "39px",
  background: "#F5F5F5",
  borderRadius: "8px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "14px",
  "& img": {
    width: "22px",
    height: "22px",
  },
}));

const Container = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  gap: "3px",
  "& p": {
    height: "18px",
    fontSize: "14px",
    fontWeight: "400",
    color: "#23262F",
  },
  "& a": {
    textDecoration: "none",
    color: "blue",
  },
}));

const Error = styled("div")(() => ({
  color: "red",
  fontSize: "14px",
  fontWeight: "400",
  marginTop: "-10px",
  marginBottom: "10px",
}));

const StyleInput = styled(Input)(({ error }) => ({
  border: `1px solid ${error ? "red" : "#ccc"}`,
  display: "flex",
  justifyContent: "center",
  borderRadius: "4px",
  padding: "10px",
  "&:focus": {
    borderColor: error ? "red" : "#000",
  },
}));
const StyleInputPassowrd = styled(Input)(({ error }) => ({
  border: `1px solid ${error ? "red" : "#ccc"}`,
  display: "flex",
  justifyContent: "center",
  borderRadius: "4px",
  "&:focus": {
    borderColor: error ? "red" : "#000",
  },
}));

const ContainerDiv = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  height: "60px",
}));
