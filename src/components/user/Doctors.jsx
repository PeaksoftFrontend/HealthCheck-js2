import { Doctor } from "../../page/doctors/Doctor";
import { Footer } from "../landingPage/Footer";
import { styled } from "@mui/material";

export const Doctors = () => {
  return (
    <StyledDiv>
      <Doctor />
      <Footer />
    </StyledDiv>
  );
};
const StyledDiv = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "120px",
});
