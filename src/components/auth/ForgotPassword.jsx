import { styled } from "@mui/material";
import { Button } from "../UI/button/Button";
import { Input } from "../UI/input/Input";
import { useFormik } from "formik";
import { formikForgotPassword } from "../../utils/constants/formikConfig";

export const ForgotPassword = () => {
  const formik = useFormik(
    formikForgotPassword((values) => {
      console.log("Ссылка для сброса отправлена на:", values.email);
    })
  );

  return (
    <StyledDiv>
      <h2>Забыли пароль?</h2>
      <div>
        <p>Вам будет отправлена ссылка для сброса пароля</p>
        <StyledForm onSubmit={formik.handleSubmit}>
          <ContainerDiv>
            <StyledInput
              type="email"
              name="email"
              placeholder="Введите ваш Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && formik.errors.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <Error>{formik.errors.email}</Error>
            ) : null}
          </ContainerDiv>
          <Button type="submit">ОТПРАВИТЬ</Button>
          <Button disabled>ОТМЕНИТЬ</Button>
        </StyledForm>
      </div>
    </StyledDiv>
  );
};

const StyledDiv = styled("div")(() => ({
  padding: "30px",
  width: "494px",
  height: "361px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "24px",
  "& > div": {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    width: "450px",
    "& p": {
      color: "#959595",
    },
  },
}));

const StyledForm = styled("form")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "24px",
  "& button": {
    width: "100%",
    height: "47px",
    "&:disabled": {
      background: "transparent",
      color: "#959595",
      cursor: "not-allowed",
      width: "100%",
    },
  },
}));

const StyledInput = styled(Input)(({ error }) => ({
  width: "100%",
  border: `1px solid ${error ? "red" : "#ccc"}`,
  padding: "5px",
  borderRadius: "4px",
  "&:focus": {
    borderColor: error ? "red" : "#000",
  },
}));

const Error = styled("div")(() => ({
  color: "red",
  fontSize: "12px",
}));

const ContainerDiv = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "3px",
  height: "60px",
}));
