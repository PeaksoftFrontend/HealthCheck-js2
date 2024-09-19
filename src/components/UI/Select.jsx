import {
  FormControl,
  Select as MuiSelect,
  MenuItem,
  OutlinedInput,
  styled,
} from "@mui/material";
import { forwardRef } from "react";

export const Select = forwardRef(
  (
    {
      options = [],
      value = "",
      onChange,
      label = "",
      placeholder = "Выберите...",
      ...props
    },
    ref
  ) => {
    const MenuProps = {
      PaperProps: {
        style: {
          maxHeight: 48 * 4 + 8,
        },
      },
    };

    return (
      <FormControls variant="outlined" fullWidth>
        <label>{label}</label>
        <StyledSelect
          displayEmpty
          ref={ref}
          value={value}
          onChange={onChange}
          input={<OutlinedInput />}
          renderValue={(selected) => {
            if (!selected) {
              return <Placeholder>{placeholder}</Placeholder>;
            }
            return selected;
          }}
          MenuProps={MenuProps}
          {...props}
        >
          {placeholder && (
            <MenuItem disabled value="">
              <Placeholder>{placeholder}</Placeholder>
            </MenuItem>
          )}

          {options.map((option) => (
            <StyledMenuItem key={option.value} value={option.value}>
              {option.label}
            </StyledMenuItem>
          ))}
        </StyledSelect>
      </FormControls>
    );
  }
);

const FormControls = styled(FormControl)(({ theme }) => ({
  margin: theme.spacing(1.8),
  marginTop: theme.spacing(0),
  display: "flex",
  gap: "4px",
}));

const StyledSelect = styled(MuiSelect)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  width: "300px",
  height: "40px",
  borderColor: "rgba(217, 217, 217, 1)",
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "rgba(217, 217, 217, 1)",
  },
  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: "rgba(149, 149, 149, 1)",
  },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "rgba(4, 135, 65, 0.8)",
    borderWidth: "2px",
  },
  "& .MuiSelect-select": {
    color: "#959595",
  },
}));

const Placeholder = styled("span")({
  color: "#959595",
});

const StyledMenuItem = styled(MenuItem)(() => ({
  "&:hover": {
    backgroundColor: "#DBF0E5",
  },
}));
