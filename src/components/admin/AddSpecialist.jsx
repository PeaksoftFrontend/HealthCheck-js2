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
  const [specialistData, setSpecialistData] = useState({
    firstName: "",
    lastName: "",
    department: "",
    position: "",
    description: "",
  });
  const [description, setDescription] = useState("");
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);
  const [isList, setIsList] = useState(false);

  console.log("specialistData: ", specialistData);

  const toggleBold = () => setIsBold((prev) => !prev);
  const toggleItalic = () => setIsItalic((prev) => !prev);
  const toggleUnderline = () => setIsUnderline((prev) => !prev);

  const toggleList = () => {
    const lines = description.split("\n").filter((line) => line.trim() !== "");
    setDescription(
      isList
        ? lines.map((line) => line.replace(/^[•]\s*/, "")).join("\n")
        : lines.map((line) => `• ${line}`).join("\n")
    );
    setIsList((prev) => !prev);
  };

  const toggleOrderedList = () => {
    const lines = description.split("\n").filter((line) => line.trim() !== "");
    setDescription(
      lines.map((line, index) => `${index + 1}. ${line}`).join("\n")
    );
    setIsList(false);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setSelectedImage(imageURL);
    }
  };

  const handleChangeSpecialist = () => setIsEditing(true);

  const formik = useFormik(
    config((values) => {
      setSpecialistData(values);
      setIsEditing(false);
    })
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formik.isValid) {
      formik.handleSubmit();
    }
  };

  return (
    <StyledContainer>
      <StyledBox>
        <span>
          {isEditing
            ? "Добавление специалиста"
            : selectedDoctorRef.current.name}
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
                      <StyledContainerLabelInput>
                        <StyleLabel htmlFor="lastName">Фамилия</StyleLabel>
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
                    </StyledInputContainer>
                  </StyledWrapper>
                  <StyledInputContainer>
                    <StyledContainerLabelInput>
                      <StyleLabel htmlFor="department">Отделение</StyleLabel>
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
                    <StyledContainerLabelInput>
                      <StyleLabel htmlFor="position">Должность</StyleLabel>
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
                  </StyledInputContainer>

                  <StyledTextareaText>
                    <a>Описание</a>
                    <StyledContainerIcons>
                      <StyledIcons>
                        <Icons.Bicons onClick={toggleBold} />
                        <Icons.Iicons onClick={toggleItalic} />
                        <Icons.Frame onClick={toggleUnderline} />
                        <Icons.MenuLi onClick={toggleList} />
                        <Icons.MenuOl onClick={toggleOrderedList} />
                      </StyledIcons>
                      <hr />
                    </StyledContainerIcons>
                    <StyledTextareaa
                      placeholder="Введите описание специалиста"
                      onChange={(e) => {
                        formik.handleChange(e);
                        setDescription(e.target.value);
                      }}
                      name="description"
                      value={description}
                      onBlur={formik.handleBlur}
                      isError={
                        formik.touched.description &&
                        Boolean(formik.errors.description)
                      }
                      style={{
                        fontWeight: isBold ? "bold" : "normal",
                        fontStyle: isItalic ? "italic" : "normal",
                        textDecoration: isUnderline ? "underline" : "none",
                      }}
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
                          value={selectedDoctorRef.current.firstName || ""}
                          readOnly
                        />
                      </StyledContainerLabelInput>
                      <StyledContainerLabelInput>
                        <StyleLabel htmlFor="lastName">Фамилия</StyleLabel>
                        <StyledInput
                          value={selectedDoctorRef.current.lastName || ""}
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
                          id="department"
                          placeholder="Напишите отделение"
                          value={selectedDoctorRef.current.department || ""}
                          readOnly
                        />
                      </StyledContainerLabelInput>
                      <StyledContainerLabelInput>
                        <StyleLabel htmlFor="position">Должность</StyleLabel>
                        <StyledInput
                          id="position"
                          placeholder="Напишите должность"
                          value={selectedDoctorRef.current.position || ""}
                          readOnly
                        />
                      </StyledContainerLabelInput>
                    </StyledInputContainer>
                  </StyledWrapper>

                  <StyledTextareaText>
                    <a>Описание</a>
                    <StyledTextareaa
                      placeholder="Введите описание специалиста"
                      value={selectedDoctorRef.current.description || ""}
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
      </StyledBox>
    </StyledContainer>
  );
};
const StyledBox = styled("div")(() => ({
  maxWidth: "1300px",
}));

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
  justifyContent: "center",
  gap: "30px",

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
  color: "#222222",
  padding: "8px",
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
