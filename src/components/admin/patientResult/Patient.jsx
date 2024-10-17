import { styled } from "@mui/material";
import { Button } from "../../components/UI/button/Button";
import { Icons } from "../../assets/icons";
import { useState } from "react";
import { Modal } from "../../components/UI/modal/Modal";
import { AddResults } from "./AddResults";

export const Patient = ({ onHandleClick }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleModal = () => {
    setIsOpenModal(true);
  };

  const handleCloseModal = () => {
    setIsOpenModal(false);
  };

  const array = [
    {
      label: "Имя",
      title: "Айназик",
    },
    {
      label: "Фамилия",
      title: "Бакытова",
    },
    {
      label: "Email",
      title: "ainazik@gmail.com",
    },
    {
      label: "Номер телефона",
      title: "+996 707 123 456",
    },
  ];
  return (
    <StyledDiv>
      <article>
        <h3>Айназик Бакытова</h3>
        <Button onClick={handleModal}>
          <Icons.Plus />
          ДОБАВИТЬ РЕЗУЛЬТАТЫ
        </Button>

        <Modal isOpen={isOpenModal} onClose={handleCloseModal}>
          <AddResults isOpen={handleCloseModal} onHandleClick={onHandleClick} />
        </Modal>
      </article>
      <ContainerDiv>
        <section>
          <h1>Айназик Бакытова</h1>
          {array.map((item) => (
            <div key={item.label}>
              <p>{item.label}</p>
              <h4>{item.title}</h4>
            </div>
          ))}
        </section>
      </ContainerDiv>
    </StyledDiv>
  );
};
const StyledDiv = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  gap: "32.5px",
  "& article": {
    display: "flex",
    justifyContent: "space-between",
    width: "81.25rem",
    alignItems: "center",
    "& button": {
      width: "242px",
      fontWeight: "300",
      display: "flex",
      gap: "12.7px",
      padding: "10px 14px 10px 6px",
      "& svg": {
        width: "28px",
        height: "29px",
        path: {
          fill: "#FFFFFF",
        },
      },
    },
  },
}));
const ContainerDiv = styled("div")(() => ({
  width: "81.25rem",
  height: "85.875rem",
  background: "#F5F5F5",
  padding: "20px",
  borderRadius: "6px",
  "& section": {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    "& p": {
      fontSize: "14px",
      fontWeight: "400",
    },
    "& h4": {
      fontSize: "16px",
      fontWeight: "400",
    },
    "& h1": {
      fontSize: "20px",
      fontWeight: "500",
    },
  },
}));
