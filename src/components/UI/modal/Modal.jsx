import { Box, Modal as MuiModal, styled } from "@mui/material";
import { Icons } from "../../../assets/icons";

export const Modal = ({ children, isOpen, onClose, icon, ...props }) => {
  return (
    <StyledModal open={isOpen} onClose={onClose} {...props}>
      <div>
        <StyledBox>
          <section>
            {!icon && (
              <CloseIconWrapper onClick={onClose}>
                <Icons.AllIcons />
              </CloseIconWrapper>
            )}
          </section>
          <div>{children}</div>
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
  position: "relative",
  backgroundColor: "#fff",
  borderRadius: "16px",
  padding: "15px 25px",

  "& section": {
    padding: "10px",
  },
}));

const CloseIconWrapper = styled("div")(() => ({
  position: "absolute",
  top: "8px",
  right: "6px",
  cursor: "pointer",
}));
