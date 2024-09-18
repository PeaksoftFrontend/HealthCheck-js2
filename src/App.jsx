import { styled } from "@mui/material";
import { Input } from "./components/UI/input/Input";
import { Icons } from "./assets/icons";

export const App = () => {
  return (
    <div>
      <h1>Healthcheck</h1>
      <StyledInput
        type="search"
        placeholder="enter"
        iconStart={<Icons.Phone />}
      />
    </div>
  );
};

const StyledInput = styled(Input)({});
