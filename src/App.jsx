import { Search } from "@mui/icons-material";
import { Input } from "./components/UI/input/Input";
export const App = () => {
  return (
    <form>
      <h1>Healtcheck</h1>

      <Input
        placeholder="Search..."
        type="text"
        icon={Search}
        iconPosition="start"
      />
      <Input
        placeholder="Search..."
        type="text"
        icon={Search}
        iconPosition="end"
      />
    </form>
  );
};
