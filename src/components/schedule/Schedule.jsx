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

import { Button } from "../UI/button/Button";
import { Datepicker } from "../UI/datePicker/DatePicker";
import { days, doctors } from "../../utils/constants/constants";
import { useState } from "react";
import { Modal } from "../UI/modal/Modal";
import { SampleModal } from "./SampleModal";
import { ScheduleModal } from "./ScheduleModal";

export const Schedule = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);

  const handleOpenModal = (type, date = null) => {
    setSelectedDate(date);
    setModalType(type);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalType(null);
  };

  return (
    <StyledContainer>
      <StyledBox>
        <section>
          <StyledButton
            variant={"outlined"}
            onClick={() => handleOpenModal("schedule", dayjs())}
          >
            Изменить день
          </StyledButton>

          <StyledBtn
            variant={"outlined"}
            onClick={() => handleOpenModal("sample")}
          >
            Установить по шаблону
          </StyledBtn>
        </section>
        <section>
          <Datepicker />
          <p>-</p>
          <Datepicker />
        </section>
      </StyledBox>

      <TableContainer component={Paper}>
        <StyledTable>
          <TableHead>
            <TableRow>
              <StyledHeader>СПЕЦИАЛИСТЫ</StyledHeader>
              {days.map((day, index) => (
                <StyledHeaderCell colSpan={2} key={index}>
                  <p>{day.split(" ")[0]}</p>
                  <p>
                    {day.split(" ")[1]} {day.split(" ")[2]}
                  </p>
                </StyledHeaderCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {doctors.map((specialist, index) => (
              <TableRow key={`${specialist.name}-${index}`}>
                <StyledBoxTableCell>
                  <Avatar alt={specialist.name} src={specialist.avatar} />
                  <a>{specialist.name}</a>
                  <p>{specialist.role}</p>
                </StyledBoxTableCell>
              </TableRow>
            ))}
          </TableBody>
        </StyledTable>
      </TableContainer>

      <Modal
        isOpen={isModalOpen && modalType === "sample"}
        onClose={handleCloseModal}
      >
        <SampleModal />
      </Modal>

      <Modal
        isOpen={isModalOpen && modalType === "schedule"}
        onClose={handleCloseModal}
      >
        <ScheduleModal selectedDate={selectedDate} />
      </Modal>
    </StyledContainer>
  );
};

const StyledContainer = styled("div")(() => ({
  maxWidth: "1350px",
  display: "flex",
  flexDirection: "column",
}));

const StyledBox = styled("div")(() => ({
  maxWidth: "1350px",
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
  minWidth: 650,
}));

const StyledHeaderCell = styled(TableCell)(() => ({
  width: "106px",
  height: "44px",
  color: "#4D4E51",
  fontWeight: "600",
  border: "1px solid #e0e0e0",
  textAlign: "start",
  padding: "6px 12px",
  fontFamily: "Manrope",
}));

const StyledBoxTableCell = styled(TableCell)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  border: "1px solid #e0e0e0",
  fontFamily: "Manrope",
  width: "180px",
  height: "150px",
  "& a": {
    fontSize: "14px",
    fontWeight: "500",
    color: "#222222",
  },

  "& p": {
    fontSize: "12px",
    color: "#959595",
  },
}));

const StyledHeader = styled(TableCell)(() => ({
  width: "180px",
  fontSize: "12px",
  border: "1px solid #e0e0e0",
  textAlign: "start",
  padding: "12px 14px",
  fontWeight: "550",
  color: "#4D4E51",
  fontFamily: "Manrope",
}));
