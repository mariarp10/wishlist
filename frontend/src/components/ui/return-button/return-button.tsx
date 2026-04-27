import styles from './return-button.module.css'
import BackArrow from '@icons/back-arrow.svg?react'

type UIReturnButtonProps = {
  extraClass?: string;
  handleClick?: () => void;
}

export const UIReturnButton = ({ extraClass = '', handleClick }: UIReturnButtonProps) => {
  return (
    <button className={`${styles.button} ${extraClass}`} onClick={handleClick}>
      <BackArrow />
      <p className={'text_type_link'}>Back</p>
    </button>
  )
}