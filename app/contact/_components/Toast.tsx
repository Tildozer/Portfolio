"use client";
import { useDarkMode } from "../../_providers/DarkModeProvider";
import { ToastContainer, Bounce } from "react-toastify";

const Toast = () => {
  const { darkMode } = useDarkMode();

  return (
    <ToastContainer
      position="bottom-right"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme={darkMode ? "dark" : "light"}
      transition={Bounce}
      stacked
    />
  );
};

export default Toast;
