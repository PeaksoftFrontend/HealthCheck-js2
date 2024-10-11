import {
  Avatar,
  Paper,
  styled,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import dayjs from "dayjs";
import { useState } from "react";
import { doctors } from "../../utils/constants/constants";
import { Modal } from "../UI/modal/Modal";
import { ScheduleModal } from "./ScheduleModal";
import { Button } from "../UI/button/Button";
import { Datepicker } from "../UI/datePicker/DatePicker";

export const Schedule = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCell, setSelectedCell] = useState({ doctor: null, day: null });
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [selectedDoctorsId, setSelectedDoctorsId] = useState(null);
  const [modalType, setModalType] = useState("setTemplate");
  const [stateDoctors, setStateDoctors] = useState(doctors);
  const [selectedDateRange, setSelectedDateRange] = useState({
    startDate: dayjs().startOf("month"),
    endDate: dayjs().endOf("month"),
  });

  const handleOpenModal = (type) => {
    if (selectedCell.doctor && selectedCell.day) {
      setSelectedDoctor(selectedCell.doctor);
      setSelectedDoctorsId(selectedCell.dataId);
      setModalType(type);
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedDoctor(null);
    setSelectedCell({ doctor: null, day: null });
  };

  const getDatesInRange = (startDate, endDate) => {
    const dates = [];
    let current = dayjs(startDate);
    const end = dayjs(endDate);
    while (current.isBefore(end) || current.isSame(end)) {
      dates.push(current);
      current = current.add(1, "day");
    }
    return dates;
  };

  const renderScheduleCell = (specialist, day) => {
    const daySchedule = specialist.schedule.find(
      (item) => item.day === day.date()
    );

    return (
      <StyledCell
        key={day}
        onClick={() =>
          setSelectedCell({ dataId: specialist.id, doctor: specialist, day })
        }
        isSelected={
          selectedCell.doctor === specialist &&
          selectedCell.day?.date() === day.date()
        }
      >
        {daySchedule?.times.map((time, index) => (
          <div key={index}>
            <p>{time}</p>
          </div>
        ))}
      </StyledCell>
    );
  };

  return (
    <StyledContainer>
      <StyledBox>
        <section>
          <StyledButton
            variant="outlined"
            onClick={() => handleOpenModal("update")}
          >
            Изменить день
          </StyledButton>
          <StyledBtn
            variant="outlined"
            onClick={() => handleOpenModal("setTemplate")}
          >
            Установить по шаблону
          </StyledBtn>
        </section>

        <section>
          <Datepicker
            selectedDate={selectedDateRange.startDate}
            onDateChange={(date) =>
              setSelectedDateRange((prev) => ({ ...prev, startDate: date }))
            }
          />
          <p>-</p>
          <Datepicker
            selectedDate={selectedDateRange.endDate}
            onDateChange={(date) =>
              setSelectedDateRange((prev) => ({ ...prev, endDate: date }))
            }
          />
        </section>
      </StyledBox>

      <TableContainer component={Paper}>
        <StyledTable>
          <TableHead>
            <TableRow>
              <StyledHeader>СПЕЦИАЛИСТЫ</StyledHeader>
              {getDatesInRange(
                selectedDateRange.startDate,
                selectedDateRange.endDate
              ).map((day, index) => (
                <StyledHeaderCell key={index}>
                  <div>
                    <p>{day.format("dd").toUpperCase()}</p>
                    <p>{`${day.format("D")} ${
                      day.format("MMMM").charAt(0).toUpperCase() +
                      day.format("MMMM").slice(1)
                    }`}</p>
                  </div>
                </StyledHeaderCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {stateDoctors.map((specialist, index) => (
              <TableRow key={`${specialist.name}-${index}`}>
                <StyledBoxTableCell>
                  <Avatar alt={specialist.name} src={specialist.avatar} />
                  <a>{specialist.name}</a>
                  <p>{specialist.role}</p>
                </StyledBoxTableCell>
                {getDatesInRange(
                  selectedDateRange.startDate,
                  selectedDateRange.endDate
                ).map((day) => renderScheduleCell(specialist, day))}
              </TableRow>
            ))}
          </TableBody>
        </StyledTable>
      </TableContainer>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <ScheduleModal
          handleCloseModal={handleCloseModal}
          selectedDate={selectedCell.day}
          selectedDoctor={selectedDoctor}
          selectedDoctorsId={selectedDoctorsId}
          setStateDoctors={setStateDoctors}
          stateDoctors={stateDoctors}
          modalType={modalType}
          setPreviousModalType={setModalType}
        />
      </Modal>
    </StyledContainer>
  );
};

const StyledContainer = styled("div")({
  maxWidth: "100%",
  display: "flex",
  flexDirection: "column",
});

const StyledBox = styled("div")({
  maxWidth: "100%",
  height: "fit-content",
  display: "flex",
  justifyContent: "space-between",
  padding: "1.125rem 1.25rem",
  border: "1px solid #D9D9D9",
  "& section": {
    display: "flex",
    alignItems: "center",
    gap: "0.625rem",
    color: "#000000",
  },
});

const StyledButton = styled(Button)({
  width: "8.8125rem",
  height: "2.25rem",
  background: "#E0E2E7",
  border: "none",
  color: "#4D4E51",
  fontSize: "0.875rem",
  textTransform: "none",
  borderRadius: "0.25rem",
});

const StyledBtn = styled(Button)({
  width: "12.5rem",
  height: "2.25rem",
  background: "#E0E2E7",
  border: "none",
  color: "#4D4E51",
  fontSize: "0.875rem",
  textTransform: "none",
  borderRadius: "0.25rem",
});

const StyledTable = styled(Table)({
  minWidth: "40.625rem",
  borderCollapse: "collapse",
});

const StyledHeaderCell = styled(TableCell)({
  maxWidth: "6.625rem",
  height: "3.75rem",
  color: "#4D4E51",
  fontWeight: "600",
  border: "1px solid #e0e0e0",
  textAlign: "start",
  padding: "0.375rem 0.75rem",
  fontFamily: "Manrope",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
});

const StyledBoxTableCell = styled(TableCell)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  border: "1px solid #e0e0e0",
  fontFamily: "Manrope",
  width: "11.25rem",
  height: "9.375rem",
  "& a": {
    fontSize: "0.875rem",
    fontWeight: "500",
    color: "#222222",
    whiteSpace: "nowrap",
    textAlign: "center",
  },
  "& p": {
    fontSize: "0.75rem",
    color: "#959595",
  },
});

const StyledHeader = styled(TableCell)({
  width: "5rem",
  fontSize: "0.75rem",
  border: "1px solid #e0e0e0",
  textAlign: "center",
  padding: "0.75rem 0.875rem",
  fontWeight: "600",
  color: "#4D4E51",
  fontFamily: "Manrope",
});

const StyledCell = styled(({ ...rest }) => <TableCell {...rest} />)({
  height: "2.75rem",
  border: "1px solid #e0e0e0",
  padding: "0.5rem",
  fontStyle: "italic",
  cursor: "pointer",
  "&:active": {
    boxShadow: "0 0 5px rgb(0 0 0 / 0.1)",
  },
  "& div": {
    width: "5.625rem",
    height: "fit-content",
    backgroundColor: "#DBEBFF",
    borderLeft: "0.25rem solid #1F6ED4",
  },
  "& p": {
    lineHeight: "1.125rem",
    color: "#1F6ED4",
    fontFamily: "Open Sans",
    fontWeight: 500,
    fontSize: "0.75rem",
    margin: 0,
    textAlign: "center",
  },
});
