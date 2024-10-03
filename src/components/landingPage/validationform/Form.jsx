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

    const isNameEmpty = !formik.values.name;
    const isPhoneEmpty = !formik.values.phone;

    if (isNameEmpty || isPhoneEmpty) {
      setInputError({
        name: isNameEmpty,
        phone: isPhoneEmpty,
      });
    } else {
      formik.handleSubmit();
    }
  };

  const handleInputChange = (e) => {
    formik.handleChange(e);
    const { name, value } = e.target;
    if (value) {
      setInputError((prev) => ({ ...prev, [name]: false }));
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
                <label htmlFor="name">Как к вам обратиться?</label>
                <StyledContainerInputMassage>
                  <StyledInput
                    iconStart={<Icons.Users2 />}
                    id="name"
                    name="name"
                    type="text"
                    onChange={handleInputChange}
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

                  {inputError.name && (
                    <ErrorMessage>Пожалуйста, введите имя</ErrorMessage>
                  )}
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
                    onChange={handleInputChange}
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

                  {inputError.phone && (
                    <ErrorMessage>
                      {" "}
                      Пожалуйста, введите номер телефона
                    </ErrorMessage>
                  )}
                </StyledContainerInputMassage>
              </div>
            </StyledContainerInput>
            <StyledButton type="submit" onClick={handleSubmit}>
              ОТПРАВИТЬ ЗАЯВКУ
            </StyledButton>
          </StyledBox>
        </div>
      </FormWrapper>
      <StyledImg>
        <img
          src={validation}
          alt="validation"
          style={{
            height: "530px",
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
  border: error ? "1px solid red" : "1px solid #218838",
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
  height: "18px",
  lineHeight: "18px",
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
  height: "530px",
  width: "582px",
  backgroundColor: "transparent",
  borderRadius: "0.5rem",
  marginLeft: "-48px",
}));
