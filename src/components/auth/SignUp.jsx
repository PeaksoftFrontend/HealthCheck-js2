import { styled } from "@mui/material";
import { Button } from "../UI/button/Button";
import Google from "../../assets/images/google.png";
import { useFormik } from "formik";
import { forConfig } from "../../utils/constants/formikConfig";
import { Input } from "../UI/input/Input";

export const SignUp = () => {
  const formik = useFormik(
    forConfig((values) => {
      console.log("Форма отправлена", values);
    })
  );

  return (
    <div>
      <StyledContainer>
        <h3>Регистрация</h3>
        <StyledForm onSubmit={formik.handleSubmit}>
          <StyledDivContainer>
            <StyledInput
              type="text"
              placeholder="Имя"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="firstName"
              isError={
                formik.touched.firstName && Boolean(formik.errors.firstName)
              }
            />
            {formik.touched.firstName && formik.errors.firstName ? (
              <Error>{formik.errors.firstName}</Error>
            ) : null}
          </StyledDivContainer>

          <StyledDivContainer>
            <StyledInput
              type="text"
              placeholder="Фамилия"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="lastName"
              isError={
                formik.touched.lastName && Boolean(formik.errors.lastName)
              }
            />
            {formik.touched.lastName && formik.errors.lastName ? (
              <Error>{formik.errors.lastName}</Error>
            ) : null}
          </StyledDivContainer>

          <StyledDivContainer>
            <StyledInput
              type="text"
              placeholder="+7 (___) ___-__-__"
              value={formik.values.number}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="number"
              isError={formik.touched.number && Boolean(formik.errors.number)}
            />
            {formik.touched.number && formik.errors.number ? (
              <Error>{formik.errors.number}</Error>
            ) : null}
          </StyledDivContainer>

          <StyledDivContainer>
            <StyledInput
              type="email"
              placeholder="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="email"
              isError={formik.touched.email && Boolean(formik.errors.email)}
            />
            {formik.touched.email && formik.errors.email ? (
              <Error>{formik.errors.email}</Error>
            ) : null}
          </StyledDivContainer>

          <StyledDivContainer>
            <StyledInput
              type="password"
              placeholder="Введите пароль"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="password"
              isError={
                formik.touched.password && Boolean(formik.errors.password)
              }
            />
            {formik.touched.password && formik.errors.password ? (
              <Error>{formik.errors.password}</Error>
            ) : null}
          </StyledDivContainer>

          <StyledDivContainer>
            <StyledInput
              type="password"
              placeholder="Повторите пароль"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="confirmPassword"
              isError={
                formik.touched.confirmPassword &&
                Boolean(formik.errors.confirmPassword)
              }
            />
            {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
              <Error>{formik.errors.confirmPassword}</Error>
            ) : null}
          </StyledDivContainer>

          <StyledButton type="submit">Создать аккаунт</StyledButton>
        </StyledForm>

        <StyledDivider>ИЛИ</StyledDivider>

        <StyledDiv>
          <img src={Google} alt="Google icon" />
          <b>Зарегистрироваться с Google</b>
        </StyledDiv>

        <Container>
          <p>У вас уже есть аккаунт?</p>
          <a href="">Войти</a>
        </Container>
      </StyledContainer>
    </div>
  );
};

const StyledContainer = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "24px",
  maxWidth: "414px",
  "& h3": {
    width: "127px",
    height: "25px",
    fontWeight: "500",
    fontSize: "18px",
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
  gap: "20px",
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

const StyledDivContainer = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  height: "46px",
  gap: "9px",
}));

const StyledInput = styled(Input)(({ isError }) => ({
  width: "100%",
  borderRadius: "8px",
  border: `1px solid ${isError ? "red" : "#ccc"}`,
  outline: "none",
  fontSize: "16px",
}));

const Error = styled("div")(() => ({
  color: "red",
  fontSize: "12px",
  marginTop: "-10px",
  marginBottom: "10px",
}));
