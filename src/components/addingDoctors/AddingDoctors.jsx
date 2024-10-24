import { useState } from "react";
import { styled } from "@mui/material";
import Img from "../../assets/icons/others/img.svg";
import { Select } from "../UI/inputSelect/Select";
import { department } from "../../utils/constants/department/addingDoctors";
import { TextEditor } from "./TextEditor";
import { Button } from "../UI/button/Button";
import { Input } from "../UI/input/Input";

export const AddingDoctors = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    department: "",
    position: "",
    description: "",
    image: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setFormData({ ...formData, image: e.target.result });
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleAddClick = () => {
    const valuesArray = Object.values(formData);
    console.log(valuesArray);
  };

  return (
    <StyledContainer>
      <StyledBoxContainer>
        <StyledImage>
          <StyledContainerImg>
            <img src={formData.image || Img} alt="Specialist" />
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
                      name="firstName"
                      placeholder="Напишите имя"
                      value={formData.firstName}
                      onChange={handleInputChange}
                    />
                  </StyledContainerLabelInput>
                  <StyledContainerLabelInput>
                    <StyleLabel htmlFor="lastName">Фамилия</StyleLabel>
                    <StyledInput
                      id="lastName"
                      name="lastName"
                      placeholder="Напишите фамилию"
                      value={formData.lastName}
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
                      name="department"
                      value={formData.department}
                      onChange={(e) =>
                        setFormData({ ...formData, department: e.target.value })
                      }
                    />
                  </StyledContainerLabelInput>
                  <StyledContainerLabelInput>
                    <StyleLabel htmlFor="position">Должность</StyleLabel>
                    <StyledInput
                      id="position"
                      name="position"
                      placeholder="Напишите должность"
                      value={formData.position}
                      onChange={handleInputChange}
                    />
                  </StyledContainerLabelInput>
                </StyledInputContainer>
              </StyledWrapper>

              <TextEditor
                value={formData.description}
                onChange={(value) =>
                  setFormData({ ...formData, description: value })
                }
              />

              <StyledContainerButton>
                <StyledButton variant={"outlined"}>Отменить</StyledButton>
                <StyledBtn type="button" onClick={handleAddClick}>
                  Добавить
                </StyledBtn>
              </StyledContainerButton>
            </StyledForm>
          </StyledMain>
        </div>
      </StyledBoxContainer>
    </StyledContainer>
  );
};

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
  justifyContent: "flex-end",
  gap: "18px",
  marginTop: "330px",
});

const StyledInput = styled(Input)(({ isError }) => ({
  width: "490px",
  height: "38px",
  padding: "6px",
  color: "#222222",
  borderRadius: "6px",
  border: isError ? "1px solid red" : "1px solid #D9D9D9",
  "& ::placeholder": {
    color: "#959595",
    fontSize: "14px",
  },
}));

const StyledButton = styled(Button)(() => ({
  width: "243px",
  height: "39px",
  border: "1px solid #959595",
  color: "#959595",
  background: "#fff",
  borderRadius: "10px",
}));

const StyledBtn = styled(Button)(() => ({
  width: "244px",
  height: "39px",
  color: "#fff",
  borderRadius: "10px",
}));

const StyledSelect = styled(Select)(({ isError }) => ({
  width: "490px",
  height: "38px",
  color: "#222222",
  borderRadius: "6px",
  padding: "6px",
  marginTop: "-4px",
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
