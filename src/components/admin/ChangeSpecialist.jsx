import { styled } from "@mui/material";
import Specialsit from "../../assets/images/therapists.png";
import { Input } from "../UI/input/Input";
import { Icons } from "../../assets/icons";
import { Button } from "../UI/button/Button";
import { useState } from "react";
import { useFormik } from "formik";
import { forConfig } from "../../utils/constants/formikConfig";

export const ChangeSpecialist = () => {
  const [selectedImage, setSelectedImage] = useState(Specialsit);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setSelectedImage(imageURL);
    }
  };

  const formik = useFormik(
    forConfig((values) => {
      console.log(values);
    })
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    formik.handleSubmit();
  };

  return (
    <StyledContainer>
      <span>Добавление специалиста</span>

      <StyledBoxContainer>
        <StyledImage>
          <StyledContainerImg>
            <img src={selectedImage} alt="Specialist" />
          </StyledContainerImg>
          <label htmlFor="upload-photo">
            <p>Сменить фото</p>
          </label>
          <input
            type="file"
            id="upload-photo"
            accept="image/*"
            onChange={handleImageChange}
            style={{ display: "none" }}
          />
        </StyledImage>
        <div>
          <StyledMain>
            <p>Добавление специалиста</p>
            <StyledForm onSubmit={handleSubmit}>
              <StyledWrapper>
                <div>
                  <StyleLabel htmlFor="firstName">Имя</StyleLabel>
                  <StyledContainerLabelInput>
                    <StyledInput
                      id="firstName"
                      name="firstName"
                      placeholder="Напишите имя"
                      value={formik.values.firstName}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      isError={
                        formik.touched.firstName &&
                        Boolean(formik.errors.firstName)
                      }
                    />
                    {formik.touched.firstName && formik.errors.firstName ? (
                      <ErrorText>{formik.errors.firstName}</ErrorText>
                    ) : null}
                  </StyledContainerLabelInput>
                </div>
                <div>
                  <StyleLabel htmlFor="department">Отделение</StyleLabel>
                  <StyledContainerLabelInput>
                    <StyledInput
                      id="department"
                      name="department"
                      placeholder="Напишите отделение"
                      value={formik.values.department}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      isError={
                        formik.touched.department &&
                        Boolean(formik.errors.department)
                      }
                    />
                    {formik.touched.department && formik.errors.department ? (
                      <ErrorText>{formik.errors.department}</ErrorText>
                    ) : null}
                  </StyledContainerLabelInput>
                </div>
              </StyledWrapper>
              <StyledWrapper>
                <div>
                  <StyleLabel htmlFor="lastName">Фамилия</StyleLabel>
                  <StyledContainerLabelInput>
                    <StyledInput
                      id="lastName"
                      placeholder="Напишите фамилию"
                      value={formik.values.lastName}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      name="lastName"
                      isError={
                        formik.touched.lastName &&
                        Boolean(formik.errors.lastName)
                      }
                    />
                    {formik.touched.lastName && formik.errors.lastName ? (
                      <ErrorText>{formik.errors.lastName}</ErrorText>
                    ) : null}
                  </StyledContainerLabelInput>
                </div>
                <div>
                  <StyleLabel htmlFor="position">Должность</StyleLabel>
                  <StyledContainerLabelInput>
                    <StyledInput
                      id="position"
                      placeholder="Напишите должность"
                      name="position"
                      value={formik.values.position}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      isError={
                        formik.touched.position &&
                        Boolean(formik.errors.position)
                      }
                    />
                    {formik.touched.position && formik.errors.position ? (
                      <ErrorText>{formik.errors.position}</ErrorText>
                    ) : null}
                  </StyledContainerLabelInput>
                </div>
              </StyledWrapper>
            </StyledForm>
            <a>Описание</a>
          </StyledMain>
          <StyledTextareaText>
            <StyledContainerIcons>
              <StyledIcons>
                <Icons.Bicons />
                <Icons.Iicons />
                <Icons.Frame />
                <Icons.MenuLi />
                <Icons.MenuOl />
              </StyledIcons>
              <hr />
            </StyledContainerIcons>
          </StyledTextareaText>
          <StyledTextareaa>
            <StyledTextarea
              placeholder="Введите описание специалиста"
              onChange={formik.handleChange}
              name="description"
              value={formik.values.description}
              onBlur={formik.handleBlur}
              isError={
                formik.touched.description && Boolean(formik.errors.description)
              }
            />
            {formik.touched.description && formik.errors.description ? (
              <ErrorText>{formik.errors.description}</ErrorText>
            ) : null}
          </StyledTextareaa>

          <StyledContainerButton>
            <StyledButton variant="outlined" onClick={formik.handleReset}>
              отменить
            </StyledButton>
            <StyledBtn type="submit" onClick={handleSubmit}>
              сохранить
            </StyledBtn>
          </StyledContainerButton>
        </div>
      </StyledBoxContainer>
    </StyledContainer>
  );
};

const ErrorText = styled("div")({
  color: "red",
  fontSize: "12px",
});

const StyledTextareaText = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "4px",
  "& a": {
    fontSize: "14px",
    color: "#4D4E51",
  },
}));

const StyledContainer = styled("div")({
  width: "100%",
  display: "flex",
  gap: "30px",
  flexDirection: "column",
  height: "100vw",
  fontFamily: "Manrope",
  "& span": {
    fontSize: "22px",
    color: "#222222",
  },
});

const StyledTextareaa = styled("div")({
  width: "100%",
});

const StyledMain = styled("main")({
  display: "flex",
  flexDirection: "column",

  "& p": {
    fontWeight: 600,
    fontSize: "18px",
    color: "#222222",
  },
  "& a": {
    fontSize: "14px",
    color: "#4D4E51",
    paddingBottom: "4px",
  },
});

const StyledBoxContainer = styled("section")({
  height: "fit-content",
  display: "flex",
  gap: "45px",
  padding: "40px",
});

const StyledInput = styled(Input)(({ isError }) => ({
  width: "490px",
  height: "38px",
  padding: "6px",
  color: "#222222",
  border: isError ? "1px solid red" : "1px solid #D9D9D9",
  "& ::placeholder": {
    color: "#959595",
    fontSize: "14px",
  },
}));

const StyledImage = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "6px",
  "& p": {
    fontSize: "12px",
    textAlign: "center",
    color: "#346EFB",
    cursor: "pointer",
  },
});

const StyledContainerImg = styled("div")({
  width: "140px",
  height: "140px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "50%",
  background: "linear-gradient(180deg, #FDFDFD 0%, #E4E7EE 0%)",
  overflow: "hidden",

  "& img": {
    width: "140px",
    height: "140px",
    objectFit: "cover",
    borderRadius: "50%",
  },
});

const StyledForm = styled("form")({
  display: "flex",
  gap: "20px",
});

const StyledContainerLabelInput = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "4px",
  height: "61px",
});
const StyleLabel = styled("label")(() => ({
  color: "#464444",
  fontSize: "14px",
}));

const StyledWrapper = styled("section")({
  display: "flex",
  flexDirection: "column",
});

const StyledTextarea = styled("textarea")(({ isError }) => ({
  width: "100%",
  height: "200px",
  padding: "10px 20px",
  fontSize: "14px",
  border: isError ? "1px solid red" : "1px solid #D9D9D9",
  outline: "none",
}));

const StyledIcons = styled("section")({
  display: "flex",
  gap: "80px",
  padding: "20px 50px",
});

const StyledContainerIcons = styled("div")({
  maxWidth: "1000px",
  border: "1px solid #D9D9D9",
  borderBottom: "none",

  "& hr": {
    borderBottom: "none",
  },
});

const StyledContainerButton = styled("div")({
  display: "flex",
  justifyContent: "end",
  gap: "18px",
  padding: "68px 0px",
});

const StyledButton = styled(Button)(() => ({
  width: "243px",
  height: "39px",
  border: "1px solid #959595",
  color: "#959595",
}));

const StyledBtn = styled(Button)(() => ({
  width: "244px",
  height: "39px",
}));
