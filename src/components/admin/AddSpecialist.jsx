import { styled } from "@mui/material";
import Specialsit from "../../assets/images/therapists.png";
import { Input } from "../UI/input/Input";
import { Icons } from "../../assets/icons";
import { specialist } from "../../utils/constants/general";
import { Button } from "../UI/button/Button";

export const AddSpecialist = () => {
  return (
    <StyledContainer>
      <span>Добавление специалиста</span>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <StyledBoxContainer>
          <StyledImage>
            <StyledContainerImg>
              <img src={Specialsit} alt="Specialsit" />
            </StyledContainerImg>
            <p>Сменить фото</p>
          </StyledImage>
          <div>
            <StyledMain>
              <p>Добавление специалиста</p>
              <StyledForm>
                <StyledWrapper>
                  <StyledContainerLabelInput>
                    <label htmlFor="firstName">Имя</label>
                    <StyledInput placeholder="Напишите имя" />
                  </StyledContainerLabelInput>
                  <StyledContainerLabelInput>
                    <label htmlFor="department">Отделение</label>

                    <StyledInput placeholder="Напишите отделение" />
                  </StyledContainerLabelInput>
                </StyledWrapper>
                <StyledWrapper>
                  <StyledContainerLabelInput>
                    <label htmlFor="lastName">Фамилия</label>

                    <StyledInput placeholder="Напишите фамилию" />
                  </StyledContainerLabelInput>
                  <StyledContainerLabelInput>
                    <label htmlFor="position">Должность</label>
                    <StyledInput placeholder="Напишите должность" />
                  </StyledContainerLabelInput>
                </StyledWrapper>
              </StyledForm>
              <a>Описание</a>
            </StyledMain>
            <StyledContainerIcons>
              <StyledIcons>
                <Icons.Bicons />
                <Icons.Iicons />
                <Icons.Frame />
                <Icons.MenuLi />
                <Icons.MenuOl />
              </StyledIcons>
              <hr />
              <StyledList>
                {specialist.map((item) => (
                  <div key={item.id}>
                    <b>{item.title}</b>
                    <p>{item.list}</p>
                  </div>
                ))}
              </StyledList>
            </StyledContainerIcons>

            <StyledContainerButton>
              <StyledButton variant={"outlined"}>отменить</StyledButton>
              <StyledBtn>сохранить</StyledBtn>
            </StyledContainerButton>
          </div>
        </StyledBoxContainer>
      </div>
    </StyledContainer>
  );
};

const StyledContainer = styled("div")(() => ({
  width: "100%",
  display: "flex",
  gap: "30px",
  flexDirection: "column",
  background: "#F5F5F5",
  height: "100vw",
  fontFamily: "Manrope",
  "& span": {
    fontSize: "22px",
    color: "#222222",
  },
}));
const StyledMain = styled("main")(() => ({
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
}));
const StyledBoxContainer = styled("section")(() => ({
  maxWidth: "1300px",
  background: "#fff",
  height: "fit-content",
  display: "flex",
  gap: "45px",
  boxShadow: "4px 4px 8px 0px rgba(34, 60, 80, 0.1)",
  padding: "40px",
}));
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
const StyledImage = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "6px",
  "& p": {
    fontSize: "12px",
    textAlign: "center",
    color: "#346EFB",
  },
}));
const StyledContainerImg = styled("div")(() => ({
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
}));
const StyledForm = styled("form")(() => ({
  display: "flex",
  gap: "20px",
}));
const StyledContainerLabelInput = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "4px",
  height: "61px",
  "& label": {
    color: "#464444",
    fontSize: "14px",
  },
}));
const StyledWrapper = styled("section")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
}));
const StyledIcons = styled("section")(() => ({
  display: "flex",
  gap: "80px",
  padding: "20px 50px",
}));
const StyledContainerIcons = styled("div")(() => ({
  maxWidth: "1000px",
  height: "791px",
  border: "1px solid #D9D9D9",
  "& hr": {
    border: "1px solid #D9D9D9",
  },
}));
const StyledList = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "50px",
  padding: "20px",
  "& p": {
    lineHeight: "25px",
    color: "#4D4E51",
  },
}));
const StyledContainerButton = styled("div")(() => ({
  display: "flex",
  justifyContent: "end",
  gap: "18px",
  padding: "68px 0px",
}));
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
