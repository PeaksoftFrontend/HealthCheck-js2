import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createTheme, ThemeProvider } from "@mui/material";
import { AppRoutes } from "./router/router";
import { Provider } from "react-redux";
import { store } from "./store/store";

const theme = createTheme({
  palette: {
    primary: {
      main: "#048741",
    },
    error: {
      main: "#F91515",
    },
  },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <AppRoutes />
      </Provider>
    </ThemeProvider>
  </StrictMode>
);
