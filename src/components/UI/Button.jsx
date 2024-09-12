import { Button as MuiButton, styled } from "@mui/material";

export const Button = ({
  onClick,
  type,
  children,
  variant,
  disabled,
  ...props
}) => {
  return (
    <StyledButton
      onClick={onClick}
      type={type}
      variant={variant}
      disabled={disabled}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

const StyledButton = styled(MuiButton)(({ variant = "contained" }) => ({
  ...(variant === "contained" && {
    width: "22.75rem",
    height: "2.625rem",
    borderRadius: "0.625rem",
    color: "white",

    padding: "14px, 32px, 14px, 32px",
    background:
      "linear-gradient(to bottom,rgba(12, 187, 107, 1),rgba(2, 123, 68, 1)) 100%",

    "&:hover": {
      background: "linear-gradient(rgba(8, 223, 125, 1), rgba(4, 143, 80, 1))",
    },

    "&:disabled": {
      background: "rgba(211, 211, 211, 1)",
      width: "22.75rem",
      height: "2.625rem",
      borderRadius: "0.625rem",
      padding: "14px, 32px, 14px, 32px",
    },
  }),
  ...(variant === "outlined" && {
    width: "6.938rem",
    height: "2.625rem",

    borderColor: "rgba(4, 135, 65, 1)",
    borderRadius: "0.625rem",
    color: "rgba(4, 135, 65, 1)",
    background: "transparent",

    padding: "10px, 20px, 10px, 20px",
    "&:hover": {
      background:
        "linear-gradient(to bottom,rgba(12, 187, 107, 1),rgba(2, 123, 68, 1)) 100%",
      color: "white",
      border: "none",
    },
    "&:disabled": {
      width: "6.938rem",
      height: "2.625rem",
    },
  }),
  "&:active": {
    background:
      "linear-gradient(to bottom,rgba(12, 187, 107, 1),rgba(2, 123, 68, 1)) 100%",
  },
}));
