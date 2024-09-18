import { Box, Modal as MuiModal, styled } from "@mui/material";
import { Icons } from "../../../assets/icons";

export const Modal = ({ children, isOpen, onClose, icon, ...props }) => {
  return (
    <StyledModal open={isOpen} onClose={onClose} {...props}>
      <div>
        <StyledBox>
          {children}
          {!icon && <Icons.AllIcons onClick={onClose} />}
        </StyledBox>
      </div>
    </StyledModal>
  );
};

const StyledModal = styled(MuiModal)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));
const StyledBox = styled(Box)(() => ({
  backgroundColor: "white",

  borderRadius: "16px",
  display: "flex",
  padding: "15px 20px",
}));
