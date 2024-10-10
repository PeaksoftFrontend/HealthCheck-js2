import { styled } from "@mui/material";
import Specialsit from "../../assets/images/therapists.png";
import { Input } from "../UI/input/Input";
import { Button } from "../UI/button/Button";
import { useState } from "react";

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
      "Преимущественно эстетическая хирургия лица: Специализация доктора: Сложное перелечивание корневых каналов зубов с применением операционного микроскопа. Художественная реставрация зубов с использованием самых современных пломбировочных материалов. Восстановление разрушенных зубов керамическими вкладками, коронками.",
  };

  const [selectedDoctor, setSelectedDoctor] = useState({
    name: doctors.name,
    specialty: doctors.specialty,
    firstName: doctors.firstName,
    lastName: doctors.lastName,
    department: doctors.department,
    position: doctors.position,
    description: doctors.description,
  });

  const [selectedImage, setSelectedImage] = useState(Specialsit);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setSelectedImage(imageURL);
    }
  };

  return (
    <StyledContainer>
      <span>{selectedDoctor.name}</span>

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
            <p>Личные данные</p>
            <StyledForm>
              <StyledWrapper>
                <StyledContainerLabelInput>
                  <label htmlFor="firstName">Имя</label>
                  <StyledInput
                    id="firstName"
                    placeholder="Напишите имя"
                    value={selectedDoctor.firstName}
                  />
                </StyledContainerLabelInput>
                <StyledContainerLabelInput>
                  <label htmlFor="department">Отделение</label>
                  <StyledInput
                    value={selectedDoctor.department}
                    id="department"
                    placeholder="Напишите отделение"
                  />
                </StyledContainerLabelInput>
              </StyledWrapper>
              <StyledWrapper>
                <StyledContainerLabelInput>
                  <label htmlFor="lastName">Фамилия</label>
                  <StyledInput
                    value={selectedDoctor.lastName}
                    id="lastName"
                    placeholder="Напишите фамилию"
                  />
                </StyledContainerLabelInput>
                <StyledContainerLabelInput>
                  <label htmlFor="position">Должность</label>
                  <StyledInput
                    value={selectedDoctor.position}
                    id="position"
                    placeholder="Напишите должность"
                  />
                </StyledContainerLabelInput>
              </StyledWrapper>
            </StyledForm>
            <StyledTextareaText>
              <a>Описание</a>
              <StyledTextarea
                value={selectedDoctor.description}
                placeholder="Введите описание специалиста"
              />
            </StyledTextareaText>
          </StyledMain>

          <StyledContainerButton>
            <StyledButton variant="outlined">назад</StyledButton>
            <StyledBtn>Редактировать</StyledBtn>
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

const StyledTextarea = styled("textarea")({
  width: "100%",
  height: "200px",
  padding: "10px 20px",
  fontSize: "14px",
  border: "1px solid #D9D9D9",
  outline: "none",
});

const StyledBoxContainer = styled("section")({
  height: "fit-content",
  display: "flex",
  gap: "45px",
  padding: "40px",
});

const StyledInput = styled(Input)({
  width: "490px",
  height: "38px",
  padding: "6px",
  color: "#222222",
  "& ::placeholder": {
    color: "#959595",
    fontSize: "14px",
  },
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

const StyledContainerButton = styled("div")({
  display: "flex",
  justifyContent: "end",
  gap: "18px",
  padding: "68px 0px",
});

const StyledButton = styled(Button)({
  width: "243px",
  height: "39px",
  border: "1px solid #048741",
  color: "#048741",
});

const StyledBtn = styled(Button)({
  width: "244px",
  height: "39px",
});
