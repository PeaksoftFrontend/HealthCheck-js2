import { createTheme } from "@mui/material";
import "@fontsource/roboto";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#FFFFFF",
      backgroundDark: "#222222",
      backgroundNeutral: "#4D4E51",
      gradientPrimary: "#0CBB6B, #027B44",
      highlightGreen: "#048741",
      backgroundOffWhite: "#F5F5F5",
    },
    secondary: {
      main: "#D9D9D9",
      backgroundGrayNeutral: "#E0E2E7",
      gradientPastel: "#FDFDFD, #E4E7EE",
      backgroundSoftGray: "#F3F1F1",
      textMuted: "#959595",
      accentOrange: "#E4772F",
    },
    success: {
      main: "#DBEBFF",
      backgroundLightGreen: "#DBF0E5",
      errorRed: "#F91515",
      linkBlue: "#3977C0",
      buttonBlue: "#346EFB",
    },
  },
});
