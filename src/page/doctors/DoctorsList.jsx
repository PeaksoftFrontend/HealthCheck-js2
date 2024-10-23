import { styled } from "@mui/material";
import { useState } from "react";
import { Button } from "../../components/UI/button/Button";
import { DOCTORS } from "../../utils/helpers";

export const DoctorsList = ({ statusFilter }) => {
  const [showAll, setShowAll] = useState(false);

  const filteredDoctors = DOCTORS.filter(
    (doctor) => doctor.status === statusFilter
  );

  const doctorsToShow = showAll ? filteredDoctors : filteredDoctors.slice(0, 6);

  return (
    <ContainerDiv>
      <div className="second_Box">
        {doctorsToShow.map((item) => (
          <StyledDiv key={item.id}>
            <div className="container">
              <img src={item.image} alt="doctor" />
            </div>
            <div className="first_box">
              <h3>{item.name}</h3>
              <p>{item.title}</p>
            </div>
            <Button variant={"outlined"}>Записаться на прием</Button>
          </StyledDiv>
        ))}
      </div>
      {filteredDoctors.length > 6 && !showAll && (
        <h4 onClick={() => setShowAll(true)}>Показать больше</h4>
      )}
    </ContainerDiv>
  );
};

const ContainerDiv = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  "& .second_Box": {
    display: "flex",
    flexWrap: "wrap",
    gap: "60px 55px",
    width: "100%",
    justifyContent: "start",
  },
});

const StyledDiv = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  "& img": {
    width: "279px",
    height: "335px",
  },
  "& button": {
    width: "204px",
    fontSize: "13px",
    fontWeight: "500",
  },
  "& .first_box": {
    "& h3": {
      fontSize: "18px",
      fontWeight: "500",
    },
    "& p": {
      fontSize: "16px",
      fontWeight: "500",
      color: "#959595",
    },
  },
  "& .container": {
    background: "radial-gradient(circle, #FDFDFD, #E4E7EE)",
    width: "319px",
    height: "349px",
    display: "flex",
    alignItems: "flex-end",
    borderRadius: "4px",
    justifyContent: "center",
  },
});
