import { styled } from "@mui/material";
import Specialsit from "../../assets/images/therapists.png";
import { Input } from "../UI/input/Input";
import { Icons } from "../../assets/icons";
import { Button } from "../UI/button/Button";
import { useState } from "react";
import { BorderBottom } from "@mui/icons-material";

export const ChangeSpecialist = () => {
  const [selectedImage, setSelectedImage] = useState(Specialsit);
  const [description, setDescription] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setSelectedImage(imageURL);
    }
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
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
            <StyledForm>
              <StyledWrapper>
                <StyledContainerLabelInput>
                  <label htmlFor="firstName">Имя</label>
                  <StyledInput id="firstName" placeholder="Напишите имя" />
                </StyledContainerLabelInput>
                <StyledContainerLabelInput>
                  <label htmlFor="department">Отделение</label>
                  <StyledInput
                    id="department"
                    placeholder="Напишите отделение"
                  />
                </StyledContainerLabelInput>
              </StyledWrapper>
              <StyledWrapper>
                <StyledContainerLabelInput>
                  <label htmlFor="lastName">Фамилия</label>
                  <StyledInput id="lastName" placeholder="Напишите фамилию" />
                </StyledContainerLabelInput>
                <StyledContainerLabelInput>
                  <label htmlFor="position">Должность</label>
                  <StyledInput id="position" placeholder="Напишите должность" />
                </StyledContainerLabelInput>
              </StyledWrapper>
            </StyledForm>
          </StyledMain>
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
          </StyledTextareaText>
          <StyledTextareaa>
            <StyledTextarea placeholder="Введите описание специалиста" />
          </StyledTextareaa>

          <StyledContainerButton>
            <StyledButton variant="outlined">отменить</StyledButton>
            <StyledBtn>сохранить</StyledBtn>
          </StyledContainerButton>
        </div>
      </StyledBoxContainer>
    </StyledContainer>
  );
};

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

const StyledTextareaa = styled("textarea")({
  width: "100%",
  height: "200px",
  padding: "10px 20px",
  fontSize: "14px",
  border: "1px solid #D9D9D9",
  outline: "none",
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
  "& a": {
    fontSize: "14px",
    color: "#4D4E51",
  },
});

const StyledBoxContainer = styled("section")({
  height: "fit-content",
  display: "flex",
  gap: "45px",
  padding: "40px",
});

const StyledInput = styled(Input)(() => ({
  width: "490px",
  height: "38px",
  padding: "6px",
  color: "#222222",
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
  "& label": {
    color: "#464444",
    fontSize: "14px",
  },
});

const StyledWrapper = styled("section")({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
});

const StyledTextarea = styled("textarea")({
  width: "100%",
  height: "200px",
  padding: "10px 20px",
  fontSize: "14px",
  border: "1px solid #D9D9D9",
  outline: "none",
});

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
