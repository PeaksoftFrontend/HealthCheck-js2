import { useState } from "react";
import { useFormik } from "formik";
import { Input } from "../../UI/input/Input";
import { Button } from "../../UI/button/Button";
import { Icons } from "../../../assets/icons";
import { validationSchema } from "../../../validation/validation";
import validation from "../../../assets/images/validation.png";
import { styled } from "@mui/material";

export const Form = () => {
  const [inputError, setInputError] = useState({ name: false, phone: false });

  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("Form Submitted", values);
      setInputError({ name: false, phone: false });
    },
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!formik.isValid) {
      setInputError({
        name: !formik.values.name,
        phone: !formik.values.phone,
      });
    } else {
      formik.handleSubmit();
    }
  };

  return (
    <StyledContainer>
      <FormWrapper>
        <div>
          <StyledBox onSubmit={handleSubmit}>
            <section>
              <h1>Оставьте заявку</h1>
              <p>
                Оставьте свой номер и наши специалисты свяжутся с Вами в
                ближайшее время
              </p>
            </section>
            <StyledContainerInput>
              <div>
                <label htmlFor="name">Как к Вам обратиться?</label>
                <StyledContainerInputMassage>
                  <StyledInput
                    iconStart={<Icons.Users2 />}
                    id="name"
                    name="name"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                    placeholder="Введите имя"
                    onKeyPress={(event) => {
                      const allowedCharacters = /^[A-Za-zА-Яа-яЁё ]*$/;
                      if (!allowedCharacters.test(event.key)) {
                        event.preventDefault();
                      }
                    }}
                    error={inputError.name}
                  />

                  {formik.touched.name && formik.errors.name ? (
                    <ErrorMessage style={{ fontsiz: "8px" }}>
                      {formik.errors.name}
                    </ErrorMessage>
                  ) : null}
                </StyledContainerInputMassage>
              </div>
              <div>
                <label htmlFor="phone">Номер мобильного телефона</label>
                <StyledContainerInputMassage>
                  <StyledInput
                    iconStart={<Icons.Phone />}
                    id="phone"
                    name="phone"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.phone}
                    placeholder="+996 (___) ___-____"
                    onKeyPress={(event) => {
                      const allowedCharacters = /^[0-9+ ()-]*$/;
                      if (!allowedCharacters.test(event.key)) {
                        event.preventDefault();
                      }
                    }}
                    error={inputError.phone}
                  />

                  {formik.touched.phone && formik.errors.phone ? (
                    <ErrorMessage>{formik.errors.phone}</ErrorMessage>
                  ) : null}
                </StyledContainerInputMassage>
              </div>
            </StyledContainerInput>
            <StyledButton type="submit">ОТПРАВИТЬ ЗАЯВКУ</StyledButton>
          </StyledBox>
        </div>
      </FormWrapper>
      <StyledImg>
        <img
          src={validation}
          alt="validation"
          style={{
            Height: " 530px",
            width: "582px",
            backgroundColor: "transparent",
            borderRadius: "0.5rem",
            marginLeft: "-30px",
          }}
        />
      </StyledImg>
    </StyledContainer>
  );
};

const StyledContainer = styled("div")(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  paddingBottom: "120px",
}));
const FormWrapper = styled("div")(() => ({
  width: "600px",
  height: "460px",
  background: "#DBEBFF",
  borderRadius: "20px",
  display: "flex",
  padding: "40px",
  marginTop: "70px",

  "& section": {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",

    gap: "20px",

    "& h1": {
      fontSize: "36px",
    },
    "& p": {
      fontSize: "18px",
    },
  },
}));
const StyledBox = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "45px",
}));

const StyledContainerInput = styled("form")(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "15px",
}));

const StyledInput = styled(Input)(({ error }) => ({
  width: "16.44rem",
  height: "2.625rem",
  background: "#FFFFFF",
  padding: "0.625rem",
  border: error ? "2px solid red" : "1px solid #cd0e0e",
  "::placeholder": {
    color: "#C4C4C4",
  },
}));

const ErrorMessage = styled("div")(() => ({
  color: "red",
  marginTop: "0.5rem",
  position: "absolute",
  top: "40px",
  fontSize: "15px",
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
const StyledContainerInputMassage = styled("section")(() => ({
  height: "60px",
  position: "relative",
}));

const StyledImg = styled("div")(() => ({
  Height: " 530px",
  width: "582px",
  backgroundColor: "transparent",
  borderRadius: "0.5rem",
  marginLeft: "-48px",
}));
