import { css } from "@pigment-css/react";

const baseStyles = {
  toast: css`
    position: relative;
    display: flex;
    align-items: center;
    gap: 16px;
    border-radius: 16px;
    color: black;
    color-scheme: light;
    max-width: 100%;
    background: white;
    width: 350px;
    box-shadow: var(--shadow-elevation-medium);
  `,

  content: css`
    flex: 1;
    padding: 12px 0px;
    font-weight: 600;
  `,

  iconContainer: css`
    flex-shrink: 0;
    padding: 16px;
    padding-right: 0px;

    svg {
      display: block;
      stroke: currentColor;
    }
  `,

  closeButton: css`
    flex-shrink: 0;
    border: none;
    background: transparent;
    padding: 16px;
    cursor: pointer;
  `,
};

const variantStyles = {
  notice: css`
    background: var(--color-notice-bg);

    ${baseStyles.iconContainer} {
      color: var(--color-notice);
    }
  `,

  warning: css`
    background: var(--color-warning-bg);

    & > div > svg {
      color: var(--color-warning);
    }
  `,

  success: css`
    background: var(--color-success-bg);

    ${baseStyles.iconContainer} {
      color: var(--color-success);
    }
  `,

  error: css`
    background: var(--color-error-bg);

    ${baseStyles.iconContainer} {
      color: var(--color-error);
    }
  `,
};

const styles = {
  ...baseStyles,
  ...variantStyles,
};

export default styles;
