import styles from './button.module.css';

type UIButtonProps = {
  text: string;
  disabled?: boolean;
  extraClass?: string;
  type: "primary" | "secondary" | "tertiary"
}

export const UIButton = ({ text, disabled = false, extraClass = '', type = 'primary' }: UIButtonProps) => {
  return (
    <button className={`${styles.button} ${styles[type]} ${extraClass}`} disabled={disabled}>
      <span className={'text_type_button'}>{text}</span>
    </button>
  )
}