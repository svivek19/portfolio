import { createContext, useContext, useState, useCallback } from "react";
import type { ReactNode } from "react";

interface SnackbarCtx {
  showSnackbar: (msg: string) => void;
  message: string;
  visible: boolean;
}

const SnackbarContext = createContext<SnackbarCtx>({
  showSnackbar: () => {},
  message: "",
  visible: false,
});

export const useSnackbar = () => useContext(SnackbarContext);

export const SnackbarProvider = ({ children }: { children: ReactNode }) => {
  const [message, setMessage] = useState("");
  const [visible, setVisible] = useState(false);

  const showSnackbar = useCallback((msg: string) => {
    setMessage(msg);
    setVisible(true);
    setTimeout(() => setVisible(false), 2800);
  }, []);

  return (
    <SnackbarContext.Provider value={{ showSnackbar, message, visible }}>
      {children}
    </SnackbarContext.Provider>
  );
};
