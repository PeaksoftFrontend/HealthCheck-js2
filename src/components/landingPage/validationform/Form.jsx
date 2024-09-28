import { useFormik } from "formik";
import { Input } from "../../UI/input/Input";
import { Button } from "../../UI/button/Button";
import { styled } from "@mui/material";
import { Icons } from "../../../assets/icons";
import { validationSchema } from "../../../validation/validation";
import validation from "../../../assets/images/validation.png";

export const Form = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("Form Submitted", values);
    },
  });

  return (
    <FormWrapper>
      <FormContainer>
        <FormElement onSubmit={formik.handleSubmit}>
          <FormTitle>Оставьте заявку</FormTitle>
          <FormDescription>
            Оставьте свой номер и наши специалисты свяжутся с Вами в ближайшее
            время
          </FormDescription>
          <StyledDiv>
            <InputGroup>
              <label htmlFor="name">Как к Вам обратиться?</label>
              <StyledInput
                iconStart={<Icons.Users2 />}
                id="name"
                name="name"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
                placeholder="Введите имя"
              />
              {formik.touched.name && formik.errors.name ? (
                <ErrorMessage>{formik.errors.name}</ErrorMessage>
              ) : null}
            </InputGroup>

            <InputGroup>
              <label htmlFor="phone">Номер мобильного телефона</label>
              <StyledInput
                iconStart={<Icons.Phone />}
                id="phone"
                name="phone"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phone}
                placeholder="+996 (___) ___-____"
              />
              {formik.touched.phone && formik.errors.phone ? (
                <ErrorMessage>{formik.errors.phone}</ErrorMessage>
              ) : null}
            </InputGroup>
          </StyledDiv>

          <StyledButton type="submit">ОТПРАВИТЬ ЗАЯВКУ</StyledButton>
        </FormElement>
      </FormContainer>

      <img
        src={validation}
        alt="validation"
        style={{
          Height: " 530px",
          width: "582px",
          position: "relative",
          left: "581px",
          backgroundColor: "transparent",
          borderRadius: "0.5rem",
          border: "none",
        }}
      />
    </FormWrapper>
  );
};

const FormWrapper = styled("div")(() => ({
  width: "72.6875rem",
  height: "33.125rem",
  display: "flex",
  justifyContent: "center",
  top: "244.625rem",
  left: "8.6875rem",
  backgroundColor: "#ffff",
  borderRadius: "0.5rem",
}));

const FormContainer = styled("div")(() => ({
  Radius: "1.25rem",
  width: "41.1875rem",
  height: "28.75rem",
  position: "absolute",
  top: "4.375rem",
  borderRadius: "1.25rem",
  backgroundColor: "#Tertiary/the lightest blue",
}));

const FormElement = styled("form")(() => ({
  backgroundColor: "#E6F0FF",
  padding: "1.5rem",
  borderRadius: "1.25rem",
  textAlign: "center",
}));

const FormTitle = styled("h2")(() => ({
  marginBottom: "1rem",
}));

const FormDescription = styled("p")(() => ({
  marginBottom: "1.5rem",
}));

const StyledDiv = styled("div")(() => ({
  display: "flex",
  gap: "1rem",
  marginBottom: "1.5rem",
  justifyContent: "space-between",
  flexWrap: "wrap",
  height: "75px",
}));

const InputGroup = styled("div")(() => ({
  flex: "1",
  minWidth: "12.5rem",
  "& label": {
    fontSize: "14px",
  },
}));

const ErrorMessage = styled("div")(() => ({
  color: "red",
  marginTop: "0.5rem",
}));

const StyledInput = styled(Input)(() => ({
  width: "16.4375rem",
  padding: "0.5rem",
  borderRadius: "0.3125rem",
  border: "1px solid #ccc",
}));

const StyledButton = styled(Button)(() => ({
  width: "12.5rem",
  height: "3.125rem",
  padding: "0.75rem",
  borderRadius: "1.5rem",
  backgroundColor: "#28A745",
  color: "#fff",
  fontWeight: "bold",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: "#218838",
  },
}));
