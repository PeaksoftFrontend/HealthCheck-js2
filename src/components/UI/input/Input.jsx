import { InputAdornment, styled, TextField } from "@mui/material";
import { forwardRef } from "react";

export const Input = forwardRef(
  (
    {
      value,
      onChange,
      placeholder,
      type,
      icon: IconComponent,
      iconPosition = "start",
      error,
      ...props
    },
    ref
  ) => {
    return (
      <StyledInput
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        error={error}
        ref={ref}
        InputProps={
          IconComponent
            ? {
                [`${iconPosition}Adornment`]: (
                  <InputAdornment position={iconPosition}>
                    <IconComponent />
                  </InputAdornment>
                ),
              }
            : {}
        }
        {...props}
      />
    );
  }
);

const StyledInput = styled(TextField)(({ error }) => ({
  "& .MuiOutlinedInput-root": {
    width: "414px",
    height: "42px",
    borderRadius: "8px",

    "& fieldset": {
      border: `1px solid ${error ? "#F91515" : "#D9D9D9"}`,
    },

    "&:hover fieldset": {
      height: "46px",
      border: "1px solid #959595",
      color: "#4D4E51",
    },

    "&.Mui-focused fieldset": {
      height: "43px",
      border: " 1px solid #048741CC",
      color: "#4D4E51",
    },
  },

  "& .MuiInputBase-input": {
    color: "#959595",
    padding: "10px, 8px, 10px, 16px",
  },
}));
