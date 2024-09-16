import { styled } from "@mui/material";
export const App = () => {
  return (
    <StyledDiv>
      <h1>Healtcheck</h1>
    </StyledDiv>
  );
};

const StyledDiv = styled("div")(({ theme }) => ({
  background: theme.palette.primary.gradientPrimary,
}));
