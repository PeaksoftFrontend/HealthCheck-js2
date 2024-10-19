import { useState } from "react";
import { styled } from "@mui/material";
import Img from "../../assets/icons/others/img.svg";
import { Select } from "../UI/inputSelect/Select";
import { Button } from "../UI/button/Button";
import { Input } from "../UI/input/Input";
import { department } from "../../utils/constants/department/addingDoctors";
import { TextEditor } from "./TextEditor";

export const AddingDoctors = () => {
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [description, setDescription] = useState("");

  const [inputValues, setInputValues] = useState({
    firstName: "",
    lastName: "",
    position: "",
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setInputValues((prevValues) => ({
      ...prevValues,
      [id]: value,
    }));
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
    const file = e.target.files[0];
    if (file) {
      setInputValues((prevValues) => ({
        ...prevValues,
        image: URL.createObjectURL(file),
      }));
    }
  };

  const handleAddDoctor = () => {
    const doctorData = {
      firstName: inputValues.firstName,
      lastName: inputValues.lastName,
      position: inputValues.position,
      department: selectedDepartment,
      description,
      image: selectedImage,
    };

    console.log(doctorData);
  };

  const changeTextEditorHandler = (value) => setDescription(value);

  return (
    <StyledContainer>
      <StyledBoxContainer>
        <StyledImage>
          <StyledContainerImg>
            <img
              src={selectedImage || Img}
              alt="Specialist"
              className={selectedImage ? "uploaded" : ""}
            />
          </StyledContainerImg>

          <label htmlFor="upload-photo">
            <StyledLabel>
              Нажмите для добавления <br /> фотографии
            </StyledLabel>
          </label>
          <input
            type="file"
            id="upload-photo"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleImageChange}
          />
        </StyledImage>
        <div>
          <StyledMain>
            <p>Добавление специалиста</p>
            <StyledForm>
              <StyledWrapper>
                <StyledInputContainer>
                  <StyledContainerLabelInput>
                    <StyleLabel htmlFor="firstName">Имя</StyleLabel>
                    <StyledInput
                      id="firstName"
                      placeholder="Напишите имя"
                      value={inputValues.firstName}
                      onChange={handleInputChange}
                    />
                  </StyledContainerLabelInput>
                  <StyledContainerLabelInput>
                    <StyleLabel htmlFor="lastName">Фамилия</StyleLabel>
                    <StyledInput
                      id="lastName"
                      placeholder="Напишите фамилию"
                      value={inputValues.lastName}
                      onChange={handleInputChange}
                    />
                  </StyledContainerLabelInput>
                </StyledInputContainer>
              </StyledWrapper>
              <StyledWrapper>
                <StyledInputContainer>
                  <StyledContainerLabelInput>
                    <StyleLabel htmlFor="department">Отделение</StyleLabel>
                    <StyledSelect
                      options={department}
                      placeholder="Выберите отделение"
                      id="department"
                      value={selectedDepartment}
                      onChange={(e) => setSelectedDepartment(e.target.value)}
                    />
                  </StyledContainerLabelInput>
                  <StyledContainerLabelInput>
                    <StyleLabel htmlFor="position">Должность</StyleLabel>
                    <StyledInput
                      id="position"
                      placeholder="Напишите должность"
                      value={inputValues.position}
                      onChange={handleInputChange}
                    />
                  </StyledContainerLabelInput>
                </StyledInputContainer>
              </StyledWrapper>

              <StyledTextareaText>
                <a>Описание</a>
                <StyledTextareaContainer>
                  <TextEditor onChange={changeTextEditorHandler} />
                </StyledTextareaContainer>
              </StyledTextareaText>
            </StyledForm>
          </StyledMain>
        </div>
      </StyledBoxContainer>

      <StyledContainerButton>
        <StyledButton variant="outlined">Отменить</StyledButton>
        <StyledBtn onClick={handleAddDoctor}>Добавить</StyledBtn>
      </StyledContainerButton>
    </StyledContainer>
  );
};

const StyledButton = styled(Button)(() => ({
  width: "243px",
  height: "39px",
  border: "1px solid #959595",
  color: "#959595",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledBtn = styled(Button)(() => ({
  width: "244px",
  height: "39px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledTextareaContainer = styled("div")({
  width: "1000px",
  height: "279px",
  display: "flex",
  flexDirection: "column",
});

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
  height: "297px",
  width: "1000px",
  display: "flex",
  flexDirection: "column",
  gap: "4px",
  position: "relative",
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
  "& input": {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
});

const StyledLabel = styled("p")({
  fontFamily: "Manrope",
  fontWeight: 400,
  fontSize: "12px",
  lineHeight: "14.4px",
  textAlign: "center",
  maxWidth: "148px",
  maxHeight: "28px",
  color: "#909CB5",
  cursor: "pointer",
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
  position: "relative",
  "& img": {
    position: "absolute",
    width: "40px",
    height: "40px",
    objectFit: "contain",
  },
  "& input[type='file']": {
    display: "none",
  },
  "& img.uploaded": {
    width: "100%",
    height: "100%",
    objectFit: "cover",
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
  "& .css-rwbguu-MuiFormControl-root": {
    margin: "0",
  },
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

const StyledSelect = styled(Select)(({ isError }) => ({
  width: "490px",
  height: "38px",
  borderRadius: "6px",
  color: "#222222",
  "& .MuiOutlinedInput-notchedOutline": {
    border: isError ? "1px solid red" : "1px solid #D9D9D9",
  },
  "& ::placeholder": {
    color: "#959595",
    fontSize: "6px",
  },
  "& span": {
    fontSize: "14px",
    color: "#4D4E51",
  },
}));
