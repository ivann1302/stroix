import { InputHTMLAttributes } from "react";
import styles from "./Input.module.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
}

export function Input({ label, error, id, className, ...props }: InputProps) {
    // генерируем id если не передан - нужен для связки label и input
    const inputId = id ?? label?.toLowerCase().replace(/\s+/g, '-');

    return (
        <div className={styles.wrapper}>
            {label &&  (
                <label htmlFor={inputId} className={styles.label}>
                    {label}
                </label>
            )}
            <input
                id={inputId}
                className={[styles.input, error ? styles.inputError : '', className].filter(Boolean).join(' ')}
                {...props}
            />
      {error && <span className={styles.error}>{error}</span>}        
      </div>
    )
}
    