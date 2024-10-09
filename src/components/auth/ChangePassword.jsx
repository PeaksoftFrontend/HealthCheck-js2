import styled from "@emotion/styled";
import { Button } from "../UI/button/Button";
import { Input } from "../UI/input/Input";
import { useFormik } from "formik";
import { formikConfigChangePassword } from "../../utils/constants/formikConfig";

export const ChangePassword = () => {
  const formik = useFormik(
    formikConfigChangePassword((values) => {
      console.log("Пароль успешно изменен", values);
    })
  );

  return (
    <StyledDiv>
      <h2>Смена пароля</h2>
      <div>
        <p>Введите новый пароль для аккаунта</p>
        <StyledForm onSubmit={formik.handleSubmit}>
          <Containerdiv>
            <StyledInput
              type="password"
              name="password"
              placeholder="Введите новый пароль"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.password && formik.errors.password}
            />
            {formik.touched.password && formik.errors.password && (
              <Error>{formik.errors.password}</Error>
            )}
          </Containerdiv>
          <Containerdiv>
            <StyledInput
              type="password"
              name="confirmPassword"
              placeholder="Подтвердите новый пароль"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.confirmPassword && formik.errors.confirmPassword
              }
            />
            {formik.touched.confirmPassword &&
              formik.errors.confirmPassword && (
                <Error>{formik.errors.confirmPassword}</Error>
              )}
          </Containerdiv>
          <StyledButton type="submit">Подтвердить</StyledButton>
        </StyledForm>
      </div>
    </StyledDiv>
  );
};

const StyledDiv = styled("div")(() => ({
  padding: "20px",
  width: "494px",
  height: "361px",
  display: "flex",
  flexDirection: "column",
  gap: "24px",
  alignItems: "center",
  "& > div": {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    gap: "20px",
  },
  "& p": {
    color: "#959595",
    fontWeight: "400",
    fontSize: "14px",
  },
}));

const StyledForm = styled("form")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
}));

const StyledInput = styled(Input)(({ error }) => ({
  width: "100%",
  border: `1px solid ${error ? "red" : "#ccc"}`,
  display: "flex",
  justifyContent: " center",
  alignItems: "center",
  borderRadius: "4px",
  "&::placeholder": {
    color: error ? "red" : "#ccc",
  },
  "&:focus": {
    borderColor: error ? "red" : "#000",
  },
}));

const StyledButton = styled(Button)(({ disabled }) => ({
  width: "100%",
  backgroundColor: disabled ? "#f5f5f5" : "#1976d2",
  color: disabled ? "#959595" : "#fff",
  cursor: disabled ? "not-allowed" : "pointer",
  "&:hover": {
    backgroundColor: disabled ? "#f5f5f5" : "#1565c0",
  },
}));

const Error = styled("div")(() => ({
  color: "red",
  fontSize: "12px",
}));
const Containerdiv = styled("div")(() => ({
  height: "47px",
  display: "flex",
  flexDirection: "column",
  gap: "2px",
}));
