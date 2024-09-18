import { styled } from "@mui/material";
import { Select } from "./components/UI/Select";

export const App = () => {
  const names = [
    {
      label: "Oliver Hansen",
    },
    {
      label: "Van Henry",
    },
    {
      label: "April Tucker",
    },
    {
      label: "Ralph Hubbard",
    },
    {
      label: "Omar Alexander",
    },
    {
      label: "Carlos Abbott",
    },
    {
      label: "Miriam Wagner",
    },
    {
      label: "Bradley Wilkerson",
    },
    {
      label: "Virginia Andrews",
    },
    {
      label: "Kelly Snyder",
    },
  ];
  return (
    <div>
      <h1>Healthcheck</h1>
      <StyBtn
        options={names}
        placeholder={"Выберите специалиста"}
        label={"Специалист"}
      />
    </div>
  );
};
const StyBtn = styled(Select)(() => ({
  width: "250px",
}));
