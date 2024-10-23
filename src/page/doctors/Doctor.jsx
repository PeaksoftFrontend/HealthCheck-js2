import { styled } from "@mui/material";
import { DoctorsList } from "./DoctorsList";

export const Doctor = () => {
  return (
    <StyledContainer>
      <StyleDiv>
        <h1>
          Наши <span>врачи</span>
        </h1>
        <div className="container_box">
          <p>
            Попасть в команду медицинской клиники «Medical Clinic» могут только
            лучшие специалисты с многолетней практикой и доказанным опытом.
          </p>
          <p className="text">
            Мы развиваемся, учимся и оттачиваем мастерство, стажируемся в
            ведущих университетах Европы, чтобы еще на шаг стать ближе к
            совершенству.
          </p>
        </div>
      </StyleDiv>
      <StyledBox>
        <div className="box">
          <h1>Хирургия</h1>
          <DoctorsList statusFilter={"Хирургия"} />
        </div>
        <div className="box">
          <h1>Кардиологи</h1>
          <DoctorsList statusFilter={"Кардиологи"} />
        </div>
      </StyledBox>
    </StyledContainer>
  );
};
const StyledContainer = styled("div")({
  marginLeft: "120px",
  display: "flex",
  flexDirection: "column",
  gap: "60px",
});
const StyleDiv = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "34px",
  "& h1": {
    fontWight: "600",
    fontSize: "36px",
    "& span": {
      color: "#048741",
    },
  },
  "& .container_box": {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    width: "100%",
    "& p": {
      fontSize: "19px",
      fontWight: "400",
      width: "664px",
    },
    "& .text": {
      width: "852px",
    },
  },
});

const StyledBox = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "80px",
  "& .box": {
    display: "flex",
    flexDirection: "column",
    gap: "30px",
    "& h1": {
      fontSize: "24px",
      fontWight: "600",
    },
  },
});
