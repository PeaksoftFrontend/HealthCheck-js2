import { useState } from "react";
import { Button } from "./components/UI/Button";
import { Modal } from "./components/UI/modal/Modal";
// import { styled } from "@mui/material";

export const App = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div>
      <h1>Healtcheck</h1>
      <Button variant="contained" onClick={() => setOpenModal(true)}>
        modal
      </Button>
      <Modal isOpen={openModal} onClose={() => setOpenModal(false)}>
        <h1>heloo</h1>
        <h1>adsfghjsdfghjkaersfdgfhgjklsadfgjh</h1>
        <h1>adsfghjsdfghjkaersfdgfhgjklsadfgjh</h1>
        <h1>adsfghjsdfghjkaersfdgfhgjklsadfgjh</h1>
      </Modal>
    </div>
  );
};

// const StyledBox2 = styled("div")(() => ({
//   width: "494px",
//   height: "318px",
//   display: "flex",
//   flexDirection: "column",
//   gap: "100px",
//   alignItems: "center",

//   "& div": {
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "space-between",
//   },
// }));

// const StyledDiv = styled("div")({
//   display: "flex",
//   alignItems: "center",
//   gap: "20px",
// });

// const StyledSection = styled("section")({
//   display: "flex",
//   gap: "30px",
// });
