import { Box, Modal as MuiModal, Slide, styled } from "@mui/material";
import { Icons } from "../../../assets/icons";

export const Modal = ({
  children,
  isOpen,
  onClose,
  icon,
  bgColor,
  ...props
}) => {
  return (
    <StyledModal open={isOpen} onClose={onClose} {...props}>
      <Slide direction="up" in={isOpen} mountOnEnter unmountOnExit>
        <StyledBox bgColor={bgColor}>
          <Header>
            {!icon && (
              <CloseIconWrapper onClick={onClose}>
                <Icons.AllIcons />
              </CloseIconWrapper>
            )}
          </Header>
          <Content>{children}</Content>
        </StyledBox>
      </Slide>
    </StyledModal>
  );
};

const StyledModal = styled(MuiModal)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

const StyledBox = styled(Box)(({ bgColor }) => ({
  position: "relative",
  backgroundColor: bgColor ? "#EBF2FC" : "#fff",
  borderRadius: "16px",
  outlined: "none",
  padding: "15px 20px",
}));

const Header = styled("section")(() => ({
  position: "absolute",
  top: "8px",
  right: "10px",
}));

const CloseIconWrapper = styled("div")(() => ({
  cursor: "pointer",
}));

const Content = styled("div")(() => ({
  padding: "10px",
}));
