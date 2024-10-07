import { useState } from "react";
import { styled } from "@mui/material/styles";
import { IconButton } from "@mui/material";
import { TimePicker } from "../UI/timePicker/TimePicker";
import { Icons } from "../../assets/icons";
import DeleteIcon from "@mui/icons-material/Close";
import { Button } from "../UI/button/Button";

export const ScheduleModal = ({
  selectedDate,
  selectedDoctor,
  selectedDoctorsId,
  setStateDoctors,
  stateDoctors,
  handleCloseModal,
  modalType,
}) => {
  const [intervals, setIntervals] = useState(() => {
    if (modalType === "update") {
      const doctor = stateDoctors.find((doc) => doc.id === selectedDoctorsId);
      const existingSchedule = doctor.schedule.find(
        (schedule) => schedule.day === selectedDate.date()
      );
      return (
        existingSchedule?.times.map((time) => {
          const [start, end] = time.split(" - ").map((t) => {
            const [hour, minute] = t.split(":").map(Number);
            return { hour, minute };
          });
          return { start, end };
        }) || [{ start: { hour: 0, minute: 0 }, end: { hour: 10, minute: 0 } }]
      );
    }
    return [{ start: { hour: 0, minute: 0 }, end: { hour: 0, minute: 0 } }];
  });

  const handleAddInterval = () => {
    setIntervals([
      ...intervals,
      { start: { hour: 9, minute: 0 }, end: { hour: 10, minute: 0 } },
    ]);
  };

  const handleRemoveInterval = (indexToRemove) => {
    setIntervals(intervals.filter((_, index) => index !== indexToRemove));
  };

  const handleTimeChange = (index, timeType, hour, minute) => {
    setIntervals((prevIntervals) => {
      const newIntervals = [...prevIntervals];
      newIntervals[index][timeType] = { hour, minute };
      return newIntervals;
    });
  };

  const addTimeToDoctors = () => {
    const res = stateDoctors.map((item) => {
      if (item.id === selectedDoctorsId) {
        return {
          ...item,
          schedule: [
            ...item.schedule.filter((s) => s.day !== selectedDate.date()),
            {
              day: selectedDate.date(),
              times: intervals.map(
                (interval) =>
                  `${interval.start.hour}:${String(interval.start.minute).padStart(2, "0")} - ${interval.end.hour}:${String(interval.end.minute).padStart(2, "0")}`
              ),
            },
          ],
        };
      }
      return item;
    });

    setStateDoctors(res);
    handleCloseModal(false);
  };

  const handleSaveTemplate = () => {
    addTimeToDoctors();
  };

  return (
    <StyledModalContainer>
      <StyledTitle>
        {modalType === "update" ? "Изменить шаблон" : "Установить шаблон"}
      </StyledTitle>
      <StyledWrapper>
        {modalType === "update" && (
          <>
            <StyledDepartment>
              <StyledText>
                Отделение <span>:</span>
              </StyledText>
              <span>{selectedDoctor ? selectedDoctor.role : ""}</span>
            </StyledDepartment>
            <StyledSpecialist>
              <StyledText>
                Специалист <span>:</span>
              </StyledText>
              <span>{selectedDoctor ? selectedDoctor.name : ""}</span>
            </StyledSpecialist>
            <StyledDate>
              <StyledText>Дата:</StyledText>
              <span>
                {selectedDate ? selectedDate.format("DD.MM.YYYY") : ""}
              </span>
            </StyledDate>
          </>
        )}

        <StyledSchedule>
          <StyledText>График:</StyledText>
          {intervals.map((interval, index) => (
            <StyledTimePicker key={index}>
              <TimePicker
                hourValue={interval.start.hour}
                minuteValue={interval.start.minute}
                onHourChange={(hour) =>
                  handleTimeChange(index, "start", hour, interval.start.minute)
                }
                onMinuteChange={(minute) =>
                  handleTimeChange(index, "start", interval.start.hour, minute)
                }
              />
              <span>-</span>
              <TimePicker
                hourValue={interval.end.hour}
                minuteValue={interval.end.minute}
                onHourChange={(hour) =>
                  handleTimeChange(index, "end", hour, interval.end.minute)
                }
                onMinuteChange={(minute) =>
                  handleTimeChange(index, "end", interval.end.hour, minute)
                }
              />
              {index > 0 && (
                <IconButton
                  onClick={() => handleRemoveInterval(index)}
                  aria-label="delete"
                  color="error"
                >
                  <DeleteIcon />
                </IconButton>
              )}
            </StyledTimePicker>
          ))}
        </StyledSchedule>

        <StyledInterval onClick={handleAddInterval}>
          <Icons.Plus1 />
          <p>Добавить интервал</p>
        </StyledInterval>
      </StyledWrapper>

      <StyledContainerButton>
        <StyledButton variant={"outlined"} onClick={handleCloseModal}>
          Отменить
        </StyledButton>
        <StyledBtn
          onClick={
            modalType === "update" ? addTimeToDoctors : handleSaveTemplate
          }
        >
          Сохранить
        </StyledBtn>
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
  padding: "20px",
}));

const StyledTitle = styled("h2")(() => ({
  fontWeight: 500,
  fontSize: "24px",
  margin: 0,
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
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "8px",
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
  backgroundColor: "#1F6ED4",
  color: "#fff",
  "&:hover": {
    backgroundColor: "#165ab1",
  },
}));
