import React from "react";

import { ToastContext } from "../ToastProvider/ToastProvider";
import Toast from "../Toast/Toast";

import { css, keyframes } from "@pigment-css/react";

const toastAnimation = keyframes({
  from: {
    transform: "translateX(calc(100% + 64px))",
  },
});

const wrapper = css({
  position: "fixed",
  right: 0,
  bottom: 0,
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  padding: "16px",
  listStyleType: "none",
});

const toastWrapper = css({
  animation: `${toastAnimation} 800ms cubic-bezier(0, 0.46, 0, 1.04) both`,
  willChange: "transform",
});

function ToastShelf() {
  const { toasts } = React.useContext(ToastContext);

  return (
    <ol
      className={wrapper}
      role="region"
      aria-live="polite"
      aria-label="Notification"
    >
      {toasts.map((toast) => (
        <li key={toast.id} className={toastWrapper}>
          <Toast id={toast.id} variant={toast.variant}>
            {toast.message}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
