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
  const initialStartDate = dayjs().startOf("month");
  const initialEndDate = dayjs().endOf("month");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [selectedDateRange, setSelectedDateRange] = useState({
    startDate: initialStartDate,
    endDate: initialEndDate,
  });
  const [selectedDoctorsId, setSelectedDoctorsId] = useState(null);
  const [selectedCell, setSelectedCell] = useState({ doctor: null, day: null });
  const [stateDoctors, setStateDoctors] = useState(doctors);
  const [modalType, setModalType] = useState("setTemplate");

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
    setSelectedCell({ doctor: null, day: null, dataId: null });
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
    const dayNumber = day.date();
    const daySchedule = specialist.schedule.find(
      (item) => item.day === dayNumber
    );

    return (
      <StyledCell
        key={day}
        onClick={() => {
          setSelectedCell({
            dataId: specialist.id,
            doctor: specialist,
            day: day,
          });
        }}
        isSelected={
          selectedCell.doctor === specialist &&
          selectedCell.day?.date() === dayNumber
        }
      >
        {daySchedule
          ? daySchedule.times.map((time, timeIndex) => (
              <div key={timeIndex}>
                <p>{time}</p>
              </div>
            ))
          : null}
      </StyledCell>
    );
  };

  return (
    <StyledContainer>
      <StyledBox>
        <section>
          <StyledButton
            variant={"outlined"}
            onClick={() => handleOpenModal("update")}
          >
            Изменить день
          </StyledButton>
          <StyledBtn
            variant={"outlined"}
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
              {selectedDateRange.startDate &&
                selectedDateRange.endDate &&
                getDatesInRange(
                  selectedDateRange.startDate,
                  selectedDateRange.endDate
                ).map((day, index) => (
                  <StyledHeaderCell key={index}>
                    <div>
                      <p>{day.format("dd").toUpperCase()}</p>{" "}
                      <p>
                        {day.format("D")}{" "}
                        {day.format("MMMM").charAt(0).toUpperCase() +
                          day.format("MMMM").slice(1)}
                      </p>{" "}
                    </div>
                  </StyledHeaderCell>
                ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {stateDoctors?.map((specialist, index) => (
              <TableRow key={`${specialist.name}-${index}`}>
                <StyledBoxTableCell>
                  <Avatar alt={specialist.name} src={specialist.avatar} />
                  <a>{specialist.name}</a>
                  <p>{specialist.role}</p>
                </StyledBoxTableCell>
                {selectedDateRange.startDate &&
                  selectedDateRange.endDate &&
                  getDatesInRange(
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

const StyledContainer = styled("div")(() => ({
  maxWidth: "100%",
  display: "flex",
  flexDirection: "column",
}));

const StyledBox = styled("div")(() => ({
  maxWidth: "100%",
  height: "fit-content",
  display: "flex",
  justifyContent: "space-between",
  padding: "18px 20px",
  border: "1px solid #D9D9D9",
  "& section": {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    color: "#000000",
  },
}));

const StyledButton = styled(Button)(() => ({
  width: "141px",
  height: "36px",
  background: "#E0E2E7",
  border: "none",
  color: "#4D4E51",
  fontSize: "14px",
  textTransform: "none",
  borderRadius: "4px",
}));

const StyledBtn = styled(Button)(() => ({
  width: "200px",
  height: "36px",
  background: "#E0E2E7",
  border: "none",
  color: "#4D4E51",
  fontSize: "14px",
  textTransform: "none",
  borderRadius: "4px",
}));

const StyledTable = styled(Table)(() => ({
  minWidth: "650px",
  borderCollapse: "collapse",
}));

const StyledHeaderCell = styled(TableCell)(() => ({
  maxWidth: "106px",
  height: "60px",
  color: "#4D4E51",
  fontWeight: "600",
  border: "1px solid #e0e0e0",
  textAlign: "start",
  padding: "6px 12px",
  fontFamily: "Manrope",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
}));

const StyledBoxTableCell = styled(TableCell)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  border: "1px solid #e0e0e0",
  fontFamily: "Manrope",
  width: "180px",
  height: "150px",
  "& a": {
    fontSize: "14px",
    fontWeight: "500",
    color: "#222222",
    whiteSpace: "nowrap",
    textAlign: "center",
  },
  "& p": {
    fontSize: "12px",
    color: "#959595",
  },
}));

const StyledHeader = styled(TableCell)(() => ({
  width: "80px",
  fontSize: "12px",
  border: "1px solid #e0e0e0",
  textAlign: "center",
  padding: "12px 14px",
  fontWeight: "600",
  color: "#4D4E51",
  fontFamily: "Manrope",
}));

const StyledCell = styled(({ ...rest }) => <TableCell {...rest} />)(() => ({
  height: "44px",
  border: "1px solid #e0e0e0",
  padding: "8px",
  fontStyle: "italic",
  cursor: "pointer",
  "&:active": {
    boxShadow: "0 0 5px rgb(0 0 0 /0.1)",
  },
  "& div": {
    width: "90px",
    height: "fit-content",
    backgroundColor: "#DBEBFF",
    borderLeft: "4px solid #1F6ED4",
  },
  "& p": {
    lineHeight: "18px",
    color: "#1F6ED4",
    fontFamily: "Open Sans",
    fontWeight: 500,
    fontSize: "12px",
    margin: 0,
    textAlign: "center",
  },
}));
