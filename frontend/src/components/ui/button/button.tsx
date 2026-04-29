import styles from "./button.module.css";

type UIButtonProps = {
  text: string;
  disabled?: boolean;
  extraClass?: string;
  variant: "primary" | "secondary" | "tertiary";
};

function UIButton({
  text,
  disabled = false,
  extraClass = "",
  variant = "primary",
}: UIButtonProps) {
  return (
    <button
      type="button"
      className={`${styles.button} ${styles[variant]} ${extraClass}`}
      disabled={disabled}
    >
      <span className="text_type_button">{text}</span>
    </button>
  );
}

export default UIButton;
