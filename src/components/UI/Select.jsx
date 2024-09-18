import { FormControl, MenuItem, OutlinedInput, styled } from "@mui/material";
import { Select as MySelect } from "@mui/material";
import { useState } from "react";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
    },
  },
};

export const Select = ({ options, placeholder, label, ...props }) => {
  const [personName, setPersonName] = useState("");
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <div>
      <FormControls>
        <label>{label}</label>
        <SelectInput
          displayEmpty
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput />}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <p>{placeholder}</p>;
            }
            return selected.join(", ");
          }}
          {...props}
          MenuProps={MenuProps}
        >
          {options.map((item) => (
            <StyledMenuItem key={item.label} value={item.label}>
              {item.label}
            </StyledMenuItem>
          ))}
        </SelectInput>
      </FormControls>
    </div>
  );
};

const FormControls = styled(FormControl)(({ theme }) => ({
  margin: theme.spacing(3),
  marginTop: theme.spacing(1),
  display: "flex",
  gap: "4px",
  justifyContent: "center",
  "& label": {
    color: "#464444",
    fontFamily: "Manrope",
    fontWeight: "400",
    fontSize: "14px",
  },
}));

const SelectInput = styled(MySelect)(() => ({
  width: "490px",
  height: "38px",
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

const StyledMenuItem = styled(MenuItem)(() => ({
  "&:hover": {
    backgroundColor: "#DBF0E5",
  },
}));
