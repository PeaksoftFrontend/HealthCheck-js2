import { styled } from "@mui/material";
import { Input } from "../UI/input/Input";
import { Button } from "../UI/button/Button";
import { useFormik } from "formik";
import SpecialistImage from "../../assets/images/therapists.png";
import { useRef, useState } from "react";
import { config } from "../../utils/constants/formikConfig";
import { Icons } from "../../assets/icons";

export const AddSpecialist = () => {
  const doctors = {
    id: "1",
    name: "Манак Елена",
    specialty: "Анестезиолог",
    firstName: "Елена",
    lastName: "Кущукина",
    department: "Хирургия",
    position: "Главный врач",
    description:
      "Преимущественно эстетическая хирургия лица: Специализация доктора: Сложное перелечивание корневых каналов зубов с применением операционного микроскопа. Художественная реставрация зубов с использованием самых современных пломбировочных материалов.",
  };

  const selectedDoctorRef = useRef({ ...doctors });

  const [selectedImage, setSelectedImage] = useState(SpecialistImage);
  const [isEditing, setIsEditing] = useState(false);
  const [specialistData, setSpecialistData] = useState({});
  console.log("specialistData: ", specialistData);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setSelectedImage(imageURL);
    }
  };

  const handleChangeSpecialist = () => {
    setIsEditing(true);
  };

  const formik = useFormik(
    config((values) => {
      console.log(values);
      setSpecialistData(values);
      setIsEditing(false);
    })
  );

  const updateSpecialistData = (field, value) => {
    setSpecialistData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    formik.handleSubmit();
  };

  return (
    <StyledContainer>
      <span>
        {isEditing ? "Добавление специалиста" : selectedDoctorRef.current.name}
      </span>

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
            onChange={(e) => {
              handleImageChange(e);
              formik.handleChange(e);
              updateSpecialistData(e.target.value);
            }}
            style={{ display: "none" }}
          />
        </StyledImage>

        <div>
          <StyledMain>
            <p>{isEditing ? "Добавление специалиста" : "Личные данные"}</p>
            {isEditing ? (
              <StyledForm onSubmit={handleSubmit}>
                <StyledWrapper>
                  <StyledInputContainer>
                    <StyledContainerLabelInput>
                      <StyleLabel htmlFor="firstName">Имя</StyleLabel>
                      <StyledContainerLabelInput>
                        <StyledInput
                          id="firstName"
                          name="firstName"
                          placeholder="Напишите имя"
                          value={formik.values.firstName}
                          onChange={(e) => {
                            formik.handleChange(e);
                            updateSpecialistData(e.target.value);
                          }}
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
                    </StyledContainerLabelInput>
                    <StyledContainerLabelInput>
                      <StyleLabel htmlFor="lastName">Фамилия</StyleLabel>
                      <StyledContainerLabelInput>
                        <StyledInput
                          id="lastName"
                          placeholder="Напишите фамилию"
                          value={formik.values.lastName}
                          onChange={(e) => {
                            formik.handleChange(e);
                            updateSpecialistData(e.target.value);
                          }}
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
                    </StyledContainerLabelInput>
                  </StyledInputContainer>
                </StyledWrapper>
                <StyledInputContainer>
                  <StyledContainerLabelInput>
                    <StyleLabel htmlFor="department">Отделение</StyleLabel>
                    <StyledContainerLabelInput>
                      <StyledInput
                        id="department"
                        name="department"
                        placeholder="Напишите отделение"
                        value={formik.values.department}
                        onChange={(e) => {
                          formik.handleChange(e);
                          updateSpecialistData(e.target.value);
                        }}
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
                  </StyledContainerLabelInput>
                  <StyledWrapper>
                    <StyledContainerLabelInput>
                      <StyleLabel htmlFor="position">Должность</StyleLabel>
                      <div>
                        <StyledInput
                          id="position"
                          placeholder="Напишите должность"
                          name="position"
                          value={formik.values.position}
                          onChange={(e) => {
                            formik.handleChange(e);
                            updateSpecialistData(e.target.value);
                          }}
                          onBlur={formik.handleBlur}
                          isError={
                            formik.touched.position &&
                            Boolean(formik.errors.position)
                          }
                        />
                        {formik.touched.position && formik.errors.position ? (
                          <ErrorText>{formik.errors.position}</ErrorText>
                        ) : null}
                      </div>
                    </StyledContainerLabelInput>
                  </StyledWrapper>
                </StyledInputContainer>

                <StyledTextareaText>
                  <a>Описание</a>
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
                  <StyledTextareaa
                    placeholder="Введите описание специалиста"
                    onChange={(e) => {
                      formik.handleChange(e);
                      updateSpecialistData(e.target.value);
                    }}
                    name="description"
                    value={formik.values.description}
                    onBlur={formik.handleBlur}
                    isError={
                      formik.touched.description &&
                      Boolean(formik.errors.description)
                    }
                  />
                  {formik.touched.description && formik.errors.description ? (
                    <ErrorText>{formik.errors.description}</ErrorText>
                  ) : null}
                </StyledTextareaText>

                <StyledContainerButton>
                  <StyledBtns variant="outlined" onClick={formik.handleReset}>
                    отменить
                  </StyledBtns>
                  <StyledBtn type="submit">сохранить</StyledBtn>
                </StyledContainerButton>
              </StyledForm>
            ) : (
              <StyledForm>
                <StyledWrapper>
                  <StyledInputContainer>
                    <StyledContainerLabelInput>
                      <StyleLabel htmlFor="firstName">Имя</StyleLabel>
                      <StyledInput
                        id="firstName"
                        placeholder="Напишите имя"
                        value={selectedDoctorRef.current.firstName}
                        readOnly
                      />
                    </StyledContainerLabelInput>
                    <StyledContainerLabelInput>
                      <StyleLabel htmlFor="lastName">Фамилия</StyleLabel>
                      <StyledInput
                        value={selectedDoctorRef.current.lastName}
                        id="lastName"
                        placeholder="Напишите фамилию"
                        readOnly
                      />
                    </StyledContainerLabelInput>
                  </StyledInputContainer>
                </StyledWrapper>
                <StyledWrapper>
                  <StyledInputContainer>
                    <StyledContainerLabelInput>
                      <StyleLabel htmlFor="department">Отделение</StyleLabel>
                      <StyledInput
                        value={selectedDoctorRef.current.department}
                        id="department"
                        placeholder="Напишите отделение"
                        readOnly
                      />
                    </StyledContainerLabelInput>
                    <StyledContainerLabelInput>
                      <StyleLabel htmlFor="position">Должность</StyleLabel>
                      <StyledInput
                        value={selectedDoctorRef.current.position}
                        id="position"
                        placeholder="Напишите должность"
                        readOnly
                      />
                    </StyledContainerLabelInput>
                  </StyledInputContainer>
                </StyledWrapper>
                <StyledTextareaText>
                  <a>Описание</a>
                  <StyledTextareaa
                    value={selectedDoctorRef.current.description}
                    placeholder="Введите описание специалиста"
                    readOnly
                  />
                </StyledTextareaText>
                <StyledContainerButton>
                  <StyledButton variant={"outlined"}>назад</StyledButton>
                  <StyledBtn type="button" onClick={handleChangeSpecialist}>
                    Редактировать
                  </StyledBtn>
                </StyledContainerButton>
              </StyledForm>
            )}
          </StyledMain>
        </div>
      </StyledBoxContainer>
    </StyledContainer>
  );
};

const ErrorText = styled("div")({
  color: "red",
  fontSize: "12px",
});
const StyledTextareaa = styled("textarea")(({ isError }) => ({
  width: "100%",
  height: "200px",
  padding: "10px 20px",
  fontSize: "14px",
  border: isError ? "1px solid red" : "1px solid #D9D9D9",
  outline: "none",
  resize: "none",
}));

const StyledBtns = styled(Button)(() => ({
  width: "243px",
  height: "39px",
  border: "1px solid #959595",
  color: "#959595",
}));
const StyledInputContainer = styled("div")(() => ({
  display: "flex",
  gap: "20px",
}));
const StyledContainer = styled("div")({
  width: "100%",
  display: "flex",
  gap: "30px",
  flexDirection: "column",
  fontFamily: "Manrope",
  "& span": {
    fontSize: "22px",
    color: "#222222",
  },
});

const StyledMain = styled("main")({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  "& p": {
    fontWeight: 600,
    fontSize: "18px",
    color: "#222222",
  },
});

const StyledTextareaText = styled("div")({
  height: "320px",
  display: "flex",
  flexDirection: "column",
  gap: "4px",
  "& a": {
    fontSize: "14px",
    color: "#4D4E51",
  },
});

const StyledBoxContainer = styled("section")({
  display: "flex",
  gap: "45px",
  padding: "40px",
});

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
  flexDirection: "column",
  gap: "20px",
});

const StyledContainerLabelInput = styled("div")({
  display: "flex",
  flexDirection: "column",
  height: "60px",
});
const StyleLabel = styled("label")(() => ({
  color: "#464444",
  fontSize: "14px",
}));

const StyledWrapper = styled("section")({
  display: "flex",
  flexDirection: "column",
});

const StyledContainerButton = styled("div")({
  display: "flex",
  justifyContent: "end",
  gap: "18px",
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
const StyledButton = styled(Button)(() => ({
  width: "243px",
  height: "39px",
  border: "1px solid #048741",
  color: "#048741",
}));

const StyledBtn = styled(Button)(() => ({
  width: "244px",
  height: "39px",
}));

const StyledContainerIcons = styled("div")({
  maxWidth: "1000px",
  border: "1px solid #D9D9D9",
  borderBottom: "none",
  "& hr": {
    borderBottom: "none",
  },
});

const StyledIcons = styled("section")({
  display: "flex",
  gap: "80px",
  padding: "20px 50px",
});
