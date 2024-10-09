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
  const getDefaultInterval = () => ({
    start: { hour: 9, minute: 0 },
    end: { hour: 10, minute: 0 },
  });

  const initializeIntervals = () => {
    if (modalType !== "update") return [getDefaultInterval()];
    const doctor = stateDoctors.find((doc) => doc.id === selectedDoctorsId);
    const schedule = doctor?.schedule.find(
      (s) => s.day === selectedDate.date()
    );
    return schedule
      ? schedule.times.map((time) => {
          const [start, end] = time
            .split(" - ")
            .map((t) => t.split(":").map(Number));
          return {
            start: { hour: start[0], minute: start[1] },
            end: { hour: end[0], minute: end[1] },
          };
        })
      : [getDefaultInterval()];
  };

  const [intervals, setIntervals] = useState(initializeIntervals);

  const handleAddInterval = () => {
    setIntervals([...intervals, getDefaultInterval()]);
  };

  const handleRemoveInterval = (index) => {
    setIntervals(intervals.filter((_, i) => i !== index));
  };

  const handleTimeChange = (index, type, hour, minute) => {
    setIntervals((prev) =>
      prev.map((interval, i) =>
        i === index ? { ...interval, [type]: { hour, minute } } : interval
      )
    );
  };

  const saveIntervals = () => {
    const updatedDoctors = stateDoctors.map((doctor) =>
      doctor.id === selectedDoctorsId
        ? {
            ...doctor,
            schedule: [
              ...doctor.schedule.filter((s) => s.day !== selectedDate.date()),
              {
                day: selectedDate.date(),
                times: intervals.map(
                  ({ start, end }) =>
                    `${start.hour}:${String(start.minute).padStart(2, "0")} - ${end.hour}:${String(end.minute).padStart(2, "0")}`
                ),
              },
            ],
          }
        : doctor
    );
    setStateDoctors(updatedDoctors);
    handleCloseModal(false);
  };

  return (
    <ModalContainer>
      <Title>
        {modalType === "update" ? "Изменить шаблон" : "Установить шаблон"}
      </Title>
      <ContentWrapper>
        {modalType === "update" && (
          <>
            <Detail label="Отделение" value={selectedDoctor?.role || ""} />
            <Detail label="Специалист" value={selectedDoctor?.name || ""} />
            <Detail
              label="Дата"
              value={selectedDate?.format("DD.MM.YYYY") || ""}
            />
          </>
        )}

        <WrapperList>
          <StyledText>График:</StyledText>
          <ContentWrapper>
            {intervals.map((interval, index) => (
              <ScheduleRow key={index}>
                <TimePickerBlock
                  interval={interval}
                  index={index}
                  onTimeChange={handleTimeChange}
                  onRemove={handleRemoveInterval}
                  removable={index > 0}
                />
              </ScheduleRow>
            ))}
          </ContentWrapper>
        </WrapperList>
        <AddInterval onClick={handleAddInterval}>
          <Icons.Plus1 />
          <p>Добавить интервал</p>
        </AddInterval>
      </ContentWrapper>
      <ButtonContainer>
        <StyledButton variant={"outlined"} onClick={handleCloseModal}>
          Отменить
        </StyledButton>
        <ActionButton onClick={saveIntervals}>Сохранить</ActionButton>
      </ButtonContainer>
    </ModalContainer>
  );
};

const TimePickerBlock = ({
  interval,
  index,
  onTimeChange,
  onRemove,
  removable,
}) => (
  <TimePickerWrapper>
    <TimePicker
      hourValue={interval.start.hour}
      minuteValue={interval.start.minute}
      onHourChange={(hour) =>
        onTimeChange(index, "start", hour, interval.start.minute)
      }
      onMinuteChange={(minute) =>
        onTimeChange(index, "start", interval.start.hour, minute)
      }
    />
    <span>-</span>
    <TimePicker
      hourValue={interval.end.hour}
      minuteValue={interval.end.minute}
      onHourChange={(hour) =>
        onTimeChange(index, "end", hour, interval.end.minute)
      }
      onMinuteChange={(minute) =>
        onTimeChange(index, "end", interval.end.hour, minute)
      }
    />
    {removable && (
      <IconButton
        onClick={() => onRemove(index)}
        aria-label="delete"
        color="error"
      >
        <DeleteIcon />
      </IconButton>
    )}
  </TimePickerWrapper>
);

const Detail = ({ label, value }) => (
  <DetailRow>
    <DetailLabel>{label}</DetailLabel>
    <span>{value}</span>
  </DetailRow>
);

const ModalContainer = styled("div")({
  width: "585px",
  padding: "20px",
  fontFamily: "Manrope",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  gap: "32px",
});

const Title = styled("h2")({
  fontWeight: 500,
  fontSize: "24px",
  margin: 0,
});

const ContentWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "18px",
});

const ScheduleRow = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: "24px",
});

const WrapperList = styled("div")({
  display: "flex",
  gap: "24px",
});

const TimePickerWrapper = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: "10px",
});

const DetailRow = styled("div")({
  display: "flex",
  gap: "25px",
  "& span": { color: "#4D4E51" },
});

const DetailLabel = styled("p")({
  fontWeight: 600,
  fontSize: "14px",
});

const AddInterval = styled("div")({
  display: "flex",
  gap: "6px",
  cursor: "pointer",
  paddingLeft: "90px",
  "& p": { color: "#048741", fontWeight: 500, fontSize: "14px" },
});

const ButtonContainer = styled("section")({
  display: "flex",
  justifyContent: "center",
  gap: "18px",
});
const StyledButton = styled(Button)(() => ({
  width: "243px",
  height: "39px",
  border: "1px solid #959595",
  color: "#959595",
}));

const ActionButton = styled(Button)({
  width: "244px",
  height: "39px",
  borderRadius: "10px",
  backgroundColor: "#1F6ED4",
  color: "#fff",
  "&:hover": { backgroundColor: "#165ab1" },
});

const StyledText = styled("p")(() => ({
  fontWeight: "600",
  fontSize: "14px",
  paddingTop: "7px",
}));
