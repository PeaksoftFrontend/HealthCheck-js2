import { useState } from "react";
import { Modal } from "./components/UI/modal/Modal";
import { Button } from "./components/UI/button/Button";
// import { ForgotPassword } from "./components/auth/ForgotPassword";
// import { ChangePassword } from "./components/auth/ChangePassword";
// import { SignIn } from "./components/auth/SignIn";
// import { SignUp } from "./components/auth/SignUp";
// import { ForgotPassword } from "./components/auth/ForgotPassword";
import { SignIn } from "./components/auth/SignIn";
// import { SignIn } from "./components/auth/SignIn";

export const App = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleOpenModal = () => {
    setIsOpenModal(true);
  };
  const handleCloseModal = () => {
    setIsOpenModal(false);
  };
  return (
    <div>
      <h1>Healtcheck</h1>
      <Modal isOpen={isOpenModal} onClose={handleCloseModal}>
        <SignIn />
      </Modal>
      <Button onClick={() => handleOpenModal()}>SignIn</Button>
    </div>
  );
};
