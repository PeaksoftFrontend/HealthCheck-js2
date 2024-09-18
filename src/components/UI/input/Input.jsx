import { InputAdornment, styled, TextField } from "@mui/material";
import { forwardRef, useState } from "react";
import IconButton from "@mui/material/IconButton";
import { Icons } from "../../../assets/icons";

export const Input = forwardRef(
  (
    {
      value,
      onChange,
      placeholder,
      type = "text",
      iconStart,
      iconEnd,
      disabled,
      error,

      ...props
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword(!showPassword);

    return (
      <StyledInput
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        type={type === "password" && !showPassword ? "password" : type}
        error={error}
        disabled={disabled}
        fullWidth
        inputRef={ref}
        InputProps={{
          startAdornment: iconStart ? (
            <InputAdornment position="start">
              {" "}
              <div style={{ cursor: "pointer" }}>{iconStart}</div>
            </InputAdornment>
          ) : null,
          endAdornment: (
            <>
              {type === "password" && (
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleClickShowPassword}
                    edge="end"
                    style={{
                      cursor: disabled ? "default" : "pointer",
                      pointerEvents: disabled ? "none" : "auto",
                    }}
                  >
                    {showPassword ? (
                      <Icons.VisibilituIcon />
                    ) : (
                      <Icons.VisibilityOffIcon />
                    )}
                  </IconButton>
                </InputAdornment>
              )}

              {iconEnd && type !== "password" ? (
                <InputAdornment position="end">
                  <div style={{ cursor: "pointer" }}>{iconEnd}</div>
                </InputAdornment>
              ) : null}
            </>
          ),
        }}
        {...props}
      />
    );
  }
);

const StyledInput = styled(TextField)(({ error, disabled }) => ({
  border: `1px solid ${error ? "#F91515" : disabled ? "#E0E0E0" : "#D9D9D9"}`,
  width: "414px",
  height: "42px",
  borderRadius: "8px",
  padding: "10px",
  color: disabled ? "#A9A9A9" : "#959595",

  "&:hover": {
    border: `1px solid ${error ? "#F91515" : disabled ? "#E0E0E0" : "#959595"}`,
    color: disabled ? "#A9A9A9" : "#4D4E51",
  },

  "&:active": {
    border: `1px solid ${error ? "#F91515" : disabled ? "#E0E0E0" : "#048741CC"}`,
  },
  "&:disabled": {
    borderColor: "#E0E0E0",
  },

  "& input:-webkit-autofill, & input:-webkit-autofill:hover, & input:-webkit-autofill:focus, & input:-webkit-autofill:active":
    {
      WebkitTransition: "color 9999s ease-out, background-color 9999s ease-out",
      WebkitTransitionDelay: "9999s",
    },
  "& fieldset": { border: "none" },
  "& ::-webkit-input-placeholder": {
    color: "#FFFF",
  },
  "input[type='search']::-webkit-search-cancel-button": {
    display: "none",
  },

  "& .MuiInputBase-input": {
    border: "none",
    padding: "0px",
  },
}));
