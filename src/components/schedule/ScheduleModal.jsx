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
  const defaultInterval = {
    start: { hour: 9, minute: 0 },
    end: { hour: 10, minute: 0 },
  };

  const initializeIntervals = () => {
    if (modalType !== "update") return [defaultInterval];

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
      : [defaultInterval];
  };

  const [intervals, setIntervals] = useState(initializeIntervals);

  const handleAddInterval = () => setIntervals([...intervals, defaultInterval]);
  const handleRemoveInterval = (index) =>
    setIntervals(intervals.filter((_, i) => i !== index));

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
        </WrapperList>
        <AddInterval onClick={handleAddInterval}>
          <Icons.Plus1 />
          <p>Добавить интервал</p>
        </AddInterval>
      </ContentWrapper>
      <ButtonContainer>
        <StyledButton variant="outlined" onClick={handleCloseModal}>
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
  width: "36.5625rem",
  padding: "1.25rem",
  fontFamily: "Manrope",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
});

const Title = styled("h2")({
  fontWeight: 500,
  fontSize: "1.5rem",
  margin: 0,
});

const ContentWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "1.125rem",
});

const ScheduleRow = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: "1.5rem",
});

const WrapperList = styled("div")({
  display: "flex",
  gap: "1.5rem",
  flexDirection: "column",
});

const TimePickerWrapper = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: "0.625rem",
});

const DetailRow = styled("div")({
  display: "flex",
  gap: "1.5625rem",
  "& span": { color: "#4D4E51" },
});

const DetailLabel = styled("p")({
  fontWeight: 600,
  fontSize: "0.875rem",
});

const AddInterval = styled("div")({
  display: "flex",
  gap: "0.375rem",
  cursor: "pointer",
  paddingLeft: "5.625rem",
  "& p": { color: "#048741", fontWeight: 500, fontSize: "0.875rem" },
});

const ButtonContainer = styled("section")({
  display: "flex",
  justifyContent: "center",
  gap: "1.125rem",
});

const StyledButton = styled(Button)({
  width: "15.1875rem",
  height: "2.4375rem",
  border: "1px solid #959595",
  color: "#959595",
});

const ActionButton = styled(Button)({
  width: "15.25rem",
  height: "2.4375rem",
  borderRadius: "0.625rem",
  backgroundColor: "#1F6ED4",
  color: "#fff",
  "&:hover": { backgroundColor: "#165ab1" },
});

const StyledText = styled("p")({
  fontWeight: 600,
  fontSize: "0.875rem",
  paddingTop: "0.4375rem",
});
