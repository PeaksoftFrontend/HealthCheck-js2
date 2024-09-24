import { styled } from "@mui/material";
import { doctors } from "../../utils/constants/general";
import { DoctorsItem } from "./DoctorsItem";
import { Button } from "../UI/button/Button";

export const Doctors = () => {
  return (
    <StyledContainer>
      <StyledBox>
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
      </StyledBox>
    </StyledContainer>
  );
};

const StyledButton = styled(Button)(() => ({
  width: "12.5rem",
  height: "2.625rem",
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
  gap: "1.875rem",
}));

const StyledContainer = styled("div")(() => ({
  paddingBottom: "120px",

  "& section": {
    display: "flex",
    flexDirection: "column",
    gap: "2.25rem",

    "& h2": {
      fontSize: "2.25rem",
    },
    "& span": {
      color: "#048741",
    },
    "& div": {
      display: "flex",
      flexDirection: "column",
      gap: "0.125rem",
    },
  },
}));

const StyledBox = styled("div")(() => ({
  maxWidth: "1300px",
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  gap: "60px",
}));

const StyledContainerItem = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "2.5rem",
}));
