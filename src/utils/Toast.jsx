// Importing toastify module
import { toast } from "react-toastify";

// Import toastify css file
import "react-toastify/dist/ReactToastify.css";

export const toastError = (message) => {
  toast.error(message);
};
export const toastSuccess = (message) => {
  toast.success(message);
};
export const toastWarning = (message) => {
  toast.warn(message);
};
