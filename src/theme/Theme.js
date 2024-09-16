import { createTheme } from "@mui/material";
import "@fontsource/roboto";

export const theme = createTheme({
  palette: {
    primary: {
      darkTheme: "#FFFFFF",
      pastelTheme: "#D9D9D9",
      tertiaryTheme: "#DBEBFF",
    },
    secondary: {
      darkTheme: "#222222",
      pastelTheme: "#E0E2E7",
      tertiaryTheme: "#DBF0E5",
    },
    success: {
      darkTheme: "#4D4E51",
      pastelTheme: "#FDFDFD, #E4E7EE",
      tertiaryTheme: "#F91515",
    },
    warning: {
      darkTheme: "#0CBB6B, #027B44",
      pastelTheme: "#F3F1F1",
      tertiaryTheme: "#3977C0",
    },
    error: {
      darkTheme: "#048741",
      pastelTheme: "#959595",
      tertiaryTheme: "#346EFB",
    },
    info: {
      darkTheme: "#F5F5F5",
      pastelTheme: "#E4772F",
      tertiaryTheme: "#346EFB",
    },
  },
});
