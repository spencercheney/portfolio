import styles from "./toast.module.css"

export default function Toast({ close, children }) {
  return (
    <div className={ styles.toast }>
      <div className={ styles.text }>
        { children }
      </div>
      <div>
        <button onClick={ close } className={ styles.closeBtn }>x</button>
      </div>
    </div>
  )
}