import { styled } from "@mui/material";
import Clinic from "../../assets/images/Clinic.png";
import Doctors from "../../assets/images/Doctors.png";
import Doctors2 from "../../assets/images/Doctors2.png";
import Doctors3 from "../../assets/images/Doctors3.png";

export const HealthCheckImages = () => {
  return (
    <StyledImages>
      <StyledImageClinic src={Clinic} alt="Clinic" />
      <StyledImg>
        <StyledImageDoctors src={Doctors} alt="Doctors" />
        <StyledImageDoctors src={Doctors2} alt="Doctors2" />
        <StyledImageDoctors src={Doctors3} alt="Doctors3" />
      </StyledImg>
    </StyledImages>
  );
};

const StyledImages = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "1.625rem",
}));

const StyledImageClinic = styled("img")(() => ({
  width: "36.625rem",
  height: "24.875rem",
  borderRadius: "0.5rem",
}));

const StyledImg = styled("section")(() => ({
  display: "flex",
  gap: "1.625rem",
}));

const StyledImageDoctors = styled("img")(() => ({
  width: "11.125rem",
  height: "7.5rem",
  borderRadius: "0.5rem",
}));
