import { styled } from "@mui/material";
import { Icons } from "../../assets/icons";
import { HealthCheckImages } from "./HealthCheckImages";

export const HealthCheck = () => {
  return (
    <StyledContainer>
      <a>
        О нашей клинике
        <span>“HealthCheck”</span>
      </a>
      <StyledWrapper>
        <StyledContinerText>
          <p>
            Вся наша команда готова обеспечить вам медицинский уход и заботу на
            самом высоком уровне. Наша главная задача — оказать Вам теплый прием
            и обеспечить самый лучший медицинский уход. У нас Вы в хороших
            руках! В нашей клинике используются только качественные материалы и
            проверенные технологии. Для каждого клиента специалисты нашей
            клиники разработают индивидуальный план лечения, подробно
            рассказывая о каждом этапе.
          </p>
          <p>
            Доброжелательность и уважительное отношение к пациентам, не только
            материальная, но и моральная ответственность за результаты лечения —
            все это взято за основу политики Medical Clinic. Профессионализм и
            высокое качество оказываемых услуг помогают нам привлечь пациентов
            которые рекомендуют нас своим родным и близким.
          </p>
          <p>
            Уже 20 лет мы работаем на уровне лучших мировых стандартов, внедряя
            и развивая передовые методы лечения для сохранения здоровья наших
            пациентов.
          </p>
          <span>Читать подробнее о клинике {<Icons.Detail />}</span>
        </StyledContinerText>
        <div>
          <HealthCheckImages />
        </div>
      </StyledWrapper>
    </StyledContainer>
  );
};

const StyledContainer = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "60px",
  fontFamily: "Manrope",

  " & a": {
    fontSize: "36px",
    fontWeight: "600",
    paddingLeft: "125px",

    "& span": {
      color: "#048741",
    },
  },
}));

const StyledWrapper = styled("div")(() => ({
  display: "flex",
  justifyContent: "space-evenly",
}));
const StyledContinerText = styled("section")(() => ({
  width: "515px",
  height: "546px",
  display: "flex",
  flexDirection: "column",
  gap: "30px",
  "& p": {
    lineHeight: "25.6px",
  },
  "& span": {
    fontFamily: "Manrope",
    color: "#048741",
  },
}));
