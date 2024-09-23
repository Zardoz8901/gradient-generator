/* eslint-disable react/prop-types */
import React from "react";
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from "react-feather";

import styles from "./ToastStyle.jsx";
import { ToastContext } from "../ToastProvider/ToastProvider.jsx";

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({ children, variant, id }) {
  const Icon = ICONS_BY_VARIANT[variant];
  const { dismissToast } = React.useContext(ToastContext);

  return (
    <div className={`${styles.toast} ${styles[variant]}`}>
      <div className={styles.iconContainer}>{Icon && <Icon size={24} />}</div>
      <p className={styles.content}>{children}</p>
      <button
        className={styles.closeButton}
        aria-label="Dismiss message"
        aria-live="off"
        onClick={() => dismissToast(id)}
      >
        <X size={24} />
      </button>
    </div>
  );
}

export default Toast;
