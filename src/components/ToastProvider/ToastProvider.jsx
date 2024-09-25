/* eslint-disable react/prop-types */
import React from "react";
import useEscapeKey from "../../hooks/useEscapeKey";
export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  function dismissToast(id) {
    const nextToasts = toasts.filter((toast) => {
      return toast.id !== id;
    });

    setToasts(nextToasts);
  }

  const handleEscape = React.useCallback(() => {
    setToasts([]);
  }, []);

  useEscapeKey(() => handleEscape());

  React.useEffect(() => {
    const timers = toasts.map(
      (toast) =>
        setTimeout(() => {
          dismissToast(toast.id);
        }, 3000),
      console.log("timer")
    );

    return () => timers.forEach(clearTimeout);
  }, [toasts, dismissToast]);

  function createToast(message, notification) {
    const nextToasts = [
      ...toasts,
      {
        id: crypto.randomUUID(),
        variant: notification,
        message,
      },
    ];
    setToasts(nextToasts);
  }

  return (
    <ToastContext.Provider value={{ toasts, createToast, dismissToast }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
