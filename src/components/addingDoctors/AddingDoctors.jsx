import { useState } from "react";
import { styled } from "@mui/material";
import Img from "../../assets/icons/others/img.svg";
import BIcons from "../../assets/icons/others/B.svg";
import IIcons from "../../assets/icons/others/I.svg";
import UIcons from "../../assets/icons/others/Frame.svg";
import MenuLi from "../../assets/icons/others/menu-li.svg";
import MenuOl from "../../assets/icons/others/menu-ol.svg";
import { Select } from "../UI/inputSelect/Select";

export const AddingDoctors = () => {
  const department = [
    {
      value: "Анестезиология",
      label: "Анестезиология",
    },
    {
      value: "Вакцинация",
      label: "Вакцинация",
    },
    {
      value: "Гинекология",
      label: "Гинекология",
    },
    {
      value: "Дерматалогия",
      label: "Дерматалогия",
    },
    {
      value: "Кардиология",
      label: "Кардиология",
    },
    {
      value: "Неврология",
      label: "Неврология",
    },
    {
      value: "Нейрохирургия",
      label: "Нейрохирургия",
    },
  ];
  const [selectedDepartment, setSelectedDepartment] = useState("");

  const [selectedImage, setSelectedImage] = useState(null);
  const [description, setDescription] = useState("");
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);
  const [isList, setIsList] = useState(false);

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const toggleBold = () => {
    setIsBold((prev) => !prev);
  };

  const toggleItalic = () => {
    setIsItalic((prev) => !prev);
  };

  const toggleUnderline = () => {
    setIsUnderline((prev) => !prev);
  };

  const toggleList = () => {
    const lines = description.split("\n").filter((line) => line.trim() !== "");
    if (isList) {
      setDescription(
        lines.map((line) => line.replace(/^[•]\s*/, "")).join("\n")
      );
    } else {
      setDescription(lines.map((line) => `• ${line}`).join("\n"));
    }
    setIsList((prev) => !prev);
  };

  const toggleOrderedList = () => {
    const lines = description.split("\n").filter((line) => line.trim() !== "");
    const newDescription = lines
      .map((line, index) => `${index + 1}. ${line}`)
      .join("\n");
    setDescription(newDescription);
    setIsList(false);
  };

  return (
    <StyledContainer>
      <StyledBoxContainer>
        <StyledImage>
          <StyledContainerImg>
            <img src={selectedImage || Img} alt="Specialist" />
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
                      readOnly
                    />
                  </StyledContainerLabelInput>
                  <StyledContainerLabelInput>
                    <StyleLabel htmlFor="lastName">Фамилия</StyleLabel>
                    <StyledInput
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
                      readOnly
                    />
                  </StyledContainerLabelInput>
                </StyledInputContainer>
              </StyledWrapper>

              <div>
                <StyledTextareaText>
                  <a>Описание</a>
                  <StyledTextareaContainer>
                    <StyledBox>
                      <img
                        src={BIcons}
                        alt="Bicons"
                        onClick={toggleBold}
                        style={{ cursor: "pointer", opacity: isBold ? 1 : 0.5 }}
                      />
                      <img
                        src={IIcons}
                        alt="Iicons"
                        onClick={toggleItalic}
                        style={{
                          cursor: "pointer",
                          opacity: isItalic ? 1 : 0.5,
                        }}
                      />
                      <img
                        src={UIcons}
                        alt="Uicons"
                        onClick={toggleUnderline}
                        style={{
                          cursor: "pointer",
                          opacity: isUnderline ? 1 : 0.5,
                        }}
                      />
                      <img
                        src={MenuLi}
                        alt="Menuli"
                        onClick={toggleList}
                        style={{ cursor: "pointer" }}
                      />
                      <img
                        src={MenuOl}
                        alt="Menuol"
                        onClick={toggleOrderedList}
                        style={{ cursor: "pointer" }}
                      />
                    </StyledBox>
                    <StyledTextareaa
                      placeholder="Введите описание специалиста"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      style={{
                        fontWeight: isBold ? "bold" : "normal",
                        fontStyle: isItalic ? "italic" : "normal",
                        textDecoration: isUnderline ? "underline" : "none",
                        whiteSpace: "pre-wrap",
                      }}
                    />
                  </StyledTextareaContainer>
                </StyledTextareaText>
              </div>

              <StyledContainerButton>
                <StyledButton variant={"outlined"}>Отменить</StyledButton>
                <StyledBtn type="button">Добавить</StyledBtn>
              </StyledContainerButton>
            </StyledForm>
          </StyledMain>
        </div>
      </StyledBoxContainer>
    </StyledContainer>
  );
};

const StyledTextareaContainer = styled("div")({
  width: "1000px",
  height: "279px",
  display: "flex",
  flexDirection: "column",
});
const StyledTextareaa = styled("textarea")(({ isError }) => ({
  width: "1000px",
  height: "229px",
  padding: "10px 20px",
  fontSize: "14px",
  border: isError ? "1px solid red" : "1px solid #4D4E51",
  outline: "none",
  resize: "none",
  position: "relative",
  zIndex: 1,
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
});

const StyledLabel = styled("p")({
  fontFamily: "Manrope",
  fontWeight: 400,
  fontSize: "12px",
  lineHeight: "14.4px",
  textAlign: "center",
  maxWidth: "148px",
  maxHeight: "28px",
  color: "black",
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

const StyledInput = styled("input")(({ isError }) => ({
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

const StyledButton = styled("button")(() => ({
  width: "243px",
  height: "39px",
  border: "1px solid #959595",
  color: "#959595",
  background: "#fff",
  borderRadius: "10px",
}));

const StyledBtn = styled("button")(() => ({
  width: "244px",
  height: "39px",
  border: "1px solid #0CBB6B",
  color: "#fff",
  background: "#027B44",
  borderRadius: "10px",
}));
const StyledSelect = styled(Select)(({ isError }) => ({
  width: "490px",
  height: "38px",
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
const StyledBox = styled("div")({
  width: "100%",
  height: "45px",
  top: "513px",
  left: "349px",
  display: "flex",
  alignItems: "center",
  paddingLeft: "50px",
  gap: "4rem",
  border: "1px solid #4D4E51",
  borderBottom: "none",
});
