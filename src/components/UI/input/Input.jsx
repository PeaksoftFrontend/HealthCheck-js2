import { styled, TextField } from "@mui/material";

const allowedVariants = [
  "outlined",
  "contained",
  "filled",
  "standard",
  "search",
  "profile",
  "online-reg",
  "date",
  "time",
  "interval",
  "servies",
];

export const Input = ({
  label,
  type,
  value,
  onChange,
  variant = "outlined",
  error,
  children,
  ...props
}) => {
  const safeVariant = allowedVariants.includes(variant) ? variant : "outlined";

  return (
    <StyledInput
      value={value}
      onChange={onChange}
      type={type}
      label={label}
      variant={safeVariant}
      error={error}
      children={children}
      {...props}
    />
  );
};

const StyledInput = styled(({ variant, ...other }) => <TextField {...other} />)(
  ({ theme, variant, error }) => ({
    "& .MuiOutlinedInput-root": {
      height:
        variant === "outlined"
          ? "45px"
          : variant === "contained"
            ? "38px"
            : variant === "filled"
              ? "35px"
              : variant === "standard"
                ? "46px"
                : variant === "search"
                  ? "40px"
                  : variant === "profile"
                    ? "38px"
                    : variant === "online-reg"
                      ? "40px"
                      : variant === "date"
                        ? "38px"
                        : variant === "time"
                          ? "38px"
                          : variant === "interval"
                            ? "38px"
                            : variant === "servies"
                              ? "38px"
                              : "40px",

      borderRadius:
        variant === "outlined"
          ? "8px"
          : variant === "contained"
            ? "6px"
            : variant === "filled"
              ? "20px"
              : variant === "standard"
                ? "10px"
                : variant === "search"
                  ? "24px"
                  : variant === "profile"
                    ? "6px"
                    : variant === "online-reg"
                      ? "24px"
                      : variant === "date"
                        ? "6px"
                        : variant === "time"
                          ? "10px"
                          : variant === "interval"
                            ? "6px"
                            : variant === "servies"
                              ? "6px"
                              : "0px",

      "& fieldset": {
        borderColor: error ? theme.palette.error.main : theme.palette.grey[400],
      },
      "&:hover fieldset": {
        borderColor: error ? theme.palette.error.main : theme.palette.grey[600],
      },
      "&.Mui-focused fieldset": {
        borderColor: error
          ? theme.palette.error.main
          : theme.palette.primary.main,
      },

      backgroundColor: variant === "search" ? "#F3F1F1" : "transparent",
    },
    ...(variant === "outlined" && {
      width: "414px",
    }),
    ...(variant === "contained" && {
      width: "490px",
    }),
    ...(variant === "filled" && {
      width: "400px",
    }),
    ...(variant === "standard" && {
      width: "300px",
    }),
    ...(variant === "search" && {
      width: "367px",
    }),
    ...(variant === "profile" && {
      width: "420px",
    }),
    ...(variant === "online-reg" && {
      width: "600px",
    }),
    ...(variant === "date" && {
      width: "150px",
    }),
    ...(variant === "time" && {
      width: "80px",
    }),
    ...(variant === "interval" && {
      width: "290px",
    }),
    ...(variant === "servies" && {
      width: "322px",
    }),
  })
);
