import { useSnackbar } from "../context/SnackbarContext";
import { CheckCircle } from "lucide-react";

const Snackbar = () => {
  const { message, visible } = useSnackbar();

  return (
    <div className={`snackbar ${visible ? "show" : ""}`}>
      <CheckCircle size={16} style={{ display: "inline", marginRight: 8, verticalAlign: "middle" }} />
      {message}
    </div>
  );
};

export default Snackbar;
