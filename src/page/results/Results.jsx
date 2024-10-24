import { styled } from "@mui/material";
import BackgroundImage from "../../assets/images/background-image.png";
export const Results = () => {
  return <StyledDiv></StyledDiv>;
};

const StyledDiv = styled("div")({
  backgroundImage: `url(${BackgroundImage})`,
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  width: "100%",
  height: "100vh",
  //   backgroundSize: "100% 100vh",
});
