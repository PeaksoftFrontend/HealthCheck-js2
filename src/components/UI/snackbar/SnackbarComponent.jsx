import { Snackbar, Alert, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { CheckCircle, Error, Info, Warning } from "@mui/icons-material";

const icons = {
  success: <CheckCircle />,
  error: <Error />,
  info: <Info />,
  warning: <Warning />,
};

export const SnackbarComponent = ({
  autoHideDuration = 6000,
  openSnackbar,
  handleClose,
  anchorOrigin = { vertical: "bottom", horizontal: "center" },
  severity = "success",
  message = "This is a Snackbar message!",
}) => {
  return (
    <Snackbar
      open={openSnackbar}
      autoHideDuration={autoHideDuration}
      onClose={handleClose}
      anchorOrigin={anchorOrigin}
    >
      <Alert
        onClose={handleClose}
        severity={severity}
        variant="filled"
        iconMapping={icons}
        sx={{
          width: "100%",
          bgcolor:
            severity === "success"
              ? "success.main"
              : severity === "error"
                ? "error.main"
                : severity === "info"
                  ? "info.main"
                  : "warning.main",
          color: "white",
          borderRadius: 2,
          fontWeight: "bold",
          "& .MuiAlert-icon": {
            fontSize: "1.5rem",
          },
          "& .MuiAlert-message": {
            fontSize: "1rem",
            fontWeight: "500",
          },
          "& .MuiAlert-action": {
            paddingRight: 0,
          },
        }}
      >
        {message}
        <IconButton
          aria-label="close"
          color="inherit"
          onClick={handleClose}
          sx={{ p: 1 }}
        >
          <CloseIcon />
        </IconButton>
      </Alert>
    </Snackbar>
  );
};
