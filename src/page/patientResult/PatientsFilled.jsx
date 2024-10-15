import { styled } from "@mui/material";
import { Icons } from "../../assets/icons";

export const PatientsFilled = () => {
  const array = [
    {
      label: "Имя",
      title: "Айназик",
    },
    {
      label: "Фамилия",
      title: "Бакытова",
    },
    {
      label: "Email",
      title: "ainazik@gmail.com",
    },
    {
      label: "Номер телефона",
      title: "+996 707 123 456",
    },
  ];
  return (
    <StyledDiv>
      <article>
        <h3>Айназик Бакытова</h3>
      </article>
      <ContainerDiv>
        <FirstBlock>
          <SectionContainer>
            <h1>Айназик Бакытова</h1>
            {array.map((item) => (
              <div>
                <p>{item.label}</p>
                <h4>{item.title}</h4>
              </div>
            ))}
          </SectionContainer>
          <StyledContainerDiv>
            <ContainerList>
              <h4>Услуга</h4>
              <div>
                <p>Услуга</p>
                <p>Витамин Д</p>
                <p>Белок общий (R)</p>
                <p>Глюкоза</p>
                <p>Инсулин</p>
                <p>Калций общий</p>
              </div>
            </ContainerList>
            <ContainerList>
              <h4>Дата и время:</h4>
              <div>
                <p>12.12.2023</p>
                <p className="text">15:15</p>
              </div>
            </ContainerList>
            <ContainerList>
              <h4>Номер заказа:</h4>
              <div>
                <p>2564h89r9654a5698742</p>
              </div>
            </ContainerList>
            <div className="containerList">
              <h4>Загруженный файл</h4>
              <div>
                <StyledFile />
              </div>
            </div>
          </StyledContainerDiv>
        </FirstBlock>
      </ContainerDiv>
    </StyledDiv>
  );
};
const StyledDiv = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  gap: "32.5px",
  "& article": {
    display: "flex",
    justifyContent: "space-between",
    width: "81.25rem",
    alignItems: "center",
    "& button": {
      width: "242px",
      fontWeight: "300",
      display: "flex",
      gap: "12.7px",
      padding: "10px 14px 10px 6px",
    },
  },
}));
const ContainerDiv = styled("div")(() => ({
  width: "81.25rem",
  height: "85.875rem",
  background: "#F5F5F5",
  padding: "20px",
  borderRadius: "6px",
  "& section": {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    "& p": {
      fontSize: "14px",
      fontWeight: "400",
    },
    "& h4": {
      fontSize: "16px",
      fontWeight: "400",
    },
    "& h1": {
      fontSize: "20px",
      fontWeight: "500",
    },
  },
}));

const SectionContainer = styled("section")(() => ({
  width: "289px",
}));

const StyledContainerDiv = styled("div")(() => ({
  width: "928px",
  height: "200px",
  background: "#DBEBFF",
  borderRadius: "8px",
  display: "flex",
  justifyContent: "space-around",
  padding: "28px 40px",
  "& .containerList": {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "12px",
    "& h4": {
      fontSize: "16px",
      fontWeight: "500",
    },
  },
}));

const FirstBlock = styled("div")(() => ({
  display: "flex",
  width: "81.25rem",
  alignItems: "center",
  gap: "20px",
}));

const ContainerList = styled("div")(() => ({
  width: "126px",
  height: "fit-content",
  display: "flex",
  flexDirection: "column",
  gap: "12px",

  "& h4": {
    fontSize: "16px",
    fontWeight: "500",
  },
  "& p": {
    fontSize: "14px",
    fontWeight: "400",
  },
  "& .text": {
    color: "#4D4E51",
  },
}));

const StyledFile = styled(Icons.Fille)(() => ({
  background: "#FFFFFF",
  width: "32px",
  height: "32px",
  borderRadius: "4px",
  padding: "5px",
  path: {
    fill: "#346EFB",
  },
  "&:hover": {
    background: "#346EFB",
    path: {
      fill: "#FFFFFF",
    },
  },
  "&:active": {
    background: "#2B68FD",
    path: {
      fill: "#FFFFFF",
    },
  },
}));
