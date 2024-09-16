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
      type,
      iconStart,
      iconEnd,
      disabled,
      error,
      variant,
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
        type={type === "password" && !showPassword ? "password" : "text"}
        error={error}
        disabled={disabled}
        ref={ref}
        fullWidth
        variant={variant}
        InputProps={{
          startAdornment: iconStart ? (
            <InputAdornment position="start">{iconStart}</InputAdornment>
          ) : null,
          endAdornment: (
            <>
              {type === "password" && (
                <InputAdornment position="end">
                  <IconButton onClick={handleClickShowPassword} edge="end">
                    {showPassword ? (
                      <Icons.VisibilituIcon />
                    ) : (
                      <Icons.VisibilityOffIcon />
                    )}
                  </IconButton>
                </InputAdornment>
              )}

              {iconEnd && type !== "password" ? (
                <InputAdornment position="end">{iconEnd}</InputAdornment>
              ) : null}
            </>
          ),
        }}
        {...props}
      />
    );
  }
);

const StyledInput = styled(TextField)(({ error }) => ({
  height: "42px",
  "& .MuiInputBase-root": {
    "&::placeholder": {
      color: "#959595",
    },
    border: `1px solid ${error ? "#F91515" : "#D9D9D9"}`,
    width: "100%",
    height: "42px",
    borderRadius: "8px",
    color: "#959595",
    "&:hover": {
      borderColor: "#959595",
      color: "#4D4E51",
      height: "45px",
    },

    "&:active": {
      borderColor: "#048741CC",
      height: "43px",
      color: "#4D4E51",
    },
  },

  "& fieldset": {
    border: "none",
  },
}));
