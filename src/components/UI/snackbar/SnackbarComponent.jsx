import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ToastifySnackbar = () => {
  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export const ShowToast = (message, severity) => {
  const toastConfig = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    style: {
      fontSize: "18px",
    },
  };

  if (severity === "success") {
    toast.success(message, {
      ...toastConfig,
      style: {
        ...toastConfig.style,
        background: "#F6FBFF",
        color: "#4D4E51",
        borderLeft: "8px solid #28a745",
      },
    });
  } else if (severity === "error") {
    toast.error(message, {
      ...toastConfig,
      style: {
        ...toastConfig.style,
        background: "#FFF9F8",
        color: "#494949",
        borderLeft: "8px solid #dc3545",
      },
    });
  }
};
