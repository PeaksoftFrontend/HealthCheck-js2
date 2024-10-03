import { useState } from "react";
import { styled } from "@mui/material";
import { IconButton } from "@mui/material";
import { TimePicker } from "../UI/timePicker/TimePicker";
import { Icons } from "../../assets/icons";
import DeleteIcon from "@mui/icons-material/Close";
import { Button } from "../UI/button/Button";

export const ScheduleModal = ({ selectedDate }) => {
  const [intervals, setIntervals] = useState([1]);

  const handleAddInterval = () => {
    setIntervals([...intervals, intervals.length + 1]);
  };

  const handleRemoveInterval = (indexToRemove) => {
    setIntervals(intervals.filter((_, index) => index !== indexToRemove));
  };

  return (
    <StyledModalContainer>
      <a>Изменить шаблон</a>
      <StyledWrapper>
        <StyledDepartment>
          <StyledText>
            Отделение <span>:</span>{" "}
          </StyledText>
          <span>Врач-хирург</span>
        </StyledDepartment>
        <StyledSpecialist>
          <StyledText>
            Специалист <span>:</span>{" "}
          </StyledText>
          <span>Гаталуский Артур</span>
        </StyledSpecialist>
        <StyledDate>
          <StyledText>Дата:</StyledText>
          <span>{selectedDate ? selectedDate.format("DD.MM.YYYY") : {}}</span>
        </StyledDate>

        {intervals.map((interval, index) => (
          <StyledSchedule key={interval}>
            <StyledText>График:</StyledText>
            <StyledTimePicker>
              <TimePicker />
              <span>-</span>
              <TimePicker />
              {index > 0 && (
                <IconButton
                  onClick={() => handleRemoveInterval(index)}
                  aria-label="delete"
                  color="error"
                  sx={{
                    "&:hover": {
                      backgroundColor: "transparent",
                    },
                  }}
                >
                  <DeleteIcon />
                </IconButton>
              )}
            </StyledTimePicker>
          </StyledSchedule>
        ))}

        <StyledInterval onClick={handleAddInterval}>
          <Icons.Plus1 />
          <p>Добавить интервал</p>
        </StyledInterval>
      </StyledWrapper>

      <StyledContainerButton>
        <StyledButton variant={"outlined"}>Отменить</StyledButton>
        <StyledBtn>Сохранить</StyledBtn>
      </StyledContainerButton>
    </StyledModalContainer>
  );
};

const StyledModalContainer = styled("div")(() => ({
  width: "585px",
  height: "fit-content",
  fontFamily: "Manrope",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  gap: "32px",

  "& a": {
    fontWeight: 500,
    fontSize: "24px",
  },
}));

const StyledWrapper = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "18px",
}));

const StyledDepartment = styled("div")(() => ({
  display: "flex",
  gap: "25px",
  paddingLeft: "30px",
  "& span": {
    color: "#4D4E51",
  },
}));

const StyledSpecialist = styled("div")(() => ({
  display: "flex",
  gap: "25px",
  paddingLeft: "15px",
  "& span": {
    color: "#4D4E51",
  },
}));

const StyledDate = styled("div")(() => ({
  display: "flex",
  gap: "25px",
  paddingLeft: "70px",
  "& span": {
    color: "#4D4E51",
  },
}));

const StyledText = styled("p")(() => ({
  fontWeight: 600,
  fontSize: "14px",
}));

const StyledTimePicker = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
}));

const StyledSchedule = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  gap: "24px",
  paddingLeft: "45px",
}));

const StyledInterval = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  gap: "6px",
  paddingLeft: "140px",
  cursor: "pointer",
  "& p": {
    color: "#048741",
    fontWeight: 500,
    fontSize: "14px",
  },
}));

const StyledContainerButton = styled("section")(() => ({
  display: "flex",
  justifyContent: "center",
  gap: "18px",
  padding: "5px",
}));

const StyledButton = styled(Button)(() => ({
  width: "243px",
  height: "39px",
  borderRadius: "8px",
  border: "1px solid #959595",
  color: "#959595",
}));

const StyledBtn = styled(Button)(() => ({
  width: "244px",
  height: "39px",
  borderRadius: "10px",
}));
