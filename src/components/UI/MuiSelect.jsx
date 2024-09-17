import { FormControl, OutlinedInput, Select, styled } from "@mui/material";
import { useState } from "react";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export default function MuiSelect({ children, placeholder }) {
  const [personName, setPersonName] = useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <div>
      <FormControl sx={{ m: 2, width: 300, mt: 3 }}>
        <SelectInput
          displayEmpty
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput />}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <p style={{ color: "gray" }}>{placeholder}</p>;
            }

            return selected.join(", ");
          }}
          MenuProps={MenuProps}
        >
          {children}
        </SelectInput>
      </FormControl>
    </div>
  );
}
const SelectInput = styled(Select)(() => ({
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
}));
