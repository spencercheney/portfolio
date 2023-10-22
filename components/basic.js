import styles from "../styles/component.module.css"

export default function BasicComponent({style, children}) {
  return (
    <div className={styles.component} style={style}>
      <div className={styles.header}>Component</div>
      {children}
    </div>
  )
}