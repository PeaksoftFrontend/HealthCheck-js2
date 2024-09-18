import { Modal as MuiModal, styled } from "@mui/material";

export const Modal = ({ children, isOpen, onModalClose, ...props }) => {
  return (
    <StyledModal open={isOpen} onClose={onModalClose} {...props}>
      <StyledBox>{children}</StyledBox>
    </StyledModal>
  );
};

const StyledModal = styled(MuiModal)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));
const StyledBox = styled("div")(() => ({
  backgroundColor: "white",
  width: "660px",
  height: "468px",
  borderRadius: "16px",
}));
