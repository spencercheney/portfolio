import styles from "../styles/component.module.css"

export default function BasicComponent({classname, children}) {
  return (
    <div className={[styles.component, classname].join(" ")} >
      <h2 className={styles.header}>Component</h2>
      {children}
    </div>
  )
}