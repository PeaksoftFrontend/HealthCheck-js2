import { useState } from "react";
import { Modal } from "./components/UI/modal/Modal";
import { styled } from "@mui/material";
import { Button } from "./components/UI/button/Button";

export const App = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div>
      <h1>Healtcheck</h1>
      <Button variant="contained" onClick={() => setOpenModal(true)}>
        modal
      </Button>
      <Modal isOpen={openModal} onClose={() => setOpenModal(false)}>
        <StyledBox2>
          <StyledDiv>
            <h1>Оставьте заявку</h1>
            <div>
              <p>Оставьте свой номер и наши специалисты свяжутся</p>
              <p> с Вами в ближайшее время</p>
            </div>
          </StyledDiv>
          <StyledSection>
            <div>
              <label htmlFor="">Как к Вам обратиться?</label>
              <input type="text" />
            </div>
            <div>
              <label htmlFor="">Номер мобильного телефона</label>
              <input type="text" />
            </div>
          </StyledSection>
        </StyledBox2>
      </Modal>
    </div>
  );
};

const StyledBox2 = styled("div")(() => ({
  width: "494px",
  height: "318px",
  display: "flex",
  flexDirection: "column",
  gap: "100px",
  alignItems: "center",

  "& div": {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
}));

const StyledDiv = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: "20px",
});

const StyledSection = styled("section")({
  display: "flex",
  gap: "30px",
});
