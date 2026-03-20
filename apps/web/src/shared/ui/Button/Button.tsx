import { ButtonHTMLAttributes } from "react";
import styles from "./Button.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "tertiary";
  fullWidth?: boolean;
}

export function Button({ variant = "primary", fullWidth, className, children, ...props }: ButtonProps) {
    return (
        <button
            className={[
                styles.button,
                styles[variant],
                fullWidth ? styles.fullWidth : '',
                className,
            ].filter(Boolean).join(' ')}
            {...props}
        >
            {children}
        </button>
    )
}