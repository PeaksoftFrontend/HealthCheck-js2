import { createTheme } from "@mui/material";
import "@fontsource/roboto";

export const theme = createTheme({
  darkTheme: {
    primary: {
      main: "#FFFFFF",
    },
    secondary: {
      main: "#222222",
    },
    success: {
      main: "#4D4E51",
    },
    warning: {
      main: "#0CBB6B, #027B44",
    },
    error: {
      main: "#048741",
    },
    info: {
      main: "#F5F5F5",
    },
  },
  pastelTheme: {
    primary: {
      main: "#D9D9D9",
    },
    secondary: {
      main: "#E0E2E7",
    },
    success: {
      main: "#FDFDFD, #E4E7EE",
    },
    warning: {
      main: "#F3F1F1",
    },
    error: {
      main: "#959595",
    },
    info: {
      main: "#E4772F",
    },
  },
  tertiaryTheme: {
    primary: {
      main: "#DBEBFF",
    },
    secondary: {
      main: "#DBF0E5",
    },
    success: {
      main: "#F91515",
    },
    warning: {
      main: "#3977C0",
    },
    error: {
      main: "#346EFB",
    },
  },
});
