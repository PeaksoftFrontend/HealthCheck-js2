import { styled } from "@mui/material";
import Signature from "../../assets/images/signature.png";
import Doctors from "../../assets/images/Doctors4.png";
import { Button } from "../../components/UI/button/Button";
import Clinic from "../../assets/images/Clinic.png";
import FirstDoctors from "../../assets/images/Doctors.png";
import SecondDoctors from "../../assets/images/Doctors2.png";
import Restangle from "../../assets/images/Rectangle.png";
export const AboutTheClinic = () => {
  return (
    <Box_main>
      <MainContainer>
        <h1>
          Здоровье — <span> самое ценное в жизни</span>
        </h1>
        <ContainerDiv>
          <div className="Container_box">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </p>
            <img src={Signature} alt="" />
          </div>
          <div className="image_box">
            <div className="containerDiv">
              <img src={Doctors} alt="" />
            </div>
          </div>
        </ContainerDiv>
        <BoxTitle>
          <p>Руководитель клиники Medical Clinic</p>
          <h4>Аниса Михаилова</h4>
        </BoxTitle>
      </MainContainer>

      <StyledDiv>
        <h1>
          О нашей клинике <span>“MedCheck”</span>
        </h1>
        <div className="third_box">
          <div className="container">
            <p>
              Вся наша команда готова обеспечить вам медицинский уход и заботу
              на самом высоком уровне. Наша главная задача — оказать Вам теплый
              прием и обеспечить самый лучший медицинский уход. У нас Вы в
              хороших руках! В нашей клинике используются только качественные
              материалы и проверенные технологии. Для каждого клиента
              специалисты нашей клиники разработают индивидуальный план лечения,
              подробно рассказывая о каждом этапе.
            </p>
            <p>
              Доброжелательность и уважительное отношение к пациентам, не только
              материальная, нo и моральная ответственность за результаты лечения
              — все это взято за основу политики Medical Clinic. Профессионализм
              и высокое качество оказываемых услуг помогают нам привлечь
              пациентов которые рекомендуют нас своим родным и близким.
            </p>
            <p>
              Уже 20 лет мы работаем на уровне лучших мировых стандартов,
              внедряя и развивая передовые методы лечения для сохранения
              здоровья наших пациентов.
            </p>
            <Button variant={"outlined"}>Записаться на консультацию</Button>
          </div>
          <div className="second_box">
            <img className="first_image" src={Clinic} alt="" />
            <div className="box">
              <img className="second_image" src={FirstDoctors} alt="" />
              <img className="second_image" src={SecondDoctors} alt="" />
              <img className="second_image" src={Restangle} alt="" />
            </div>
          </div>
        </div>
      </StyledDiv>
    </Box_main>
  );
};
const ContainerDiv = styled("div")({
  width: "1359px",
  height: "517px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  "& .Container_box": {
    width: "585px",
    height: "411px",
    display: "flex",
    flexDirection: "column",
    alignItems: "end",
    gap: "26px",
  },
  "& .image_box": {
    width: "596px",
    height: "385.84px",
    border: "1px solid #029847",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    paddingLeft: "34px",

    "& .containerDiv": {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    "& img": {
      width: "359.44px",
      height: "438px",
    },
  },
});
const StyledDiv = styled("div")({
  width: "1200px",
  height: "655px",
  display: "flex",
  flexDirection: "column",
  gap: "40px",
  "& span": {
    color: "#048741",
  },
  "& .third_box": {
    display: "flex",
    justifyContent: "space-between",
  },
  "& .container": {
    width: "513px",
    display: "flex",
    flexDirection: "column",
    gap: "40px",
    "& button": {
      width: "263px",
      fontSize: "13px",
      fontWeight: "500",
      padding: "0",
      height: "42px",
    },
  },
  "& .second_box": {
    display: "flex",
    flexDirection: "column",
    gap: "26px",
    "& .box": {
      display: "flex",
      gap: "26px",
    },
    "& .first_image": {
      width: "586px",
      height: "398px",
      borderRadius: "8px",
    },
    "& .second_image": {
      width: "178px",
      height: "120px",
    },
  },
});
const BoxTitle = styled("article")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginRight: "225px",
  "& p": {
    color: "#029847",
    fontSize: "18px",
    fontWeight: "400",
  },
  "& h4": {
    fontSize: "22px",
    fontWeight: "400",
  },
});
const MainContainer = styled("div")({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "end",
  "& h1": {
    width: "1359px",
    "& span": {
      color: "#048741 ",
    },
  },
});

const Box_main = styled("div")({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "80px",
});
