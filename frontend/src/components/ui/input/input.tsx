import { useState, type InputHTMLAttributes } from "react";
import EyeOpen from "@icons/eye-open.svg?react";
import EyeClosed from "@icons/eye-closed.svg?react";
import styles from "./input.module.css";

type UIInputProps = {
  extraClass?: string;
  label?: string;
  extraInputClass?: string;
  errorMessage?: string;
} & InputHTMLAttributes<HTMLInputElement>;

function UIInput({
  id,
  extraClass = "",
  label = "",
  extraInputClass = "",
  errorMessage,
  type = "text",
  ...rest
}: UIInputProps) {
  const [passwordOpen, setPasswordOpen] = useState(false);

  const isPassword = type === "password";

  let customType = type;

  if (isPassword) {
    customType = passwordOpen ? "text" : "password";
  }

  const Icon = passwordOpen ? EyeOpen : EyeClosed;

  const handleTogglePassword = () => {
    setPasswordOpen((prev) => !prev);
  };

  return (
    <div className={`${styles.content} ${extraClass}`}>
      {label && (
        <label
          htmlFor={id}
          className={`text text_type_main text_color_black mb-4 ${styles.label}`}
        >
          {label}
        </label>
      )}
      <input
        {...rest}
        id={id}
        type={customType}
        className={`${styles.input} text text_type_main text_color_primary ${extraInputClass}`}
      />
      {type === "password" && (
        <button
          type="button"
          className={styles.eye_btn}
          onClick={handleTogglePassword}
        >
          <Icon />
        </button>
      )}
      {errorMessage && (
        <span
          className={`text text_type_main text_color_red mt-4 ${styles.error}`}
        >
          {errorMessage}
        </span>
      )}
    </div>
  );
}

export default UIInput;
