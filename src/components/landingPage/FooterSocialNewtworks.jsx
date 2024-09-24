import { styled } from "@mui/material";
import { Icons } from "../../assets/icons";

export const FooterSocialNewtworks = () => {
  return (
    <StyledContainer>
      <p>Мы в социальных сетях:</p>
      <section>
        <Icons.Instagram />
        <Icons.Telegram />
        <Icons.Watsapp />
      </section>
    </StyledContainer>
  );
};
const StyledContainer = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  fontFamily: "Manrope",
  "& p": {
    fontWeight: 500,
    color: "#FFFFFF",
  },
  "& section": {
    display: "flex",
    gap: "15px",
  },
}));
