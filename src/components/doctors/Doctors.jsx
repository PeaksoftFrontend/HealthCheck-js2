import { styled } from "@mui/material";
import { doctors } from "../../utils/constants/general";
import { DoctorsItem } from "./DoctorsItem";

export const Doctors = () => {
  return (
    <StyledContainer>
      <section>
        <h2>Лучшие врачи</h2>
        <div>
          <p>Попасть в команду медицинской клиники «MedCheck» могут</p>
          <p>
            {" "}
            только лучшие специалисты с многолетней практикой и доказанным
            опытом.
          </p>
        </div>
      </section>
      <div>
        {doctors.map((item) => (
          <DoctorsItem key={item.id} {...item} />
        ))}
      </div>
    </StyledContainer>
  );
};
const StyledContainer = styled("div")(() => ({
  //   width: "80%",
  //   margin: "0 auto",
  //   display: "flex",
  //   flexDirection: "column",
  //   gap: "40px",
  //   "& section": {
  //     display: "flex",
  //     flexDirection: "column",
  //     gap: "36px",
  //   },
}));
