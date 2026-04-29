import BackArrow from '@icons/back-arrow.svg?react'
import styles from './return-button.module.css'

type UIReturnButtonProps = {
  extraClass?: string;
  handleClick?: () => void;
}

export function UIReturnButton({ extraClass = '', handleClick }: UIReturnButtonProps) {
  return (
    <button className={`${styles.button} ${extraClass}`} onClick={handleClick}>
      <BackArrow />
      <p className="text_type_link">Back</p>
    </button>
  )
}