import styles from "./toast.module.css"

export default function Toast({ children, close, isCloseAnimationOn }) {
  return (
    <div className={ isCloseAnimationOn ? [styles.toast, styles.close].join(' ') : styles.toast }>
      <div className={ styles.text }>
        { children }
      </div>
      <div>
        <button onClick={ close } className={ styles.closeBtn }>x</button>
      </div>
    </div>
  )
}