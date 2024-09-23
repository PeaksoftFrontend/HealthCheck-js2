import { styled } from "@mui/material";
import { doctors } from "../../utils/constants/general";
import { DoctorsItem } from "./DoctorsItem";
import { Button } from "../UI/button/Button";

export const Doctors = () => {
  return (
    <StyledContainer>
      <section>
        <h2>
          Лучшие <span>врачи</span>
        </h2>
        <div>
          <p>Попасть в команду медицинской клиники «MedCheck» могут</p>
          <p>
            только лучшие специалисты с многолетней практикой и доказанным
            опытом.
          </p>
        </div>
      </section>
      <StyledContainerItem>
        <StyledContainerImage>
          {doctors.map((item) => (
            <DoctorsItem key={item.id} {...item} />
          ))}
        </StyledContainerImage>
        <StyledButton variant={"outlined"}>
          <span>В </span>се врачи клиники
        </StyledButton>
      </StyledContainerItem>
    </StyledContainer>
  );
};
const StyledButton = styled(Button)(() => ({
  width: "200px",
  height: "42px",
  textTransform: "lowercase",
  margin: "0 auto",
  "& span": {
    textTransform: "uppercase",
  },
}));

const StyledContainerImage = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "30px",
}));
const StyledContainer = styled("div")(() => ({
  height: "555px",
  display: "flex",
  flexDirection: "column",
  gap: "60px",
  fontFamily: "Manrope",

  "& section": {
    paddingLeft: "120px",
    display: "flex",
    flexDirection: "column",
    gap: "36px",

    "& h2": {
      fontSize: "36px",
    },
    "& span": {
      color: "#048741",
    },
    "& div": {
      display: "flex",
      flexDirection: "column",
      gap: "2px",
    },
  },
}));
const StyledContainerItem = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "40px",
}));
